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
        <LocationMap />
    )
}