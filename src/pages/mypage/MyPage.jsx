import { useState } from 'react';
import { Wrap } from '../../components/style';
import { Fold } from './mypage.style';
import MyInfo from './MyInfo';

export default function MyPage() {
	const [isInfo, setIsInfo] = useState(true);

	return (
		<Wrap className='px-40 pt-30 max-xl:px-20 max-lg:px-10 max-md:px-5'>
			<Fold onClick={() => setIsInfo(!isInfo)} className={isInfo ? 'fold' : ''}>
				<h3>내 정보</h3>
			</Fold>

			{!isInfo && <MyInfo />}
		</Wrap>
	);
}
