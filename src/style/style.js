import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Url = styled(Link).attrs({
	className: 'font-extrabold text-lg'
})`
	&.page {
		position: relative;
	}
	&.page::after {
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
	&.page:hover::after {
		scale: 1 1;
	}
	&.login {
		display: flex;
		gap: 4px;
		align-items: center;
	}
	&.login::after {
		content: '';
		width: 22px;
		aspect-ratio: 1;
		background: url('./login.svg') center / contain no-repeat;
	}
`;
