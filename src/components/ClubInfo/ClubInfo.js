import React from 'react';
import { Jumbotron, Col, Row} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faYoutubeSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"

import imageFemale from '../image/female.png'
import imageMale from '../image/male.png'

const ClubInfo = (props) => {
    console.log(props.ClubInfo)
    const {strTeam, strTeamBadge, intFormedYear, strCountry, strGender, strDescriptionEN, strSport, strStadiumThumb } = props.ClubInfo

    const BackGroundStyle = {
        backgroundImage: `url(${strStadiumThumb})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }

    const DetailsStyle = {
        paddingLeft: '50px',
        fontFamily: 'Times New Roman'
    }
    console.log(strGender)
    const GendImg = () => {
        if (strGender === "Male") {
            return (

                <img style={{ width: '100%' }} src={imageMale} />

            )
        }
        else {
            return (

                <img style={{ width: '100%' }} src={imageFemale} />

            )

        }

    }
    return (

        <div >
            <div style={{ backgroundColor: 'tomato' }}>

                <Jumbotron fluid style={BackGroundStyle}>

                    <img style={{
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        maxHeight: '100px'

                    }} src={strTeamBadge} />

                </Jumbotron>
            </div>
            <div style={{ backgroundColor: '#00344D' ,marginTop:'20px'}}>
                <Jumbotron style={{ width: '80%', marginLeft: '10%', backgroundColor: 'tomato', borderRadius: '10px' }}>
                    <Row>
                        <Col style={DetailsStyle} sm={8}>
                            <h1 style={{ color: 'white', fontWeight: 'bold' }}>{strTeam}</h1>
                            <h5 style={{ color: 'white',fontWeight: '500' }}>Founded Year: {intFormedYear}</h5>
                            <h5 style={{ color: 'white' ,fontWeight: '500'}}>Country: {strCountry}</h5>
                            <h5 style={{ color: 'white' ,fontWeight: '500'}}>Sports Type: {strSport}</h5>
                            <h5 style={{ color: 'white',fontWeight: '500' }}>Gender: {strGender}</h5>
                        </Col>
                        <Col sm={4}>
                            {
                                GendImg()
                            }
                        </Col>
                    </Row>

                </Jumbotron>
                <div >
               
                        <p style={{fontFamily:'Times New Roman',paddingLeft:'10%',paddingRight:'10%',color:'white'}}>{strDescriptionEN}</p>
                        <div style={{marginLeft:'50%'}}> 
                        <a href="http://www.facebook.com"> <FontAwesomeIcon  icon={faFacebookF}/></a> 
                        <a href="http://www.youtube.com">  <FontAwesomeIcon icon={faYoutubeSquare} /></a>
                        <a href="http://www.twitter.com"> <FontAwesomeIcon icon={faTwitterSquare} /></a> 
                    </div>
                </div>


            </div>
        </div>

    );
};

export default ClubInfo;