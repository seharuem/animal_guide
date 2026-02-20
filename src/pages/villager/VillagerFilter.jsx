import { Filter, Nav, Search, Select } from './villager.style';

export default function VillagerFilter({ filterConfigs, onReset, onChange }) {
	return (
		<Nav>
			<Search name='search' placeholder='주민 이름을 검색하세요' />
			<div className='flex gap-3 font-bold ml-auto max-sm:hidden'>
				{filterConfigs.map((f) => (
					<Select
						key={f.key}
						value={f.value}
						onChange={(e) => {
							f.setState(e.target.value);
							onChange(); // 모달 닫기 등 부모의 추가 로직
						}}
					>
						{f.options.map((opt) => (
							<option key={opt.value} value={opt.value}>
								{opt.label}
							</option>
						))}
					</Select>
				))}
				<button type='button' onClick={onReset}>
					초기화
				</button>
			</div>
			<Filter />
		</Nav>
	);
}
