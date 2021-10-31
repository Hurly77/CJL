import { NestedLayout } from '@/components/index';
import { Layout } from '@/components/index';

export default function NodeAndApis() {
	return <div>Node and Apis</div>;
}

NodeAndApis.getLayout = function getLayout(page) {
	return <NestedLayout>{page}</NestedLayout>;
};
