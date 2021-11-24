import { NestedLayout } from '@/components/index';
import {MapCards} from '@/components/*'


export default function Python(props) {
return (
    <div>
      <MapCards projects={props.projects}/>
    </div>
  );
}

Python.getLayout = function getLayout(page) {
	return <NestedLayout>{page}</NestedLayout>;
};


export async function getStaticProps(context) {
  return {
    props: {
      projects: [
        {id: 1, title:"Python In Progress", description: "I've Been working on a lot of Python Projects, However None that are ready to view The Visit Button will take you to my mono repo where I publish all things I'm Learning", img: "/images/projects/python/WIP.jpg", code:"https://github.com/Hurly77/learn"}
      ]
    },
  }
}