import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './style.css';

class Missions extends React.Component {
  render() {
    const missionProp = 'Missões';
    return (
      <>
        <Title headline={ missionProp } />
        <div className="container-missions" data-testid="missions">
          {missions.map((mission) => (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }

            />
          ))}
        </div>
      </>
    );
  }
}

export default Missions;
