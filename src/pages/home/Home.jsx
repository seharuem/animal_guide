import Result from './Result';
import BirthDay from './BirthDay';
import { Links } from './Links';
import { Wrap } from '../../components/style';

export default function Home() {
	return (
		<Wrap>
			<div className='flex gap-6 max-sm:flex-wrap'>
				<Result />
				<BirthDay />
				<Links />
			</div>
		</Wrap>
	);
}
