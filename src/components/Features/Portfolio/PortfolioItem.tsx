import s from "./Portfolio.module.scss"
import {useTranslation} from "@/hooks/useTranslation";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ArrowIcon} from "@/assets/components";
import {PortfolioType} from "@/utils/types";

export const PortfolioItem = ({imageSrc, description, type, title, link}: PortfolioType) => {
    const t = useTranslation()
    return (
        <li className={s.item}>
            <div className={s.itemImage}>
                <img src={imageSrc} alt="project image"/>
            </div>
            <div className={s.itemInfo}>
                <div className={s.itemType}>{type}</div>
                <h3 className={s.itemTitle}>{title}</h3>
                <div className={s.itemDescription}>{description}
                </div>
                <Button as={Link} href={link} variant={'outlined'} className={s.itemLink}>
                    {t.portfolio.showMore}
                    <ArrowIcon />
                </Button>
            </div>
        </li>
    )
}
