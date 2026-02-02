import { Card, CardWrap, Close, List, Mini, Wrap2 } from './villager.style';
import { char } from '../../temp-data/data';
import { Box, Glass } from '../../components/style';
import { useState } from 'react';

const list = ['이름', '성별', '종족', '생일', '데뷔'];

export default function Villager() {
	const [isSelect, setIsSelect] = useState(false);
	const [data, setData] = useState();
	const select = (i) => {
		setIsSelect(true);
		setData(i);
	};

	return (
		<>
			<Wrap2 className='relative'>
				<CardWrap className='pt-20 max-sm:pt-18 pb-10'>
					{char.map((v, i) => (
						<Mini key={i} onClick={() => select(i)}>
							<img src={v.mini} alt='' />
							{v.name}
						</Mini>
					))}
				</CardWrap>
				<div className='absolute inset-6 top-10 max-sm:inset-4 bg-linear-[180deg,transparent_90%,#C4BEB1_100%] pointer-events-none' />
			</Wrap2>
			{isSelect && (
				<div className='fixed inset-0 bg-black/30 flex flex-col gap-8 max-sm:gap-5 items-center justify-center max-sm:pt-20'>
					<Card>
						<Glass className='h-full rounded-4xl max-sm:rounded-3xl p-6 max-sm:p-4 w-max self-center'>
							<img className='h-full object-contain max-md:h-50 max-sm:h-30' src={char[data].img} alt='' />
						</Glass>

						<ul className='flex flex-col justify-between max-md:gap-5 max-sm:gap-3'>
							{list.map((l, i) => (
								<li key={i} className='flex gap-5 items-center text-xl max-sm:text-base '>
									<List>{l}</List>
									너굴 | test | 너굴
								</li>
							))}
						</ul>
					</Card>
					<Close onClick={() => setIsSelect(false)}>닫기</Close>
				</div>
			)}
		</>
	);
}
