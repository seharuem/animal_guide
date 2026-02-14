export default function VillagerFilter({ filterConfigs, onReset, onChange }) {
	return (
		<aside className='sticky top-26 flex items-center gap-5 px-4 py-2 bg-(--c) text-white/80 rounded-2xl z-10'>
			<div className='text-lg font-semibold max-sm:hidden'>필터</div>
			<div className='flex gap-3 font-bold'>
				{filterConfigs.map((f) => (
					<select
						key={f.key}
						className='cursor-pointer bg-transparent outline-none'
						value={f.value}
						onChange={(e) => {
							f.setState(e.target.value);
							onChange(); // 모달 닫기 등 부모의 추가 로직
						}}
					>
						{f.options.map((opt) => (
							<option key={opt.value} value={opt.value} className='text-black'>
								{opt.label}
							</option>
						))}
					</select>
				))}
				<button type='button' onClick={onReset} className='hover:text-white transition-colors'>
					초기화
				</button>
			</div>
		</aside>
	);
}
