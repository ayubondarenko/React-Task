/**
 * Created by alexander on 25.01.18.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import SelectSell from "../components/SelectCell.jsx";

class SelectDepartment extends Component {

    render() {
        return (
            <SelectSell onChange={this.props.onDepartmentChange}
                        optionsFieldName="name"
                        id={this.props.id}
                        value={this.props.value}
                        options={this.props.departments}
            />
        )
    }
}

export default connect(state => ({departments: state.departments.data}),
    dispatch => ({
        onDepartmentChange: (props, newValue) => {
            // console.log("Выбор департамента:", props, newValue);
            dispatch({
                type: 'CHANGE_EMPLOYEE_CELL', payload: {
                    id: props.id,
                    name: 'department',
                    value: parseInt(newValue, 0)
                }
            });
        },
    })
)(SelectDepartment)
