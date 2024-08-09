import './styles.css'
import { getRestaurants } from './api/api'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react';
import { queryClient } from './api/queryClient';
import { BaseLayout } from './components/Layout/BaseLayout';

function App() {
  const { data, status } = useQuery({
    queryFn: getRestaurants,
    queryKey: ['restaurants'],
  }, queryClient);

  const [pathname, setPathname] = useState('/');

  useEffect(() => {
    window.addEventListener('popstate', (event) => {
      setPathname(!event.state ? '/' : event.state.url)
    })

    return () => {window.onpopstate = null}
  }, [])
  
  function goToRoute(event: React.BaseSyntheticEvent) {
      event.preventDefault();
      const href = event.target.getAttribute('href')
      history.pushState({url: href}, '', href)
      setPathname(href);
  }

  return data && (
    <BaseLayout status={status} data={data} pathname={pathname} goToRoute={goToRoute} />
  )
}

export default App
