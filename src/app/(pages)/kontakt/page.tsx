'use client';
import React from "react";
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