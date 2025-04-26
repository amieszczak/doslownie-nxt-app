import classNames from "classnames";

export default function LandingPageUnitTitle({title, variant}: {title: string, variant: string}) {
    
    let variantClass;

    switch(variant) {
        case 'right':
            variantClass='text-right';
        break;
        default:        
            variantClass='text-left';    
        break;
    }
    
    return(
        <h2 className={classNames(variantClass, 'text-5xl uppercase')}>{title}</h2>        
    )
}

{/* <h2 className={classNames({[variantClass]:true, ['text-5xl']:true})}>{title}</h2> */}