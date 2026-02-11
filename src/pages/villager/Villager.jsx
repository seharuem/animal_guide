import { Card, CardWrap, Close, List, Mini } from './villager.style';
import { Glass, Wrap2 } from '../../components/style';
import { useState } from 'react';
import { useVillagersSearch, useVillagerDetail } from './useVillagers';


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

  const [type, setType] = useState('');
  const [sex, setSex] = useState('');
  const [birthMonth, setBirthMonth] = useState('');

  const {
    data: villagers,
    loading: listLoading,
    error: listError
  } = useVillagersSearch({ type, sex, birthMonth });

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

  return (
  <>
    <Wrap2 className="relative overflow-visible pt-20">
      {/* ✅ 2컬럼 레이아웃: 왼쪽 목록 / 오른쪽 필터 */}
      <div className="w-full max-w-6xl mx-auto px-4 max-sm:px-2 py-6">
        <div className="flex gap-6 items-start">
          
          {/* ✅ 왼쪽: 목록 영역 */}
          <CardWrap className="flex-1 pt-12 pb-10">
            {listLoading && (
              <div className="w-full text-center py-10 opacity-70">불러오는 중...</div>
            )}

            {listError && (
              <div className="w-full text-center py-10 text-red-500">
                목록 불러오기 실패: {String(listError.message ?? listError)}
              </div>
            )}

            {!listLoading &&
              !listError &&
              villagers.map((v) => (
                <Mini key={v.villagerNo} onClick={() => select(v.villagerNo)}>
                  <img src={v.villagerImageIcon} alt="" />
                  {v.villagerName}
                </Mini>
              ))}
          </CardWrap>

          {/* ✅ 오른쪽: 필터 패널 (sticky) */}
          <aside className="w-72 shrink-0 max-md:hidden pt-12">
            <div className="sticky top-[80px] z-10 rounded-xl border bg-white/95 backdrop-blur p-4">
              <div className="text-lg font-semibold mb-3">필터</div>

              <div className="flex flex-col gap-3">
                <select
                  className="border rounded px-3 py-2 bg-white text-black"
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value);
                    closeModal();
                  }}
                >
                  <option value="">종족 전체</option>
                  <option value="1">타입 1</option>
                  <option value="2">타입 2</option>
                  <option value="3">타입 3</option>
                </select>

                <select
                  className="border rounded px-3 py-2 bg-white text-black"
                  value={sex}
                  onChange={(e) => {
                    setSex(e.target.value);
                    closeModal();
                  }}
                >
                  <option value="">성별 전체</option>
                  <option value="0">여자</option>
                  <option value="1">남자</option>
                </select>

                <select
                  className="border rounded px-3 py-2 bg-white text-black"
                  value={birthMonth}
                  onChange={(e) => {
                    setBirthMonth(e.target.value);
                    closeModal();
                  }}
                >
                  <option value="">생일월 전체</option>
                  {Array.from({ length: 12 }, (_, i) => {
                    const m = String(i + 1).padStart(2, '0');
                    return (
                      <option key={m} value={m}>
                        {i + 1}월
                      </option>
                    );
                  })}
                </select>

                <button
                  className="border rounded px-3 py-2 bg-white text-black"
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
            </div>
          </aside>
        </div>

        {/* ✅ 모바일: 필터는 위로 다시 보여주고 싶으면 여기서 따로 렌더링 */}
        {/* max-md:block / md:hidden 같은 방식으로 */}
      </div>
    </Wrap2>

    {/* ✅ 상세 모달은 그대로 */}
    {isSelect && (
      <div
        className="fixed inset-0 bg-black/30 flex flex-col gap-8 max-sm:gap-5 items-center justify-center max-sm:pt-20"
        onClick={closeModal}
      >
        <Card onClick={(e) => e.stopPropagation()}>
          {detailLoading && <div className="p-10 text-center opacity-70">상세 불러오는 중...</div>}

          {detailError && (
            <div className="p-10 text-center text-red-500">
              상세 불러오기 실패: {String(detailError.message ?? detailError)}
            </div>
          )}

          {!detailLoading && !detailError && detail && (
            <>
              <Glass className="h-full rounded-4xl max-sm:rounded-3xl p-6 max-sm:p-4 w-max self-center">
                <img
                  className="h-full object-contain max-md:h-50 max-sm:h-30"
                  src={detail.villagerImage}
                  alt=""
                />
              </Glass>

              <ul className="flex flex-col justify-between max-md:gap-5 max-sm:gap-3">
                {getDetailData(detail).map((item, i) => (
                  <li key={i} className="flex gap-5 items-center text-xl max-sm:text-base">
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
