import React from 'react';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import './DateComponent.css'
import 'react-day-picker/lib/style.css';
import {Grid} from 'semantic-ui-react';

const DAY_FORMAT = 'DD/MM/YYYY';

const dateStyle = {
    outline: 0,
    background: '#fafafa',
    width: '105%',
    border: 0,
    margin: '0 0 15px',
    padding: 8,
    borderTopleftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    boxSizing: 'border-box',
    fontSize: 16,
}


export default class DateComponent extends React.Component {
    constructor() {
        super();
        this.state = {
        selectedDay: undefined,
        isDisabled: false
        };
    }

    handleDayChange = (selectedDay) => {
        this.setState({
            selectedDay,
        });
        if (moment().isBefore(selectedDay)) {
            this.setState({
                isDisabled: false
            })
        }
        else if (moment().isSameOrAfter(moment(selectedDay))) {
            this.setState({
               isDisabled: true 
            });
        }
    };


    render() {
        const { selectedDay, isDisabled} = this.state;
        const formattedDay = selectedDay
          ? moment(selectedDay).format(DAY_FORMAT)
          : '';

        const dayPickerProps = {
            todayButton: 'Go to this month',
            enableOutsideDays: true
        };
        return (
            <div>
                <p>
                    {!selectedDay && 'Please pick a valid date'}
                    {selectedDay && isDisabled && 'This day has already occured!'}
                    {selectedDay && !isDisabled && `You picked ${formattedDay}`}
                </p>
                <Grid>
                    <Grid.Column width={8}>
                        <DayPickerInput disabled={this.props.disable} style={dateStyle}
                        value={formattedDay}
                        onDayChange={this.handleDayChange}
                        format={DAY_FORMAT}
                        placeholder={DAY_FORMAT} onFocus={(e) => e.target.placeholder=""} onBlur={(e) => e.target.placeholder=DAY_FORMAT}
                        dayPickerProps={dayPickerProps}
                        />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <DayPickerInput disabled={this.props.disable} style={dateStyle}
                        value={formattedDay}
                        onDayChange={this.handleDayChange}
                        format={DAY_FORMAT}
                        placeholder={DAY_FORMAT} onFocus={(e) => e.target.placeholder=""} onBlur={(e) => e.target.placeholder=DAY_FORMAT}
                        dayPickerProps={dayPickerProps}
                        />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}