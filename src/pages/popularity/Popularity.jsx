import { useState } from 'react';
import { Wrap } from '../../components/style';
import { char } from '../../temp-data/data';
import { SelectBox, SelectWrap, Txt, CheckBox, Submit } from './popularity.style';

export default function Popularity() {
	const [checkId, setCheckId] = useState([]);
	const MAX = 5;

	const check = (i, checked) => {
		if (checked && checkId.length === MAX) {
			return;
		}

		setCheckId((prev) => (checked ? [...prev, i] : prev.filter((v) => v !== i)));
	};

	return (
		<div className='h-full pt-20'>
			<Wrap className='relative'>
				<h2 className='font-bold text-2xl'>5월의 인기투표</h2>
				<SelectWrap>
					{char.map((v, i) => {
						const isChecked = checkId.includes(i);
						const isFull = checkId.length === MAX;
						const text = isChecked ? '선택해제' : isFull ? '선택 불가' : '선택';

						return (
							<SelectBox key={i}>
								<img src={v.img} alt='' className='w-full object-contain' />
								<div className='font-extrabold'>{v.name}</div>
								<input
									type='checkbox'
									name='check'
									className='hidden'
									checked={checkId.includes(i)}
									onChange={(e) => check(i, e.target.checked)}
									disabled={!isChecked && isFull}
								/>
								<Txt>{text}</Txt>
							</SelectBox>
						);
					})}
				</SelectWrap>
				<div className='h-35 flex gap-5 pt-5'>
					{checkId.map((i) => (
						<CheckBox key={i}>
							<img className='object-contain min-h-0' src={char[i].mini} alt='' />
							{char[i].name}
							<button type='button' onClick={() => check(i, false)}></button>
						</CheckBox>
					))}
				</div>
				<Submit>투표 완료</Submit>
			</Wrap>
		</div>
	);
}
