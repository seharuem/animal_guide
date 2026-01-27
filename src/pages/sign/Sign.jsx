import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import { Box } from '../../components/style';
import { Field, Btn } from '../../components/login.style';

export default function Sign() {
	return (
		<div className='h-full flex flex-col items-center gap-20'>
			<Link to='/'>
				<img className='w-80' src={Logo} alt='' />
			</Link>

			<Box className='py-10 px-16 rounded-4xl flex flex-col gap-10'>
				<h2 className='font-extrabold text-2xl'>회원 가입</h2>
				<form className='flex flex-col w-80 gap-4'>
					<Field>
						<input type='text' name='name' placeholder='별명' />
					</Field>
					<Field>
						<input type='text' name='id' placeholder='아이디' />
					</Field>
					<Field>
						<input type='password' name='pw' placeholder='비밀번호' />
					</Field>
					<Btn>회원 가입</Btn>
				</form>
			</Box>
		</div>
	);
}
