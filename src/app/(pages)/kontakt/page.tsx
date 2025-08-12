import React from "react";
import classes from '../../page.module.css';
import styles from './page.module.css';
import SubPageEntry from "@/app/components/subPageEntry/subPageEntry";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import location from '../../../../public/contact/location.svg';
import message from '../../../../public/contact/message.svg';
import phone from '../../../../public/contact/phone.svg';
import getContactPage from "@/integrations/wordpress/getContactPage";
import { ContactPageType } from "@/app/types/contact-page";

export default async function ContactPage() {

    const content: ContactPageType | null = await getContactPage();

    return(
        <div>
            <div className={classes.subpageTopMargin}></div>            
                <div className={classNames({[styles.pageHeight]: true, ['flex']:true})}>
                <div className={classNames({['w-1/2 p-10 flex flex-col gap-10 justify-center mt-25']: true, [styles.contentBottomMargin]:true})}>
                    <h1 className='text-4xl'>{content?.tytulStrony}</h1>
                    <p>{content?.opis}</p>                
                    <Link href={'tel.:' + content?.telefon} className='flex items-center gap-7'>
                        <span className='w-[65px] w-[65px]'>
                            <Image src={phone} alt='ikona telefon' width={100} height={100} className='w-full h-full object-cover'/>
                        </span>
                        <p className='text-xl'>{content?.telefon}</p>
                    </Link>
                    <Link href={'mailto.:' + content?.mail} className='flex items-center gap-7'>
                        <span className='w-[65px] w-[65px]'>
                            <Image src={message} alt='ikona wiadomość' width={100} height={100} className='w-full h-full object-cover'/>
                        </span>
                        <p className='text-xl'>{content?.mail}</p>
                    </Link>
                    <h3 className='flex items-center gap-7'>
                        <span className='w-[65px] w-[65px]'>
                            <Image src={location} alt='ikona lokalizacja' width={100} height={100} className='w-full h-full object-cover'/>
                        </span>
                        <p className='text-xl'>{content?.adres}</p>
                    </h3>                
                </div>
                <div className={classNames({['w-1/2 h-full overflow-hidden']:true})}>
                    <SubPageEntry />
                </div>
            </div>
        </div>
    )
}