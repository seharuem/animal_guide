import { Wrap } from '../../components/style';
import { CardWrap, Mini } from './villager.style';
import { char } from '../../temp-data/data';

export default function Villager() {
	return (
		<div className='h-full pt-20'>
			<Wrap>
				<CardWrap>
					{char.map((v, i) => (
						<Mini key={i}>
							<img src={v.mini} alt='' />
							{v.name}
						</Mini>
					))}
				</CardWrap>
			</Wrap>
		</div>
	);
}
