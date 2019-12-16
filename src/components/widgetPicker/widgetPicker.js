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
        <div class="WidgetPicker">
          <div class="WidgetPickerHeader">
            Add Widget
          </div>
          <div class="WidgetPickerOption"
            onClick={() => appEvents.onWidgetCreated(this.props.tile, 'clock')}>
            <img class="WidgetPickerImage" src="/images/plus.png" />
            <div class="WidgetPickerName">Clock</div>
          </div>
          <div class="WidgetPickerOption"
            onClick={() => appEvents.onWidgetCreated(this.props.tile, 'hourlyEarthquakes')}>
            <img class="WidgetPickerImage" src="/images/plus.png" />
            <div class="WidgetPickerName">Hourly Earthquakes</div>
          </div>
          <div class="WidgetPickerOption"
            onClick={() => appEvents.onWidgetCreated(this.props.tile, 'strongestEarthquake')}>
            <img class="WidgetPickerImage" src="/images/plus.png" />
            <div class="WidgetPickerName">Strongest Magnitude</div>
          </div>
        </div>
      </>
    );
  }
}

export default WidgetPicker;