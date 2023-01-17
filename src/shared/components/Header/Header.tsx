import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { ROUTE } from 'shared/config/routes';
import { HEADER_LINKS } from './Header.constants';

export const Header: React.FunctionComponent = () => {
  const { pathname } = useRouter();

  return (
    <nav className="mx-auto flex max-w-4xl flex-row justify-between border-b-2 border-gray-400 p-4 px-0 py-6">
      <div>
        <Link href={ROUTE.home} className="mx-4 text-lg font-semibold">
          Kacper Adler
        </Link>
      </div>
      <div>
        {HEADER_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              'transition duration-300',
              'mx-4 font-semibold text-gray-400',
              pathname === href && 'text-white underline underline-offset-4'
            )}>
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
