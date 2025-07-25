// API functions to interact with Dev.to API

const DEV_TO_API_URL = 'https://dev.to/api';

// Optional API key - can be set for authenticated requests
// See: https://developers.forem.com/api/v0#section/Authentication
const DEV_TO_API_KEY = process.env.DEV_TO_API_KEY || '';

/**
 * Base function to fetch data from Dev.to API
 */
async function fetchDevTo(endpoint: string, options: RequestInit = {}) {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // Add API key if available
  if (DEV_TO_API_KEY) {
    headers['api-key'] = DEV_TO_API_KEY;
  }

  const response = await fetch(`${DEV_TO_API_URL}${endpoint}`, {
    ...options,
    headers,
    next: { revalidate: 3600 }, // Cache for 1 hour (3600 seconds)
  });

  if (!response.ok) {
    throw new Error(`Dev.to API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

export interface DevToArticle {
  id: number;
  title: string;
  description: string;
  published_at: string;
  tag_list: string[];
  slug: string;
  url: string;
  cover_image: string | null;
  reading_time_minutes: number;
  user: {
    name: string;
    username: string;
    profile_image: string;
  };
}

export interface DevToUser {
  name: string;
  username: string;
  twitter_username: string | null;
  github_username: string | null;
  summary: string | null;
  location: string | null;
  profile_image: string;
}

/**
 * Fetch articles from a specific user
 */
export async function getUserArticles(username: string, page = 1, perPage = 10): Promise<DevToArticle[]> {
  return fetchDevTo(`/articles?username=${username}&page=${page}&per_page=${perPage}`);
}

/**
 * Fetch a single article by ID
 */
export async function getArticleById(id: number): Promise<DevToArticle> {
  return fetchDevTo(`/articles/${id}`);
}

/**
 * Fetch article by slug
 * The Dev.to API does not provide a direct endpoint to fetch by slug, 
 * so we extract the ID from the slug if it's in the format "123-title-here"
 */
export async function getArticleBySlug(slug: string): Promise<DevToArticle> {
  // Check if the slug starts with a number followed by a dash
  const matches = slug.match(/^(\d+)-/);
  
  if (matches && matches[1]) {
    // Extract the ID and use it to fetch the article
    const id = parseInt(matches[1], 10);
    return getArticleById(id);
  }
  
  throw new Error(`Invalid slug format: ${slug}`);
}

/**
 * Fetch articles by tag
 */
export async function getArticlesByTag(tag: string, page = 1, perPage = 10): Promise<DevToArticle[]> {
  return fetchDevTo(`/articles?tag=${tag}&page=${page}&per_page=${perPage}`);
}

/**
 * Fetch user information
 */
export async function getUserInfo(username: string): Promise<DevToUser> {
  return fetchDevTo(`/users/by_username?url=${username}`);
}

/**
 * Search articles
 */
export async function searchArticles(query: string, page = 1, perPage = 10): Promise<DevToArticle[]> {
  return fetchDevTo(`/articles/search?q=${query}&page=${page}&per_page=${perPage}`);
}

/**
 * Get the latest articles from Dev.to
 */
export async function getLatestArticles(page = 1, perPage = 10): Promise<DevToArticle[]> {
  return fetchDevTo(`/articles/latest?page=${page}&per_page=${perPage}`);
}

/**
 * Get featured articles (a.k.a. "rising" in Dev.to API)
 */
export async function getFeaturedArticles(page = 1, perPage = 6): Promise<DevToArticle[]> {
  return fetchDevTo(`/articles?top=7&page=${page}&per_page=${perPage}`);
}
