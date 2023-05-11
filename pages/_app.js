import '../styles/globals.css'
import { Poppins } from '@next/font/google';

const font = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

function MyApp({ Component, pageProps }) {
  return (<main className={font.className}>
    <Component {...pageProps} />
  </main>)
}

export default MyApp
