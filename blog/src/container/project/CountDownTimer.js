import React from 'react';
import SearchBox from "../../components/countdown-app/SearchBox";
import ClockTimer from "../../components/countdown-app/ClockTimer";
import './project.css';

class CountDownTimer extends React.Component {
  constructor() {
    super();
   
    this.timerSpeed = 1000;
    this.mintues = null;
    this.second = 60;
    this.countHalfWay = 0;
    this.oddOrEven = 0;
    this.interval = null;

    this.state = {
      mintues: null,
      searchfield: "",
      clockText: null,
      timerFeature: "",
      pauseOrResume: true,
    };

    //console.log("contructor");
  }
  searchField = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  submitForm = (event) => {
    if(this.state.searchfield == "" || this.state.searchfield == null){
      alert("Input Cannot be empty");
    }else{
      //receieve input from users.
      this.mintues = parseInt(this.state.searchfield);
      //clear the input
      this.setState({
        searchField: " ",
      })
      //find odd and even, so that we could understand
      //which input is odd, and which is even.
      if (this.mintues % 2 == 0) {
        //even
        this.oddOrEven = 0;
      } else {
        this.oddOrEven = 1;
      }

      //find half of mintues, and round down
      this.countHalfWay = Math.floor(this.mintues / 2);
      //reduce mintues by 1 so that time will start at 3:60 if
      //input is 4
      this.mintues--;

      this.start();
  }
    event.preventDefault();
  };

  start = () => {
    this.setState({
      pauseOrResume: true,
    });
    this.interval = setInterval(() => {
      this.tick();
    }, this.timerSpeed);
  };

  pause = () => {
    clearInterval(this.interval);
  };

  tick = () => {
    this.setState({
      mintues: this.mintues + ":" + this.second,
    });

    this.second--;

    /****function halfwayLogic:
     *  validate the input to display
     * Text Halfway as according to the input from users.
     * ****/
    this.halfWayLogic();

    /** function changeTextTimerLogic
     * The function is responsible for
     * changing the text logic
     * countdown == 0 Time's up
     * countdown == 20 seconds of ending should turn red
     * countdown == 10 text should blinking
     **/
    this.changeTextTimerLogic();
  };

  halfWayLogic() {
    //display half way if input is odd number
    // assume: 5:00
    if (this.oddOrEven == 1) {
      if (this.second == 50 && this.mintues == this.countHalfWay) {
        this.setState({
          clockText: "More than halfway there!",
        });
      }
    } else {
      //display half way if input is even number
      // assume: 4:00
      if (this.mintues == this.countHalfWay && this.second == 0) {
        this.setState({
          clockText: "More than halfway there!",
        });
      }
    }
  }
  changeTextTimerLogic() {
    // if scond less than 0, decrease mintues by 1.
    if (this.second <= 0) {
      if (this.mintues > 0) {
        this.mintues--;
        //reset second to 60 after decrease mintues by 1
        this.second = 60;
      }
    }
    //if countimer equal 0 change to time is up
    //When the countdown timer reaches 0, this text should change to: “Time’s up!”
    if (this.second == -1 && this.mintues == 0) {
      this.setState({
        clockText: "Time is up",
      });
      //then, stop timer
      this.pause();
    }
    //if counterdowntimer is withing 20 second, countdowntimer text
    //shoud turn red
    if (this.second == 20 && this.mintues == 0) {
      this.setState({
        timerFeature: "red",
      });
    }

    //if counterdowntimer is withing 10 second, countdowntimer text
    //shoud start blinking
    if (this.second == 10 && this.mintues == 0) {
      this.setState({
        timerFeature: "blinking",
      });
    }
  }

  handlePauseOrResume = () => {
    if (this.state.pauseOrResume == true) {
      this.setState({
        pauseOrResume: false,
      });
      this.pause();
    } else {
      this.start();
      this.setState({
        pauseOrResume: true,
      });
    }
  };

  handleTimerSpeed = (timer) => {
    //stop the first interval before moving to another interval.
    //if timer is activate &&
    if (timer == "1x") {
      this.timerSpeed = 1000;
      console.log(this.timerSpeed);
      this.pause();
      this.start();
    } else if (timer == "1.5x") {
      this.timerSpeed = 1500;
      this.pause();
      this.start();
      console.log(this.timerSpeed);
    } else if ( timer == "2x") {
             this.timerSpeed = 2000;
             this.pause();
             this.start();
             console.log(this.timerSpeed);
           }
  }

  render() {
    const { timerFeature } = this.state;
    let color =
      " bold bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 color-green";

    let timerMintues;
    if (timerFeature == "red") {
      timerMintues = <div className="color_red">{this.state.mintues}</div>;
    } else if (timerFeature == "blinking") {
      timerMintues = <div className="blinking">{this.state.mintues}</div>;
    } else {
      timerMintues = <div>{this.state.mintues}</div>;
    }

    return (
      <div className="tc countdown-timer">
        <h1 className={color}>Timer Spa App</h1>
        <SearchBox
          searchField={this.searchField}
          submitForm={this.submitForm}
        />

        <ClockTimer
          timer_value={timerMintues}
          clock_text={this.state.clockText}
        />

        <button className={color} onClick={this.handlePauseOrResume}>
          {this.state.pauseOrResume ? "Pause" : "Resume"}
        </button>

        <button className={color} onClick={() => this.handleTimerSpeed("1x")}>
          1x
        </button>
        <button className={color} onClick={() => this.handleTimerSpeed("1.5x")}>
          1.5x
        </button>
        <button className={color} onClick={() => this.handleTimerSpeed("2x")}>
          2x
        </button>
      </div>
    );
  }
}
 


export default CountDownTimer;
