import { NestedLayout } from '@/components/index';
import {MapCards} from '@/components/*'

export default function CProgramming(props) {
return (
    <div>
      <MapCards projects={props.projects}/>
    </div>
  );
}

CProgramming.getLayout = function getLayout(page) {
	return <NestedLayout>{page}</NestedLayout>;
};

export async function getStaticProps(context) {
  return {
    props: {
      projects: [
        {id: 1, title:"Arduino Uno Code", description: "The Visit button will take you to a github repo with all programs I've written for the micro controller Arduino Uno R3", img: "/images/projects/c/Arduino.jpg", code:"https://github.com/Hurly77/Arduino", demo:null}
      ]
    },
  }
}