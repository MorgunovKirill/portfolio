import s from './Header.module.scss'
import Link from "next/link";
import {useRouter} from "next/router";
import clsx from "clsx";
import {Select} from "antd";
import React, {MouseEventHandler, useEffect} from "react";
import {useTranslation} from "@/hooks/useTranslation";

export const Header = () => {
    const t = useTranslation()
    const {asPath, locale, pathname, push, query} = useRouter()
    const isHomePage = pathname === '/'
    let storageLocale

    useEffect(() => {
        storageLocale = localStorage.getItem('currentLocale')
        if (storageLocale) {
            const locale = JSON.parse(storageLocale)
            void push(asPath, asPath, {locale})
        } else {
            localStorage.setItem('currentLocale', JSON.stringify(locale))
        }
    }, [])

    const localeChangeHandler = (newLocale: string) => {
        localStorage.setItem('currentLocale', JSON.stringify(newLocale))
        push({pathname, query}, asPath, {locale: newLocale})
    }

    const logoClickHandler = () => {
        push('/')
    }

    return (
        <header className={s.header}>
            <div className={clsx('container', s.container)}>
                <div className={s.logo}>
                    {isHomePage ?
                        <span> {t.bio.name}</span>
                        : <button className={s.logoButton} type={'button'} onClick={logoClickHandler}>{t.bio.name}</button>
                    }
                </div>
                <Select
                    defaultValue={storageLocale ? JSON.parse(storageLocale) : 'ru'}
                    style={{width: 120}}
                    onChange={localeChangeHandler}
                    options={[
                        {value: 'en', label: t.english},
                        {value: 'ru', label: t.russian},
                    ]}
                />
                {isHomePage && <nav className={s.nav}>
                    <a className={s.link} href={'#stack'}>{t.header.stack}</a>
                    <a className={s.btn} href={'#contacts'}>{t.header.contact}</a>
                </nav>
                }
            </div>
        </header>
    )
}
