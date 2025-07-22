'use client';
import classes from '../../page.module.css';
import classNames from 'classnames';
import dynamic from 'next/dynamic';

export default function SubPageEntry() {

    const LocationMap = dynamic(() => import('../map/map'), {ssr: false});

    return (
        <LocationMap />
    )
}

/* 
<div className={classNames({[classes.subpageUnitHeight]: true, ['flex']:true})}>          
            <div className={classNames({['w-1/2 h-full overflow-hidden']:true})}>
                <LocationMap />
            </div>
        </div> */