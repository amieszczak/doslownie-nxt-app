
export default function LandingPageUnitTitle({title, additionalCssClass = 'justify-start'}: {title: string, additionalCssClass?: string}) {
    

    return(
        <div className={`h-[5vw] flex items-center ${additionalCssClass}`}>  
            <h2 className='text-base sm:text-lg md:text-xl lg:text-3xl 2xl:text-5xl uppercase'>{title}</h2>        
        </div>  
    )
}
