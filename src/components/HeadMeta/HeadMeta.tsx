import Head from 'next/head'

type PropsTypeHead = {
  description?: string
  title: string
}

export const HeadMeta = (props: PropsTypeHead) => {
  const { description, title } = props
  return (
    <Head>
      <title>{title}</title>
      <meta content={description || 'Morgunov Kirill portfolio'} name={'description'} />
      <meta content={'width=device-width, initial-scale=1'} name={'viewport'} />
      <link href={'/favicon.ico'} rel={'icon'} />
    </Head>
  )
}
