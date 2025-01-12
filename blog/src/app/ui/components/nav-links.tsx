'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import {
    UserGroupIcon,
    DocumentDuplicateIcon,
    EnvelopeIcon
} from '@heroicons/react/24/outline';

const links = [
    { href: '/blog/about', label: 'About', icon: UserGroupIcon },
    { href: '/blog/posts', label: 'Posts', icon: DocumentDuplicateIcon },
    { href: '/blog/contact', label: 'Contact', icon: EnvelopeIcon },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <nav className='flex'>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={clsx(
                            'text-white px-3 py-2 rounded hover:bg-blue-700 flex gap-2',
                            {
                                'bg-blue-700': pathname === link.href,
                            }
                        )}
                    >
                        <LinkIcon className='w-6'/>
                        {link.label}
                        </Link>
                )
            })}
        </nav>
    );
}