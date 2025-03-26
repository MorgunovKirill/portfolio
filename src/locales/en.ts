// eslint-disable-next-line import/namespace
import { LocaleType } from '@/locales/ru'
import { pluralizeEn, pluralizeRu } from '@/utils/createPluralize'

export const en: LocaleType = {
  english: 'English',
  bio: {
    title: 'Hello, I’m Kirill Morgunov',
    description: 'Frontend developer functioning in the industry for 4+ years now.\n' +
        'My stack: TypeScript, JavaScript, React, Next js, Redux, Redux-toolkit, RTK Query.\n' +
        'Constantly constantly improving my skills in these technologies to expand my capabilities.\n' +
        'and achieve a higher level of professionalism..\n' +
        'My main priority in development is to create efficient and clean code\n' +
        'that is easy to maintain and scale. I strive to create high-quality, intuitive\n' +
        'clear and accessible user interfaces.'
  },
  portfolio: {
    title: 'Portfolio',
  },
  contacts: {
    title: 'Contact me',
    opened: 'Open to your suggestions.',
    preferredTypeOfCommunication: 'Preferred method of communication:',
  },
  sendEmail: {
    email: 'Email',
    userName: 'Name',
    message: 'Type your message here',
    submit: 'Submit',
  },
  formErrors: {
    email: 'The email must match the format\nexample@example.com',
    firstNameMustContainOnlyLettersAZaz: 'First name must contain only letters A-Z, a-z, А-Я, а-я',
    firstnameNoMoreThan50Characters: 'This field firstname must be no more than 50 characters',
    invalidEmail: 'Invalid email',
    lastNameMustContainOnlyLettersAZaz: 'Last name must contain only letters A-Z, a-z, А-Я, а-я',
    lastnameNoMoreThan50Characters: 'This field last name must be no more than 50 characters',
    maxLength(count: number) {
      const str = pluralizeEn(count)

      switch (str) {
        case 'one':
          return `Field must be ${count} character long at least`
        case 'few':
          return `Field must be ${count} characters long at least`
        case 'many':
          return `Field must be ${count} characters long at least`
      }
    },
    minLength: 'Minimum number of characters 6',
    noMoreThan200Characters: 'This field about me must be no more than 200 characters',
    notValidEmail: 'Not valid email',
    passwordMatch: 'Password should match',
    passwordRegex:
      'Password can contain a-z, A-Z, 0-9, ! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [  ] ^ _ ` { | } ~',
    required: 'This field is required',
    termsAgreement: 'Please, mark the checkbox, if you agree to our terms',
    userName: 'User name must contain only letters A-Z, a-z, 0-9',
  },
  russian: 'Russian',
}
