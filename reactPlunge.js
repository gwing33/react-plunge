/* * *
 * Plunge class
 * * */

import React from 'react';
import Plunge from 'plunge';

// Wraps any Component and exposses the Store onto it.
let reactPlunge = (Component, endpoints) => {
  let stores = Plunge.createContexts(endpoints);

  class Connect extends React.Component {
    constructor(props) {
      super(props);

      this.state = {};

      // Subscribe to Event Stream
      stores.map(s => {
        s.addChangeListener( this._onStateChange.bind(this) );

        this.state[s.name] = {
          store: s,
          data: s.get()
        };
      });
    }

    _onStateChange(s, data) {
      console.log('data change');
      let obj = {};
      obj[s.name] = {
        store: s,
        data: s.get()
      };

      this.setState(obj);
    }

    render() {
      return <Component {...this.state} />;
    }
  }

  return Connect;
};

export default reactPlunge;
