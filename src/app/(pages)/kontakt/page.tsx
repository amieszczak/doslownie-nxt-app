import React from "react";
import classNames from "classnames";
import classes from '../../page.module.css';
import SubPageEntry from "@/app/components/subPageEntry/subPageEntry";

export default function ContactPage() {
    return(
        <div>
            <div className={classes.subpageTopMargin}></div>            
            <SubPageEntry/>
        </div>
    )
}
{/* <div className={classNames({[classes.subpageUnitHeight]:true, ['bg-black']:true})}></div> */}