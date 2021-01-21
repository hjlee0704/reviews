import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
    this.sortReviews = this.sortReviews.bind(this);
  }

  showMenu(e) {
    e.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideMenu);
    });
  }

  sortReviews(e) {
    e.preventDefault();
    const { onSortReviews } = this.props;
    onSortReviews(e.target.textContent);
  }

  hideMenu(e) {
    e.preventDefault();
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideMenu);
    });
  }

  render() {
    const { displayMenu } = this.state;

    return (
      <div className={displayMenu ? 'dropdown-container backgroundStyle removeBackground' : 'dropdown-container'}>
        <button onClick={this.showMenu} type="button" id="dropdownBtn">
          Sort by:  Recommended
          <i className="fas fa-sort-down" />
        </button>
        {
          displayMenu
            ? (
              <div className="menu">
                {/* <button className="dropdown" type="button">Recommended</button>
                <button className="dropdown" type="button">Newest</button> */}
                <a href="!#" className="recommended" onClick={this.sortReviews}>Recommended</a>
                <i className="fas fa-check checkmark1" />
                <a href="!#" className="newest" onClick={this.sortReviews}>Newest</a>
                <i className="fas fa-check checkmark2" />
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

Dropdown.propTypes = {
  onSortReviews: PropTypes.func.isRequired,
};

export default Dropdown;
