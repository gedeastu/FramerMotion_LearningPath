import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export const HomeDetailsLoader = async ({params}) => {
    const {id} = params;
    // const res = await fetch(`http://localhost:2004/listItem/${id}`)
    const res = await fetch(`${import.meta.env.VITE_APP_API_CARD_LIST}/${id}` )
    return res.json()
}

export default function HomeDetails() {
  const details = useLoaderData()
  const {id} = useParams()
  return (
    <div>
      Details for :
      <br />
      {details.title}
      <br />
      {details.desc}
    </div>
  )
}
// import React from 'react'
// import { useParams } from 'react-router-dom'
// const HomeDetails = async ({params}) => {
//   const { id } = useParams()
//   return (
//     <>
//      <h1>{id}</h1>
//     </>
//   )
// }

// export default HomeDetails;
