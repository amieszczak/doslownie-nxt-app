'use client';
import React from "react";
import Link from "next/link";
import styles from './header.module.css';
import classes from '../../page.module.css';
import classNames from 'classnames';
import { useState, useEffect } from "react";
import Image from "next/image";
import chevronDown from '../../../../public/icons/chevronDown.svg';
import chevronDownWhite from '../../../../public/icons/chevronDownWhite.svg';
import HeaderSlider from '../headerSlider/headerSlider';
import logo from '../../../../public/main/LOGO.svg';
import logoWhite from '../../../../public/main/LOGO_WHITE.svg';
import { usePathname } from 'next/navigation';
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import { PostTagsType } from "@/app/types/post-tags";

export default function Header({ tags }: { tags: PostTagsType[] | null }) {

    const [isDropdownOpened, setDropdownOpened] = useState(false);
    const [menuTransform, setMenuTransform] = useState(false);

    const [isMainMobileMenuActive, setMainMenuMobileActive] = useState(false);
    const [isMobileView, setMobileView] = useState(false);

    const LINKS: Array<{ title: string, href: string, offerPages?: Array<{ title: string, href: string }> }> = [
        {
            title: 'Oferta', href: '/oferta', offerPages: [
                { title: 'kosultacja logopedyczna', href: '/oferta/konsultacja-logopedyczna' },
                { title: 'terapia logopedyczna', href: '/oferta/terapia-logopedyczna' },
                { title: 'trening umiejętności społecznych', href: '/oferta/trening-umiejetnosci-spolecznych' },
                { title: 'terapia ręki', href: '/oferta/terapia-reki' },
            ]
        },
        { title: 'O nas', href: '/o-nas' },
        { title: 'Kontakt', href: '/kontakt' },
        { title: 'Blog', href: '/blog' },
    ]

    const location = usePathname();
    const LPHeaderTop = location == '/' && !menuTransform;

    useEffect(() => {
        const handleScroll = () => {
            if (location == '/') {
                const offerPosition = document?.getElementById('offer')?.getBoundingClientRect().y;

                if (window.scrollY < document.body.offsetHeight / 2) {
                    setMenuTransform(undefined != offerPosition && offerPosition < 55);
                    return
                }
                setMenuTransform((window.innerHeight + window.scrollY) <= (document.body.offsetHeight - 10));
            }

            if (location != '/') {
                setMenuTransform(window.scrollY != 0);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [location]);

    useEffect(() => {

        setMobileView(window.innerWidth < 768);

        const handleResize = () => {
            setMobileView(window.innerWidth < 768);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <header className={classNames({
            ["fixed z-100 w-screen"]: true,
            [classes.menuBarHeight]: true,
            [classes.menuBarHeightThin]: menuTransform,
            ['border border-b border-black']: !LPHeaderTop,
        })}>
            <div className={classNames({ ['max-w-[1920px] mx-auto h-full']: true, [styles.green]: true, [`${styles.headerLandingPageTop} hover:bg-gray-400 hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10`]: LPHeaderTop && !isMobileView })}>
                <div className='px-25 flex justify-between items-center w-full h-full'>
                    <Link href='/' 
                        onClick = {() => setMainMenuMobileActive(false)}
                        className={classNames({
                        ["h-13 flex items-center gap-2 max-content"]: true,
                        [styles.logoTransform]: menuTransform,
                        [styles.headerTransformBack]: !menuTransform,                        
                    })}>
                        <Image alt="logo" src={LPHeaderTop && !isMainMobileMenuActive ? logoWhite : logo} className={classNames({["size-full"]: true, ['relative z-100']: isMainMobileMenuActive})} />
                        <div className={classNames({
                            ['flex flex-col justify-center leading-none']: true,
                            [styles.titleTransform]: menuTransform,
                            [styles.headerTransformBack]: !menuTransform,
                            [styles.headerTitleHide]: LPHeaderTop
                        })}>
                            <p className="text-2xl font-thin">DOSŁOWNIE</p>
                            <p className="text-base font-thin">NEUROLOGOPEDIA</p>
                        </div>
                    </Link>
                    <nav className={classNames({['flex']: true, ['absolute left-1/2 translate-x-[-50%] top-0 text-black flex-col h-screen w-screen py-[10vh] bg-white px-25 gap-25']: isMobileView, ['hidden']: isMobileView && !isMainMobileMenuActive ,['flex-row w-1/2 ml-auto h-full justify-between']: !isMobileView})}>
                        {LINKS.map((item, index) => {
                            return (
                                <div key={index} className={classNames({["h-full"]: !isMobileView})}>
                                    {item.offerPages
                                        ? <div
                                            className='h-full'
                                            onMouseEnter={() => setDropdownOpened(true)}
                                            onMouseLeave={() => setDropdownOpened(false)}>
                                            <Link 
                                                onClick = {() => setMainMenuMobileActive(false)}
                                                className={classNames({
                                                [styles.back]: true,
                                                ['block flex items-center text-base']: true,
                                                ['h-full']: !isMobileView
                                            })} href={item.href}>
                                                <p>{item.title}</p>
                                                {!isMobileView &&
                                                    <Image
                                                        alt='chevron down'
                                                        className={classNames({ [styles.chevronClosed]: true, [styles.chevronOpened]: isDropdownOpened })}
                                                        src={LPHeaderTop ? chevronDownWhite : chevronDown}
                                                    />
                                                }
                                            </Link>
                                            <div className={classNames({
                                                ['w-full flex justify-between absolute z-10 bottom-0 translate-y-full -translate-x-1/2 px-25 bg-white border-t border-black max-w-[1920px]']: !isMobileView,
                                                [classes.menuBarHeight]: !isMobileView,
                                                [classes.menuBarHeightThin]: menuTransform && !isMobileView,
                                                [styles.dropdownClose]: !isMobileView,
                                                [styles.dropdownOpen]: isDropdownOpened,
                                                [styles.dropdownMainTop]: LPHeaderTop,
                                                ['flex flex-col gap-10 pt-15 pl-5']: isMobileView,
                                            })}>
                                                {item.offerPages.map((element, index) => {
                                                    return (
                                                        <Link onClick = {() => setMainMenuMobileActive(false)} className='whitespace-nowrap h-full flex items-center' key={index} href={element.href}>{element.title}</Link>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        : <Link onClick = {() => setMainMenuMobileActive(false)} className="h-full flex items-center" href={item.href}>{item.title}</Link>
                                    }
                                </div>
                            )
                        })}
                    </nav>
                    <div className='block md:hidden h-full aspect-square'>
                        <div className={classNames({
                            [styles.headerToggle]: true,
                            [styles.headerToggleAnimation]: isMainMobileMenuActive,
                            [styles.headerToggleLandingPageTop]: LPHeaderTop,
                            [styles.headerToggleAnimationLandingPageTop]: LPHeaderTop && isMainMobileMenuActive
                        })}
                            onClick={() => setMainMenuMobileActive(!isMainMobileMenuActive)}
                        ></div>
                    </div>
                    <div className={classNames({ ["absolute bottom-0 left-0 border-b border-black w-screen translate-y-full overflow-hidden transition duration-500"]: true, 
                        [styles.borderHide]: LPHeaderTop, 
                        ['hidden']: LPHeaderTop && isMobileView,
                        [styles.headerSliderScrollHide]: menuTransform})}>
                        <HeaderSlider tags={tags} />
                    </div>
                </div>
            </div>
            <span className={classNames({
                ['fixed w-screen opacity-100']: true,
                [styles.blurredDropdownBackground]: isDropdownOpened,
                [classes.menuBarHeight]: true,
                [styles.blurredDropdownBackgroundScrolled]: menuTransform
            })}>
            </span>
            {!menuTransform
                &&
                <Breadcrumbs />}
        </header>
    )
}