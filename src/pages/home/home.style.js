import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title3 = styled.h3.attrs({
	className: 'font-extrabold text-3xl flex items-center gap-2 border-b-3 border-solid pb-2'
})`
	&::before {
		content: '';
		width: 32px;
		aspect-ratio: 1;
		background: center / contain no-repeat;
	}
	&.star {
		border-color: var(--y);
	}
	&.star::before {
		background-image: url('./star.svg');
	}
	&.birth {
		border-color: var(--pink);
	}
	&.birth::before {
		background-image: url('./cake.svg');
	}
`;

export const Rank = styled.div.attrs({
	className: 'flex gap-2 items-center font-extrabold border-b-3 border-solid pb-2'
})``;

export const Menu = styled(Link).attrs({
	className:
		'font-extrabold text-xl flex justify-center gap-2 w-40 p-4 bg-[#ffffffaa] rounded-2xl border-solid border-3'
})`
	transition: border-color 0.2s ease-out;
	&:nth-child(1):hover {
		border-color: #5fa0d7;
	}
	&:nth-child(2):hover {
		border-color: #11a983;
	}
	&:nth-child(3):hover {
		border-color: #E99090;
	}
	&::before {
		content: '';
		width: 16px;
		aspect-ratio: 1;
		background: center / contain no-repeat;
	}
	&:nth-child(1)::before {
		background-image: url('./link1.svg');
	}
	&:nth-child(2)::before {
		background-image: url('./link2.svg');
	}
	&:nth-child(3)::before {
		background-image: url('./link3.svg');
	}
`;
