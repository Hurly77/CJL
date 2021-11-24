import { NestedLayout } from '@/components/index';
import {MapCards} from '@/components/*'

export default function Vanilla(props) {
	return (
    <div>
      <MapCards projects={props.projects}/>
    </div>
  );
}

Vanilla.getLayout = function getLayout(page) {
	return <NestedLayout>{page}</NestedLayout>;
};

export async function getStaticProps() {
  return {
    props: {
      projects: [
        {id: 1, title:"Snake Game", description: "", img: "/images/projects/vanilla/snake.jpg", demo:"https://github.com/Hurly77/snake-game", code: null},
        {id: 2, title:"Best Calculator", description: "", img: "/images/projects/vanilla/best-calc.png", demo: null, code:"https://github.com/Hurly77/best-calc"},
        
      ]
    },
  }
}