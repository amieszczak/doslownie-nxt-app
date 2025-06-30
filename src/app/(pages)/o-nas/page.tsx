import React from "react";
import classes from '../../page.module.css';
import Image from "next/image";

export default function ONasPage() {
    return(
        <div>
            <div className={classes.subpageTopMargin}></div>
            <div className='pt-25 pr-25'>     
                <h1 className='text-5xl'>Jesteśmy grupą specjalistek z <span>misją</span></h1>  
                <div className='h-full flex gap-25 items-center'>
                    <div className="h-full w-1/2 ">
                        <Image className="h-full w-full object-cover" src='/landingPage/about.png' alt="papużka zespół" width={896} height={695}/>
                    </div>                
                    <div className="w-1/2">
                        <p className="text-lg">
                            Nunc diam sapien, dapibus non molestie id, convallis sed ligula. Praesent dictum metus et est suscipit commodo. Fusce sollicitudin, turpis eget ullamcorper finibus, turpis enim efficitur eros, vitae lacinia quam urna at est. Aenean quis fringilla orci. Maecenas velit nisi, tincidunt eu rutrum sed, fermentum vel urna. Curabitur condimentum ac quam ac tempus. Suspendisse augue ligula, lacinia eu porttitor quis, euismod nec eros. Sed posuere arcu vitae erat mattis rhoncus. Integer id nibh libero. Morbi cursus, risus egestas commodo ornare, neque tortor aliquet quam, eget dictum metus turpis ac ligula. Nullam accumsan rutrum dui eget consectetur. Quisque et velit neque. Nunc ante erat, fermentum non venenatis et, pretium vel nisi. 
                        </p>
                    </div>
                </div>
            </div>
        </div>        
    )
}