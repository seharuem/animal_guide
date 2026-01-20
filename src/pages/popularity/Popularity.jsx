import { Wrap } from '../../components/style';
import { card2 } from '../../temp-data/data';
import { SelectBox, SelectWrap, Submit } from './popularity.style';

export default function Popularity() {
	return (
		<div className='h-full pt-20'>
			<Wrap className='relative'>
				<h2 className='font-bold text-2xl'>5월의 인기투표</h2>
				<SelectWrap>
					{card2.map((v, i) => (
						<SelectBox key={i}>
							<img src={v.img} alt='' className='w-full object-contain' />
							<div className='font-extrabold text-sm'>{v.name}</div>
							<input type="checkbox" name="check" />
						</SelectBox>
					))}
				</SelectWrap>
				<div className='h-50'></div>
				<Submit>투표 완료</Submit>
			</Wrap>
		</div>
	);
}
