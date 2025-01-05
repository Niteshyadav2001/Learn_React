import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()

  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/NiteshYadav2001')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data)
  //     setData(data)
  //   })
  // },[])

  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl font-bold'>Github Public Repository: {data.public_repos}

      <img
      src={data.avatar_url}
      alt=""
      className='w-30'
      />

    </div>
  )
}

export default Github

export const gitInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/NiteshYadav2001')
  return response.json()
}