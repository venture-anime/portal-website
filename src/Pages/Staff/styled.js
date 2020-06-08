import styled from "styled-components";
import {
    Container,
    mainTextColour,
    subTextColour,
} from "Styles/base";

const staffBgColour = "#000000";

const StaffContainer = styled(Container)`
    background: ${staffBgColour};
    text-align: center;
    padding-top: 160px;

    @media only screen and (max-width: 767px) {
        padding-top: 80px;
    }
`;

const Section = styled.div`
    margin-bottom: 2em;
`;

const SectionTitle = styled.div`
    font-size: 2em;
    color: ${subTextColour};
    margin-bottom: 1em;
`;

const CastContainer = styled.div`
    margin: 1em 0.5em;
`;

const CastLabel = styled.div`
    color: ${subTextColour};
    font-size: 0.75em;
    margin-right: 0.5em;
`;

const UnclickableCast = styled.div`
    margin: 0 1em;
`;

const CastDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Cast = styled.a`
    font-size: 1em;
    text-decoration: underline;
    color: ${mainTextColour};
    cursor: pointer;

    &:hover:not(:disabled) {
        color: ${subTextColour};
    }

    &:focus {
        outline: none;
    }
`;

export {
    StaffContainer,
    Section,
    SectionTitle,
    CastContainer,
    CastLabel,
    UnclickableCast,
    CastDetailsWrapper,
    Cast,
};
