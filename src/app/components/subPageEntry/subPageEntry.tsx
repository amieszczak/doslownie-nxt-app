import classes from '../../page.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import samplePhoto from '../../../../public/subPagesThemes/Konsultacja_theme.png'

export default function SubPageEntry() {
    return (
        <div className={classNames({[classes.subpageUnitHeight]: true, ['flex']:true})}>
            <div className={classNames({['w-1/2 h-full']:true})}></div>
            <div className={classNames({['w-1/2 h-full']:true})}>
                <Image src={samplePhoto} alt='zdjęcie motywu' className='w-full h-full object-cover'/>
            </div>
        </div>
    )
}