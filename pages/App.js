import styles from "../styles/App.module.css";
import { Component } from "react";
import Navbar from "../components/Navbar";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Navbar></Navbar>
      </div>
    );
  }
}

export default App;