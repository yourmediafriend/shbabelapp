import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';

class Example extends Component {
  state = {};

  toggleImageMenu = () => {
    console.log('Toggle');
    this.setState({isOpenImage: !this.state.isOpenImage});
  };

  render() {
    return (
      <div>
        <Dropdown className="float-left p-0 dropdown-header" isOpen={this.state.isOpenImage} toggle={this.toggleImageMenu}>
          <DropdownToggle nav>
            <img className="rounded-circle float-left mr-1" src="https://github.com/TheSharpieOne.png?size=40" height={40} width={40} alt="" />
          </DropdownToggle>
          <div style={{top: '50px', position: 'relative'}}>
            <DropdownMenu>
              <DropdownItem onClick={() => console.log('WORKS')}>
                <div className="h-100 w-100" onClick={() => console.log('MAYBE')}>
                  Logout
                </div>
              </DropdownItem>
            </DropdownMenu>
          </div>
        </Dropdown>
      </div>
    )
  }
}

export default Example;