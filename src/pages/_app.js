import { Provider } from 'react-redux'
import { store } from '../store'
import dynamic from 'next/dynamic'
import NextNProgress from 'nextjs-progressbar'
const Layout = dynamic(() => import('../components/Layout'), {ssr: false})
import '../styles/globals.css'
import '../styles/main.min.css'

function MyApp({ Component, pageProps }) {
  const book = typeof window !== 'undefined' && localStorage.getItem('book')
  if(!book){
    typeof window !== 'undefined' && localStorage.setItem('book', JSON.stringify([]))
  }
  return (
    <>
    
    <Provider store={store}>
      <Layout>
        <NextNProgress />
        <Component {...pageProps} />
      </Layout>
    </Provider>
    </>
  )
}

export default MyApp
