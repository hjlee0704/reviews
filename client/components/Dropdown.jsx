import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false,
      active: 'recommended',
    };
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
    this.sortNewest = this.sortNewest.bind(this);
  }

  showMenu(e) {
    e.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideMenu);
    });
  }

  sortNewest(e) {
    e.preventDefault();
    this.props.onSortNewest()
  }

  hideMenu(e) {
    e.preventDefault();
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideMenu);
    });
  }

  render() {
    const { displayMenu, active } = this.state;

    return (
      <div className={displayMenu ? 'dropdown-container backgroundStyle removeBackground' : 'dropdown-container'}>
        <button onClick={this.showMenu} type="button" className="dropdownBtn">
          Sort by:  Recommended
          <i className="fas fa-sort-down"></i>
        </button>
        {
          displayMenu
            ? (
              <div className="menu">
                {/* <button className="dropdown" type="button">Recommended</button>
                <button className="dropdown" type="button">Newest</button> */}
                <a href="!#" className="recommended" onClick={this.sortRecommended}>Recommended</a>
                <i className="fas fa-check checkmark1"></i>
                <a href="!#" className="newest" onClick={this.sortNewest}>Newest</a>
                <i className="fas fa-check checkmark2"></i>
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

export default Dropdown;
