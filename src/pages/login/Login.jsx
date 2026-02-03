import { useNavigate } from 'react-router-dom';
import { Field, Btn, Btn2, Form } from '../../components/login.style';
import { useState } from 'react';
import axios from 'axios';
import { loginMember } from '../member/memberApi';

export default function Login() {
	const navigate = useNavigate();

	const [Id, setId] = useState('');
	const [Pw, setPw] = useState('');

	const logIn = async (e) => {
		e.preventDefault();
		console.log('로그인 시도 : ',{Id, Pw});

		try {
			const res = await loginMember({ memberId: id, memberPw: Pw });
			localStorage.setItem('token', res.data.token); // JWT 등 저장
			alert('로그인 성공!');
			navigate('/');
		} catch (err) {
			console.error('로그인 실패:', err);
			alert('아이디 또는 비밀번호가 틀렸습니다.');
			}
		};

	return (
		<>
			<h2 className='font-extrabold text-2xl'>로그인</h2>
			<Form onSubmit={logIn}>
				<Field>
					<input type='text' name='id' placeholder='아이디' />
				</Field>
				<Field>
					<input type='password' name='pw' placeholder='비밀번호' />
				</Field>
				<Btn>로그인</Btn>
				<Btn2 to='/sign'>회원 가입</Btn2>
			</Form>
		</>
	);
}
