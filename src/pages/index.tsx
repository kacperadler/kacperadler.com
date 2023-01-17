import { GetStaticProps, NextPage } from 'next';

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
  return <Layout>{articles.length}</Layout>;
};

export default Home;
