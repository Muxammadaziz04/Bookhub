import { Provider } from 'react-redux'
import { store } from '../store'
import Layout from '../components/Layout'
import NextNProgress from 'nextjs-progressbar'
import '../styles/globals.css'
import '../styles/main.min.css'

function MyApp({ Component, pageProps }) {
  const book = localStorage.getItem('book')
  if(!book){
    localStorage.setItem('book', JSON.stringify([]))
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
