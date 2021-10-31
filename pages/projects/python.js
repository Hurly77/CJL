import { NestedLayout } from '@/components/index';
import { Layout } from '@/components/index';

export default function Python() {
	return <div>Python</div>;
}

Python.getLayout = function getLayout(page) {
	return <NestedLayout>{page}</NestedLayout>;
};

export async function getStaticProps() {
	const res = await new Promise((resolve) => setTimeout(resolve, 3000));

	return {
		props: {},
	};
}
