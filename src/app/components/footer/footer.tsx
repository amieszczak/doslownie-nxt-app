'use client';
import { usePathname } from 'next/navigation';
import classes from '../../page.module.css';
import classNames from 'classnames';

export default function Footer() {

    type MenuLink = {
        title: string;
        href: string;
    };
    
    const MENU_LINKS: MenuLink[] = [
        { title: 'Oferta', href: '/oferta' },
        { title: 'O nas', href: '/o-nas' },
        { title: 'Kontakt', href: '/kontakt' },
        { title: 'Blog', href: '/blog' },
    ];
    
    const location = usePathname();

    return (
        <footer id='footer' className={classNames({['w-screen backdrop-filter backdrop-blur-sm bg-opacity-10  border border-t-white']: true, [classes.menuBarHeight]: true})}>
            <nav className='w-full h-1/2 px-25'>
                <ul className="flex justify-between items-center py-2 text-white font-semibold border-b border-white">
                    {MENU_LINKS.map((link) => (
                        <li key={link.href}>
                            <a href={link.href}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </footer>
    )
}