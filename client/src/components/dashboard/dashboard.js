import React from 'react';
//import { When } from '../conditionals.js';
import { SettingsContext } from '../settingsContext.js';
import TileGrid from '../tileGrid/tileGrid.js';
import './dashboard.scss';

class Dashboard extends React.Component {
  static contextType = SettingsContext;

  constructor(props) {
    super(props);
    this.state = {
      dummy: [],
    };
  }

  render() {
    const { width, height, widgetConfigs } = this.props;
    return (
      <>
        <h2>
          Width: {width}
        </h2>
        <TileGrid
          width={width}
          height={height}
          tilesPerRow={5}
          rows={3}
          widgetConfigs={widgetConfigs}
        />
      </>
    );
  }
}

export default Dashboard;