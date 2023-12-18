'use client'
import Link from 'next/link';
import React from 'react';
import './about.css';
import { usePathname } from 'next/navigation';

const AboutLayout = ({ children }) => {
    const pathname = usePathname();
    return (
        <div>
            <ul className='layout-menu'>
                <li>
                    <h3>About Navbar</h3>
                </li>
                <li>
                    <Link href='/about'>About Main Page</Link>
                </li>
                {
                    pathname !== '/about/aboutstudent' ?
                        <li>
                            <Link href='/about/aboutstudent'>About Student</Link>
                        </li>
                        :
                        null
                }{
                    pathname !== '/about/aboutcollege' ?
                        <li>
                            <Link href='/about/aboutcollege'> About College</Link>

                        </li>
                        :
                        null
                }
            </ul>

            {
                children
            }
        </div>
    )
}

export default AboutLayout;