import React from "react";
import classes from '../../../page.module.css';
import OfferEntry from "@/app/components/offer/entry";

export default function TerapiaRekiPage() {
    return(
        <div>
            <div className={classes.subpageTopMargin}></div> 
            <OfferEntry 
                pageTitle="TERAPIA RĘKI" 
                entryInformation="Terapia Ręki ma na celu usprawnianie tzw. małej motoryki, czyli precyzyjnych ruchów dłoni i palców, jak również dostarczania wrażeń dotykowych i poznawania dzięki nim różnych kształtów, struktur materiałów oraz nabywanie umiejętności ich rozróżniania. Przede wszystkim służy jednak do osiągnięcia samodzielności w podstawowych czynnościach życia codziennego."
                photoSrc="/offer/Terapia_reki_theme.png"/>
        </div>
    )
}