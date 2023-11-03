"use client"
import { useRouter } from "next/navigation"
import Bod from "./component/Bod"
import {signIn} from 'next-auth/react'
import Head from "next/head"

export default function Home() { 
  const router = useRouter()  
 let a = ()=>{ 
  window.open('http://localhost:3001/auth/google/callback'
  ,
  "_self"
  )
 } 
 let b = ()=>{
  window.open('http://localhost:3001/auth/logout',  
  "_Self"
  ) 
 }
 let c = async ()=>{
  let data = await fetch('http://localhost:3001/api/user'
  ).then(data=>data.json())
  .then(data=>{ 
    console.log(data)
  })
  const storedUser = JSON.parse(sessionStorage.getItem('user'));
  console.log(storedUser);
 }
  return (
    <>         
    <Head>
      <title>Ecommers</title>
    </Head>
    <Bod/>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <button onClick={()=>a()}>hel</button>
      <br/> 
      <button onClick={()=>signIn("google")}>logout</button>
      <br/> 
      <button onClick={()=>c()}>get</button>
    </> 
  )
}
