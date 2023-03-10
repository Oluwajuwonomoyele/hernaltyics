import { useMemo, useState } from "react";
import { useTable } from "react-table";
import useFetch from '../hooks/useFetch';
import { Results, ResultsContainer, Header, Table, TableHead, TableRow, TH, TableBody, BodyRow, BodyData, PendingDiv, ErrorDiv} from '../styles/StateResults.styles'
import { ImSpinner10 } from 'react-icons/im'

const StateResults = () => {
    const { result, pending, err } = useFetch('https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=state_result')

    const results = result ?? []

    console.log(result)

    const data = useMemo(() => [
        {
            col1: results?.Abia?.[0]?.state_name,
            col2: results?.Abia?.[2]?.candidate_votes,
            col3: results?.Abia?.[0]?.candidate_votes,
            col4: results?.Abia?.[1]?.candidate_votes,
            col5: results?.Abia?.[0]?.political_party_name
        },
        {
            col1: results?.Adamawa?.[0]?.state_name,
            col2: results?.Adamawa?.[2]?.candidate_votes,
            col3: results?.Adamawa?.[1]?.candidate_votes,
            col4: results?.Adamawa?.[0]?.candidate_votes,
            col5: results?.Adamawa?.[0]?.political_party_name
        },
        {
            col1: results?.Anambra?.[0]?.state_name,
            col2: results?.Anambra?.[1]?.candidate_votes,
            col3: results?.Anambra?.[0]?.candidate_votes,
            col4: results?.Anambra?.[2]?.candidate_votes,
            col5: results?.Anambra?.[0]?.political_party_name
        },
        { 
            col1: results?.['Cross River']?.[0]?.state_name,
            col2: results?.['Cross River']?.[2]?.candidate_votes,
            col3: results?.['Cross River']?.[1]?.candidate_votes,
            col4: results?.['Cross River']?.[0]?.candidate_votes,
            col5: results?.['Cross River']?.[0]?.political_party_name
        },
        { 
            col1: results?.Lagos?.[0]?.state_name,
            col2: results?.Lagos?.[1]?.candidate_votes,
            col3: results?.Lagos?.[0]?.candidate_votes,
            col4: results?.Lagos?.[2]?.candidate_votes,
            col5: results?.Lagos?.[0]?.political_party_name
        },
        { 
            col1: results?.Rivers?.[0]?.state_name,
            col2: results?.Rivers?.[2]?.candidate_votes,
            col3: results?.Rivers?.[0]?.candidate_votes,
            col4: results?.Rivers?.[1]?.candidate_votes,
            col5: results?.Rivers?.[0]?.political_party_name
        }
    ], [])
    
    
    const columns = useMemo(() => [
        {
            Header: 'State', 
            accessor: 'col1'
        },
        {
            Header: 'APC',
            accessor: 'col2'
        },
        {
            Header: 'LP',
            accessor: 'col3'
        },
        {
            Header: 'PDP',
            accessor: 'col4'
        },
        {
            Header: 'Leading',
            accessor: 'col5'
        },
    ], [])

    const tableInstance = useTable({columns, data})

    console.log(data)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance

    return (  
        <Results>
            <ResultsContainer>
                <Header>
                    <h1>State Results</h1>
                </Header>
                { pending && !err ? <PendingDiv> <ImSpinner10 /> </PendingDiv> : result && !err ? <Table {...getTableProps()}>
                    <TableHead>
                        {headerGroups.map((headerGroup, i) => (
                            <TableRow {...headerGroup.getHeaderGroupProps()} key={i}>
                                {headerGroup.headers.map((column, i) => (
                                    <TH {...column.getHeaderProps} key={i}>
                                        {column.render('Header')}
                                    </TH>
                                ))}
                            </TableRow>
                        ))}
                    </TableHead>
                    <TableBody {...getTableBodyProps()}>
                        {rows.map((row, i) => {
                            prepareRow(row)
                            return (
                                <BodyRow {...row.getRowProps()} key={i}>
                                    {row.cells.map((cell, i) => {
                                        return (
                                            <BodyData {...cell.getCellProps()} key={i}>
                                                {cell.render('Cell')}
                                            </BodyData>
                                        )
                                    })}

                                </BodyRow>
                            )
                        })}
                    </TableBody>
                </Table> : err ? <ErrorDiv><p>{err}</p></ErrorDiv> : '' }
            </ResultsContainer>
        </Results>
    );
}
 
export default StateResults;