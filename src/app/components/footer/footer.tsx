import classes from '../../page.module.css';
import classNames from 'classnames';

export default function Footer() {
    return (
        <footer className={classNames({['w-screen backdrop-filter backdrop-blur-sm bg-opacity-10  border border-t-white']: true, [classes.menuBarHeight]: true})}>

        </footer>
    )
}