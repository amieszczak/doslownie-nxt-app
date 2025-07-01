'use client';
import Markup from "../../markup/markup";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { useState } from "react";
import LandingPageUnitTitle from "../unitTitle/landingPageUnitTitle";
import LandingPageButton from "../../landingPageButton/landingPageButton";

export default function LandingPageSpecialistsComponent() {

    const [specialistId, setSpecialistId] = useState(1);

    const SPECIALISTS_DATA: Array<{id : number, name : string, description: string, photoSrc: string}> = [
        {id: 1, name: 'Magdalena Żabska', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis ante porta nisl molestie commodo. Phasellus sed lectus dictum, iaculis lectus id, laoreet quam. Donec tempor tincidunt tortor in commodo. Ut bibendum maximus nisl ac pretium. Integer vitae consectetur erat. Donec et vehicula nibh. Cras euismod lacus leo, quis fringilla sapien bibendum nec. Nam ultrices, turpis rutrum fermentum aliquam, nunc nulla tristique mi, nec consectetur ipsum arcu ut massa. Aenean quis arcu eu nibh pulvinar pretium ac eget tortor. Suspendisse a odio at odio pretium euismod dignissim ac eros.', photoSrc: '/specialists/magda.png'},
        {id: 2, name: 'Izabela Filarska', description: 'Sed vel lacus at sem pellentesque porta. Praesent bibendum sem vitae nulla ullamcorper tristique. Suspendisse nisi massa, pellentesque interdum ultricies sit amet, efficitur eget justo. Fusce vestibulum, ex quis molestie venenatis, ligula orci fringilla elit, ut tincidunt est justo vel nisi. Donec gravida felis eu dolor laoreet, at placerat mi mattis. Curabitur eleifend magna eu tristique ultrices. In quis molestie tortor. Integer nec tempor ante. In velit leo, laoreet quis libero sed, congue hendrerit enim. Praesent efficitur eget velit ac finibus. Nunc at erat sit amet lorem finibus imperdiet. Nullam dui diam, molestie et orci ut, gravida mattis sapien. Maecenas purus diam, convallis nec hendrerit in, eleifend non nulla. Cras sit amet tristique elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse accumsan tempus varius.', photoSrc: '/specialists/iza.jpg'},
        {id: 3, name: 'Angelika Łubińska', description: 'Duis vestibulum pharetra erat, eu pretium augue convallis at. Curabitur ac enim porttitor, sollicitudin ipsum id, vulputate odio. Donec commodo ex mi. Praesent sed risus dictum, faucibus libero quis, dignissim dui. Donec feugiat fermentum lectus, sit amet elementum mauris sagittis non. Aenean semper tempor nunc non sagittis. Pellentesque pulvinar felis quis ex luctus, nec dapibus ipsum malesuada. Duis ut nisi nunc. Proin dapibus vitae nulla id viverra. Nam rhoncus suscipit pretium.', photoSrc: '/specialists/angelika.jpg'},
        {id: 4, name: 'Natalia Kupiec', description: 'Fusce vitae congue erat, vel commodo turpis. Vivamus sed diam at ligula euismod faucibus vehicula vitae arcu. Nullam luctus sagittis elementum. Mauris pharetra quis diam at venenatis. Vestibulum ultrices vel purus eget tempus. Vivamus nisi erat, vehicula sit amet egestas eget, lacinia pellentesque justo. Sed malesuada dui vel quam scelerisque, non rutrum ante condimentum. Integer blandit diam tortor, non lacinia metus euismod eget. Morbi non erat magna. Etiam pretium vel purus eu hendrerit.', photoSrc: '/specialists/natalia.png'},
    ]

    const currentElement = SPECIALISTS_DATA.find(item => item.id == specialistId);

    return(
        <div className="bg-white">
            <div className="w-screen h-[75vh] relative flex justify-between">                                  
                <Markup variant={'left'} title={'o nas'} top={true}/>                
                <div className="w-1/2 flex  flex-col justify-center px-25 gap-15">
                    <h2 className="text-4xl font-thin italic">{currentElement && currentElement.name}</h2>
                    <p>{currentElement && currentElement.description}</p>
                    <LandingPageButton href={'o-nas'} title={'dowiedz się więcej'} variant={'right'}/>
                </div>
                <div className="w-1/2 overflow-hidden">     
                <LandingPageUnitTitle title="nasze terapeutki mowy"/>
                <Swiper
                    className="h-full"
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                    }}
                    centeredSlides= {true}
                    onActiveIndexChange={(swiper) => setSpecialistId(swiper.realIndex + 1)}
                    >
                         {SPECIALISTS_DATA.map((item, index) => {
                            return (
                            <SwiperSlide key={index}>
                                <Image                                                      
                                src={item.photoSrc}
                                className='w-full h-full object-cover'
                                width={1000}
                                height={737}
                                alt={item.name}
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