import type { AppProps } from "next/app";
import {ReactElement, ReactNode} from "react";
import {NextPage} from "next";
import {useLoader} from "@/hooks/useLoader";

import '@/styles/index.scss'
import '@/styles/nprogress.scss'

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