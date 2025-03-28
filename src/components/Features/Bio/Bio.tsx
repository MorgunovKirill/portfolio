import s from './Bio.module.scss'
import Image from "next/image";
import {useTranslation} from "@/hooks/useTranslation";
import Socials from "@/components/Socials/Socials";
import clsx from "clsx";

export const Bio = () => {
    const t = useTranslation()

    return (
        <section>
            <div className={clsx(s.bio, 'container')}>
                <div className={s.info}>
                    <h1 className={s.title}>
                        {t.bio.title}
                    </h1>
                    <p className={s.description}>
                        {t.bio.description}
                    </p>
                    <p className={s.description}>
                        {t.bio.description2}
                    </p>
                    <a
                        className={s.btn}
                        href={'/kirillmorgunov.pdf'}
                        download={'kirillmorgunov.pdf'}
                    >
                        {t.bio.download}
                    </a>
                    <div className={s.features}>
                        <div className={s.feature}>
                            <span className={s.featureValue}>4 {t.bio.years}</span>
                            <span className={s.featureTitle}>{t.bio.experience}</span>
                        </div>
                    </div>
                </div>
                <div className={s.photoBlock}>
                    <Image className={s.photo} src={'/mainphoto.jpg'} alt={'my photo'} width={536} height={636}/>
                    <Socials className={s.socials}/>
                </div>
            </div>
        </section>
    )
}
