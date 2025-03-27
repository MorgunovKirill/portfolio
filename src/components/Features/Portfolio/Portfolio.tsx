import clsx from "clsx";
import s from "./Portfolio.module.scss"
import {useTranslation} from "@/hooks/useTranslation";
import {PortfolioItem} from "./PortfolioItem";
import {items} from "@/data/data";

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
