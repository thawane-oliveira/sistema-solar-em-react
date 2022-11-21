import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './style.css';

class SolarSystem extends React.Component {
  render() {
    const planetsProp = 'Planetas';
    return (
      <>
        <Title headline={ planetsProp } />
        <div className="container-planets" data-testid="solar-system">
          {planets.map((planet, index) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
              number={ index }
            />
          ))}
          ;
        </div>
      </>
    );
  }
}

export default SolarSystem;
