import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const base = '/animal_guide';

const move = keyframes`
20% { translate: 0 -5px; }
80% { translate: 0 5px; }
`;

export const Menu = styled.button.attrs({
	type: 'button',
	className: 'size-10 absolute left-5 z-30 rounded-full shadow-(--shadow) hidden max-sm:block'
})`
	background:
		url('${base}/menu.svg') center / 70% no-repeat,
		var(--glass);
`;

export const Url = styled(NavLink).attrs({
	className: 'font-bold text-lg max-sm:hidden'
})`
	&.login {
		display: flex;
		gap: 4px;
		align-items: center;
	}
	&.login::after {
		content: '';
		width: 22px;
		aspect-ratio: 1;
		background: url('${base}/login.svg') center / contain no-repeat;
	}
	&.login:hover::after {
		animation: ${move} 0.7s ease-out infinite;
	}
	&:hover:not(.page) {
		font-weight: 900;
	}
	@media (max-width: 40rem) {
		&.login {
			display: none;
		}
	}
`;

export const Page = styled(Url).attrs({
	className: 'page relative'
})`
	&::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: var(--p);
		scale: 0 1;
		transition: scale 0.2s ease-out;
		transform-origin: left;
	}
	&:hover::after {
		scale: 1 1;
	}
	&.active {
		font-weight: 900;
	}
	&.active::after {
		scale: 1 1;
	}
`;

export const Box = styled.div.attrs({
	className: 'rounded-3xl p-5 flex flex-col gap-4 bg-(image:--glass) backdrop-blur-[3px]'
})``;

export const Wrap = styled.div.attrs({
	className: 'max-w-7xl w-full min-h-0 flex-1 self-center p-10 max-sm:p-4 pt-6 bg-white/15 backdrop-blur-[3px] flex flex-col gap-5 overflow-hidden'
})``;
