import {pluralizeRu} from '@/utils/createPluralize'

export const ru = {
    english: 'Английский',
    bio: {
        title: 'Привет, меня зовут Кирилл Моргунов',
        description: 'Frontend-разработчик с 4-x летним опытом разработки приложений.',
        description2: 'Постоянно совершенствую навыки в этих технологиях, для расширения своих возможностей\n' +
            'и достижения более высокого уровня профессионализма.\n' +
            'Мой главный приоритет в разработке - создание эффективного и чистого кода, который\n' +
            'легко поддерживать и масштабировать. Стремлюсь создавать качественные, интуитивно\n' +
            'понятные и доступные пользовательские интерфейсы.'
    },
    skills: {
        title: 'Хочу присоединиться к команде, которая создаёт красивые и доступные интерфейсы',
    },
    header: {
        home: 'На главную',
        stack: 'Стек',
        contact: 'Контакты',
    },
    about: {
        title: 'Мой стек',
        description: 'Технологии, с которыми я работаю',
        vue: {
            title: 'Vue',
            description: 'Мой основной стек - Vue. Последние два года работаю с Vue2 Options API, ' +
                'сейчас активно начал использовать Vue 3 Composition API. ',
        },
        react: {
            title: 'React',
            description: 'Коммерческий опыт с React не такой обширный как с Vue, тем не менее пишу, ' +
                'используя все самые современные техники использования React.',
        },
        laravel: {
            title: 'Laravel',
            description: 'Последние два года веду проект на Laravel, активно использую blade шаблоны,' +
                ' знаком со структурой и методолгией этого фреймворка',
        },
    },
    portfolio: {
        title: 'Портфолио',
        showMore: 'Подробнее',
    },
    contacts: {
        title: 'Напишите мне',
        opened: 'Открыт для Ваших предложений.',
        preferredTypeOfCommunication: 'Предпочитаемый способ связи:',
    },
    sendEmail: {
        email: 'Почта',
        userName: 'Имя',
        message: 'Ваше сообщение',
        submit: 'Отправить',
    },
    formErrors: {
        email: 'Поле email должно соответствовать формату\nexample@example.com',
        firstNameMustContainOnlyLettersAZaz: 'Имя должно состоять только из букв А-Я, a-z, A-Я, a-я',
        firstnameNoMoreThan50Characters: 'Длина имени в этом поле не должна превышать 50 символов',
        invalidEmail: 'Неверный адрес электронной почты',
        lastNameMustContainOnlyLettersAZaz: 'Фамилия должна состоять только из букв А-Я, a-z, A-Я, a-я',
        lastnameNoMoreThan50Characters: 'Длина фамилии в этом поле не должна превышать 50 символов',
        maxLength(count: number) {
            const str = pluralizeRu(count)

            switch (str) {
                case 'one':
                    return `Поле должно быть не более чем ${count} знак`
                case 'few':
                    return `Поле должно быть не более ${count} знака`
                case 'many':
                    return `Поле должно быть не более ${count} знаков`
            }
        },
        minLength: 'Минимальное количество символов 6',
        noMoreThan200Characters: 'Это поле "Обо мне" должно содержать не более 200 символов',
        notValidEmail: 'Недействительный адрес электронной почты',
        passwordMatch: 'Пароли должны совпадать',
        passwordRegex:
            'Пароль может содержать символы: a-z, A-Z, 0-9, ! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [  ] ^ _ ` { | } ~',
        required: 'Поле обязательно',
        termsAgreement: 'Пожалуйста, поставьте галочку, что Вы согласны с нашими правилами',
        userName: 'Имя пользователя должно содержать только буквы A-Z, a-z, 0-9.',
    },
    russian: 'Русский',
}

export type LocaleType = typeof ru
