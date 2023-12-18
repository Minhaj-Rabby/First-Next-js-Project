'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react';



const page = () => {
  const router = useRouter();

  const navigate = (route) => {
    router.push(route)
  }

  return (
    <div>

      <h1 className='headline'>This About page</h1>
      <Link href="/">Go to Home</Link>
      <br />
      <Link href="/login">Go to Login</Link>
      <br />
      <br />
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/login')}>Login</button>
      <br />
      <br />

      <button onClick={() => navigate('/about/aboutstudent')}>About Student</button>
      <button onClick={() => navigate('/about/aboutcollege')}>About College</button>

    </div>
  )
}

export default page