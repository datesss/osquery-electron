// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import { Header, Button } from 'semantic-ui-react'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <Header as='h1' size='huge'>Home</Header>
          <Button.Group>
          <Link to="/counter">
            <Button>
            Counter
            </Button>
          </Link>
          <Link to="/queryPage">
            <Button>
            Query Page
            </Button>
          </Link>
        </Button.Group>
        </div>
      </div>
    );
  }
}
