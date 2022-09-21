import React from 'react';
import Title from './Title';

class Missions extends React.Component {
  render() {
    const mission = 'Missões';
    return (
      <div data-testid="missions">
        <Title headline={ mission } />
      </div>
    );
  }
}

export default Missions;
