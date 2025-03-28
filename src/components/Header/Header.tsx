import s from './Header.module.scss'
import Link from "next/link";
import {useRouter} from "next/router";
import clsx from "clsx";
import {Select} from "antd";
import React, {useEffect} from "react";
import {useTranslation} from "@/hooks/useTranslation";

export const Header = () => {
    const t = useTranslation()
    const { asPath, locale, pathname, push, query } = useRouter()
    const isHomePage = pathname === '/'
    let storageLocale

    useEffect(() => {
        storageLocale = localStorage.getItem('currentLocale')
        if (storageLocale) {
            const locale = JSON.parse(storageLocale)

            console.log('storageLocale', storageLocale)

            void push(asPath, asPath, { locale })
        } else {
            localStorage.setItem('currentLocale', JSON.stringify(locale))
        }
    }, [])

    const localeChangeHandler = (newLocale: string) => {
        localStorage.setItem('currentLocale', JSON.stringify(newLocale))
        push({ pathname, query }, asPath, { locale: newLocale })
    }

    return (
        <header className={s.header}>
            <div className={clsx('container', s.container)}>
                <div className={s.logo}>{t.bio.name}</div>
                <Select
                    defaultValue={storageLocale ? JSON.parse(storageLocale) : 'ru'}
                    style={{ width: 120 }}
                    onChange={localeChangeHandler}
                    options={[
                        { value: 'en', label: t.english },
                        { value: 'ru', label: t.russian },
                    ]}
                />
                <nav className={s.nav}>
                    {!isHomePage && <Link className={s.link} href={'/'}>{t.header.home}</Link>}
                    <a className={s.link} href={'#stack'}>{t.header.stack}</a>
                    <a className={s.btn} href={'#contacts'}>{t.header.contact}</a>
                </nav>
            </div>
        </header>
    )
}
