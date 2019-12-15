import React from 'react';

export const SettingsContext = React.createContext();

export default class SettingsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyValue: 1,
    };
  }

  dummyValueAdd = () => {
    this.setState({ dummyValue: (this.state.dummyValue + 1) });
  };

  render() {
    return (
      // .Provider is built in
      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}
