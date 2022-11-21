import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, number } = this.props;
    return (
      <div className={ `planet-card${number}` } data-testid="planet-card">
        <p className="planet-name" data-testid="planet-name">
          { planetName }
        </p>
        <img className="planet-img" src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default PlanetCard;
