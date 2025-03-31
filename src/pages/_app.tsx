import type { AppProps } from "next/app";
import {ReactElement, ReactNode} from "react";
import {NextPage} from "next";
import {useLoader} from "@/hooks/useLoader";

import '@/styles/index.scss'
import '@/styles/nprogress.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/600.css'
import '@fontsource/roboto/700.css'
import '@fontsource/geist-sans/400.css';
import '@fontsource/geist-sans/600.css';
import '@fontsource/geist-sans/700.css';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type NextPageWithLayout<P = {}, IP = P> = {
  getLayout?: (page: ReactElement) => ReactNode
} & NextPage<P, IP>

type AppPropsWithLayout = {
  Component: NextPageWithLayout
} & AppProps

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    useLoader()
    const getLayout = Component.getLayout ?? (page => page)

    return getLayout(<Component {...pageProps} />)
}