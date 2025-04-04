import {PortfolioType} from "@/utils/types";

export const items: PortfolioType[] = [
    {
        name: 'flash-cards',
        title: 'Flash cards',
        shortDescription: 'Cards app',
        longDescription: 'An online app where you can create cards for memorising different things',
        category: 'Web App',
        imageSrc: '/flash-cards.png',
        type: 'React',
        link: '/projects/flash-cards',
        codeLink: 'https://github.com/MorgunovKirill/flash-cards',
        deployLink: 'https://flash-cards-mauve.vercel.app/sign-in',
        technologiesList: [
            'React',
            'Redux',
            'RTK Query',
            'React Hook form',
            'Zod',
            'Storybook',
            'Radix UI',
        ]
    },
    {
        name: 'navaibe',
        title: 'Navaibe',
        shortDescription: 'Instagram-like app',
        longDescription: 'An online app where you can upload and share your photos',
        category: 'Web App',
        imageSrc: '/navaibe.png',
        type: 'React',
        link: '/projects/navaibe',
        codeLink: 'https://github.com/it-incubator-internship/client',
        deployLink: 'https://navaibe.ru/',
        technologiesList: [
            'Next.js',
            'React',
            'Redux',
            'RTK Query',
            'React Hook form',
            'Zod',
            'Storybook',
            'Radix UI',
        ]
    },
    {
        name: 'interviews',
        title: 'Interviews',
        shortDescription: 'Interviews app',
        longDescription: 'An interviews app. Useful for those who tries to pass an interview and' +
            ' needs to keep his interview passing history',
        category: 'Web App',
        imageSrc: '/interviews.png',
        type: 'Vue 3 Composition API',
        link: '/projects/interviews',
        codeLink: 'https://github.com/MorgunovKirill/interviews',
        deployLink: 'https://interviews.frontstack.ru/',
        technologiesList: [
            'Vue3',
            'Pinia',
            'PrimeVue',
            'Typescript',
            'Firebase',
        ]
    },
    {
        name: 'hangman',
        title: 'Hangman game',
        shortDescription: 'Hangman game',
        longDescription: 'Mini game. Player has to guess a name using keyboard. ' +
            'If player makes more than 6 errors, he loses.',
        category: 'Game',
        imageSrc: '/hangman.png',
        type: 'Vue 3 Composition API',
        link: '/projects/hangman',
        codeLink: 'https://github.com/MorgunovKirill/wordgame',
        deployLink: 'https://hangman.frontstack.ru/',
        technologiesList: [
            'Vue3',
        ]
    },
    {
        name: 'cocktails',
        title: 'Cocktails',
        shortDescription: 'Cocktails app',
        longDescription: 'An online app where you can get a recipe for different cocktails.' +
            ' Images, filter by ingredients',
        category: 'Web App',
        imageSrc: '/cocktails.png',
        type: 'Vue 3 Composition API',
        link: '/projects/cocktails',
        codeLink: 'https://github.com/MorgunovKirill/cocktails',
        deployLink: 'https://cocktails.frontstack.ru/',
        technologiesList: [
            'Vue3',
            'Pinia',
            'Element Plus',
        ]
    },
    {
        name: 'memory-game',
        title: 'Memory game',
        shortDescription: 'Memory game',
        longDescription: 'Mini game. Player has to find all of hidden image pairs.' +
            'Game ends when all the tiles are flipped correctly.',
        category: 'Game',
        imageSrc: '/memory-game.png',
        type: 'Vue 3 Composition API',
        link: '/projects/memory-game',
        codeLink: 'https://github.com/MorgunovKirill/memory-game',
        deployLink: 'https://memory-game.frontstack.ru/',
        technologiesList: [
            'Vue3',
        ]
    },
    {
        name: 'krestiki-noliki',
        title: 'Krestiki noliki',
        shortDescription: 'Krestiki noliki game',
        longDescription: 'Mini game. Player has to create a row of signs. ' +
            'The player who first makes a row wins.',
        category: 'Game',
        imageSrc: '/krestiki-noliki.png',
        type: 'Vue 3 Composition API',
        link: '/projects/krestiki-noliki',
        codeLink: 'https://github.com/MorgunovKirill/krestiki-noliki',
        deployLink: 'https://krestiki-noliki.frontstack.ru/',
        technologiesList: [
            'Vue3',
        ]
    },
]