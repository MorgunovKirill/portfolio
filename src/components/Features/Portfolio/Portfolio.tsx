import clsx from "clsx";
import s from "./Portfolio.module.scss"
import {useTranslation} from "@/hooks/useTranslation";
import {PortfolioItem} from "@/components/Features/Portfolio/PortfolioItem";

export const Portfolio = () => {
    const t = useTranslation()
    return (
        <div className={s.portfolio}>
            <div className={clsx('container')}>
                <h2 className={s.title}>{t.portfolio.title}</h2>
                <ul className={s.list}>
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                </ul>
            </div>
        </div>
    )
}
