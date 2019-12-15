import React from 'react';
import { When } from '../conditionals.js';
import appEvents from '../../appEvents.js';
import appConstants from '../../appConstants.js';
import { SettingsContext } from '../settingsContext.js';
import './widget.scss';

let nextWidgetId = 0;

class Widget extends React.Component {
  static contextType = SettingsContext;

  constructor(props) {
    super(props);
    this.id = nextWidgetId;
    nextWidgetId++;

    this.state = {
      isHover: false,
    };
  }

  setHover(isHover) {
    this.setState({ isHover });
  }

  renderWidget() {
    return null;
  }

  render() {
    const { tileSize, config } = this.props;
    const calcSize = (numOfTiles) => {
      return (numOfTiles * tileSize) + ((numOfTiles - 1) * (appConstants.tileMargin * 2))
    }

    // TILE margin margin TILE margin margin TILE margin margin TILE

    return (
      <>
        <div
          onMouseEnter={() => this.setHover(true)}
          onMouseLeave={() => this.setHover(false)}
          style={{
            width: calcSize(config.numOfTilesW),
            height: calcSize(config.numOfTilesH),
          }}
          className="widget">
          {this.renderWidget()}
        </div>
      </>
    );
  }
}

export default Widget;