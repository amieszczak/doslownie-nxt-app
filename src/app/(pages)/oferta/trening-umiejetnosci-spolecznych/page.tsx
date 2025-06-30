import React from "react";
import classes from '../../../page.module.css';
import OfferEntry from "@/app/components/offer/entry";

export default function TreningPage() {
    return(
        <div>
            <div className={classes.subpageTopMargin}></div> 
            <OfferEntry 
                pageTitle="TRENING UMIEJĘTNOŚCI SPOŁECZNYCH" 
                entryInformation="Trening Umiejętności Społecznej to zajęcia ogólnorozwojowe prowadzone w grupach kilkuosobowych. Udział dziecka w zajęciach poprzedzony jest diagnozą funkcjonowania emocjonalno-społecznego dziecka i wywiadem z Rodzicami. Zajęcia TUS mają na celu rozwinięcie kompetencji społecznych w tym rozpoznawania i reagowania na swoje i cudze emocje, dobrej komunikacji czy współpracy w grupie."
                photoSrc="/offer/Tus_theme.png"/>
        </div>
    )
}