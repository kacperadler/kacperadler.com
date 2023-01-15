import { GetStaticProps, NextPage } from 'next';

import { getFileBySlug, GetFileBySlugData } from 'shared/lib/mdParser';
import { Layout } from 'shared/components/Layout';
import { layout } from 'shared/config/layout';
import clsx from 'clsx';

export interface IAbout {
  about: GetFileBySlugData;
}

export const getStaticProps: GetStaticProps<IAbout> = async () => {
  const about = await getFileBySlug('_data/informations', 'about');

  return {
    props: {
      about,
    },
  };
};

const About: NextPage<IAbout> = ({ about }) => {
  return (
    <Layout>
      <div
        className={clsx(layout, 'prose text-justify prose-img:mx-auto prose-img:rounded-xl lg:prose-xl')}
        dangerouslySetInnerHTML={{ __html: about.content }}
      />
    </Layout>
  );
};

export default About;
