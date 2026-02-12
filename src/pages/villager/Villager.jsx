import { Card, CardWrap, Close, List, Mini } from './villager.style';
import { Glass, Wrap } from '../../components/style';
import { useEffect, useRef, useState } from 'react';
import { useVillagersSearch, useVillagerDetail } from './useVillagers';
import { getDetailData } from './villager.config';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock-upgrade';

export default function Villager() {
	const [type, setType] = useState('');
	const [sex, setSex] = useState('');
	const [birthMonth, setBirthMonth] = useState('');

	const filterConfigs = [
		{
			key: 'type',
			value: type,
			setState: setType,
			options: [
				{ value: '', label: '종족' },
				{ value: '1', label: '타입 1' },
				{ value: '2', label: '타입 2' },
				{ value: '3', label: '타입 3' }
			]
		},
		{
			key: 'sex',
			value: sex,
			setState: setSex,
			options: [
				{ value: '', label: '성별' },
				{ value: '0', label: '여자' },
				{ value: '1', label: '남자' }
			]
		},
		{
			key: 'birthMonth',
			value: birthMonth,
			setState: setBirthMonth,
			options: [
				{ value: '', label: '생일' },
				...Array.from({ length: 12 }, (_, i) => ({
					value: String(i + 1).padStart(2, '0'),
					label: `${i + 1}월`
				}))
			]
		}
	];

	const { data: villagers, loading: listLoading, error: listError } = useVillagersSearch({ type, sex, birthMonth });

	const [isSelect, setIsSelect] = useState(false);
	const [selectedNo, setSelectedNo] = useState(null);

	const { data: detail, loading: detailLoading, error: detailError } = useVillagerDetail(selectedNo, isSelect);

	const select = (villagerNo) => {
		setSelectedNo(villagerNo);
		setIsSelect(true);
	};

	const closeModal = () => {
		setIsSelect(false);
		setSelectedNo(null);
	};

	const dialogRef = useRef(null);

	useEffect(() => {
		const dialog = dialogRef.current;

		if (isSelect) {
			dialog.showModal();
			disableBodyScroll(dialog, {
				reserveScrollBarGap: true
			});
		} else {
			dialog.close();
			enableBodyScroll(dialog);
		}

		return () => enableBodyScroll(dialog);
	}, [isSelect]);

	return (
		<>
			<Wrap>
				<aside className='sticky top-26 flex items-center gap-5 px-4 py-2 bg-(--c) text-white/80 rounded-2xl'>
					<div className='text-lg font-semibold max-sm:hidden'>필터</div>

					<div className='flex gap-3 font-bold'>
						{filterConfigs.map((filter) => (
							<select
								className='cursor-pointer'
								key={filter.key}
								value={filter.value}
								onChange={(e) => {
									filter.setState(e.target.value);
									closeModal();
								}}
							>
								{filter.options.map((opt) => (
									<option key={opt.value} value={opt.value}>
										{opt.label}
									</option>
								))}
							</select>
						))}

						<button
							onClick={() => {
								setType('');
								setSex('');
								setBirthMonth('');
								closeModal();
							}}
						>
							초기화
						</button>
					</div>
				</aside>

				<CardWrap>
					{listLoading && <div className='w-full text-center py-10 opacity-70'>불러오는 중...</div>}

					{listError && (
						<div className='w-full text-center py-10 text-red-500'>
							목록 불러오기 실패: {String(listError.message ?? listError)}
						</div>
					)}

					{!listLoading &&
						!listError &&
						villagers.map((v) => (
							<Mini key={v.villagerNo} onClick={() => select(v.villagerNo)}>
								<img src={v.villagerImageIcon} alt='' />
								{v.villagerName}
							</Mini>
						))}
				</CardWrap>
			</Wrap>

			{/* 상세정보 모달 */}
			<dialog ref={dialogRef} onClose={closeModal}>
				<div
					className='fixed inset-0 bg-black/30 flex flex-col gap-8 max-sm:gap-5 items-center justify-center max-sm:pt-20'
					onClick={closeModal}
				>
					<Card onClick={(e) => e.stopPropagation()}>
						{detailLoading && <div className='p-10 text-center opacity-70'>상세 불러오는 중...</div>}

						{detailError && (
							<div className='p-10 text-center text-red-500'>
								상세 불러오기 실패: {String(detailError.message ?? detailError)}
							</div>
						)}

						{!detailLoading && !detailError && detail && (
							<>
								<Glass className='h-full aspect-2/3 rounded-4xl max-sm:rounded-3xl p-6 max-sm:p-4 self-center flex justify-center max-sm:h-50'>
									<img className='object-contain' src={detail.villagerImage} alt='' />
								</Glass>

								<ul className='flex flex-col justify-between max-md:gap-5 max-sm:gap-3'>
									{getDetailData(detail).map((item, i) => (
										<li key={i} className='flex gap-5 items-center text-xl max-sm:text-base'>
											<List>{item.label}</List>
											{item.value}
										</li>
									))}
								</ul>
							</>
						)}
					</Card>

					<Close onClick={closeModal}>닫기</Close>
				</div>
			</dialog>
		</>
	);
}
