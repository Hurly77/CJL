import { NestedLayout } from '@/components/index';
import {MapCards} from '@/components/*'

export default function NodeAndApis(props) {
return (
    <div>
      <MapCards projects={props.projects}/>
    </div>
  );
}

NodeAndApis.getLayout = function getLayout(page) {
	return <NestedLayout>{page}</NestedLayout>;
};

export async function getStaticProps(context) {
  return {
    props: {
      projects: [
        {id: 1, title:"ShopIt", description: "SeverSide Application built from scratch using Node and EJS, Following OOP and MVC design patterns", img: "/images/projects/api/shop.jpg", demo:null, code:"https://github.com/Hurly77/ShopIt"}
      ]
    },
  }
}
