import React, { Component as ReactComponent } from 'react';

const toggleOpenWrap = (OriginalComponent) => {
  class ToggleOpen extends ReactComponent {
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
  }

  ToggleOpen.displayName = `WithToggleOpen(${OriginalComponent.displayName || OriginalComponent.name})`;

  return ToggleOpen;
};

export default toggleOpenWrap;
