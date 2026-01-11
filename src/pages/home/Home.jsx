import Result from './Result';
import BirthDay from './BirthDay';

export default function Home() {
	return (
		<div className='h-full pt-20'>
			<div className='p-10 flex gap-10'>
				<Result />
				<BirthDay />
			</div>
		</div>
	);
}
