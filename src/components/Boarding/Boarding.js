import React, { Component } from "react";
import "./Boarding.css";

class Boarding extends Component {
  constructor(props) {
    super(props);
    this.state = { date: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { date } = this.state;
    event.preventDefault();
    alert(`
	____Your Details____\n
	Date : ${date}
	`);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <div className="navbar1">
          <div className="bookhead1">
            <a className="mainhead1" href="/">
              Booking
            </a>
          </div>
          <div className="boardhead1">
            <a className="sidehead1" href="/boarding1">
              Boarding
            </a>
          </div>
        </div>

        <div className="body">
          <div className="formi">
            <div className="lhs">
              <form onSubmit={this.handleSubmit}>
                <div className="date">
                  <label className="ip dt" htmlFor="date">
                    Date
                  </label>
                  <input
                    className="inp"
                    name="date"
                    type="date"
                    value={this.state.address}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="fbtn">
                  <button className="fsubmit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Boarding;
