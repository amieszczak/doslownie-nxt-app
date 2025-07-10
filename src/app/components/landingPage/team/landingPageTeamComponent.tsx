import Markup from "../../markup/markup";
import Image from "next/image";
import aboutImage from '../../../../../public/landingPage/about.png';
import LandingPageUnitTitle from "../unitTitle/landingPageUnitTitle";
import LandingPageButton from "../../landingPageButton/landingPageButton";

export default function LandingPageTeamComponent() {
    return(
        <div className="bg-white">                        
            <div className="w-screen h-[75vh] relative flex justify-between">                                  
                <Markup variant={'right'} title={'zespół'} top={true}/>
                <div className="w-1/2 overflow-hidden">     
                    <LandingPageUnitTitle title='poznaj nasz zespół' additionalCssClass="justify-end"/>
                    <Image alt="zespół dosłownie" src={aboutImage} className='w-full h-full object-cover'/>                          
                </div>
                <div className="w-1/2 flex flex-col items-center justify-center gap-15 px-25">
                    <p>Nunc diam sapien, dapibus non molestie id, convallis sed ligula. Praesent dictum metus et est suscipit commodo. Fusce sollicitudin, turpis eget ullamcorper finibus, turpis enim efficitur eros, vitae lacinia quam urna at est. Aenean quis fringilla orci. Maecenas velit nisi, tincidunt eu rutrum sed, fermentum vel urna. Curabitur condimentum ac quam ac tempus. Suspendisse augue ligula, lacinia eu porttitor quis, euismod nec eros. Sed posuere arcu vitae erat mattis rhoncus. Integer id nibh libero. Morbi cursus, risus egestas commodo ornare, neque tortor aliquet quam, eget dictum metus turpis ac ligula. Nullam accumsan rutrum dui eget consectetur. Quisque et velit neque. Nunc ante erat, fermentum non venenatis et, pretium vel nisi.</p>
                    <LandingPageButton href={'/kontakt'} title={'dowiedz się więcej'} variant={''}/>
                </div>
            </div>
        </div>        
    )
}