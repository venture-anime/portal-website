import styled from 'styled-components';
import { textHoverColour } from "Styles/base";

const ContainerLink = styled.a`
    font-size: 0.75em;
    color: ${textHoverColour};
    padding: 0 0.25em;
    border-radius: 3px;
    text-decoration: underline;
    display: flex;
    align-items: center;
    text-decoration: none;

    i {
        font-size: 0.75em;
    }

    &:hover:not(:disabled) {
        color: ${textHoverColour};
    }

    &:focus {
        outline: none;
    }
`;

export {
    ContainerLink,
};