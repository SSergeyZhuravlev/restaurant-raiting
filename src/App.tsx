import './styles.css'
import { getRestaurants } from './api/api'
import { QueryClient, useQuery } from '@tanstack/react-query'
import { Header } from './components/Layout/Header';
import { MainPage } from './components/MainPage/MainPage';
import { Footer } from './components/Layout/Footer';
import { useEffect, useState } from 'react';

const queryClient = new QueryClient();

function App() {
  const [pathname, setPathname] = useState('/');

  useEffect(() => {
    window.addEventListener('popstate', (event) => {
      setPathname(!event.state ? '/' : event.state.url)
    })

    return () => {window.onpopstate = null}
  }, [])
  // status - добавить
  const { data,  } = useQuery({
    queryFn: getRestaurants,
    queryKey: ['restaurants'],
  }, queryClient);

  function goToRoute(event: React.BaseSyntheticEvent) {
      event.preventDefault();
      const href = event.target.getAttribute('href')
      history.pushState({url: href}, '', href)
      setPathname(href);
  }

  return (
    <>
      <Header />
      <main>
        { data && <MainPage data={data} pathname={pathname} /> }
      </main>
      <Footer onClick={goToRoute} />
    </>
  )
}

export default App
