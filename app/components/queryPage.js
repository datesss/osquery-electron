// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './QueryPage.css';
import { List } from 'semantic-ui-react'
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

  render() {
    const { queryOsquery } = this.props;
    const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    ];
    let response = _.sortBy(_.uniqBy(this.props.response, 'network_name'), ['rssi']);
    _.each(response, (item) => { item.rssi = (parseInt(item.rssi)*-1); return item;});
    console.log(response);
    const listItems = response.map((item) =>
        <li>{item.network_name}</li>
    );
    return (
      <div>
          <div className={styles.backButton} data-tid="backButton">
            <Link to="/">
              <i className="fa fa-arrow-left fa-3x" />
            </Link>
          </div>
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
