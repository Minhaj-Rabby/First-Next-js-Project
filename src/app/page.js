'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react';
export default function Home() {
  
  
  const router = useRouter();

  const navigate = (route) => {
    router.push(route)
  }
  return (
    <main>
      <h1>Home Page</h1>
      <Link href="/about">Go to About</Link>
      <br />
      <Link href="/login">Go to Login</Link>

      <br />
      <br />
      <button onClick={() => navigate('/login')}>login</button>
      <button onClick={() => navigate('/about')}>About</button>

    </main>
  )
}
