import Link from 'next/link';
import React from 'react'

const AboutStudent = () => {
    return (
        <div>
            <h1 className='headline'>About Student</h1>
            <Link href="/about">Go to about HomePage</Link>
        </div>
    )
}

export default AboutStudent;