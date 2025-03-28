import {PortfolioType} from "@/utils/types";

export const items: PortfolioType[] = [
    {
        title: 'Interviews',
        shortDescription: 'Interviews app',
        longDescription: 'An interviews app. Useful for those who tries to pass an interview and' +
            ' needs to keep his interview passing history',
        category: 'Web App',
        imageSrc: '/interviews.png',
        type: 'Vue 3 Composition API',
        link: '/projects/interviews',
        deployLink: '',
        technologiesList: [
            'Vue3',
            'Pinia',
            'PrimeVue',
            'Typescript',
            'Firebase',
        ]
    },
    {
        title: 'Hangman game',
        shortDescription: 'Hangman game',
        longDescription: 'Mini game. Player has to guess a name using keyboard. ' +
            'If player makes more than 6 errors, he loses.',
        category: 'Game',
        imageSrc: '/hangman.png',
        type: 'Vue 3 Composition API',
        link: '/projects/hangman',
        deployLink: '',
        technologiesList: [
            'Vue3',
        ]
    },
    {
        title: 'Cocktails',
        shortDescription: 'Cocktails app',
        longDescription: 'An online app where you can get a recipe for different cocktails.' +
            ' Images, filter by ingredients',
        category: 'Web App',
        imageSrc: '/cocktails.png',
        type: 'Vue 3 Composition API',
        link: '/projects/cocktails',
        deployLink: '',
        technologiesList: [
            'Vue3',
            'Pinia',
            'Element Plus',
        ]
    },
]