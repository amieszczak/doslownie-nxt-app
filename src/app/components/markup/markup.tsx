import classNames from "classnames";

export default function Markup({variant, title, top}:{variant:string,  title: string, top: boolean}) { 
    return(
        <div className={classNames({['absolute top-0 border border-black w-15 sm:w-20 md:w-25 h-5 sm:h-7 md:h-10 flex items-center justify-center']:true, ['left-0 rounded-tr-sm rounded-br-sm']:variant == 'left', ['right-0 rounded-tl-sm rounded-bl-sm']:variant == 'right', ['top-[5vw]']: top})}>
            <p className='sm:text-lg md:text-xl'>{title}</p>
        </div>
    )
}