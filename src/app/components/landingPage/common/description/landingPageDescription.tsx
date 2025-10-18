import LandingPageButton from "@/app/components/landingPageButton/landingPageButton";
import Markup from "@/app/components/markup/markup";

export default function LandingPageDescription({ title, description, href, buttonTitle, variant = 'left' }: { title?: string, description?: string, href?: string, buttonTitle?: string, variant?: string }) {
 
    return(
        <div className="sm:w-1/2 flex items-center">
            <div className="hidden sm:block">
                <Markup variant={'left'} title={'oferta'} top={true} />
            </div>
            <div className="flex flex-col px-5 sm:px-10 md:px-15 lg:px-20 2xl:px-25 gap-5 xl:gap-10 sm:-mb-10 pt-5 sm:pt-0">
                <h2 className="text-xl sm:text-lg md:text-xl lg:text-2xl 5xl:text-4xl font-regular sm:font-thin italic absolute top-16 right-0 sm:static z-10 text-white sm:text-black px-4 sm:px-0">{title}</h2>
                <div className="sm:max-h-[200px] md:max-h-[350px] xl:max-h-[250px] overflow-auto">
                    <p className='text-xs md:text-sm xl:text-base'>{description}</p>
                </div>
                <LandingPageButton href={href ?? '#'} title={buttonTitle ?? 'DOWIEDZ SIĘ WIĘCEJ'} variant={variant} />
            </div>
        </div>
    )
}