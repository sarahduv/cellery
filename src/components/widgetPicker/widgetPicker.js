import React from 'react';
import './widgetPicker.scss';
import appEvents from '../../appEvents.js';

class WidgetPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummy: [],
    };
  }

  render() {
    return (
      <>
        <div className="WidgetPicker">
          <div className="WidgetPickerHeader">
            Add Widget
          </div>
          <div className="WidgetPickerOption"
            onClick={() => appEvents.onWidgetCreated(this.props.tile, 'clock')}>
            <img className="WidgetPickerImage" src="/images/plus.png" />
            <div className="WidgetPickerName">Clock</div>
          </div>
          <div className="WidgetPickerOption"
            onClick={() => appEvents.onWidgetCreated(this.props.tile, 'hourlyEarthquakes')}>
            <img className="WidgetPickerImage" src="/images/plus.png" />
            <div className="WidgetPickerName">Hourly Earthquakes</div>
          </div>
          <div className="WidgetPickerOption"
            onClick={() => appEvents.onWidgetCreated(this.props.tile, 'strongestEarthquake')}>
            <img className="WidgetPickerImage" src="/images/plus.png" />
            <div className="WidgetPickerName">Strongest Magnitude</div>
          </div>
          <div className="WidgetPickerOption"
            onClick={() => appEvents.onWidgetCreated(this.props.tile, 'depthCorrelation')}>
            <img className="WidgetPickerImage" src="/images/plus.png" />
            <div className="WidgetPickerName">Depth Correlation</div>
          </div>
        </div>
      </>
    );
  }
}

export default WidgetPicker;