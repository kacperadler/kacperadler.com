import clsx from 'clsx';
import React from 'react';
import { MEDIA } from './Footer.constants';

export const Footer: React.FunctionComponent = () => {
  const year = new Date().getFullYear();

  const copyright = `Copyright © ${year} | All rights reserved.`;

  return (
    <footer
      className={clsx(
        'mx-auto mt-12 max-w-4xl border-t-2 border-gray-400 p-4 py-6',
        'flex flex-row justify-between',
        'dark:text-white'
      )}>
      <div>{copyright}</div>
      <div className="flex flex-row">
        {MEDIA.map(({ href, Icon }) => (
          <a href={href} key={href} target="blank" className={clsx('mx-2 text-2xl', 'transition duration-300')}>
            <Icon className="hover:rotate-12 hover:text-cyan-400" />
          </a>
        ))}
      </div>
    </footer>
  );
};
