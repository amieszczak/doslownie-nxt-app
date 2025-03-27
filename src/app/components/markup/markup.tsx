import classNames from "classnames";

export default function Markup({variant, title}:{variant:string,  title: string}) { 
    return(
        <div className={classNames({['absolute top-0']:true, ['left-0']:variant == 'left', ['right-0']:variant == 'right'})}>
            <p className='base'>{title}</p>
        </div>
    )
}