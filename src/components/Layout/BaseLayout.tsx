import { Header } from './Header';
import { MainPage } from '../MainPage/MainPage';
import { Footer } from './Footer';
import { useState, useEffect } from 'react';

export const BaseLayout = () => {
  const [pathname, setPathname] = useState('/');

  useEffect(() => {
    window.addEventListener('popstate', (event) => {
      setPathname(!event.state ? '/' : event.state.url)
    })

    return () => { window.onpopstate = null }
  }, [])
  
  function goToRoute(event: React.BaseSyntheticEvent) {
      event.preventDefault();

      const href = event.target.getAttribute('href');

      history.pushState({ url: href }, '', href);
      setPathname(href);
  }

  return (
    <>
      <Header />
      <main>
        <MainPage 
          pathname={pathname} 
        />
      </main>
      <Footer onClick={goToRoute} />
    </>
  )
}