import { GetStaticProps, NextPage } from 'next';
import { Roboto_Mono } from '@next/font/google';
import Head from 'next/head';

import { getFileBySlug, GetFileBySlugData } from 'shared/lib/mdParser';

const robotoMono = Roboto_Mono({ weight: '400', subsets: ['latin'] });

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
    <>
      <Head>
        <title>Welcome in my universe</title>
        <link
          rel="icon"
          // eslint-disable-next-line max-len
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👋</text></svg>"
        />
        <meta name="description" content="👋 Welcome in my universe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* eslint-disable-next-line max-len */}
      <main className="prose mx-auto max-w-4xl px-10 text-justify prose-img:mx-auto prose-img:rounded-xl dark:prose-invert lg:prose-xl">
        <div className={robotoMono.className} dangerouslySetInnerHTML={{ __html: about.content }} />
      </main>
    </>
  );
};

export default About;
