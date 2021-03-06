import type { AppProps } from 'next/app'
import Layout from '../components/Layout';
import {globalStyles} from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        {globalStyles}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
  )
}

export default MyApp
