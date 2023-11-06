"use client"
import { useRouter } from "next/navigation"
import Bod from "./component/Bod"
import {signIn} from 'next-auth/react'
import Head from "next/head"

export default function Home() { 
  const router = useRouter()  
  return (
    <>         
    <Head>
      <title>Ecommers</title>
    </Head>
    <Bod/>
    </> 
  )
}
