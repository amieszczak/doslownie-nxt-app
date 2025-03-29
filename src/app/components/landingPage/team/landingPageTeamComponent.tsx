import TitleSlider from "../titleSlider/titleSlider";
import Markup from "../../markup/markup";
import Image from "next/image";
import aboutImage from '../../../../../public/landingPage/about.png';

export default function LandingPageTeamComponent() {
    return(
        <>
            <TitleSlider slogan='Jesteśmy grupą specjalistek z misją'/>
            <div className="w-screen h-[75vh] relative flex justify-between">                  
                <Markup variant={'right'} title={'o nas'}/>
                <div className="w-1/2 flex items-center">     
                    <Image alt="zespół dosłownie" src={aboutImage}/>                          
                </div>
                <div className="w-1/2 flex items-center justify-center px-25">
                    <p>Nunc diam sapien, dapibus non molestie id, convallis sed ligula. Praesent dictum metus et est suscipit commodo. Fusce sollicitudin, turpis eget ullamcorper finibus, turpis enim efficitur eros, vitae lacinia quam urna at est. Aenean quis fringilla orci. Maecenas velit nisi, tincidunt eu rutrum sed, fermentum vel urna. Curabitur condimentum ac quam ac tempus. Suspendisse augue ligula, lacinia eu porttitor quis, euismod nec eros. Sed posuere arcu vitae erat mattis rhoncus. Integer id nibh libero. Morbi cursus, risus egestas commodo ornare, neque tortor aliquet quam, eget dictum metus turpis ac ligula. Nullam accumsan rutrum dui eget consectetur. Quisque et velit neque. Nunc ante erat, fermentum non venenatis et, pretium vel nisi.</p>
                </div>
            </div>
        </>        
    )
}