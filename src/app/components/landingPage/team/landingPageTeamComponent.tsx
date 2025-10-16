import Markup from "../../markup/markup";
import Image from "next/image";
import aboutImage from '../../../../../public/landingPage/about.png';
import LandingPageUnitTitle from "../unitTitle/landingPageUnitTitle";
import LandingPageButton from "../../landingPageButton/landingPageButton";
import styles from '../../../page.module.css';
import classNames from "classnames";

export default function LandingPageTeamComponent() {
    return(
        <div className="bg-white">                        
            <div className={classNames({["w-screen sm:h-[50vh] md:h-[75vh] relative flex flex-col sm:flex-row justify-between"]: true, [styles.pageMaxWidth]: true})}>                                  
                <div className="hidden sm:block">
                    <Markup variant={'right'} title={'zespół'} top={true}/>
                </div>
                <div className="sm:w-1/2 h-[35vh] sm:h-full overflow-hidden">     
                    <LandingPageUnitTitle title='POZNAJ NASZ ZESPÓŁ' mobileTitle='ZESPÓŁ' additionalCssClass="justify-end" borderPosition='left'/>
                    <Image alt="zespół dosłownie" src={aboutImage} className='w-full h-full object-cover'/>                          
                </div>
                <div className="sm:w-1/2 flex flex-col items-center justify-center gap-5 xl:gap-10 2xl:gap-15 px-5 sm:px-10 md:px-15 lg:px-20 2xl:px-25 pt-5 sm:pt-0 md:pt-5">
                    <div className="overflow-auto sm:mt-16 sm:max-h-[250px] md:mt-8 md:max-h-none">
                        <p className='text-xs md:text-sm xl:text-base'>Nunc diam sapien, dapibus non molestie id, convallis sed ligula. Praesent dictum metus et est suscipit commodo. Fusce sollicitudin, turpis eget ullamcorper finibus, turpis enim efficitur eros, vitae lacinia quam urna at est. Aenean quis fringilla orci. Maecenas velit nisi, tincidunt eu rutrum sed, fermentum vel urna. Curabitur condimentum ac quam ac tempus. Suspendisse augue ligula, lacinia eu porttitor quis, euismod nec eros. Sed posuere arcu vitae erat mattis rhoncus. Integer id nibh libero. Morbi cursus, risus egestas commodo ornare, neque tortor aliquet quam, eget dictum metus turpis ac ligula. Nullam accumsan rutrum dui eget consectetur. Quisque et velit neque. Nunc ante erat, fermentum non venenatis et, pretium vel nisi.</p>
                    </div>
                    <LandingPageButton href={'/kontakt'} title={'dowiedz się więcej'} variant={''}/>
                </div>
            </div>
        </div>        
    )
}