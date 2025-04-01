import clsx from "clsx";
import s from "./Portfolio.module.scss"
import {useTranslation} from "@/hooks/useTranslation";
import {PortfolioItem} from "./PortfolioItem";
import {PortfolioType} from "@/utils/types";

type Props = {
    items: PortfolioType[]
}

export const Portfolio = ({items}: Props) => {
    const t = useTranslation()
    return (
        <div className={s.portfolio}>
            <div className={clsx('container')}>
                <h2 className={s.title}>{t.portfolio.title}</h2>
                <ul className={s.list}>
                    {items.map((item, idx) => {
                        return <PortfolioItem {...item} key={idx} />
                    })}
                </ul>
            </div>
        </div>
    )
}
