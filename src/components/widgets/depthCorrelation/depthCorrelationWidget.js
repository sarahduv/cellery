import React from 'react';
import Highcharts from 'highcharts/js/highcharts';
import HighchartsReact from 'highcharts-react-official';
import Widget from '../widget.js';
import $ from 'jquery';
import '../../dark-unica.scss';
import './depthCorrelationWidget.scss';

class DepthCorrelation extends Widget {
  constructor(props) {
    super(props);
    this.state.series = [];
    this.state.isLoading = true;

    // Update every minute
    this.internalTimer = setInterval(this.handleRefresh, 60000);
  }

  handleRefresh = () => {
    //TODO: make this configurable
    $.ajax({
      url: "http://localhost:3333/api/depthCorrelation",
    }).done((result) => {
      this.setState({ series: result.series, isLoading: false });
    });
  }

  getOptions = () => {
    return {
      chart: {
        type: 'scatter',
        width: this.getTileWidth(),
        height: this.getTileHeight(),
        styledMode: true,
        zoomType: 'xy',
      },

      title: {
        text: 'Depth Correlation',
      },

      subtitle: {
        text: 'Last 24 Hours'
      },

      yAxis: {
        title: {
          text: 'Depth'
        }
      },

      xAxis: {
        title: {
          enabled: true,
          text: 'Magnitude'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
      },

      legend: {
        enabled: false,
      },

      plotOptions: {
        scatter: {
          marker: {
            radius: 2,
          }
        }
      },

      credits: {
        enabled: false
      },

      series: [
        {
          name: 'Earthquake',
          data: this.state.series,
        }
      ]
    };
  }

  renderWidget() {
    const options = this.getOptions();
    if (this.state.isLoading) {
      this.handleRefresh();
      return <div className="DepthCorrelation">Loading...</div>;
    }
    if (this.state.isResizing) {
      return <div className="DepthCorrelation">(Resizing in progress)</div>;
    }

    return <div className="DepthCorrelation">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>;
  }
}

export default DepthCorrelation;