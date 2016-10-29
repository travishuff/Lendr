import React, {Component} from 'react';

class UserInfo extends Component {
  render() {
    return (
      <div>
        <p>User Info Page!!!</p>
        <div className="flex-grid">
          <div className="col">Stuff I Lent</div>
          <div className="col">Stuff I Borrow</div>
        </div>
      </div>
    );
  }
}

export default UserInfo;