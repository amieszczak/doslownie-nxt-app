import LandingPageButton from "@/app/components/landingPageButton/landingPageButton";
import Markup from "@/app/components/markup/markup";
import classNames from "classnames";

export default function LandingPageDescription({ title, description, href, buttonTitle, variant = 'left' }: { title?: string, description?: string, href?: string, buttonTitle?: string, variant?: string }) {

    return(
        <div className="w-1/2 flex items-center">
        <Markup variant={'left'} title={'oferta'} top={true} />
        <div className="flex flex-col px-25 gap-15">
            <h2 className="text-base 5xl:text-4xl font-thin italic">{title}</h2>
            <p>{description}</p>
            <LandingPageButton href={href ?? '#'} title={buttonTitle ?? 'DOWIEDZ SIĘ WIĘCEJ'} variant={variant} />
        </div>
    </div>
    )
}