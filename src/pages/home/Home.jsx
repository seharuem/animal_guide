import Result from './Result';
import BirthDay from './BirthDay';
import { Links } from './Links';
import { Scroll, Wrap2 } from '../../components/style';

export default function Home() {
	return (
		<Wrap2 className='relative'>
			<Scroll className='flex gap-6 pt-20 max-sm:pt-18 pb-10 pr-1 max-sm:flex-wrap'>
				<Result />
				<BirthDay />
				<Links />
			</Scroll>
			<div className='absolute inset-6 top-10 max-sm:inset-4 bg-linear-[180deg,transparent_90%,#C4BEB1_100%] pointer-events-none' />
		</Wrap2>
	);
}
