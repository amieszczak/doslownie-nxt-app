import React from "react";
import classes from '../../../page.module.css';
import OfferEntry from "@/app/components/offer/entry";
import List from "@/app/components/offer/list";

export default function KonsultacjaPage() {

    const ITEMS: string[] = [
        'w wieku 6. miesięcy nie gaworzy',
        'po ukończeniu 1 roku życia nie wypowiada sylab oraz pojedynczych słów',
        'podejrzewasz, że nie rozumie wydawanych przez Ciebie poleceń',
        'w wieku 2 lat nie mówi prostych słów np. mama, baba, tata, dada',
        'między 2. a 3. rokiem życia nie wypowiada prostych zdań',
        'w wieku 3 lat nie wymawia którejkolwiek z samogłosek ustnych: a, o, e, i, y',
        'w wieku 4 lat nie potrafi opowiedzieć historyjki obrazkowej, wypowiada proste słowa lub równoważniki zdań, zniekształca wyrazy, nie wypowiad głosek:k, g, l, ś, ź, ć, dź, s, z, c, dz, gdy zamiast głoski f, w, wymawia p, b, h,zamienia g na k, oraz zamiast r mówi j',
        'między 5. a 6. rokiem życia nie wypowiada następujących głosek:l, s, z, c, dz, ś, ź, ć, dź, k, g, ą, ę oraz gdy przestawia sylaby w obrębie wyrazu, lub skraca wyrazy.'
    ]

    return(
        <div>
            <div className={classes.subpageTopMargin}></div> 
            <OfferEntry 
                pageTitle="KONSULTACJA LOGOPEDYCZNA" 
                entryInformation="Konsultacja logopedyczna to spotkanie w celu skontrolowania mowy dziecka i zadania pytań terapeucie odnośnie jego rozwoju. Zostaje na niej przeprowadzony wywiad z rodzicem lub opiekunem oraz badanie dziecka. Jest to pierwszy krok przed rozpoczęciem terapii, który umożliwi wspólne omówienie dalszych działań"
                photoSrc="/offer/Konsultacja_theme.png"/>
            <List 
                title="Rodzicu! Niezwłocznie udaj się do logopedy, jeśli Twoje dziecko:"
                items={ITEMS}
                />
            <section className='flex flex-col items-center px-25'>
                <h2 className='text-3xl'>Przebieg konsultacji logopedycznej</h2>
                <p className='text-lg leading-loose mt-10'>Najważniejszą częścią konsultacji logopedycznej jest wywiad. W przypadku dziecka jest to wywiad z rodzicem. Logopeda będzie pytał m.in. o choroby matki w ciąży, przebieg ciąży i porodu, zdrowie dziecka, sposób karmienia dziecka, przebieg rozwoju psychoruchowego dziecka, rozwój mowy oraz czy w rodzinie dziecka występują wady wymowy. Wywiad jest konieczny, żeby pomóc logopedzie określić przyczynę wady wymowy i opracować skuteczny plan terapii. Kolejnymi etapami konsultacji jest badanie mowy i umiejętności komunikacyjnych. Forma badania jest dostosowana do wieku badanego. Na jego podstawie logopeda wstępnie oceni umiejętności nawiązywania kontaktów przez dziecko, sprawność aparatu artykulacyjnego, sposób artykulacji, zasób słownictwa i umiejętność formułowania wypowiedzi. W przypadku dzieci szkolnych logopeda sprawdzi też, czy ewentualna wada wymowy wpływa na umiejętności czytania i pisania. W razie potrzeby zostaną przeprowadzone badania uzupełniające. Podczas trwania konsultacji logopedycznej przez cały czas prowadzona jest obserwacja dziecka.</p>
            </section>
        </div>
    )
}