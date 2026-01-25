import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import { Box } from '../../components/style';

export default function Login() {
	return (
		<div className='h-full flex flex-col items-center gap-20'>
			<Link to='/'>
				<img className='w-80' src={Logo} alt='' />
			</Link>

			<Box className='py-10 px-16 rounded-4xl flex flex-col gap-10'>
				<h2 className='font-extrabold text-2xl'>로그인</h2>
				<form className='flex flex-col w-80 gap-4'>
					<label className='bg-white rounded-2xl p-4'>
						<input className='w-full font-bold' type='text' name='id' placeholder='아이디' />
					</label>
					<label className='bg-white rounded-2xl p-4'>
						<input className='w-full font-bold' type='password' name='pw' placeholder='비밀번호' />
					</label>
					<button type='button' className='rounded-2xl bg-(--p) p-3 text-white font-extrabold text-xl mt-5'>
						로그인
					</button>
					<button type='button' className='text-(--p) font-extrabold text-lg'>
						회원 가입
					</button>
				</form>
			</Box>
		</div>
	);
}
