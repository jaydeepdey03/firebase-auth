import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Auth from './Auth'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='text-center text-2xl font-bold'>Hello Welcome to home</h1>
      <div className='flex justify-center items-center'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link href='/Auth'>Login</Link>
        </button>
      </div>
    </div>
  )
}
