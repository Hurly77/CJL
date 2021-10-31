import { NestedLayout } from '@/components/index';
import { Layout } from '@/components/index';

export default function CProgramming() {
	return <div>C</div>;
}

CProgramming.getLayout = function getLayout(page) {
	return <NestedLayout>{page}</NestedLayout>;
};
