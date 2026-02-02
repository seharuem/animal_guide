import Result from './Result';
import BirthDay from './BirthDay';
import { Links } from './Links';
import { Scroll, Wrap } from '../../components/style';

export default function Home() {
	return (
		<Wrap>
			<Scroll className='flex gap-6 max-sm:pb-1 max-sm:flex-wrap'>
				<Result />
				<BirthDay />
				<Links />
			</Scroll>
		</Wrap>
	);
}
