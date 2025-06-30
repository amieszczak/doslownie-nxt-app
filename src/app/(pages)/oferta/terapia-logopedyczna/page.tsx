import React from "react";
import classes from '../../../page.module.css';
import OfferEntry from "@/app/components/offer/entry";

export default function TerapiaPage() {
    return(
        <div>
            <div className={classes.subpageTopMargin}></div> 
            <OfferEntry 
                pageTitle="TERAPIA LOGOPEDYCZNA" 
                entryInformation="Terapia logopedyczna to zespół działań podejmowanych przez logopedów, dla których nadrzędnym zadaniem jest osiągnięcie zamierzonych celów logopedycznych. Czas terapii logopedycznej jest uzależniony od typu trudności oraz indywidualnej motywacji pacjenta. Pracujemy w oparciu o metody niedyrektywne, w zabawie i w relacji, z uwzględnieniem indywidualnych potrzeb każdej osoby. Terapia logopedyczna prowadzona jest z wykorzystaniem terapii miofunkcjonalnej. Logopeda/ neurologopeda prowadzi terapię holistycznie, ćwiczymy połykanie, pozycję spoczynkową języka oraz wykonujemy ćwiczenia normalizujące napięcie mięśniowe."
                photoSrc="/offer/Terapia_theme.png"/>
        </div>
    )
}