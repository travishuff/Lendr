import React, {Component} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class MakeRequest extends Component {
    makeReq(event) {
    event.preventDefault();

    // get relevant data
    const title = event.target.elements[0].value;
    const note = event.target.elements[1].value;

    console.log(title, note);

    // TO DO: Fill in Post Request Here
    // Place push method within request callback

    // push session to the below path
    // push $.post..  .done  .fail
    browserHistory.push('/userInfo')
  }

  render() {
    return (
      <div>
        Make a Request!
        <form className="form-inline" onSubmit={this.makeReq}>
          <div><input type="text" className="form-control" name="title" placeholder="title" /></div>
          <div><textarea rows="4" cols="50" className="form-control" name="note" placeholder="place a note here.." /></div>
          <div><button type="submit" className="btn btn-primary">Submit</button></div>
        </form>
      </div>
    );
  }
}

export default MakeRequest;