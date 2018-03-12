import React, { Component as ReactComponent } from 'react';

const accordionWrap = OriginalComponent => class WrappedComponent extends ReactComponent {
  constructor(props) {
    super(props);

    this.state = {
      openItemId: null,
    };

    this.toggleItem = this.toggleItem.bind(this);
  }

  render() {
    return (
      <OriginalComponent
        {...this.props}
        accordion={{
      ...this.state,
      toggleItem: this.toggleItem,
    }}
      />
    );
  }

  toggleItem(itemId) {
    return (event) => {
      event.preventDefault();
      if (this.state.openItemId === itemId) {
        this.setState({
          openItemId: null,
        });
      } else {
        this.setState({
          openItemId: itemId,
        });
      }
    };
  }
};

export default accordionWrap;
