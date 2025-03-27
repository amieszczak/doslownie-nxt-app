import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import Markup from '../../markup/markup';

export default function LandingPageOffer() {


    const OFFER_CONTENT : Array<{title : string, description : string}> = [
        {title: 'Konsultacja logopedyczna', description: 'Konsultacja logopedyczna to spotkanie w celu skontrolowania mowy dziecka i zadania pytań terapeucie odnośnie jego rozwoju. Zostaje na niej przeprowadzony wywiad z rodzicem lub opiekunem oraz badanie dziecka. Jest to pierwszy krok przed rozpoczęciem terapii, który umożliwi wspólne omówienie dalszych działań.'},
        {title: 'Terapia logopedyczna', description: 'Terapia logopedyczna to zespół działań podejmowanych przez logopedów, dla których nadrzędnym zadaniem jest osiągnięcie zamierzonych celów logopedycznych. Czas terapii logopedycznej jest uzależniony od typu trudności oraz indywidualnej motywacji pacjenta. Pracujemy w oparciu o metody niedyrektywne, w zabawie i w relacji, z uwzględnieniem indywidualnych potrzeb każdej osoby. Terapia logopedyczna prowadzona jest z wykorzystaniem terapii miofunkcjonalnej.'},
        {title: 'Trening umiejętności społecznych', description: 'Trening Umiejętności Społecznej to zajęcia ogólnorozwojowe prowadzone w grupach kilkuosobowych. Udział dziecka w zajęciach poprzedzony jest diagnozą funkcjonowania emocjonalno-społecznego dziecka i wywiadem z Rodzicami. Zajęcia TUS mają na celu rozwinięcie kompetencji społecznych w tym rozpoznawania i reagowania na swoje i cudze emocje, dobrej komunikacji czy współpracy w grupie.'},
        {title: 'Terapia ręki', description: 'Terapia Ręki ma na celu usprawnianie tzw. małej motoryki, czyli precyzyjnych ruchów dłoni i palców, jak również dostarczania wrażeń dotykowych i poznawania dzięki nim różnych kształtów, struktur materiałów oraz nabywanie umiejętności ich rozróżniania. Przede wszystkim służy jednak do osiągnięcia samodzielności w podstawowych czynnościach życia codziennego.'},
    ]

    return(
        <div className="w-screen h-screen relative">
            <Markup variant={'right'} title={'oferta'}/>
            {/* <h1 className="absolute">Neurologopedia Dosłownie</h1> */}
            <div className="w-1/2">
                {OFFER_CONTENT.map((item, index) => {
                    return(
                        <p key={index}>{item.title}</p>
                    )
                })}
            </div>
        </div>
    )
}