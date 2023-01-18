import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

export interface FileData {
  slug: string;
  createdAt: number | null;
  title?: string;
  description?: string;
  cover?: string;
  tags?: string[];
  content?: string;
}

export const getList = (path: string): FileData[] => {
  const directory = join(process.cwd(), path);
  const files = fs.readdirSync(directory);

  return files.map((file) => {
    const fullPath = join(directory, file);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const { data } = matter(fileContents);

    return {
      ...data,
      slug: file.replace('.md', ''),
      createdAt: data.date ? Number(new Date(data.date)) : null,
    };
  });
};

export const getFileBySlug = async (path: string, slug: string): Promise<FileData> => {
  const directory = join(process.cwd(), path);
  const fullPath = join(directory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content: mdContent } = matter(fileContents);

  const content = mdContent ? await (await remark().use(remarkGfm).use(html).process(mdContent)).toString() : '';

  return {
    ...data,
    slug,
    content,
    createdAt: data.date ? Number(new Date(data.date)) : null,
  };
};
