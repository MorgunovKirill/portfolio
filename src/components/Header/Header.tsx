import s from './Header.module.scss'
import Link from "next/link";
import {useRouter} from "next/router";
import clsx from "clsx";

export const Header = () => {
    const { asPath, locale, pathname, push, query } = useRouter()
    const isHomePage = pathname === '/'

    return (
    <header className={s.header}>
        <div className={clsx('container', s.container)}>
            <div className={s.logo}>Morgunov Kirill</div>
            <nav className={s.nav}>
                {isHomePage ? <span>Home</span> : <Link className={s.link} href={'/'}>Home</Link>}
                <Link className={s.link} href={'/about'}>About</Link>
                <a className={s.btn} href={'#contacts'}>Contact</a>
            </nav>
        </div>
    </header>
    )
}
