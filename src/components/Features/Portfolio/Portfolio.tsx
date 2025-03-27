import clsx from "clsx";
import s from "./Portfolio.module.scss"
import {useTranslation} from "@/hooks/useTranslation";
import {PortfolioType} from "@/utils/types";
import {PortfolioItem} from "./PortfolioItem";

const items: PortfolioType[] = [
    {
        title: 'Interviews',
        description: 'Interviews app',
        imageSrc: '/interviews.png',
        type: 'Vue 3 Composition API',
        link: '/interviews'
    },
    {
        title: 'Hangman game',
        description: 'Hangman game app',
        imageSrc: '/hangman.png',
        type: 'Vue 3 Composition API',
        link: '/hangman'
    },
    {
        title: 'Cocktails',
        description: 'Cocktails app',
        imageSrc: '/cocktails.png',
        type: 'Vue 3 Composition API',
        link: '/cocktails'
    },
]

export const Portfolio = () => {
    const t = useTranslation()
    return (
        <div className={s.portfolio}>
            <div className={clsx('container')}>
                <h2 className={s.title}>{t.portfolio.title}</h2>
                <ul className={s.list}>
                    {items.map((item) => {
                        return <PortfolioItem {...item} />
                    })}
                </ul>
            </div>
        </div>
    )
}
