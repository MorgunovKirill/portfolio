import s from "./Portfolio.module.scss"
import {useTranslation} from "@/hooks/useTranslation";
import Link from "next/link";
import clsx from "clsx";
import {Button} from "@/components/ui/button";

export const PortfolioItem = () => {
    const t = useTranslation()
    return (
        <li className={s.item}>
            <div className={s.itemImage}>
                <img src="/placeholder.jpg" alt="project image"/>
            </div>
            <div className={s.itemInfo}>
                <div className={s.itemType}>Vue 3 project</div>
                <h3 className={s.itemTitle}>Title</h3>
                <div className={s.itemDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
                <Button as={Link} href={'#'} variant={'outlined'} className={s.itemLink}>Подробнее</Button>
            </div>
        </li>
    )
}
