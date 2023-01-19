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
        <div
          className={clsx(
            'prose prose-invert',
            'prose-img:mx-auto prose-img:rounded-xl',
            'mx-auto text-justify lg:prose-xl'
          )}>
          <h1 className="text-center">
            {emoji} {title}
          </h1>
          <p className="pb-8 text-justify text-xl text-zinc-200">{description}</p>

          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      ) : null}
    </Layout>
  );
};

export default Article;
