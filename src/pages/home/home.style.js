import styled from 'styled-components';

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
