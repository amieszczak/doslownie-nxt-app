'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import styles from './landingPageOffer.module.css';
import Markup from '../../markup/markup';
import { useState } from 'react';
import Image from 'next/image';
import LandingPageUnitTitle from '../unitTitle/landingPageUnitTitle';
import LandingPageButton from '../../landingPageButton/landingPageButton';

export default function LandingPageOffer() {

    const [offerId, setOfferId] = useState(1);


    const OFFER_CONTENT : Array<{id: number, title : string, description : string, photoSrc : string}> = [
        {id: 1, title: 'Konsultacja logopedyczna', description: 'Konsultacja logopedyczna to spotkanie w celu skontrolowania mowy dziecka i zadania pytań terapeucie odnośnie jego rozwoju. Zostaje na niej przeprowadzony wywiad z rodzicem lub opiekunem oraz badanie dziecka. Jest to pierwszy krok przed rozpoczęciem terapii, który umożliwi wspólne omówienie dalszych działań.', photoSrc: '/offer/Konsultacja_theme.png'},
        {id: 2, title: 'Terapia logopedyczna', description: 'Terapia logopedyczna to zespół działań podejmowanych przez logopedów, dla których nadrzędnym zadaniem jest osiągnięcie zamierzonych celów logopedycznych. Czas terapii logopedycznej jest uzależniony od typu trudności oraz indywidualnej motywacji pacjenta. Pracujemy w oparciu o metody niedyrektywne, w zabawie i w relacji, z uwzględnieniem indywidualnych potrzeb każdej osoby. Terapia logopedyczna prowadzona jest z wykorzystaniem terapii miofunkcjonalnej.', photoSrc: '/offer/Terapia_theme.png'},
        {id: 3, title: 'Trening umiejętności społecznych', description: 'Trening Umiejętności Społecznej to zajęcia ogólnorozwojowe prowadzone w grupach kilkuosobowych. Udział dziecka w zajęciach poprzedzony jest diagnozą funkcjonowania emocjonalno-społecznego dziecka i wywiadem z Rodzicami. Zajęcia TUS mają na celu rozwinięcie kompetencji społecznych w tym rozpoznawania i reagowania na swoje i cudze emocje, dobrej komunikacji czy współpracy w grupie.', photoSrc: '/offer/Tus_theme.png'},
        {id: 4, title: 'Terapia ręki', description: 'Terapia Ręki ma na celu usprawnianie tzw. małej motoryki, czyli precyzyjnych ruchów dłoni i palców, jak również dostarczania wrażeń dotykowych i poznawania dzięki nim różnych kształtów, struktur materiałów oraz nabywanie umiejętności ich rozróżniania. Przede wszystkim służy jednak do osiągnięcia samodzielności w podstawowych czynnościach życia codziennego.', photoSrc: '/offer/Terapia_reki_theme.png'},
    ]

    const currentElement = OFFER_CONTENT.find(item => item.id == offerId);

    return(
        <div id="offer" className="bg-white">
            <div className="w-screen h-[75vh] relative flex justify-between">                  
                <div className="w-1/2 flex items-center">
                    <Markup variant={'left'} title={'oferta'} top={true}/>
                    <div className="flex flex-col px-25 gap-15">
                        <h2 className="text-4xl font-thin italic">{currentElement && currentElement.title}</h2>               
                        <p >{currentElement && currentElement.description}</p>
                        <LandingPageButton href={'/oferta'} title={"dowiedz się więcej"} variant={'right'}/>
                    </div>            
                </div>
                <div className="w-1/2 overflow-hidden">
                    <LandingPageUnitTitle title={'Oferta dosłownie'} />
                    <Swiper
                    className="h-full"
                    modules={[Autoplay, Pagination]}                    
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                    }}                    

                    onActiveIndexChange={(swiper) => setOfferId(swiper.realIndex + 1)}
                    >                        
                        {OFFER_CONTENT.map((item, index) => {
                            return (
                            <SwiperSlide key={index}>
                                <Image                      
                                src={item.photoSrc}
                                className={styles.photo}
                                width={1000}
                                height={737}
                                alt={item.title}
                                />
                            </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </div>        
    )
}