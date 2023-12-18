import React from 'react'

const page = ({params}) => {
    console.log(params)
  return (
    <div>
      <h2>{params.studentdetails}</h2>
    </div>
  )
}

export default page;
