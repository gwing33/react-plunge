# React Plunge

**NOT IMPLIMENTED YET:** See [Plunge](https://github.com/gwing33/plunge) for more info on that.

React Plunge is a High Order Function that binds store like data to a component as ``props``.
State is preserved within the React Plunge Component

## TODO
- [x] Get the proof of concept working.
- [ ] Write tests around the component.
- [ ] Get an example up and running.

### Install
```bash
npm install react-plunge
```

### Usage
```javascript
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
```
