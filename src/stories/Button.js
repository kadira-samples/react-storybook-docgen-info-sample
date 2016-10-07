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
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};
