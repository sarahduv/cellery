import React from 'react';
import { When } from '../conditionals.js';
import appEvents from '../../appEvents.js';
import appConstants from '../../appConstants.js';
import { SettingsContext } from '../settingsContext.js';
import ClockWidget from '../widgets/clock/clockWidget.js';
import './tile.scss';

class Tile extends React.Component {
  static contextType = SettingsContext;

  constructor(props) {
    super(props);
    this.state = {
      isHover: false,
    };
  }

  isEmpty() {
    return this.props.widgetConfig == null; // null or undefined
  }

  setHover(isHover) {
    this.setState({ isHover });
  }

  render() {
    const { size, widgetConfig } = this.props;

    // For every widget we add, we need to add the name => react component 
    // in this table. The lambdas make sure these are not created until the 
    // function is called.
    const widgetMap = {
      'clock': () => <ClockWidget config={widgetConfig} tileSize={size} />,
    }

    return (
      <>
        <div onMouseEnter={() => this.setHover(true)}
          onMouseLeave={() => this.setHover(false)}
          className="tile"
          style={{ width: size, height: size, margin: appConstants.tileMargin }}>
          <When condition={this.isEmpty() && this.state.isHover}>
            <div onClick={() => appEvents.onPlusClick(this)} className="plusDiv" />
          </When>
          {widgetConfig ? widgetMap[widgetConfig.kind]() : null}
        </div>
      </>
    );
  }
}

export default Tile;