import { Wrap } from '../../components/style';
import { CardWrap, Mini } from './villager.style';
import { card } from '../../temp-data/data';

export default function Villager() {
	return (
		<div className='h-full pt-20'>
			<Wrap>
				<CardWrap>
					{card.map((v, i) => (
						<Mini key={i}>
							<img src={v.img} alt='' />
							{v.name}
						</Mini>
					))}
				</CardWrap>
			</Wrap>
		</div>
	);
}
