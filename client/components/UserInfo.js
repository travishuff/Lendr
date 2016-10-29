import React, {Component} from 'react';

class UserInfo extends Component {
  render() {
    return (
      <div>
        <p>User Info Page!!!</p>
        <div className="row">
          <div className="col-md-6">Stuff I Lent</div>
          <div className="col-md-4">Stuff I Borrow</div>
        </div>
        

      </div>
    );
  }
}

export default UserInfo;