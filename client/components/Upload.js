import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

class Upload extends Component {
  uploadItem(event) {
    event.preventDefault();

    // get relevant data
    const item = event.target.elements[0].value;
    const type = event.target.elements[1].value;
    const description = event.target.elements[2].value;
    const imageURL = event.target.elements[3].value;
    const dueDate = event.target.elements[4].value;

    console.log(item, type, description, imageURL, dueDate);

    $.post('/uploadItem', { itemname: title, itemtype: type, itemdescription: description, itempictureurl: imageURL, datedue: dueDate })
    .done(data => {
      browserHistory.push('/userInfo')
    })
    .fail(console.error('error with uploadItem'));
  }

  render() {
    return (
      <div>
        Upload Page!
        <form className="form-inline" onSubmit={this.uploadItem}>
          <div><input type="text" className="form-control" name="item" placeholder="item" /></div>
            <div><select name="type" className="form-control">
              <option value="business">business</option>
              <option value="clothes">clothes</option>
              <option value="electrioncs">electrioncs</option>
              <option value="home goods">home goods</option>
              <option value="music">music</option>
              <option value="sporting">sporting</option>
              <option value="transportation">transportation</option>
              <option value="unclassifiable">unclassifiable</option>
            </select></div>
          <div><input type="text" className="form-control" name="description" placeholder="description" /></div>
          <div><input type="text" className="form-control" name="imageURL" placeholder="image URL" /></div>
          <div><input type="text" className="form-control" name="dueDate" placeholder="due date" /></div>
          <div><button type="submit" className="btn btn-primary">Submit</button></div>
        </form>
      </div>
    );
  }
}

export default Upload;