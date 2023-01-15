import React, { useMemo } from 'react';
import { Roboto_Mono } from '@next/font/google';
import { layout } from 'shared/config/layout';
import clsx from 'clsx';

const robotoMono = Roboto_Mono({ weight: '400', subsets: ['latin'] });

export const Footer: React.FunctionComponent = () => {
  const year = new Date().getFullYear();

  const copyright = useMemo(() => `Copyright © ${year} | All rights reserved.`, [year]);

  return (
    <footer
      className={clsx(
        layout,
        robotoMono.className,
        'absolute left-0 right-0 bottom-0 mx-auto flex flex-row justify-between pb-8 dark:text-white'
      )}>
      <div>{copyright}</div>
      <div></div>
    </footer>
  );
};
