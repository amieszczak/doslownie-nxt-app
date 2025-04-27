import classNames from "classnames";

export default function LandingPageUnitTitle({title, variant}: {title: string, variant: string}) {
    
    let variantClass;

    switch(variant) {
        case 'right':
            variantClass='justify-end';
        break;
        default:        
            variantClass='justify-start';    
        break;
    }
    
    return(
        <div className={classNames({["h-[5vw] flex items-center"]:true, [variantClass]:true})}>
            <h2 className='text-5xl uppercase'>{title}</h2>        
        </div>        
    )
}