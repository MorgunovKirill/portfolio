import React from "react";
import s from './ProjectPage.module.scss'
import clsx from "clsx";
import {PortfolioType} from "@/utils/types";

const ProjectPage = ({
                         title,
                         imageSrc,
                         type,
                         category,
                         longDescription,
                         technologiesList,
                         deployLink
                     }: PortfolioType) => {
    return (
        <div className={s.wrapper}>
            <div className={clsx('container')}>
                <h1 className={s.title}>Описание проекта: {title}</h1>
                <div className={s.container}>
                    <div className={s.img}>
                        <img src={imageSrc} alt="image"/>
                    </div>
                    <div className={s.info}>
                        <p className={s.type}>
                            <span>Category:</span> {category}
                        </p>
                        <p className={s.type}>
                            <span>Framework:</span> {type}
                        </p>
                        <ul className={s.technologiesList}>
                            {
                                technologiesList.map((item, key) => {
                                    return <li className={s.technologiesItem} key={key}>{item}</li>
                                })
                            }
                        </ul>
                        <h2 className={s.heading}>Description</h2>
                        <p>{longDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage
