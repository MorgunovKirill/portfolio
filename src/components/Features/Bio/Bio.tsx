import s from './Bio.module.scss'
import {Button} from "@/components/ui/button";
import Image from "next/image";

export const Bio = () => {
    return (
        <section className={s.bio}>
            <div className={s.info}>
                <h1 className={s.title}>
                    Hello, I’m
                    Kirill Morgunov
                </h1>
                <p className={s.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi culpa dolor eos error
                    excepturi
                    expedita hic inventore molestiae mollitia nisi odit omnis perferendis reprehenderit, rerum
                    sed
                    sunt
                    totam, ullam veniam!
                </p>
                <Button
                    className={s.btn}
                    variant={'primary'}
                >
                    Download CV
                </Button>
                <div className={s.features}>
                    <div className={s.feature}>
                        <span className={s.featureValue}>4 Y</span>
                        <span className={s.featureTitle}>Experience</span>
                    </div>
                </div>
            </div>
            <div className={s.photoBlock}>
                <Image className={s.photo} src={'/mainphoto.jpg'} alt={'my photo'} width={536} height={636}/>
            </div>
        </section>
    )
}
