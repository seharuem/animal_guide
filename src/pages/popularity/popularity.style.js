import styled from 'styled-components';
import { CardWrap } from '../villager/villager.style';

const base = '/animal_guide';

export const SelectWrap = styled(CardWrap).attrs({
	className: 'bg-(image:--glass) shadow-(--shadow) rounded-2xl p-8 overflow-scroll gap-8 flex-1'
})``;

export const SelectBox = styled.label.attrs({
	className:
		'py-4 px-7 w-full flex flex-col gap-3 bg-(image:--glass2) shadow-(--shadow) rounded-xl relative cursor-pointer'
})`
	transition: background-color 0.1s ease-out;
	&:hover {
		background-color: rgba(255, 255, 255, 0.3);
	}
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
		transition: inherit;
	}
	input:hover {
		background-color: #42a767;
	}
	input:checked {
		background-image: url(${base}/check.svg);
	}
`;

export const CheckBox = styled.div.attrs({
	className:
		'w-35 h-full pb-2 flex flex-col bg-(image:--glass) shadow-(--shadow) rounded-2xl font-bold text-lg relative'
})`
	button {
		position: absolute;
		background: url(${base}/close.svg) center / 80% no-repeat;
		background-color: var(--text);
		width: 28px;
		aspect-ratio: 1;
		right: 0;
		top: 0;
		border-radius: 50%;
		translate: 40% -40%;
		transition: background-color 0.1s ease-out;
	}
	button:hover {
		background-color: #9d8a6e;
	}
`;

export const Submit = styled.button.attrs({
	type: 'button',
	className: 'bg-(image:--glass2) absolute right-10 bottom-10 py-2 px-4 rounded-lg shadow-(--shadow) font-bold'
})`
	transition: background-color 0.1s ease-out;
	&:hover {
		background-color: rgba(255, 255, 255, 0.3);
	}
`;
