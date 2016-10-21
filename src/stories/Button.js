import React from 'react';

const buttonStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};

/**
  This is a simple button component for React.
*/
export default class Button extends React.Component {
  render() {
    return (<button
            style={buttonStyles}
            onClick={this.props.onClick}
            >
            {this.props.children}
            </button>);
  }
};

Button.propTypes = {
  /**
    Label to show inside the button.
  */
  children: React.PropTypes.string.isRequired,

  /**
    Called when clicked on the button.
  */
  onClick: React.PropTypes.func,
};

Button.defaultProps = {
  onClick() {}
};
