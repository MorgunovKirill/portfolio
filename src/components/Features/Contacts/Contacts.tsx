import s from './Contacts.module.scss'
import {z} from 'zod'
import {LocaleType} from "@/locales/ru";
import {useTranslation} from "@/hooks/useTranslation";
import Socials from "@/components/Socials/Socials";
import clsx from "clsx";

export const sendEmailSchema = (t: LocaleType) => {
    return z.object({
        userName: z
            .string({ message: t.formErrors.required })
            .min(1, t.formErrors.required)
            .max(50, { message: t.formErrors.firstnameNoMoreThan50Characters })
            .regex(/^[A-Za-zА-Яа-я]+$/, {
                message: t.formErrors.firstNameMustContainOnlyLettersAZaz,
            }),
        email: z
            .string()
            .min(1, { message: t.formErrors.required })
            .email({ message: t.formErrors.invalidEmail }),
        message: z
            .string()
            .max(500, { message: t.formErrors.maxLength(500) })
            .optional(),
    })
}

export type sendEmailSchemaFormValues = z.infer<ReturnType<typeof sendEmailSchema>>


export const Contacts = () => {
    const t = useTranslation()
    // const { control, handleSubmit, reset } =
    //     useForm<sendEmailSchemaFormValues>({
    //         defaultValues: {
    //             userName: '',
    //             email: '',
    //             message: '',
    //         },
    //         resolver: zodResolver(sendEmailSchema(t)),
    //     })
    //
    // const handleSubmitHandler = async (data: sendEmailSchemaFormValues) => {
    //     console.log('data', data);
    // }

    return (
        <section id={'contacts'} >
            <div className={clsx(s.contacts, 'container')}>
                <div className={s.info}>
                    <h2 className={s.title}>{t.contacts.title}</h2>
                    <div className={s.text}>{t.contacts.opened}</div>
                    <div className={s.text}>
                        <span>{t.contacts.preferredTypeOfCommunication}</span>
                        <p>Telegram <a href="https://t.me/R0bur"
                                       aria-label={'telegram link'}
                                       target="_blank"
                                       rel="noopener noreferrer">@R0bur</a></p>
                    </div>
                    <Socials className={s.socials}/>
                </div>
                {/*<form onSubmit={handleSubmit(handleSubmitHandler)} className={s.form}>*/}
                {/*    <FormInput*/}
                {/*        containerClassName={s.input}*/}
                {/*        control={control}*/}
                {/*        placeholder={t.sendEmail.userName}*/}
                {/*        name={'userName'}*/}
                {/*        autoComplete={'off'}*/}
                {/*    />*/}
                {/*    <FormInput*/}
                {/*        containerClassName={s.input}*/}
                {/*        control={control}*/}
                {/*        placeholder={t.sendEmail.email}*/}
                {/*        name={'email'}*/}
                {/*        autoComplete={'off'}*/}
                {/*    />*/}
                {/*    <FormTextarea className={s.textarea} name={'message'} control={control}*/}
                {/*                  placeholder={t.sendEmail.message}/>*/}
                {/*    <Button className={s.btn} variant={'secondary'}>{t.sendEmail.submit}</Button>*/}
                {/*</form>*/}
            </div>
        </section>
)
}
