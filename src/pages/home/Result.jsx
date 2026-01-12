import { Rank, Title3 } from './home.style';
import { Box } from '../../components/style';
import tom from '../../assets/img/Tom_Nook_NH.png';
import crown from '../../assets/img/crown.svg';
import tom_min from '../../assets/img/tom_icon.png';

const rankData = [
	{ rank: '1등', img: crown, name: '너굴', votes: 333, borderColor: '#EFB700' },
	{ rank: '2등', img: tom_min, name: '너굴', votes: 222, borderColor: '#B9B9B9' },
	{ rank: '3등', img: tom_min, name: '너굴', votes: 111, borderColor: '#8C663A' }
];

export default function Result() {
	return (
		<Box className='border-(--y) w-120 bg-[#F8F8EFaa]'>
			<Title3 className='star'>이달의 주민</Title3>
			<img className='h-60 object-contain' src={tom} alt='' />
			{rankData.map(({ rank, img, name, votes, borderColor }) => (
				<Rank key={rank} className={`border-[${borderColor}]`}>
					<span className={rank === '1등' ? 'text-xl' : 'text-lg'}>{rank}</span>
					<img className='h-10' src={img} alt='' />
					<span className={rank === '1등' ? 'text-3xl' : 'text-2xl'}>{name}</span>
					<span className='ml-auto self-end text-lg font-bold'>{votes}표</span>
				</Rank>
			))}
		</Box>
	);
}
