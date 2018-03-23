import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class DateSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      from: null,
      to: null,
    };

    this.onDaySelectClick = this.onDaySelectClick.bind(this);
  }

  onDaySelectClick(day) {
    this.setState(DateUtils.addDayToRange(day, this.state));
  }

  render() {
    const { from, to } = this.state;
    const selectedRange = from && to && `${from.toLocaleDateString()} - ${to.toLocaleDateString()}`;

    return (
      <div className="date-select">
        <DayPicker
          className="Selectable"
          selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.onDaySelectClick}
        />
        <p>
          {!from && !to && 'Please select the first day.'}
          {from && !to && 'Please select the last day.'}
          {selectedRange}
        </p>
      </div>
    );
  }
}

export default DateSelect;
