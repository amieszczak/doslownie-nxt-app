'use client';
import classes from '../../page.module.css';
import styles from './subpageEntry.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import location from '../../../../public/contact/location.svg';
import message from '../../../../public/contact/message.svg';
import phone from '../../../../public/contact/phone.svg';
import dynamic from 'next/dynamic';

export default function SubPageEntry() {

    const LocationMap = dynamic(() => import('../map/map'), {ssr: false});

    return (
        <div className={classNames({[classes.subpageUnitHeight]: true, ['flex']:true})}>
            <div className={classNames({['w-1/2 p-10 flex flex-col gap-10 justify-center']: true, [styles.contentBottomMargin]:true})}>
                <h1 className='text-4xl'>Skontaktuj się z nami</h1>
                <p>Jesteśmy dostępni od poniedziałku do piątku w godzinach popołudniowych w naszych gabinetach w Krakowie. Alternatywnie zapraszamy do kontaktu telefonicznego/mailowego lub przez nasz formularz kontaktowy.</p>                
                <Link href='#' className='flex items-center gap-7'>
                    <span className='w-[65px] w-[65px]'>
                        <Image src={phone} alt='ikona telefon' width={100} height={100} className='w-full h-full object-cover'/>
                    </span>
                    <p className='text-xl'>+48 111222333</p>
                </Link>
                <Link href='#' className='flex items-center gap-7'>
                    <span className='w-[65px] w-[65px]'>
                        <Image src={message} alt='ikona wiadomość' width={100} height={100} className='w-full h-full object-cover'/>
                    </span>
                    <p className='text-xl'>doslownie@doslownie.com</p>
                </Link>
                <Link href='#' className='flex items-center gap-7'>
                    <span className='w-[65px] w-[65px]'>
                        <Image src={location} alt='ikona lokalizacja' width={100} height={100} className='w-full h-full object-cover'/>
                    </span>
                    <p className='text-xl'>Kraków, ul.Adres 1/1</p>
                </Link>                
            </div>
            <div className={classNames({['w-1/2 h-full overflow-hidden']:true})}>
                <LocationMap />
            </div>
        </div>
    )
}