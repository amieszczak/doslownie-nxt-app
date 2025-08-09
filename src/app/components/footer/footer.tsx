'use client';
import { usePathname } from 'next/navigation';
import classes from '../../page.module.css';
import classNames from 'classnames';
import facebook from '../../../../public/socials/facebook.svg';
import instagram from '../../../../public/socials/instagram.svg';
import linkedin from '../../../../public/socials/linkedin.svg';
import x_twitter from '../../../../public/socials/x_twitter.svg';
import facebook_black from '../../../../public/socials/facebook_black.svg';
import instagram_black from '../../../../public/socials/instagram_black.svg';
import linkedin_black from '../../../../public/socials/linkedin_black.svg';
import x_twitter_black from '../../../../public/socials/x_twitter_black.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {

    type MenuLink = {
        title: string;
        href: string;
    };

    type SocialLink = {
        name: string;
        href: string;
        iconDefault: any;
        iconHover: any;
    };
    
    const MENU_LINKS: MenuLink[] = [
        { title: 'Oferta', href: '/oferta' },
        { title: 'O nas', href: '/o-nas' },
        { title: 'Kontakt', href: '/kontakt' },
        { title: 'Blog', href: '/blog' },
    ];

    const SOCIAL_LINKS: SocialLink[] = [
        { name: 'Facebook', href: 'https://facebook.com', iconDefault: facebook, iconHover: facebook_black },
        { name: 'Instagram', href: 'https://instagram.com', iconDefault: instagram, iconHover: instagram_black },
        { name: 'LinkedIn', href: 'https://linkedin.com', iconDefault: linkedin, iconHover: linkedin_black },
        { name: 'X (Twitter)', href: 'https://twitter.com', iconDefault: x_twitter, iconHover: x_twitter_black },
    ];
    
    const location = usePathname();
    const isHomePage = location === '/'
    const colorClass = isHomePage ? 'white' : 'black';

    return (
        <footer id='footer' className={classNames({[`w-screen backdrop-filter backdrop-blur-sm bg-opacity-10  border border-t-${colorClass}`]: true})}>
            <nav className={classNames({['w-full px-25']: true, [classes.footerSectionHeight]: true})}>
                <ul className={`flex justify-between items-center py-2 font-semibold border-b border-${colorClass}`}>
                    {MENU_LINKS.map((link) => (
                        <li className={`text-${colorClass} hover:text-black`} key={link.href}>
                            <a href={link.href}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className={classNames({[`text-${colorClass} text-sm flex flex-col gap-2`]: true})}>
                <div className="flex justify-between items-end px-25 pt-6 pb-2 h-1/2">
                    <a href="/polityka-prywatnosci" className="hover:text-black">
                        Polityka prywatności
                    </a>
                    <div className="text-center text-xs lowercase h-1/2">
                        Dosłownie - wszelkie prawa zastrzeżone
                    </div>
                    <div className="flex gap-5">
                    {SOCIAL_LINKS.map((social) => (
                            <Link
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                            >
                                <Image
                                    src={social.iconDefault}
                                    alt={social.name}
                                    width={28}
                                    height={28}
                                    className="transition-opacity duration-300 ease-in-out group-hover:opacity-0 absolute"
                                />
                                <Image
                                    src={social.iconHover}
                                    alt={`${social.name} hover`}
                                    width={28}
                                    height={28}
                                    className="transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}