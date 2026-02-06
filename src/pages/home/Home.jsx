import Result from './Result';
import BirthDay from './BirthDay';
import { Links } from './Links';
import { Wrap } from '../../components/style';

export default function Home() {
	return (
		<Wrap className='sm:flex-row'>
			<Result />
			<BirthDay />
			<Links />
		</Wrap>
	);
}
