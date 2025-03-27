import s from './Header.module.scss'
import Link from "next/link";
import {useRouter} from "next/router";
import clsx from "clsx";

export const Header = () => {
    const { pathname } = useRouter()
    const isHomePage = pathname === '/'

    return (
    <header className={s.header}>
        <div className={clsx('container', s.container)}>
            <div className={s.logo}>Morgunov Kirill</div>
            <nav className={s.nav}>
                {!isHomePage && <Link className={s.link} href={'/'}>Home</Link>}
                <a className={s.link} href={'#stack'}>Stack</a>
                <a className={s.btn} href={'#contacts'}>Contact</a>
            </nav>
        </div>
    </header>
    )
}
