import styled from 'styled-components';
import { CardWrap } from '../villager/villager.style';

const base = '/animal_guide';

export const SelectWrap = styled(CardWrap).attrs({
	className: 'bg-(image:--glass) shadow-(--shadow) rounded-2xl p-8 overflow-scroll gap-8'
})``;

export const SelectBox = styled.label.attrs({
	className:
		'py-4 px-7 w-full flex flex-col gap-3 bg-(image:--glass2) shadow-(--shadow) rounded-xl relative cursor-pointer'
})`
	input {
		appearance: none;
		width: 2rem;
		aspect-ratio: 1;
		background: var(--p) center / 60% no-repeat;
		border-radius: 50%;
		position: absolute;
		top: 0;
		right: 0;
		translate: 50% -50%;
	}
	input:checked {
		background-image: url(${base}/check.svg);
	}
`;

export const Submit = styled.button.attrs({
	type: 'button',
	className: 'bg-(image:--glass2) absolute right-10 bottom-10 py-2 px-4 rounded-lg shadow-(--shadow) font-bold'
})``;
