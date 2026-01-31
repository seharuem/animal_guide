import { Box } from '../../components/style';
import { Title3 } from './home.style';
import tom_min from '../../assets/img/tom_icon.png';

const birthData = [
	{ img: tom_min, name: '너굴', date: '30일' },
	{ img: tom_min, name: '너굴', date: '30일' },
	{ img: tom_min, name: '너굴', date: '30일' }
];

export default function BirthDay() {
	return (
		<Box className='shadow-(--shadowP) w-100 max-sm:w-full'>
			<Title3 className='birth border-(--pink)'>5월 생일</Title3>
			<ul className='flex flex-col gap-2 max-md:gap-0'>
				{birthData.map((item, index) => (
					<li key={index} className='h-15 flex items-center gap-4 max-md:gap-2 pr-2'>
						<img className='h-14 max-md:h-12 object-contain' src={item.img} alt='' />
						<span className='text-2xl max-md:text-xl font-extrabold'>{item.name}</span>
						<span className='text-lg font-bold ml-auto'>{item.date}</span>
					</li>
				))}
			</ul>
		</Box>
	);
}
