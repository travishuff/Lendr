import React, { Component } from 'react';

class Upload extends Component {
  render() {
    return (
      <div>
        Upload Page!
        <form className="form-inline" onSubmit={this.createUser}>
          <ul>
            <li><input type="text" className="form-control" name="title" placeholder="title" /></li>
            <li><select name="type">
              <option value="audi">business</option>
              <option value="saab">clothes</option>
              <option value="fiat">electrioncs</option>
              <option value="audi">home goods</option>
              <option value="audi">music</option>
              <option value="audi">sporting</option>
              <option value="volvo">transportation</option>
              <option value="audi">unclassifiable</option>
            </select></li>
            <li><input type="text" className="form-control" name="description" placeholder="description" /></li>
            <li><input type="text" className="form-control" name="imageURL" placeholder="image URL" /></li>
            <li><input type="text" className="form-control" name="dueDate" placeholder="due date" /></li>
            <li><button type="submit" className="btn btn-primary">Submit</button></li>
          </ul>
        </form>
      </div>
    );
  }
}

export default Upload;