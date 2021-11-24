import React from 'react'
import Image from 'next/image'

const Card = ({ title, description, code, demo, img}) => {
  return (
    <div className="flex flex-wrap min-h-screen justify-evenly">
      <div className="box-content w-full px-10 py-10 m-3 border md:w-2/3 border-accent card lg:card-side">
        <figure className="">
          <Image
            alt="view sunset"
            height={300}
            width={200}
            src={img}
            className="bg-center rounded-lg bg-base-300"
            objectFit="contain"
          />
        </figure>
        <div className="w-full rounded-lg lg:w-1/3 card-body">
          <h1 className="card-title">{title}</h1>
          <p className="lg:line-clamp-3 line-clamp-4">{description}</p>
          <div className="card-actions">
            {demo ? <a target="_blank" rel="noreferrer" href={demo} className="btn btn-info">
              Preview
            </a> : null}
            
             {code ? <a target="_blank" rel="noreferrer" href={code} className="btn btn-info">
              Git Repo
            </a> : null}
            {console.log(code)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
