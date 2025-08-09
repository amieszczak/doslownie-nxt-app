'use client';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
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
import facebook_black_hover from '../../../../public/socials/facebook_black_hover.svg';
import instagram_black_hover from '../../../../public/socials/instagram_black_hover.svg';
import linkedin_black_hover from '../../../../public/socials/linkedin_black_hover.svg';
import x_twitter_black_hover from '../../../../public/socials/x_twitter_black_hover.svg';

export default function Footer() {

    const [iconHoverIndex, setIconHoverIndex] = useState<number | null>(null);

    type MenuLink = {
        title: string;
        href: string;
    };

    type SocialLink = {
        name: string;
        href: string;
        iconDefault: any;
        iconBlack: any;
        iconBlackHover: any;
    };
    
    
    const MENU_LINKS: MenuLink[] = [
        { title: 'Oferta', href: '/oferta' },
        { title: 'O nas', href: '/o-nas' },
        { title: 'Kontakt', href: '/kontakt' },
        { title: 'Blog', href: '/blog' },
    ];

    const SOCIAL_LINKS: SocialLink[] = [
        { 
            name: 'Facebook', 
            href: 'https://facebook.com', 
            iconDefault: facebook, 
            iconBlack: facebook_black, 
            iconBlackHover: facebook_black_hover
        },
        { 
            name: 'Instagram', 
            href: 'https://instagram.com', 
            iconDefault: instagram, 
            iconBlack: instagram_black, 
            iconBlackHover: instagram_black_hover
        },
        { 
            name: 'LinkedIn', 
            href: 'https://linkedin.com', 
            iconDefault: linkedin, 
            iconBlack: linkedin_black, 
            iconBlackHover: linkedin_black_hover
        },
        { 
            name: 'X (Twitter)', 
            href: 'https://twitter.com', 
            iconDefault: x_twitter, 
            iconBlack: x_twitter_black, 
            iconBlackHover: x_twitter_black_hover
        },
    ];
    
    
    const location = usePathname();
    const isHomePage = location === '/'
    const colorClass = isHomePage ? 'white' : 'black';

    return (
        <footer id='footer' className={classNames({[`w-screen backdrop-filter backdrop-blur-sm bg-opacity-10  border border-t-${colorClass}`]: true})}>
            <nav className={classNames({['w-full px-25']: true, [classes.footerSectionHeight]: true})}>
                <ul className={`flex justify-between items-center py-2 font-semibold border-b border-${colorClass}`}>
                    {MENU_LINKS.map((link) => (
                        <li className={classNames({[`text-${colorClass} hover:text-black`]: true, ['hover:underline']: !isHomePage})} key={link.href}>
                            <a href={link.href}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className={classNames({[`text-${colorClass} text-sm flex flex-col gap-2`]: true})}>
                <div className="flex justify-between items-end px-25 pt-6 pb-2 h-1/2">
                    <a href="/polityka-prywatnosci" className={classNames({["hover:text-black"]: true, ['hover:underline']: !isHomePage})}>
                        Polityka prywatności
                    </a>
                    <div className="text-center text-xs lowercase h-1/2">
                        Dosłownie - wszelkie prawa zastrzeżone
                    </div>
                    <div className="flex gap-5">
                    {SOCIAL_LINKS.map((social, index) => (
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
                                    className={classNames({["transition-opacity duration-300 ease-in-out group-hover:opacity-0 absolute"]: isHomePage, ['opacity-0']: !isHomePage})}
                                />
                                <Image
                                    onMouseEnter={() => {!isHomePage && setIconHoverIndex(index)}}
                                    onMouseLeave={() => {!isHomePage && setIconHoverIndex(null)}}
                                    src={iconHoverIndex === index ? social.iconBlackHover : social.iconBlack}
                                    alt={`${social.name} hover`}
                                    width={28}
                                    height={28}
                                    className={classNames({["transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"]: isHomePage})}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}