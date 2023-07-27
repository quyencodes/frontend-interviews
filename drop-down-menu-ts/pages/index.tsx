import Head from 'next/head'

import AdvancedDropDown2 from '@/components/AdvancedDropDown2'
import AdvancedDropDown from '@/components/AdvancedDropDown'
import BasicDropDown from '@/components/BasicDropDown'
import Counter from '@/components/Counter'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-container flex h-screen items-center justify-center bg-gradient-to-r from-sky-600 to-indigo-600">
        <AdvancedDropDown2 />
        {/* <AdvancedDropDown /> */}
        {/* <BasicDropDown /> */}
        {/* <Counter /> */}
      </main>
    </>
  )
}
