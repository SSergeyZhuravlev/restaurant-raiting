import LogoIcon from './assets/stair.svg?react'
import './styles.css'
import { getRestaurants } from './api/api'
import { QueryClient, useQuery } from '@tanstack/react-query'
import { RestaurantList } from './components/ui/RestaurantList/RestaurantList';
import { MainPage } from './components/MainPage/MainPage';

const queryClient = new QueryClient();

function App() {
  const { data, status } = useQuery({
    queryFn: getRestaurants,
    queryKey: ['restaurants'],
  }, queryClient);

  return (
    <>
      <header>
        <div className="logo">
          <LogoIcon width={16} height={16} className="logo__icon" />
          <span>Eats</span>
        </div>
        <div className="profile">
          <img alt="profile" src="/avatar.png" />
        </div>
      </header>
      <main>
        <MainPage data={data} />
      </main>
      <footer>
        <p>Privacy Policy</p>
        <p className="corporation">2022 Eats</p>
        <p>Terms Of Service</p>
      </footer>
    </>
  )
}

export default App
