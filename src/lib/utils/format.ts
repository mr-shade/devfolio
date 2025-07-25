import { parseISO, format } from 'date-fns';
import { DevToArticle } from '@/lib/devto';

/**
 * Format Dev.to article data to match our blog post format
 */
export function formatDevToArticle(article: DevToArticle) {
  // Ensure we have a valid date
  let formattedDate = '';
  try {
    if (article.published_at) {
      const date = parseISO(article.published_at);
      formattedDate = format(date, 'MMMM d, yyyy');
    }
  } catch (e) {
    console.error('Error formatting date:', e);
    formattedDate = 'Unknown date';
  }

  // Get the main tag or default to "General"
  const mainCategory = article.tag_list && article.tag_list.length > 0 
    ? article.tag_list[0].charAt(0).toUpperCase() + article.tag_list[0].slice(1)
    : 'General';

  return {
    id: article.slug || `${article.id}`,
    title: article.title || 'Untitled Article',
    excerpt: article.description || 'No description available',
    date: formattedDate,
    readingTime: `${article.reading_time_minutes || 5} min read`,
    category: mainCategory,
    coverImage: article.cover_image || `https://source.unsplash.com/featured/?${encodeURIComponent(mainCategory.toLowerCase())}`,
    tags: article.tag_list || [],
    url: article.url,
    author: {
      name: article.user?.name || 'Unknown Author',
      username: article.user?.username || 'unknown',
      profileImage: article.user?.profile_image || 'https://via.placeholder.com/100',
    },
  };
}

/**
 * Format an array of Dev.to articles
 */
export function formatDevToArticles(articles: DevToArticle[]) {
  return articles.map(formatDevToArticle);
}

/**
 * Generate a placeholder image URL based on a keyword
 */
export function getPlaceholderImage(keyword: string = 'programming') {
  return `https://source.unsplash.com/featured/?${encodeURIComponent(keyword)}`;
}
