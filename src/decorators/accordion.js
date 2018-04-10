import React, { Component as ReactComponent } from 'react';

const accordionWrap = (OriginalComponent) => {
  class Accordion extends ReactComponent {
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
          toggleItem={this.toggleItem}
          openItemId={this.state.openItemId}
        />
      );
    }

    toggleItem(openItemId) {
      return (event) => {
        event.preventDefault();
        this.setState({
          openItemId: this.state.openItemId === openItemId ? null : openItemId,
        });
      };
    }
  }

  Accordion.displayName = `WithAccordion(${OriginalComponent.displayName || OriginalComponent.name})`;

  return Accordion;
};

export default accordionWrap;
