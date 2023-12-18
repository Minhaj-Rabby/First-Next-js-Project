'use client'
import Link from 'next/link';
import React from 'react'

const page = () => {
    const studentList = [
        'Minhaj', 'saju', 'raha'
    ]

    return (
        <div>
            {
                studentList.map(
                    (student, idx) =>
                        <>
                            <ul key={student}>
                                <li key={student}>
                                    <h4>Name: {student} <Link href={`/student/${student}`}> Check Details</Link></h4>

                                </li>
                            </ul>
                        </>

                )
            }

        </div>
    )
}

export default page;