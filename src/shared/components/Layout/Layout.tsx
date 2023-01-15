import React, { PropsWithChildren } from 'react';
import { Roboto_Mono } from '@next/font/google';
import Head from 'next/head';

import { Footer } from 'shared/components/Footer';

const robotoMono = Roboto_Mono({ weight: '400', subsets: ['latin'] });

export interface ILayout extends PropsWithChildren {
  emoji?: any;
  title?: string;
  isArticle?: string;
  description?: string;
}

export const Layout: React.FunctionComponent<ILayout> = ({
  children,
  emoji = '👋',
  isArticle = false,
  title = 'Welcome in my universe',
  description = '👋 Welcome in my universe',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="icon"
          // eslint-disable-next-line max-len
          href={`data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${emoji}</text></svg>`}
        />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {isArticle ? (
        <article className={`${robotoMono.className} min-h-screen`}>{children}</article>
      ) : (
        <main className={`${robotoMono.className} min-h-screen`}>{children}</main>
      )}
      <Footer />
    </>
  );
};