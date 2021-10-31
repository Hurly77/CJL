import '../styles/globals.css';
import Head from 'next/head';
import { Layout } from '@/components/*';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Progress } from '../components/progress/index';
import { useProgressStore } from '../store/index';

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const setIsAnimating = useProgressStore((state) => state.setIsAnimating);
	const isAnimating = useProgressStore((state) => state.isAnimating);
	const getLayout = Component.getLayout || ((page) => page);

	if (typeof document !== 'undefined') {
		window.router = router;
	}

	useEffect(() => {
		const handleStart = (url) => {
			setIsAnimating(true);
		};
		const handleStop = () => {
			setIsAnimating(false);
		};

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleStop);
		router.events.on('routeChangeError', handleStop);

		return () => {
			router.events.off('routeChangeStart', handleStart);
			router.events.off('routeChangeComplete', handleStop);
			router.events.off('routeChangeError', handleStop);
		};
	}, [router, isAnimating, setIsAnimating]);

	return (
		<Layout>
			<Head>
				<link rel='icon' type='image/svg+xml' href='images/favicon.svg' />
			</Head>
			{router.pathname !== '/' &&
			!router.pathname.match(/(?<=\/projects)\S+/g) ? (
				<Progress isAnimating={isAnimating} animationDuration={800} />
			) : null}
			{getLayout(<Component {...pageProps} />)}
		</Layout>
	);
}
export default MyApp;
