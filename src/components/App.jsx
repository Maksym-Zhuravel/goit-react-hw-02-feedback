import React, { Component } from 'react';
import Title from './Section/Section';
import FeedbackOptions, {buttonOptions} from './FeedbackOptions/FeedbackOptions';
import Statistic from './Statistics/Statistics';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

 onLeaveFeedback = option => {
  this.setState(prevState => ({
    [option.toLowerCase()]: prevState[option.toLowerCase()] + 1
  }));
};
  render() {
  
    return (
      <section>
        <Title title='Please leave feedback' />
        <FeedbackOptions options={buttonOptions} onButtonClick={this.onLeaveFeedback} />
        
        <Title title='Statistics' />
       <Statistic items={Object.entries(this.state).map(([label, value]) => ({ label, value }))} />
      </section>
    )
  }
}

export default App;