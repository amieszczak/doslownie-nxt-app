'use client';
import React from "react";
import Link from "next/link";
import styles from './header.module.css';
import classes from '../../page.module.css';
import classNames from 'classnames';
import { useState, useEffect } from "react";
import Image from "next/image";
import chevronDown from '../../../../public/icons/chevronDown.svg';
import HeaderSlider from '../headerSlider/headerSlider';
import logo from '../../../../public/main/LOGO.svg';


export default function Header() {

    const [isDropdownOpened, setDropdownOpened] = useState(false);
    const [menuTransform, setMenuTransform] = useState(false);

    const Links: Array<{title : string, href : string, offerPages? : Array<{title : string, href : string}>}> = [
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

    /* useEffect(() => {
        

    }, []) */

    useEffect(() => {

        const handleScroll = () => {            
    
            /* if(window.scrollY == 0) {
                setMenuTransform(false);
            } else {
                setMenuTransform(true);
            } */
                setMenuTransform(window.scrollY != 0);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [])

    return(
        <header className="fixed z-100">
            <div className={classNames({['flex items-center gap-5 w-screen px-25 border-b border-black relative bg-white']: true, [classes.menuBarHeight]:true, [classes.menuBarHeightThin]: menuTransform == true})}>
                <Link href='/' className={classNames({["h-13 flex items-center gap-2"]:true, [styles.logoTransform]: menuTransform == true, [styles.headerTransformBack]: menuTransform == false})}>
                    <Image alt="logo" src={logo} className="size-full"/>
                    <div className={classNames({['flex flex-col justify-center leading-none']:true, [styles.titleTransform]: menuTransform == true, [styles.headerTransformBack]: menuTransform == false})}>
                        <p className="text-2xl font-thin">DOSŁOWNIE</p>
                        <p className="text-base font-thin">NEUROLOGOPEDIA</p>
                    </div>                
                </Link>
                <nav className='flex flex-col md:flex-row justify-between w-1/2 ml-auto h-full'>            
                    {Links.map((item, index) => {
                        return(
                            <div key={index} className="h-full">
                                {item.offerPages 
                                    ?   <div                                      
                                        className='h-full'
                                        onMouseEnter={() => setDropdownOpened(true)}
                                        onMouseLeave={() => setDropdownOpened(false)}>
                                            <Link className={classNames({[styles.back]:true, ['block h-full flex items-center text-base']:true})} href={item.href}>
                                                <p>{item.title}</p>
                                                <Image
                                                alt='chevron down'
                                                className={classNames({[styles.chevronClosed]: true, [styles.chevronOpened]: isDropdownOpened})}
                                                src={chevronDown}
                                                />
                                            </Link>
                                            <div className={classNames({['w-screen flex justify-between absolute z-10 bottom-0 translate-y-full -translate-x-1/2 px-25 bg-white border-t border-black']:true, [classes.menuBarHeight]:true, [classes.menuBarHeightThin]: menuTransform == true, [styles.dropdownClose]:true, [styles.dropdownOpen]: isDropdownOpened})}>
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
                <div className="absolute bottom-0 left-0 border-b border-black w-screen translate-y-full overflow-hidden">
                    <HeaderSlider/>
                </div>            
            </div>       
        </header>        
    )
}