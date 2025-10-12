
export default function LandingPageUnitTitle({title, additionalCssClass = 'justify-start'}: {title: string, additionalCssClass?: string}) {
    

    return(
        <div className={`h-[10vw] sm:h-[5vw] flex items-center ${additionalCssClass}`}>  
            <h2 className='text-xl sm:text-lg md:text-xl lg:text-3xl 2xl:text-5xl uppercase px-4 sm:px-0 border-r border-black sm:border-r-0 pr-4 sm:pr-0'>
                <span className="sm:hidden">OFERTA</span>
                <span className="hidden sm:inline">{title}</span>
            </h2>        
        </div>  
    )
}
