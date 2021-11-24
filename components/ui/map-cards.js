import React from 'react'
import Card from './card'

const MapCards = ({projects}) => {
  return (
    <>
      {projects.map((project, id) => <Card
        key={id}
        title={project.title}
        description={project.description}
        img={project.img}
        demo={project.demo}
        code={project.code}
      />)}
    </>
  )
}

export default MapCards
