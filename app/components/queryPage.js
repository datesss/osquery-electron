// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './QueryPage.css';

class Counter extends Component {
  props: {
    increment: () => void,
    incrementIfOdd: () => void,
    incrementAsync: () => void,
    decrement: () => void,
    counter: number
  };

  render() {
    const { queryOsquery, response } = this.props;
    console.log('whoa');
    console.log(response);
    const listItems = response.map((item) =>
        <li>{item.command}</li>
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
              <ul><li>test</li>{listItems}</ul>
          </div>
          <div className={styles.btnGroup}>
              <button className={styles.btn} onClick={() => queryOsquery('select * from "shell_history" limit 10;')} data-tclass="btn">async</button>
          </div>
      </div>
    );
  }
}

export default Counter;
