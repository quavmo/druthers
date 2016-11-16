import { Component } from 'react';
import DataService from '../core/services/DataService';

export default class AbstractScreen extends Component {  
  componentDidMount() {
    DataService.on('value', this.setStateIfData, this);
  }

  setStateIfData(data) {
    console.log(this.props.id);
    data.val() && this.setState(data.val().dockets[this.props.id]);
  }
}