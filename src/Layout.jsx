import { Outlet } from 'react-router-dom';
import Header from './components/Header';

export function L() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export function L0() {
	return (
		<div></div>
	)
}