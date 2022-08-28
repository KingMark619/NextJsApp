import Head from 'next/head'

import React from 'react'

export default function Meta({title, keywords, description}) {
  return (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name='keywords' content={keywords} />
        <meta name="description" content={description} />
        <meta charset="utf8"/>
        <link rel='icon' href='/favicon.ico' />
        <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
    title: 'Web dev by Mark', 
    keywords: 'Web dev with NExtJS',
    description: 'Get some cool tech for ur next life '
}