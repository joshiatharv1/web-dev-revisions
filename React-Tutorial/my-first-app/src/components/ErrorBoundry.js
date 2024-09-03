import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { isError: false };
  }

  static getDerivedStateFromError(error) {
    return { isError: true };
  }

  render() {
    if (this.state.isError) {
      return (
        <div>
          Something Went Wrong
        </div>
      );
    }

    // If no error, render the children components
    return this.props.children;
  }
}

export default ErrorBoundary;
