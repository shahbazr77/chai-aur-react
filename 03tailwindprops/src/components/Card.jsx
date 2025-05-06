import React from 'react';
function Card({userName,buttonText="default click",someObj}) {
    console.log(userName);
    return (
    <> 
<figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 mb-6">
  <h1>{someObj.user}</h1>
  <a href="#">
    <img className="rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" alt="image description"/>
  </a>
  <figcaption className="absolute px-4 text-lg text-white bottom-6">
      <h2>{userName}</h2>
      <button className='bg-green-400 text-black p-2 rounded-lg'>{buttonText}</button>
  </figcaption>
</figure>

    </>
    )
}
export default Card;