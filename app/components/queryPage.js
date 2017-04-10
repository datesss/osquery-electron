// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './QueryPage.css';
import { List, Button, Icon } from 'semantic-ui-react'
import { BarChart, Bar, CartesianGrid, YAxis, XAxis, Tooltip } from 'recharts';
import _ from 'lodash';
class Counter extends Component {
  props: {
    increment: () => void,
    incrementIfOdd: () => void,
    incrementAsync: () => void,
    decrement: () => void,
    counter: number
  };

  componentDidMount() {
    this.props.queryOsquery('select * from "wifi_survey";')
  }

  render() {
    const { queryOsquery } = this.props;


    let response = _.sortBy(_.uniqBy(this.props.response, 'network_name'), ['rssi']);
    _.each(response, (item) => { item.rssi = (parseInt(item.rssi)*-1); return item;});
    console.log(response);
    const listItems = response.map((item) =>
        <li>{item.network_name}</li>
    );
    return (
      <div>
        <Button icon>
          <Link to="/">
            <Icon name='arrow left' style={{color:"black"}} />
          </Link>
        </Button>
          <div  className={`query ${styles.query}`}>
              <h2>asdf</h2>
              <BarChart width={600} height={400} data={response}>
                <Bar dataKey="rssi" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Tooltip />
                 <XAxis interval="0" dataKey="network_name" />
                 <YAxis />
              </BarChart>
              <List items={listItems} />
          </div>
          <div className={styles.btnGroup}>
              <button className={styles.btn} onClick={() => queryOsquery('select * from "wifi_survey";')} data-tclass="btn">async</button>
          </div>
      </div>
    );
  }
}

export default Counter;
