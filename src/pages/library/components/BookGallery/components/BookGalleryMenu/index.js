import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as BookActions } from '../../../../../../store/ducks/books';

import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class BookGalleryMenu extends Component {
  state = {
    anchorEl: null,
    options: [
      {
        key: 'currentlyReading',
        name: 'Currently Reading'
      },
      {
        key: 'wantToRead',
        name: 'Want to Read'
      },
      { key: 'read', name: 'Read' }
    ]
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleMenuItemClick = shelf => {
    this.props.updateBookShelfRequest(this.props.bookId, shelf);
    this.handleClose();
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={this.props.className}>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem disabled>Move to...</MenuItem>
          {this.state.options.map(option => (
            <MenuItem
              key={option.key}
              onClick={() => this.handleMenuItemClick(option.key)}
            >
              {option.name}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(BookActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(BookGalleryMenu);
