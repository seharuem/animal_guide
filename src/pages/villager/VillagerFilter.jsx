import { useState } from 'react';
import { Filter, Nav, Search, Select, SelectWrap } from './villager.style';

export default function VillagerFilter({ filterConfigs, onReset, onChange }) {
	const [isFilter, setIsFilter] = useState(false);

	return (
		<Nav>
			<Search name='search' placeholder='주민 이름을 검색하세요' />
			<SelectWrap className={isFilter ? '' : 'max-sm:hidden'}>
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
				<button type='button' onClick={onReset} className='text-sm self-center'>
					초기화
				</button>
			</SelectWrap>
			<Filter onClick={() => setIsFilter(!isFilter)} />
		</Nav>
	);
}
