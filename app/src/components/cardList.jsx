import React from 'react'
import axiosRequest from '../services/axios';
import {useLoaderData,Link} from 'react-router-dom'

export const FetchJSON = async () => {
    const res = await fetch(import.meta.env.VITE_APP_API_CARD_LIST)
    console.log(res);
    return res.json()
}

export default function CardList () {
  const cardList = useLoaderData()
  return (
    <>
    <div className='flex flex-row gap-5 m-10'>
    {cardList.map((index)=> (
    <Link to={index.id.toString()} key={index.id} className='text-black text-center'>
    <h1>{index.title}</h1>
    <p>{index.desc}</p>
    </Link>
    ))}
    </div>
    </>
  )
}
