import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import {
    Link,
    
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const TeamDetails = (props) => {

    const { strTeam, strTeamBadge, strSport, idTeam } = props.TeamName
    return (

        <Col md='4' style={{ padding: '20px' }}>
            
                <Card style={{ width: '20rem' }} >
                    <Card.Img variant="top" src={strTeamBadge} />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>{strTeam}</Card.Title>
                        <Card.Text style={{ textAlign: 'center', textDecoration: 'none' }}>
                            SportsType: {strSport}
                        </Card.Text>
                        <Link to={`/TeamDetails/${idTeam}`}>
                        <Button variant="primary" style={{ marginLeft: '6rem' }}>Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                        </Link>

                    </Card.Body>
                </Card>
            
        </Col>
    );
};

export default TeamDetails;