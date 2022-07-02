import "../styles/globals.css";

import AppLayout from "layouts/app/layout";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import supabase from "sdk/utility/supabase";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isDoc, setIsDoc] = React.useState(false);
  const getLayout = Component.getLayout || ((page) => page);

  if (isDoc) {
    window.router = router;
    window.supabase === supabase;
  }

  React.useEffect(() => {
    setIsDoc(true);
    return () => setIsDoc(false);
  }, []);

  return (
    <AppLayout>
      <Head>
        <link rel="icon" type="image/svg+xml" href="images/favicon.svg" />
      </Head>

      {getLayout(<Component {...pageProps} />)}
    </AppLayout>
  );
}
export default MyApp;
