import React from "react";
import classes from '../../../page.module.css';
import OfferEntry from "@/app/components/offer/entry";
import List from "@/app/components/offer/list";
import Metric from "@/app/components/offer/metric";

export default function TerapiaPage() {

    const LIST_DATA: {id: number; title: string; list: string[];}[] = [
        {
          id: 1,
          title: "Wskazania",
          list: [
             "autyzm",
             "mózgowe porażenie dziecięce",
             "rozszczep wargi i podniebienia",
             "jąkanie",
             "niedosłuch",
             "niepełnosprawność złożona",
             "wady wymowy",
             "opóźniony rozwój mowy",
             "zespół Downa",
             "dysleksja, dysgrafia, dyskalkulia",
          ],
        },
        {
          id: 2,
          title: "Cele terapii",
          list: [
             "usprawnienie motoryki narządów mowy",
             "korygowanie wad wymowy",
             "poprawienie jakości funkcji językowej",
             "oddechowej",
             "fonacyjnej",
             "rozbudowanie zasobu słownictwa czynnego i biernego",
             "wypracowanie alternatywnych zachowań komunikacyjnych",
          ],
        },
      ];

      const METRIC_DATA: {title: string, description: string, src: string, alt: string}[]= [
        {
          title: 'Czas trwania',
          description: '90 minut',
          src: '/offer/metric/terapia/u_clock-five.svg',
          alt: 'ikona czas'
        },
        {
          title: 'Kontakt',
          description: 'W okresie przeprowadzania terapii jesteśmy w kontakcie z rodzicem',
          src: '/offer/metric/terapia/u_telegram-alt.svg',
          alt: 'ikona samolot z papieru'
        },
        {
          title: 'Nauka przez zabawę',
          description: 'Nasze zajęcia, w odróżnieniu od wielu tego typu programów, uczą przy jednocześnie mile spędzonym przez dziecko czasie',
          src: '/offer/metric/terapia/u_volleyball.svg',
          alt: 'ikona piłka'
        },
        {
          title: 'Szybka Interwencja',
          description: 'W przypadku problemów wymagających szybkiej interwencji służymy pomocą',
          src: '/offer/metric/terapia/u_fire.svg',
          alt: 'ikona ogień'
        },
        {
          title: 'Wspólne wizyty',
          description: 'Jeśli zachodzi potrzeba uczestnictwa rodzica w zajęciach, zapraszamy do wspólnej wizyty',
          src: '/offer/metric/terapia/u_eye.svg',
          alt: 'ikona oko'
        }
      ];
      

    return(
        <div>
            <div className={classes.subpageTopMargin}></div> 
            <OfferEntry 
                pageTitle="TERAPIA LOGOPEDYCZNA" 
                entryInformation="Terapia logopedyczna to zespół działań podejmowanych przez logopedów, dla których nadrzędnym zadaniem jest osiągnięcie zamierzonych celów logopedycznych. Czas terapii logopedycznej jest uzależniony od typu trudności oraz indywidualnej motywacji pacjenta. Pracujemy w oparciu o metody niedyrektywne, w zabawie i w relacji, z uwzględnieniem indywidualnych potrzeb każdej osoby. Terapia logopedyczna prowadzona jest z wykorzystaniem terapii miofunkcjonalnej. Logopeda/ neurologopeda prowadzi terapię holistycznie, ćwiczymy połykanie, pozycję spoczynkową języka oraz wykonujemy ćwiczenia normalizujące napięcie mięśniowe."
                photoSrc="/offer/Terapia_theme.png"/>
            <div className="flex justify-evenly">
                {LIST_DATA.map((item, index) => {
                    return(
                        <List
                            key={index}
                            title={item.title}
                            items={item.list}/>
                    )
                })}
            </div>
            <div className="flex gap-10">
                {METRIC_DATA.map((item, index) => {
                    return(
                        <div key={index} className="flex-1">
                          <Metric                              
                              src={item.src}
                              alt={item.alt}
                              title={item.title}
                              description={item.description}
                              />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}