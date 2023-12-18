'use client'
import Link from 'next/link';
import React from 'react';
import './login.css';
import { usePathname } from 'next/navigation';

const LoginLayout = ({ children }) => {
    const pathname = usePathname();
    return (
        <div>
            <ul className='layout-menu'>
                <li>
                    <h3>Login Navbar</h3>
                </li>
                <li>
                    <Link href='/login'>Login Main Page</Link>
                </li>
                {
                    pathname !== '/login/studentlogin' ?
                        <li>
                            <Link href='/login/studentlogin'>Student Login</Link>
                        </li>
                        :
                        null
                }

                {
                    pathname !== '/login/teacherlogin' ?
                        <li>
                            <Link href='/login/teacherlogin'> Teacher Login</Link>

                        </li>
                        :
                        null
                }

            </ul>

            {
                children
            }
        </div >
    )
}

export default LoginLayout;