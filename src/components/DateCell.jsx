/**
 * Created by alexander on 25.01.18.
 */
import React, {Component} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import moment from "moment";
import moment from "moment";

export default class DateCell extends Component {

    onClick = () => {
        this.props.onClick(this.props);
    };
    onChange = (date) => {

        this.props.onChange(this.props, date.format('YYYY-MM-DD'));
    };

    render() {

        this.value = this.props.value === undefined || !moment(this.props.value).isValid() ?
            moment('1900-01-01') : moment(this.props.value);
        this.value.locale('ru');
        return (
            <div style={{width: '100%'}} onClick={this.onClick.bind(this)}>
                { this.props.isEdit || this.props.value === '' ?
                    <DatePicker
                        style={{width: '100%'}}
                        ref={(DatePicker) => {
                            if (DatePicker) DatePicker.handleFocus()
                        }}
                        selected={this.value}
                        onChange={this.onChange}/>
                    :
                    <div id={this.props.id}>
                        {this.value.format('L')  }&nbsp; </div> }
            </div>
        )
    }
}