import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as BookActions } from '../../../../store/ducks/books';

import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faBookReader,
  faBookOpen,
  faUnlink
} from '@fortawesome/free-solid-svg-icons';

class BookShelfMenu extends Component {
  static propTypes = {
    currentShelf: PropTypes.string,
    updateBookShelfRequest: PropTypes.func.isRequired,
    className: PropTypes.string,
    bookId: PropTypes.string
  };

  state = {
    anchorEl: null,
    selectedKey: this.props.currentShelf,
    options: [
      {
        key: 'currentlyReading',
        name: 'Currently Reading',
        icon: faBookReader
      },
      {
        key: 'wantToRead',
        name: 'Want to Read',
        icon: faBookOpen
      },
      { key: 'read', name: 'Read', icon: faBook },
      { key: 'none', name: 'None', icon: faUnlink }
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
    this.setState(prevState => ({
      selectedKey: shelf
    }));
    this.handleClose();
  };

  renderMenuItem = option => {
    const isSelected = option.key === this.state.selectedKey;
    return (
      <MenuItem
        key={option.key}
        selected={isSelected}
        style={{
          backgroundColor: isSelected ? '#322684' : 'transparent',
          color: isSelected ? 'white' : '',
          fontWeight: isSelected ? 500 : 100
        }}
        onClick={() => this.handleMenuItemClick(option.key)}
      >
        <ListItemIcon>
          <FontAwesomeIcon
            icon={option.icon}
            style={{ color: isSelected ? 'white' : '' }}
          />
        </ListItemIcon>
        <ListItemText inset primary={option.name} disableTypography />
      </MenuItem>
    );
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
          {this.state.options.map(option => this.renderMenuItem(option))}
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
)(BookShelfMenu);
