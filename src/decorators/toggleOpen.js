import React, { Component as ReactComponent } from 'react';

const toggleOpenWrap = OriginalComponent => class WrappedComponent extends ReactComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };


    this.toggleOpen = this.toggleOpen.bind(this);
  }

  render() {
    return <OriginalComponent {...this.props} {...this.state} toggle={this.toggleOpen} />;
  }

  toggleOpen(event) {
    event.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
};

export default toggleOpenWrap;
