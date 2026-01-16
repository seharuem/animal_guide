import styled from 'styled-components';
import { Wrap } from '../../components/style';

export const CardWrap = styled.div.attrs({
	className: 'w-full grid gap-2'
})`
	grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
  grid-auto-rows: min-content;
`;

export const Mini = styled.button.attrs({
	type: 'button',
	className: 'w-full pb-2 bg-(image:--glass2) shadow-(--shadow) rounded-2xl border-solid border-1 border-white/10 font-extrabold'
})`
	img {
		width: 100%;
	}
	transition: background-color 0.2s ease-out;
	&:hover {
		background-color: rgba(255, 255, 255, 0.4);
	}
`;
