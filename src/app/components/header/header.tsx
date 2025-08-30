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

export default function Header({tags}: {tags: PostTagsType[] | null}) {

    const [isDropdownOpened, setDropdownOpened] = useState(false);
    const [menuTransform, setMenuTransform] = useState(false);

    const LINKS: Array<{title : string, href : string, offerPages? : Array<{title : string, href : string}>}> = [
        { title: 'Oferta', href: '/oferta', offerPages: [
            {title: 'kosultacja logopedyczna', href: '/oferta/konsultacja-logopedyczna'},
            {title: 'terapia logopedyczna', href: '/oferta/terapia-logopedyczna'},
            {title: 'trening umiejętności społecznych', href: '/oferta/trening-umiejetnosci-spolecznych'},
            {title: 'terapia ręki', href: '/oferta/terapia-reki'},
        ]},
        { title: 'O nas', href: '/o-nas'},
        { title: 'Kontakt', href: '/kontakt'},
        { title: 'Blog', href: '/blog'},
    ]

    const location = usePathname();
    const LPHeaderTop  = location == '/' && !menuTransform;

    useEffect(() => {        
        const handleScroll = () => {            
                if(location == '/') {
                    const offerPosition = document?.getElementById('offer')?.getBoundingClientRect().y;  
                    
                    if(window.scrollY < document.body.offsetHeight/2) {
                        setMenuTransform(undefined != offerPosition && offerPosition < 55);
                        return
                    }                
                    setMenuTransform((window.innerHeight + window.scrollY)  <= (document.body.offsetHeight - 10));
                }

                if(location != '/') {
                    setMenuTransform(window.scrollY != 0);
                }
            }
    
            window.addEventListener('scroll', handleScroll);
    
            return () => {
                window.removeEventListener('scroll', handleScroll);
            }
    }, [location])

    return(
        <header className="fixed z-100">
            <div className={classNames({['flex items-center gap-5 w-screen px-25 border-bottom border-black bg-white relative']: true, 
                                        ['border']: !LPHeaderTop,
                                        [ `${styles.headerLandingPageTop} hover:bg-gray-400 hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10`]: LPHeaderTop, 
                                        [classes.menuBarHeight]:true, 
                                        [classes.menuBarHeightThin]: menuTransform})}>        
                    <Link href='/' className={classNames({["h-13 flex items-center gap-2"]:true, 
                                                            [styles.logoTransform]: menuTransform, 
                                                            [styles.headerTransformBack]: !menuTransform})}>
                        <Image alt="logo" src={LPHeaderTop ? logoWhite : logo} className="size-full"/>
                        <div className={classNames({['flex flex-col justify-center leading-none']:true, 
                                                    [styles.titleTransform]: menuTransform, 
                                                    [styles.headerTransformBack]: !menuTransform, 
                                                    [styles.headerTitleHide]: LPHeaderTop})}>
                            <p className="text-2xl font-thin">DOSŁOWNIE</p>
                            <p className="text-base font-thin">NEUROLOGOPEDIA</p>
                        </div>                
                    </Link>
                    <nav className='flex flex-col md:flex-row justify-between w-1/2 ml-auto h-full'>            
                        {LINKS.map((item, index) => {
                            return(
                                <div key={index} className="h-full">
                                    {item.offerPages 
                                        ?   <div                                      
                                            className='h-full'
                                            onMouseEnter={() => setDropdownOpened(true)}
                                            onMouseLeave={() => setDropdownOpened(false)}>
                                                <Link className={classNames({[styles.back]:true, 
                                                                            ['block h-full flex items-center text-base']:true})} href={item.href}>
                                                    <p>{item.title}</p>
                                                    <Image
                                                    alt='chevron down'
                                                    className={classNames({[styles.chevronClosed]: true, [styles.chevronOpened]: isDropdownOpened})}
                                                    src={LPHeaderTop ? chevronDownWhite : chevronDown}
                                                    />
                                                </Link>
                                                <div className={classNames({
                                                    ['w-screen flex justify-between absolute z-10 bottom-0 translate-y-full -translate-x-1/2 px-25 bg-white border-t border-black']:true, 
                                                    [classes.menuBarHeight]:true, 
                                                    [classes.menuBarHeightThin]: menuTransform, 
                                                    [styles.dropdownClose]:true, 
                                                    [styles.dropdownOpen]: isDropdownOpened,                                                
                                                    [styles.dropdownMainTop]: LPHeaderTop})}>
                                                            {item.offerPages.map((element, index) => {
                                                                return(
                                                                    <Link className='whitespace-nowrap h-full flex items-center' key={index} href={element.href}>{element.title}</Link>
                                                                )
                                                            })}
                                                </div> 
                                            </div>
                                        : <Link className="h-full flex items-center" href={item.href}>{item.title}</Link>
                                    }
                                </div>                        
                            )
                        })}
                    </nav>
                <div className={classNames({["absolute bottom-0 left-0 border-b border-black w-screen translate-y-full overflow-hidden transition duration-500"]: true, [styles.borderHide]:LPHeaderTop, [styles.headerSliderScrollHide]:menuTransform})}>
                    <HeaderSlider tags={tags}/>
                </div>            
            </div>      
            <span className={classNames({['bg-gray-400 backdrop-filter backdrop-blur-sm opacity-100 w-screen']: true, [styles.blurredDropdownBackground]:isDropdownOpened, [classes.menuBarHeight]:true, [styles.blurredDropdownBackgroundScrolled]: menuTransform })}></span> 
            {!menuTransform 
            &&
            <Breadcrumbs/>}
        </header>                  
    )
}