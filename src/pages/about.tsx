import { GetStaticProps, NextPage } from 'next';

import { getFileBySlug, FileData } from 'shared/lib/mdParser';
import { Layout } from 'shared/components/Layout';
import clsx from 'clsx';

export interface IAbout {
  about: FileData;
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
        className={clsx(
          'prose dark:prose-invert dark:text-white',
          'prose-img:mx-auto prose-img:rounded-xl',
          'text-justify lg:prose-xl'
        )}
        dangerouslySetInnerHTML={{ __html: about.content ?? '' }}
      />
    </Layout>
  );
};

export default About;
