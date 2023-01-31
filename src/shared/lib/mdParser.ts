import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import prism from 'remark-prism';
import * as dateFns from 'date-fns';
export interface FileData {
  slug: string;
  createdAt: number;
  title?: string;
  emoji?: string;
  description?: string;
  cover?: string;
  tags?: string[];
  content?: string;
}

export const getList = (path: string): FileData[] => {
  const directory = join(process.cwd(), path);
  const files = fs.readdirSync(directory);

  const mappedFiles: FileData[] = files.map((file) => {
    const fullPath = join(directory, file);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const { data } = matter(fileContents);

    return {
      ...data,
      slug: file.replace('.md', ''),
      createdAt: Number(new Date(data.date)),
    };
  });

  const sortedFiles = mappedFiles.sort((article1, article2) => {
    return dateFns.differenceInDays(new Date(article2.createdAt), new Date(article1.createdAt));
  });

  return sortedFiles;
};

export const getFileBySlug = async (path: string, slug: string): Promise<FileData> => {
  const directory = join(process.cwd(), path);
  const fullPath = join(directory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content: markdown } = matter(fileContents);

  const content = markdown
    ? await (await remark().use(remarkGfm).use(prism).use(html, { sanitize: false }).process(markdown)).toString()
    : '';

  return {
    ...data,
    slug,
    content,
    createdAt: Number(new Date(data.date)),
  };
};
