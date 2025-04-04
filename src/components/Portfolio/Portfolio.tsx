import clsx from "clsx";
import s from "./Portfolio.module.scss"
import {useTranslation} from "@/hooks/useTranslation";
import {PortfolioItem} from "./PortfolioItem";
import {useFetch} from "@/hooks/useFetch";
import {PortfolioType} from "@/utils/types";


export const Portfolio = () => {
    const t = useTranslation()
    const {data, error, isLoading} = useFetch<PortfolioType[]>('/api/getData');

    if (error) return <div>No data.</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!data) return null;

    return <div className={s.portfolio}>
        <div className={clsx('container')}>
            <h2 className={s.title}>{t.portfolio.title}</h2>
            <ul className={s.list}>
                {data.items.map((item, idx) => {
                    return <PortfolioItem {...item} key={idx} />
                })}
            </ul>
        </div>
    </div>
}
