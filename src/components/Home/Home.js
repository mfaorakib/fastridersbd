import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Row} from 'react-bootstrap';
import TeamDetails from '../TeamDetails/TeamDetails';
import Jumbotron from 'react-bootstrap/Jumbotron'

const Home = () => {
    const [teams, setTeam] = useState([])
    const HomeStyle = {
        display: 'grid',
        marginTop: '20px',
        marginBottom: '20px',
        paddingLeft: '30px',
        backgroundColor: '#99B3CE',
        width:'100%'


    }

    useEffect(() => {

        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams))


    }, [])

    const TeamCard = () => {
        return (
            <Row >
                {
                    teams.map(teams => <TeamDetails TeamName={teams}></TeamDetails>)
                }
            </Row>
        )
    }

    return (
       <div>
            <Jumbotron fluid style={{backgroundImage:'url(https://image.freepik.com/free-vector/football-arena-field-soccer-stadium-background-with-bright-spotlights_212889-4388.jpg)'}}> 
                    <Container>
                        <h1 style={{textAlign:'center',color:'white',fontWeight:'bolder'}}>English Premier League (EPL)</h1>
                    </Container>
                </Jumbotron>
        <Container style={HomeStyle}>
             
            {TeamCard()}

        </Container>
        </div>
    )


};

export default Home;