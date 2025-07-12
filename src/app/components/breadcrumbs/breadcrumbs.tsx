'use client'
import Link from "next/link";
import styles from './breadcrumbs.module.css';
import classes from '../../page.module.css';
import chevron from '../../../../public/chevron_breadcrumbs.svg';
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export default function Breadcrumbs() {

    const pathname = usePathname();
    
    const [linkChain, setLinkChain] = useState<Array<{ name: string; link: string; }> | null>(null)

    useEffect(() => {

            if(pathname == '/') {
                setLinkChain(null);
                return;
            }

            const chainData:{ name: string; link: string; }[] = [{name: 'Strona główna', link: '/'}];

            const steps:string[] = []

            pathname.slice(1).split('/').forEach(item => {
                const displayedTitle = item.charAt(0).toUpperCase() + item.split('-').join(' ').slice(1);
                steps.push(item);
                chainData.push({name: displayedTitle, link: '/' + steps.join('/')})
            })

            setLinkChain(chainData);
    },[pathname])


    return(
        <>
        {linkChain != null 
            ?
            <div className={classNames({['flex border-b border-black w-max pl-25']:true, [classes.breadcrumbsHeight]:true, [styles.topMargin]: true})}>
                {linkChain?.map((item, index) => {
                    return(
                        <Link key={index} className='flex items-center' href={item.link}>
                            <span className={classes.paragraphTertiary}>{item.name}</span>
                            {index != linkChain.length - 1
                            &&
                            <Image alt='' width={30} height={30} src={chevron}/>}                            
                        </Link>     

                    )
                })}
            </div>
            :
            <></>
        }        
        </> 
    )
}