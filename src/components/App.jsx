import React, { Component } from 'react';
import Title from './Section/Section'
import FeedbackOptions, {buttonOptions} from './FeedbackOptions/FeedbackOptions';
import Statistic from './Statistics/Statistics';
import Notification from './Notification/Notification';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

 onLeaveFeedback = option => {
  this.setState(prevState => ({
    [option]: prevState[option] + 1
  }));
  };
  
  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad
  }

  positiveFeedback = () => {
    return Math.round((this.state.good / this.totalFeedback()) * 100);
  }
  render() {
  
    return (
      <section>
        <Title title='Please leave feedback'/>
        <FeedbackOptions options={buttonOptions} onButtonClick={this.onLeaveFeedback} />
        
        <Title title='Statistics' />
        {this.totalFeedback() > 0 ? <Statistic
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.totalFeedback()}
          positiveFeedback={this.positiveFeedback() || '0'}
        /> : <Notification notification={'There is no feedback'}/>}
      </section>
    )
  }
}

export default App;