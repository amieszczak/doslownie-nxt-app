import React from "react";
import Link from "next/link";
import classNames from "classnames";

export default function LandingPageButton({href, title, variant}: {href: string, title: string, variant: string}) {
    
    let position;

    switch(variant) {
        case 'right':
            position = 'ml-auto'; 
        break; 
        default:
            position = 'mr-auto';
        break;
    }

    return(
        <Link href={href} className={classNames({['uppercase border border-black rounded-sm w-max h-8 sm:h-10 px-3 sm:px-5 flex items-center text-sm sm:text-base md:text-lg xl:text-xl hover:text-white hover:bg-black']:true, [position]: true})}>
            {title}
        </Link>
    )    
}