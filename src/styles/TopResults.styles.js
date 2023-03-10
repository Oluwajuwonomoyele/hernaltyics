import styled, {keyframes} from "styled-components"


export const Results = styled.div`
    
`
export const ResultsContainer = styled.div`

    h1 {
        font-size: 24px; 
    }
    h3 {
        font-size: 18px;
        text-transform: uppercase;
        font-weight: 500;
        margin-top: 1rem;
    }
`
export const TopCands = styled.div`
    width: 100%;
    height: 16px;
    display: flex;
    margin: 2rem 0 12rem 0;
`
export const Box = styled.div`
    flex-basis: ${({width}) => width}%;
    width: 100%;
    position: relative;
`
export const Bar = styled.div`
    background-color: ${({initials, theme}) => initials === 'APC' ? theme.colors.APC : initials === 'LP' ? theme.colors.LP : initials === 'PDP' ? theme.colors.PDP : 'transparent' };
    width: 100%;
    height: 100%;    
`
export const ArrowBox = styled.div`
    position: absolute;
    padding: 0.5rem 1rem;
    background-color: white;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 2rem;

    &::before {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        left: 55%;
        border: 0.6rem solid white;
        border-color: transparent transparent white white;
        transform-origin: 0 0;
        transform: rotate(135deg) translateX(-0.5rem);
        box-shadow: -3px 3px 3px 0 rgba(0, 0, 0, 0.4);
    }

    h4 {
       
    }
    p {
        color: #585858;
        font-weight: 400;
        font-size: 14px;
    }
`
export const CanName = styled.h4`
    color: ${({initials, theme}) => initials === 'APC' ? theme.colors.APC : initials === 'LP' ? theme.colors.LP : initials === 'PDP' ? theme.colors.PDP : 'black' };
    font-size: 16px;
    font-weight: 500;
`

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(365deg);
    }
`
export const PendingDiv = styled.div`
    width: 100%;
    font-size: 2rem;
    text-align: center;
    padding: 2rem 0;

    svg {
        animation: ${rotate} 2s infinite linear ;
    }
`
export const ErrorDiv = styled.div`
 width: 100%;
 text-align: center;
 padding: 2rem 0;

 p {
    color: white;
    font-weight: 700;
 }
`
