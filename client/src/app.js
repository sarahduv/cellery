import React from 'react';
import appEvents from './appEvents.js';
import Dashboard from './components/dashboard/dashboard.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
      widgetConfigs: [],
    };
    window.addEventListener('resize', this.handleSizeChange);
    appEvents.onPlusClick = this.handleOnPlusClick;
  }

  handleOnPlusClick = (tile) => {
    // Duplicate the object because we don't want to change the original one
    const widgetConfigs = Object.assign({}, this.state.widgetConfigs);

    // This is temporary, we want to replace this with whatever we choose
    // in a selection menu of which widget we want to add. For now, always clock
    widgetConfigs[tile.props.id] = {
      kind: 'clock',
      numOfTilesW: 1,
      numOfTilesH: 1,
    };

    this.setState({ widgetConfigs });
  }

  handleSizeChange = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  render() {
    return (
      <>
        <Dashboard
          height={this.state.height}
          width={this.state.width}
          widgetConfigs={this.state.widgetConfigs}
        />
      </>
    );
  }
}
