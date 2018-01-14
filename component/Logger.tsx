import * as React from 'react';
import { observer } from 'mobx-react';

import Player from '../game/player';

import { LoggerStyle } from './style';

export default class Logger extends React.Component {
  render() {
    return <div style={LoggerStyle}>{'MY NAME IS ELMO'}</div>;
  }
}
