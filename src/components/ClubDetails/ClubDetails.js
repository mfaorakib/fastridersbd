import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ClubInfo from '../ClubInfo/ClubInfo';

const ClubDetails = () => {
    const { idTeam } = useParams();
    const [club, setClub] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setClub(data.teams)
            }
            )

    }, [idTeam])
    return (
        <div>
            {
                club.map(cl => <ClubInfo ClubInfo={cl}></ClubInfo>)

            }

        </div>
    );
};

export default ClubDetails;