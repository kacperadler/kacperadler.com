import clsx from 'clsx';
import * as dateFns from 'date-fns';
import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';

import { Layout } from 'shared/components/Layout';
import { getList, GetListData } from 'shared/lib/mdParser';

export interface IHome {
  articles: GetListData[];
}

export const getStaticProps: GetStaticProps<IHome> = async () => {
  const articles = getList('_data/articles');

  return {
    props: {
      articles,
    },
  };
};

const Home: NextPage<IHome> = ({ articles }) => {
  return (
    <Layout>
      {articles.length > 0 ? (
        <section className="flex flex-col gap-6">
          {articles.map(({ createdAt, title, description, cover }) => (
            <div
              key={createdAt}
              className={clsx(
                'flex w-full flex-col lg:flex-row',
                'rounded-lg border-2 border-cyan-700 hover:border-cyan-400 ',
                'duration-300 ease-in-out',
                'p-4'
              )}>
              {cover ? (
                <Image
                  src={cover}
                  alt={cover}
                  width={428}
                  height={334}
                  className="hidden rounded-md lg:mr-4 lg:block"
                />
              ) : null}
              <div className="prose dark:prose-invert lg:mt-0">
                <h3 className="mb-1 text-2xl">{title}</h3>
                <p className="mt-0 mb-0 text-slate-500">{createdAt && dateFns.format(createdAt, 'dd MMM yyyy')}</p>
                <p className="mt-0 text-justify text-lg">{description}</p>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <div className="text-lg">Post list is empty</div>
      )}
    </Layout>
  );
};

export default Home;
