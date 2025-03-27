import clsx from "clsx";
import s from "./About.module.scss"
import {useTranslation} from "@/hooks/useTranslation";

export const About = () => {
    const t = useTranslation()
    return (
        <div id='stack' className={s.about}>
            <div className={clsx(s.container, 'container')}>
                <div className={s.info}>
                    <h2 className={s.title}>{t.about.title}</h2>
                    <div className={s.description}>{t.about.description}</div>
                </div>
                <ul className={s.list}>
                    <li className={s.item}>
                        <h3 className={s.subtitle}>{t.about.vue.title}</h3>
                        <div className={s.itemText}>
                            {t.about.vue.description}
                        </div>
                        <ul className={s.sublist}>
                            <li className={s.subitem}>Vue 3 Composition API</li>
                            <li className={s.subitem}>Pinia</li>
                            <li className={s.subitem}>Typescript</li>
                            <li className={s.subitem}>Rest API</li>
                            <li className={s.subitem}>Prime Vue, Element Plus</li>
                        </ul>
                    </li>
                    <li className={s.item}>
                        <h3 className={s.subtitle}>{t.about.react.title}</h3>
                        <div className={s.itemText}>
                            {t.about.react.description}
                        </div>
                        <ul className={s.sublist}>
                            <li className={s.subitem}>React</li>
                            <li className={s.subitem}>Redux Toolkit</li>
                            <li className={s.subitem}>Next.js</li>
                            <li className={s.subitem}>RTK query</li>
                            <li className={s.subitem}>React Hook Form</li>
                            <li className={s.subitem}>StoryBook</li>
                            <li className={s.subitem}>Radix, Material UI, Ant design</li>
                        </ul>
                    </li>
                    <li className={s.item}>
                        <h3 className={s.subtitle}>{t.about.laravel.title}</h3>
                        <div className={s.itemText}>
                            {t.about.laravel.description}
                        </div>
                        <ul className={s.sublist}>
                            <li className={s.subitem}>Laravel</li>
                            <li className={s.subitem}>PHP</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
