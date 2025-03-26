import s from './Skills.module.scss'
import {useTranslation} from "@/hooks/useTranslation";
import clsx from "clsx";

export const Skills = () => {
    const t = useTranslation()

    return (
        <section>
            <div className={clsx(s.skills, 'container')}>
                <h2 className={s.title}>{t.skills.title}</h2>
                <ul className={s.list}>
                    <li className={s.item}>
                        <img src="/icons/vue.svg" alt="vue"/>
                    </li>
                    <li className={s.item}>
                        <img src="/icons/pinia.svg" alt="pinia"/>
                    </li>
                    <li className={s.item}>
                        <img src="/icons/ts.svg"  alt="ts"/>
                    </li>
                    <li className={s.item}>
                        <img src="/icons/js.svg" alt="js."/>
                    </li>
                    <li className={s.item}>
                        <img src="/icons/react.svg" alt="react"/>
                    </li>
                    <li className={s.item}>
                        <img src="/icons/redux.svg" alt="redux"/>
                    </li>
                    <li className={s.item}>
                        <img src="/icons/next.svg" style={{width: '80%'}} alt="next"/>
                    </li>
                    <li className={s.item}>
                        <img src="/icons/css.svg" style={{width: '80%'}} alt="css"/>
                    </li>
                    <li className={s.item}>
                        <img src="/icons/node.svg" style={{width: '80%'}} alt="node"/>
                    </li>
                    <li className={s.item}>
                        <img src="/icons/figma.svg" style={{width: '30%'}} alt="figma"/>
                    </li>
                </ul>
            </div>
        </section>
    )
}
