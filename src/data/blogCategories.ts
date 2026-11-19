export const BLOG_CATEGORIES = [
  { slug: 'development', label: '技术探究', description: '兴趣主导，分享一些自己感兴趣的技术内容' },
  { slug: 'insurance', label: '保险相关', description: '保险知识、经验整理与专业笔记' },
  { slug: 'life', label: '人生感悟', description: '没事在这说点涩话' }
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number]['slug'];

export function getBlogCategory(category?: string) {
  return BLOG_CATEGORIES.find((item) => item.slug === category);
}
