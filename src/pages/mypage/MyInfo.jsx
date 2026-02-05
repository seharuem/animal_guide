import { Glass } from '../../components/style';
import { Edit, Form, Label } from './mypage.style';
import mini from '../../assets/img/tom_icon.png';

const data = [
	{ label: '별명', type: 'text', value: '별명' },
	{ label: '이메일', type: 'email', value: 'abcd@email' },
	{ label: '비밀번호', type: 'password' },
	{ label: '비밀번호 확인', type: 'password' }
];

export default function MyInfo() {
	return (
		<Form>
			<div className='row-span-2 flex flex-col gap-4 w-35 p-4 pl-0 font-extrabold text-2xl'>
				<Glass className='rounded-full p-4'>
					<img src={mini} alt='' />
				</Glass>
				id
			</div>
			{data.map((d) => (
				<Label key={d.label}>
					{d.label}
					<Glass className='px-4 py-2 rounded-xl flex items-center font-semibold'>
						<input type={d.type} defaultValue={d.value} className='w-full font-(family-name:--f)' />
					</Glass>
				</Label>
			))}
			<Edit>수정</Edit>
		</Form>
	);
}
