'use strict';

import React from 'react';
import Row from './Row';

export default class Table extends React.Component {
  render () {
    this.props.table.map((row,i) => )
    return(<table className='table' onBlur={this.props.onBlur} onFocus={this.props.onFocus}><tbody></tbody></table>);
  }
}
