import Link from 'next/link';
import React from 'react'

const TeacherLogin = () => {
    return (
        <div>
            <h1 className='headline'>Teacher Login</h1>
            <Link href="/login">Login HomePage</Link>
        </div>
    )
}

export default TeacherLogin;