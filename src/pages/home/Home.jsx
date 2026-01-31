import Result from './Result';
import BirthDay from './BirthDay';
import { Links, Links2 } from './Links';
import { Wrap } from './home.style';

export default function Home() {
	return (
		<Wrap>
			<Result />
			<BirthDay />
			<Links />
		</Wrap>
	);
}
