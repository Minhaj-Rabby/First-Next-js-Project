import Link from 'next/link';
import React from 'react'

const StudentLogin = () => {
    return (
        <div>
            <h1 className='headline'>Studnet Login</h1>
            <Link href="/login">Login HomePage</Link>
        </div>
    )
}

export default StudentLogin;