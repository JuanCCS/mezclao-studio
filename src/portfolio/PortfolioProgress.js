import React from 'react';
import styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';

const ProgressContainer = styled.div`
    min-height: 30px;
    flex-grow: 0;
    padding-top: 20px;
    width: 90%;
    max-width: 640px;
`

class PortfolioProgress extends React.Component {
  state = {
    completed: 0,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    if (completed === 100) {
      this.setState({ completed: 0 });
    } else {
      const diff = Math.random() * 10;
      this.setState({ completed: Math.min(completed + diff, 100) });
    }
  };

  render() {
    return (
     <ProgressContainer>
        <LinearProgress variant="determinate" value={this.state.completed} />
      </ProgressContainer>

    );
  }
}

export default PortfolioProgress;