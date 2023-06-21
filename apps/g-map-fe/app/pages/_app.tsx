// import type { ReactElement, ReactNode } from 'react';
// import type { NextPage } from 'next';
// import type { AppProps } from 'next/app';
// import Head from 'next/head';
// import Script from 'next/script';

// export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
//   getLayout?: (page: ReactElement) => ReactNode;
// };

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout;
// };

// export default function GMapApp({ Component, pageProps }: AppPropsWithLayout) {
//   // Use the layout defined at the page level, if available
//   const getLayout = Component.getLayout ?? ((page) => page);

//   return getLayout(
//     <>
//       <Head>
//         <link rel="stylesheet" href="/styles/global.css" />
//       </Head>
//       <Component {...pageProps} />
//       <Script src="https://unpkg.com/maplibre-gl@3.1.0/dist/maplibre-gl.js" />
//     </>
//   );
// }
