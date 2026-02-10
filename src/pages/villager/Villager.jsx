import { Card, CardWrap, Close, List, Mini } from './villager.style';
import { Glass, Wrap } from '../../components/style';
import { useState, useEffect } from 'react';
import { useVillagers, useVillagerDetail } from './useVillagers';

const formatBirthday = (birthString) => {
	if (!birthString) return '';
	const [month, day] = birthString.split('-');
	return `${Number(month)}월 ${Number(day)}일`;
};

const getGenderLabel = (sex) => (sex === 1 ? '남자' : '여자');

const getName = (data) => {
	return `${data.villagerName} | ${data.villagerNameEn} | ${data.villagerNameJp}`;
};

const getDetailData = (detail) => [
	{ label: '이름', value: getName(detail) },
	{ label: '성별', value: getGenderLabel(detail.villagerSex) },
	{ label: '종족', value: detail.villagerTypeName },
	{ label: '생일', value: formatBirthday(detail.villagerBirth) },
	{ label: '데뷔', value: detail.villagerDebut }
];

export default function Villager() {
	const { data: villagers, loading: listLoading, error: listError } = useVillagers();

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

	useEffect(() => {
		if (isSelect) {
			document.documentElement.style.overflow = 'hidden';
		} else {
			document.documentElement.style.overflow = '';
		}

		return () => {
			document.documentElement.style.overflow = '';
		};
	}, [isSelect]);

	return (
		<>
			<Wrap>
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

			{isSelect && (
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
			)}
		</>
	);
}
