import React from 'react';
import styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';

const ProgressContainer = styled.div`
    min-height: 30px;
    flex-grow: 0;
    padding-top: 36px;
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