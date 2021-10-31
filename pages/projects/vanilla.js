import { NestedLayout } from '@/components/index';

export default function Vanilla() {
	return <div>Vanilla</div>;
}

Vanilla.getLayout = function getLayout(page) {
	return <NestedLayout>{page}</NestedLayout>;
};
