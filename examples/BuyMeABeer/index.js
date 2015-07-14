'use strict';
import React from 'react';
import plunge from 'react-plunge';

class Index extends React.Component {
  _onClick() {
    this.props.ApiData.store.add({
      clicks: this.props.ApiData.data.clicks + 1
    });
  }

  render() {
    let clicks = this.props.ApiData.data.clicks;
    let text = clicks == 1 ? 'Beer' : 'Beers';

    return (
      <div styles={[ LayoutStyle.center, LayoutStyle.half, styles.container ]}>
        <div styles={styles.number}>
          {clicks} {text} Donated
        </div>
        <button type='text' onClick={this._onClick.bind(this)} value='Donate a beer'/>
      </div>
    );
  }
}

let ApiData = {
  name: 'ApiData',
  uri: '/api/data',
  data: {
    clicks: 0
  }
};

export default plunge(Index, [ApiData]);
