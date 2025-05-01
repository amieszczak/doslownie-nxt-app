
export default function LandingPageUnitTitle({title, additionalCssClass = 'justify-start'}: {title: string, additionalCssClass?: string}) {
    

    return(
        <div className={`h-[5vw] flex items-center ${additionalCssClass}`}>  
            <h2 className='text-5xl uppercase'>{title}</h2>        
        </div>  
    )
}
