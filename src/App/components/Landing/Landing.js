import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../../../redux/actions/index";
import styles from './Landing.scss'

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
     
    };
  }

  render() {
    return (
        <h1 className={styles.landing}>Landing Page</h1>
    );
  }
}
export default LandingPage;