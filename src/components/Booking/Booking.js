import React from "react";
import "./Booking.css";

import { Component } from "react";

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = { date: "", phoneNo: "", bookingId: 0, seat: [
        'a30','b30','c30', 'd30', 'e30', 'f30',

        'a29','b29','c29', 'd29', 'e29', 'f29',

        'a28','b28','c28', 'd28', 'e28', 'f28',

        'a27','b27','c27', 'd27', 'e27', 'f27',

        'a26','b26','c26', 'd26', 'e26', 'f26',

        'a25','b25','c25', 'd25', 'e25', 'f25',

        'a24','b24','c24', 'd24', 'e24', 'f24',

        'a23','b23','c23', 'd23', 'e23', 'f23',

        'a22','b22','c22', 'd22', 'e22', 'f22',

        'a21','b21','c21', 'd21', 'e21', 'f21',

        'a20','b20','c20', 'd20', 'e20', 'f20',

        'a19','b19','c19', 'd19', 'e19', 'f19',

        'a18','b18','c18', 'd18', 'e18', 'f18',

        'a17','b17','c17', 'd17', 'e17', 'f17',

        'a16','b16','c16', 'd16', 'e16', 'f16',

        'a15','b15','c15', 'd15', 'e15', 'f15',

        'a14','b14','c14', 'd14', 'e14', 'f14',

        'a13','b13','c13', 'd13', 'e13', 'f13',

        'a12','b12','c12', 'd12', 'e12', 'f12',

        'a11','b11','c11', 'd11', 'e11', 'f11',

        'a10','b10','c10', 'd10', 'e10', 'f10',

        'a09','b09','c09', 'd09', 'e09', 'f09',

        'a08','b08','c08', 'd08', 'e08', 'f08',

        'a07','b07','c07', 'd07', 'e07', 'f07',

        'a06','b06','c06', 'd06', 'e06', 'f06',

        'a05','b05','c05', 'd05', 'e05', 'f05',

        'a04','b04','c04', 'd04', 'e04', 'f04',

        'a03','b03','c03', 'd03', 'e03', 'f03',

        'a02','b02','c02', 'd02', 'e02', 'f02',

        'a01','b01','c01', 'd01', 'e01', 'f01'
      ],
      seatAvailable: [
        'a30','b30','c30', 'd30', 'e30', 'f30',

        'a29','b29','c29', 'd29', 'e29', 'f29',

        'a28','b28','c28', 'd28', 'e28', 'f28',

        'a27','b27','c27', 'd27', 'e27', 'f27',

        'a26','b26','c26', 'd26', 'e26', 'f26',

        'a25','b25','c25', 'd25', 'e25', 'f25',

        'a24','b24','c24', 'd24', 'e24', 'f24',

        'a23','b23','c23', 'd23', 'e23', 'f23',

        'a22','b22','c22', 'd22', 'e22', 'f22',

        'a21','b21','c21', 'd21', 'e21', 'f21',

        'a20','b20','c20', 'd20', 'e20', 'f20',

        'a19','b19','c19', 'd19', 'e19', 'f19',

        'a18','b18','c18', 'd18', 'e18', 'f18',

        'a17','b17','c17', 'd17', 'e17', 'f17',

        'a16','b16','c16', 'd16', 'e16', 'f16',

        'a15','b15','c15', 'd15', 'e15', 'f15',

        'a14','b14','c14', 'd14', 'e14', 'f14',

        'a13','b13','c13', 'd13', 'e13', 'f13',

        'a12','b12','c12', 'd12', 'e12', 'f12',

        'a11','b11','c11', 'd11', 'e11', 'f11',

        'a10','b10','c10', 'd10', 'e10', 'f10',

        'a09','b09','c09', 'd09', 'e09', 'f09',

        'a08','b08','c08', 'd08', 'e08', 'f08',

        'a07','b07','c07', 'd07', 'e07', 'f07',

        'a06','b06','c06', 'd06', 'e06', 'f06',

        'a05','b05','c05', 'd05', 'e05', 'f05',

        'a04','b04','c04', 'd04', 'e04', 'f04',

        'a03','b03','c03', 'd03', 'e03', 'f03',

        'a02','b02','c02', 'd02', 'e02', 'f02',

        'a01','b01','c01', 'd01', 'e01', 'f01'
      ],
      seatReserved: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleClick() {
    const min = 1;
    const max = 10000;
    const ra = min + Math.random() * (max - min);
    this.setState({ bookingId: this.state.bookingId + Math.ceil(ra) });
  }

  handleSubmit(event) {
    const { phoneNo, date, seatReserved, bookingId } = this.state;
    event.preventDefault();
    alert(`
	____Your Details____\n
  BookingId= ${bookingId}
	Date : ${date}
	Phone No : ${phoneNo}
  Seat : ${seatReserved}
	`);
  }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  
  onClickData(seat) {
    if(this.state.seatReserved.indexOf(seat) > -1) {
      this.setState({
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter(res => res !== seat)
      })
    } else {
      this.setState({
        seatReserved: this.state.seatReserved.concat(seat),
        seatAvailable: this.state.seatAvailable.filter(res => res !== seat)
      })
    }
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <div className="bookhead">
            <a className="mainhead" href="/">
              Booking
            </a>
          </div>
          <div className="boardhead">
            <a className="sidehead" href="/boarding">
              Boarding
            </a>
          </div>
        </div>

        <div className="body">
          <div className="body-i">
            <div className="booki">
              <button className="btn bi">Book</button>
            </div>

            <div className="updatei">
              <button className="btn ui">Update</button>
            </div>
            <div className="editi">
              <button className="btn ei">Edit</button>
            </div>
          </div>

          <div className="formi">
            <div className="lhs">
              <form onSubmit={this.handleSubmit}>
                <div className="containeri">
                  <div className="">
                    <div className="date">
                      <label className="ip dt" htmlFor="date">
                        Date
                      </label>
                      <input
                      className="inp dti"
                        name="date"
                        type="date"
                        value={this.state.address}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="phn">
                      <label className="ip ph" htmlFor="phoneNo">
                        Phone Number
                      </label>
                      <input
                      className="inp phi"
                        name="phoneNo"
                        placeholder="Phone No."
                        value={this.state.phoneNo}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>

                  <div div className="">
                    <div className="ticket panel rhs">
                    <DrawGrid
          seat = { this.state.seat }
          reserved = { this.state.seatReserved }
          onClickData = { this.onClickData.bind(this) } 
          disabled selected hidden
          />
                    </div>
                  </div>
                </div>

                <div className="fbtn">
                  <button className="fsubmit" 
                  onClick={this.handleClick.bind(this)}
                  >Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}





class DrawGrid extends Component {
  render() {
    return (
       <div className="container">
        <table className="grid">
          <tbody>
              <tr>
                { this.props.seat.map( row =>
                  <td 
                    className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                    key={row} onClick = {e => this.onClickSeat(row)}>{row} </td>) }
              </tr>
          </tbody>
        </table>
       </div>
    )
  }
  
  onClickSeat(seat) {
    this.props.onClickData(seat);
  }
}


export default Booking;
