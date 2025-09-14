import LandingPageButton from "@/app/components/landingPageButton/landingPageButton";
import Markup from "@/app/components/markup/markup";
import classNames from "classnames";

export default function LandingPageDescription({ title, description, href, buttonTitle, variant = 'left' }: { title?: string, description?: string, href?: string, buttonTitle?: string, variant?: string }) {

    return(
        <div className="w-1/2 flex items-center">
        <Markup variant={'left'} title={'oferta'} top={true} />
        <div className="flex flex-col px-5 sm:px-10 md:px-15 lg:px-20 2xl:px-25 gap-5 xl:gap-10 2xl:gap-15">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl 5xl:text-4xl font-thin italic">{title}</h2>
            <p className='text-xs md:text-sm xl:text-base'>{description}</p>
            <LandingPageButton href={href ?? '#'} title={buttonTitle ?? 'DOWIEDZ SIĘ WIĘCEJ'} variant={variant} />
        </div>
    </div>
    )
}