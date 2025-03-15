import { pluralizeRu } from '@/utils/createPluralize'

export const ru = {
  english: 'Английский',
  bio: {
    title: 'Привет, меня зовут Кирилл Моргунов',
    description: 'Frontend-разработчик с 4-x летним опытом разработки приложений с использованием\n' +
        'TypeScript, JavaScript, React, Next js, Redux, Redux-toolkit, RTK Query.\n' +
        'Постоянно совершенствую навыки в этих технологиях, для расширения своих возможностей\n' +
        'и достижения более высокого уровня профессионализма.\n' +
        'Мой главный приоритет в разработке - создание эффективного и чистого кода, который\n' +
        'легко поддерживать и масштабировать. Стремлюсь создавать качественные, интуитивно\n' +
        'понятные и доступные пользовательские интерфейсы.'
  },
  contacts: {
    title: 'Напишите мне',
    description: 'Открыт для Ваших предложений.\n' +
        'Предпочитаемый способ связи:\n' +
        'telegram: @R0bur'
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
