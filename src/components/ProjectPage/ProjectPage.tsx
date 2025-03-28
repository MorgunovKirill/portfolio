import React from "react";
import s from './ProjectPage.module.scss'
import clsx from "clsx";
import {PortfolioType} from "@/utils/types";
import {useTranslation} from "@/hooks/useTranslation";

const ProjectPage = ({
                         title,
                         imageSrc,
                         type,
                         category,
                         longDescription,
                         technologiesList,
                         deployLink
                     }: PortfolioType) => {
    const t = useTranslation()

    return (
        <div className={s.wrapper}>
            <div className={clsx('container')}>
                <h1 className={s.title}>{t.projects.description}: {title}</h1>
                <div className={s.container}>
                    <div className={s.img}>
                        <img src={imageSrc} alt="image"/>
                    </div>
                    <div className={s.info}>
                        <p className={s.type}>
                            <span>{t.projects.category}:</span> {category}
                        </p>
                        <p className={s.type}>
                            <span>{t.projects.framework}:</span> {type}
                        </p>
                        <ul className={s.technologiesList}>
                            {
                                technologiesList.map((item, key) => {
                                    return <li className={s.technologiesItem} key={key}>{item}</li>
                                })
                            }
                        </ul>
                        <h2 className={s.heading}>{t.projects.description2}</h2>
                        <p>{longDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage
