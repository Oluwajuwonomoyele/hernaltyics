import styled, {keyframes} from "styled-components";

export const Results = styled.div`
    border: 1px solid #393C4A;
    margin: 4rem 0;
    border-radius: 13px;
    overflow: hidden;

`

export const ResultsContainer = styled.div`

`

export const Header = styled.div`
    background-color: #111421;
    color: white;
    padding: 0.5rem 1rem;

    h1 {
        font-size: 24px;
        font-weight: 500;
    }

`

export const Table = styled.table`
    border-collapse: collapse;
    table-layout: fixed;
    width: 98%;
    margin: 0 auto 1rem auto;

`
export const TableHead = styled.thead`

`
export const TableRow = styled.tr`

`
export const TH = styled.th`
    font-size: 14px;
    padding: 0.3rem 1rem;
    border: 1px solid #393C4A;
    border-top: none;
    text-align: left;
`
export const TableBody = styled.tbody`

`
export const BodyRow = styled.tr`

`
export const BodyData = styled.td`
    border: 1px solid #393C4A;
    border-top: none;
    font-size: 14px;
    padding: 0.3rem 1rem;
    width: 25%;
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
