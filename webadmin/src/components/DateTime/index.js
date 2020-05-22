import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class DateTime extends Component {
  state = {
    startDate: new Date(2020,2, 15),
  }

  onChange = startDate => this.setState({ startDate })

  render() {
    console.log("===>date", this.state.startDate);
    return (
      <div>
        <DatePicker selected={this.state.startDate} onChange={this.onChange} dateFormat="dd/MM/yyyy"/>
      </div>
    );
  }
}
export default DateTime;