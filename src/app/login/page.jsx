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
      <h1 className='headline'>This Login page</h1>
      <Link href="/">Go to Home</Link>
      <br />
      <Link href="/about">Go to About</Link>
      <br />
      <br />
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/about')}>About</button>
      <br />
      <br />
      <button onClick={() => navigate('/login/studentlogin')}>Student Login</button>
      <button onClick={() => navigate('/login/teacherlogin')}>Teacher Login</button>

    </div>
  )
}

export default page