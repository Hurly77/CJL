import { NestedLayout } from '@/components/index';
import Image from 'next/image';
import { Layout } from '@/components/index';

export default function ReactAndNext(props) {
	console.log(props);
	return (
		<div>
			React and NextJS
			<div className='flex flex-wrap min-h-screen justify-evenly'>
				<div className='box-content w-full px-10 py-10 m-3 border md:w-2/3 border-accent card lg:card-side'>
					<figure className=''>
						<Image
							alt='view sunset'
							height={300}
							width={200}
							src='/images/roboDog.png'
							className='rounded-lg bg-base-300'
							objectFit='contain'
						/>
					</figure>
					<div className='w-full rounded-lg lg:w-1/3 card-body'>
						<h1 className='card-title'>MVC OOP M.2 JavaScript</h1>
						<p className='lg:line-clamp-3 line-clamp-4'>
							I need to write out a very long sentence with a giant word like
							pneumonoultramicroscopicsilicovolcanoconiosisl that way I can test
							the word wrap of my sentence and if it is to long I will need to
							make sure that it truncates so it don't look crap
						</p>
						<div className='card-actions'>
							<button className='btn btn-info'>Visit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

ReactAndNext.getLayout = function getLayout(page) {
	return <NestedLayout>{page}</NestedLayout>;
};

export async function getStaticProps(context) {
	const res = await fetch('http://localhost:3000/api/projects/vanilla');
	const data = await res.json();
	console.log(context);
	return {
		props: { ...data },
	};
}
