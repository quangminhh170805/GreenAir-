import { StatusBar } from 'expo-status-bar';
import Splash from './screens/Splash';
import Signin from './screens/Signin';
import Home from './screens/Home';
import RootStack from './routes/Stack';
import CustomCard from './components/KoTot';
import Rank from './components/Rank';
import Ranking from './screens/Ranking';
import DetailRank from './components/DetailRank';
import NewDetail from './components/NewDetail';
export default function App() {
  return (
    <RootStack/>

  );
}

