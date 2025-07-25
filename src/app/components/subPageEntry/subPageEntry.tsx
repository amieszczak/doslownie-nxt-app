'use client';
import dynamic from 'next/dynamic';

export default function SubPageEntry() {

    const LocationMap = dynamic(() => import('../map/map'), {ssr: false});

    return (
        <LocationMap />
    )
}