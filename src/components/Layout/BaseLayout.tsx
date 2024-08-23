import { Header } from './Header';
import { MainPage } from '../MainPage/MainPage';
import { Footer } from './Footer';
import { Restaurant } from '../../api/api';
import { FC } from 'react';

interface BaseLayoutProps {
  status: string,
  data: Restaurant[]
  pathname: string,
  goToRoute: (event: React.BaseSyntheticEvent) => void,
}

export const BaseLayout: FC<BaseLayoutProps> = ({  status, data, pathname, goToRoute }) => {
    switch (status) {
        case 'pending':
          return (
            <div>
              <p>Loading...</p>
            </div>
          )
    
        case 'success':
          return (
            <>
              <Header />
              <main>
                <MainPage 
                  data={data} 
                  pathname={pathname} 
                />
              </main>
              <Footer onClick={goToRoute} />
            </>
          )
    
        case 'error':
          return (
            <div>
              <p>Error...</p>
            </div>
          )
    }
}