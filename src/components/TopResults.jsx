import useFetch from '../hooks/useFetch';
import { Results, ResultsContainer, TopCands, Box, Bar, ArrowBox, CanName, PendingDiv, ErrorDiv } from '../styles/TopResults.styles';
import { ImSpinner10 } from 'react-icons/im'

const TopResults = () => {
    const { result, pending, err } = useFetch('https://elect-her.herokuapp.com/api/v1/elections/candidate-total-votes?type=president')

    const getInitials = function (name) {
        let parts = name.split(' ')
        let initials = ''
        for (var i = 0; i < parts.length; i++) {
          if (parts[i].length > 0 && parts[i] !== '') {
            initials += parts[i][0]
          }
        }
        return initials
      }

    let totalVotes = 0

    totalVotes = result.reduce((acc,can) => acc = acc + can.candidates_vote, 0)

    const newResults = result.map(can => {
        return {
            ...can,
            party_initials: getInitials(can.political_party_name),
            vote_percentage: ((can.candidates_vote / totalVotes) * 100).toFixed(2),
        }
    })

    return (  
        <Results>
            <ResultsContainer>
                <h1>Top Candidates</h1>
                <h3>president</h3>

                { pending && !err ? <PendingDiv> <ImSpinner10 /> </PendingDiv> : result && !err ? 
                <TopCands>
                {newResults.map(can => {
                    return (
                        <Box width={can.vote_percentage} key={can.candidate_id}>
                            <Bar initials={can.party_initials}></Bar>
                            <ArrowBox>
                                <CanName initials={can.party_initials}>{can.full_name}, {can.party_initials}</CanName>
                                <p>{can.candidates_vote} votes ({can.vote_percentage})%</p>
                            </ArrowBox>
                        </Box>
                    )
                })}
            </TopCands> : err ? <ErrorDiv><p>{err}</p></ErrorDiv> : ''}
            </ResultsContainer>
        </Results>
    );
}
 
export default TopResults;