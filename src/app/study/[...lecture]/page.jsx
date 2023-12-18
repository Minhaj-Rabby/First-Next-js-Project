import React from 'react'

const Lecture = ({ params }) => {

    return (
        <div>
            <h2>Lecture Day :{params.lecture[0]}</h2>
            {
                params.lecture[1] &&
                <h2>Lecture Number :{params.lecture[1]}</h2>
            }
        </div>
    )
}

export default Lecture;
