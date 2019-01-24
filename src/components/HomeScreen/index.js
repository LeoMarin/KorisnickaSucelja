import React, { Component } from "react";
import Counter from "./Counter";
import fnatic from "static/teams/fnatic.png"
import ig from "static/teams/ig.png"
import styles from "./styles.module.css";
import {Helmet} from "react-helmet";

function calculetTime() {
  var date = new Date("Jan 26, 2019 9:00:00").getTime()
  var now = new Date().getTime();
  var distance = date - now;
  if(distance < 0)
    distance = 0;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours =  Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return {days, hours, minutes, seconds}
}

class HomeScreen extends Component {
  constructor(props){
    super(props)
    var time = calculetTime()

    this.state = {
      days: time.days,
      hours:  time.hours,
      minutes: time.minutes,
      seconds: time.seconds
    }
  }
  render (){
    const { days, hours, minutes, seconds } = this.state;
    return (
      <>            
        <Helmet>
          <meta charSet="utf-8" />
          <title>Worlds - Home</title>
        </Helmet>
        <div className={styles.Background}></div>
        <div className={styles.overlay}></div>
        <div className={styles.match}>
          <h1 className={styles.title}>NEXT MATCH IN:</h1>
          <div className={styles.counter}>
            <Counter number={days} label="DAYS" />
            <Counter number={hours} label="HOURS"/>
            <Counter number={minutes} label="MINUTES"/>
            <Counter number={seconds} label="SECONDS"/>
          </div>
          <div className={styles.teams}>
            <div>
              <img className={styles.teamLogo} src={fnatic} alt="fnatic"/>
              <p className={styles.teamName}>Fnatic</p>
            </div>
            <p className={styles.vs}>
              VS
            </p>
            <div>
              <img className={styles.teamLogo} src={ig} alt="ig"/>
              <p className={styles.teamName}>Invictus Gaming</p>
            </div>
          </div>
        </div>
      </>
    )
  }

  componentDidMount () {  
    this.myInterval = setInterval(() =>{
      var time = calculetTime()

      this.setState(prevState =>({
        days: time.days,
        hours:  time.hours,
        minutes: time.minutes,
        seconds: time.seconds
      }))
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.myInterval)
  }
}

export default HomeScreen