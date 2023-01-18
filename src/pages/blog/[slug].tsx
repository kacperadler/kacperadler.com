import clsx from 'clsx';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { Layout } from 'shared/components/Layout';
import { getFileBySlug, FileData, getList } from 'shared/lib/mdParser';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface IArticle {
  article: FileData;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = getList('_data/articles');

  return {
    paths: articles.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IArticle> = async ({ params }) => {
  const { slug } = params as IParams;

  const article = await getFileBySlug('_data/articles', slug);

  return {
    props: {
      article,
    },
  };
};

const Article: NextPage<IArticle> = ({ article }) => {
  const { emoji, title, content, description } = article;

  return (
    <Layout title={title} emoji={emoji} isArticle>
      <Head>
        <link
          href="https://raw.githubusercontent.com/PrismJS/prism-themes/master/themes/prism-atom-dark.css"
          rel="stylesheet"
        />
      </Head>
      {content ? (
        <div>
          <h1 className="pb-8 text-5xl font-semibold">
            {emoji} {title}
          </h1>
          <p className="pb-8 text-justify text-xl text-zinc-200">{description}</p>

          <div
            className={clsx(
              'prose dark:prose-invert dark:text-white',
              'prose-img:mx-auto prose-img:rounded-xl',
              'text-justify lg:prose-xl'
            )}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      ) : null}
    </Layout>
  );
};

export default Article;
