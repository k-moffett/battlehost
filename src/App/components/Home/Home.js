import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../../../redux/actions/index";
import styles from'./Home.scss'

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
     
    };
  }

  render() {
    return (
        <h1 className={styles.home}>HomePage</h1>
    );
  }
}
export default HomePage;