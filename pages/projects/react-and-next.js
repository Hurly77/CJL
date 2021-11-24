import { NestedLayout } from '@/components/index'
import {MapCards} from '@/components/*'

export default function ReactAndNext(props) {
  return (
    <div>
      <MapCards projects={props.projects}/>
    </div>
  )
}

ReactAndNext.getLayout = function getLayout(page) {
  return <NestedLayout>{page}</NestedLayout>
}

export async function getStaticProps(context) {
  return {
    props: {
      projects: [
        {id: 1, title:"Next Connect", description: "Next Connect was the first full-stack application that I've ever made completely on my own using BareBones React and Ruby on Rails. I'm currently converting it over to NextJS.", img: "/images/projects/react/next-connect.png", demo:"https://nextconnect.surge.sh/"},
        {id: 2, title: "Blog It", description: "A Simple blog website using react-markdown and MongoDB, with Postcss", img: "/images/projects/react/blog.png", demo:"https://blog.enzwel.com", code:"https://github.com/Hurly77/BlogIt"},
        {id: 3, title: "The Eatery", description:"Simple website one might have for a small business.", img:"/images/projects/react/eat.png", demo:"eat.enzwel.com", code:"https://github.com/Hurly77/The-Eatery"},
        {id: 4, title: "Genesis Iron Works", description: "Genesis Iron Works, I built this company a website using JavaScript, Next.js and tailwindcss", img:'/images/projects/react/geniron.png', demo: 'https://genironworks.com/', code: null}
      ]
    },
  }
}
