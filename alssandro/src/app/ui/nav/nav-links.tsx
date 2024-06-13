'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  {
    name: 'Home',
    href: '/alessandro',
  },
  {
    name: 'Ventas',
    href: '/alessandro/ventas',
  },
  {
    name: 'Cuentas',
    href: '/alessandro/cuentas',
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href}>
            {
              <p
                className={clsx('text-lg p-2 m-1 rounded hover:bg-golden', {
                  'bg-golden text-textButtons font-bold':
                    pathname === link.href,
                })}
              >
                {link.name}
              </p>
            }
          </Link>
        );
      })}
    </>
  );
}
