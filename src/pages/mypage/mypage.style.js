import styled from 'styled-components';
import { Scroll } from '../../components/style';

const base = '/animal_guide';

export const Fold = styled.button.attrs({
	type: 'button',
	className: 'border-b-2 flex justify-between pb-1 text-2xl font-extrabold'
})`
	&::after {
		content: '';
		width: 0.8rem;
		aspect-ratio: 1;
		background: url(${base}/fold.svg) center / contain no-repeat;
		translate: -1rem;
	}
	&.fold::after {
		scale: -1;
	}
`;

export const Form = styled(Scroll).attrs({
	as: 'form',
	className:
		'grid gap-x-8 gap-y-4 grid-flow-col justify-items-center max-lg:grid-flow-row self-center pt-4 pb-20 mx-20 max-lg:mx-0 text-lg font-bold relative'
})``;

export const Label = styled.label.attrs({
	className: 'w-full flex flex-col gap-2 items-start'
})``;

export const Edit = styled.button.attrs({
	type: 'button',
	className: 'text-white bg-(--c) absolute max-lg:static justify-self-end bottom-0 right-0 rounded-lg py-1 px-3 max-lg:mt-3'
})``;
