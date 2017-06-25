import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ActionHelp from 'material-ui/svg-icons/action/help-outline';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

const styles = {
  smallIcon: {
    width: 24,
    height: 24,
  }
};

class Help extends Component {

state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div className="help-container">
        <IconButton
        onTouchTap={this.handleOpen}
          iconStyle={styles.smallIcon}
          style={styles.large}
        >
            <ActionHelp color={red500} hoverColor={greenA200}/>
        </IconButton>
        <Dialog
          title="Help"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          The floating emojis are realtime confessions. Click on plus below to create your own. They are anonymous.
        </Dialog>
      </div>
    );
  }

}

export default Help;