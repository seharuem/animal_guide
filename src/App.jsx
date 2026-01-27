import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home.jsx';
import Popularity from './pages/popularity/Popularity.jsx';
import Board from './pages/board/Board.jsx';
import Villager from './pages/villager/Villager.jsx';
import Login from './pages/login/Login.jsx';
import { L } from './Layout.jsx';

function App() {
	return (
		<Routes>
			<Route path='/login' element={<Login />}></Route>
			<Route path='/' element={<L />}>
				<Route path='' element={<Home />} />
				<Route path='villager' element={<Villager />} />
				<Route path='popularity' element={<Popularity />} />
				<Route path='board' element={<Board />} />
			</Route>
		</Routes>
	);
}

export default App;
