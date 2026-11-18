export interface Project {
  name: string;
  description: string;
  url: string;
  tags: string[];
  featured?: boolean;
}

// 从这里维护项目展示；新增项目后会自动出现在 Projects 页面。
export const projects: Project[] = [
  {
    name: 'Personal Website',
    description: '使用 Astro、Markdown 与 GitHub Pages 搭建的个人网站。',
    url: 'https://github.com/Madderate/madderate.github.io',
    tags: ['Astro', 'TypeScript', 'GitHub Pages'],
    featured: true,
  },
];
