import clsx from 'clsx';
import React from 'react';

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
      <div></div>
    </footer>
  );
};
