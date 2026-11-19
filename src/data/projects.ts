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
    name: '友邦在售产品条款文档',
    description: '与其他友邦 AIA 代理人共建维护的在售产品条款文档',
    url: "https://github.com/undoZen/aia-products",
    tags: ['保险', '条款'],
    featured: true,
  },
];
