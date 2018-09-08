import * as React from 'react';
import { withRouter } from 'react-router';

export interface ScrollToTopProps {
  location;
}

class ScrollToTop extends React.Component<ScrollToTopProps, any> {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
