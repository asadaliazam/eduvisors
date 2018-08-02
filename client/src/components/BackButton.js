import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class BackButton extends Component {
  static contextTypes = {
    router: () => true,
  }

  render() {
    return (

      <div
        onClick={this.context.router.history.goBack}>
          <FontAwesomeIcon icon={faTimes} />
      </div>
    )
  }
}

export default BackButton;
