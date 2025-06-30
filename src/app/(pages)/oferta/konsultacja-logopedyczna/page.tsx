import React from "react";
import classes from '../../../page.module.css';
import OfferEntry from "@/app/components/offer/entry";

export default function KonsultacjaPage() {
    return(
        <div>
            <div className={classes.subpageTopMargin}></div> 
            <OfferEntry 
                pageTitle="KONSULTACJA LOGOPEDYCZNA" 
                entryInformation="Konsultacja logopedyczna to spotkanie w celu skontrolowania mowy dziecka i zadania pytań terapeucie odnośnie jego rozwoju. Zostaje na niej przeprowadzony wywiad z rodzicem lub opiekunem oraz badanie dziecka. Jest to pierwszy krok przed rozpoczęciem terapii, który umożliwi wspólne omówienie dalszych działań"
                photoSrc="/offer/Konsultacja_theme.png"/>
        </div>
    )
}