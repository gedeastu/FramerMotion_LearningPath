import React from 'react'
import {Link} from 'react-router-dom'
export default function Error404() {
  return (
    <>
    <h1>Page Not Found!</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Cupiditate officiis dignissimos, alias cumque, itaque veritatis asperiores dolore, 
        repudiandae laboriosam eligendi dolorum maiores quasi voluptatibus ipsam accusamus! 
        Veritatis doloribus beatae temporibus quos assumenda provident, voluptate iste, 
        ut dolores delectus fugiat sunt quisquam adipisci! Reprehenderit vitae voluptatem illum architecto eius ipsa corporis?
    </p>
    <Link to={`/`}>Go back Home</Link>
    </>
  )
}
