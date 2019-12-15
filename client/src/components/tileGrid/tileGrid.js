import React from 'react';
import appConstants from '../../appConstants.js';
import { SettingsContext } from '../settingsContext.js';
import Tile from '../tile/tile.js';
import './tileGrid.scss';

class TileGrid extends React.Component {
  static contextType = SettingsContext;

  constructor(props) {
    super(props);
    this.state = {
      dummy: [],
    };
  }

  render() {
    const { width } = this.props;
    const { tilesPerRow, rows } = this.props;
    const { widgetConfigs } = this.props;
    const realWidth = width - appConstants.scrollbarWidth;
    const tileWidth = (realWidth / tilesPerRow) - (appConstants.tileMargin * 2);

    const tileRows = [];
    for (let row = 0; row < rows; ++row) {
      const tileRow = [];
      for (let col = 0; col < tilesPerRow; ++col) {
        const tileId = 'tile_' + row + '_' + col;
        tileRow.push(<Tile
          id={tileId}
          key={tileId}
          size={tileWidth}
          widgetConfig={widgetConfigs[tileId]}
        />);
      }
      tileRows.push(
        <div className="tileRow" key={row} style={{ minWidth: width }}>{tileRow}</div>
      );
    }

    return (
      <>
        <div className="tileGrid">
          {tileRows}
        </div>
      </>
    );
  }
}

export default TileGrid;