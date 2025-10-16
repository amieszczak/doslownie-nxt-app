
import classNames from 'classnames';

export default function LandingPageUnitTitle({title, mobileTitle, additionalCssClass = 'justify-start', borderPosition = 'left'}: {title: string, mobileTitle?: string, additionalCssClass?: string, borderPosition?: 'left' | 'right'}) {
    

    return(
        <div className={`h-[10vw] sm:h-[5vw] flex items-center ${additionalCssClass}`}>  
            <h2 className={classNames({
                'text-xl sm:text-lg md:text-xl lg:text-3xl 2xl:text-5xl uppercase px-4 sm:px-0 pr-4 sm:pr-0': true,
                'border-r border-black sm:border-r-0': borderPosition === 'right',
                'border-l border-black sm:border-l-0 pl-4 sm:pl-0': borderPosition === 'left'
            })}>
                <span className="sm:hidden">{mobileTitle || title}</span>
                <span className="hidden sm:inline">{title}</span>
            </h2>        
        </div>  
    )
}
