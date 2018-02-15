/**
 * Created by alexander on 23.01.18.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import TableBody from "../components/TableBody.jsx";
import TableTitle from "../components/TableTitle.jsx";


class Employees extends Component {
    render() {
        return (
            <div>
                <TableTitle
                    title="Employees"
                    data={this.props.employees}
                    onAddRow={this.props.onAddRow}
                    onDeleteRows={this.props.onDeleteRows}
                    onSave={this.props.onSave}
                />
                <TableBody
                    onSelect={this.props.onSelect}
                    onSortColumn={this.props.onSortColumn}
                    onColMove={this.props.onColMove}
                    onColSet={this.props.onColSet}
                    sort={this.props.employees.sort}
                    columns={this.props.employees.columns}
                    data={this.props.employees.data}
                    edit={this.props.employees.edit}
                    dataName={'EMPLOYEE'}
                />
            </div>
        )
    }
}

export default connect(state => ({employees: state.employees}),
    dispatch => ({

        onColSet: (col, widthMin) => {
            dispatch({
                type: 'SET_EMPLOYEES_COL', payload: {col: col, width:widthMin}
            });
        },

        onColMove: (col,xDiff, widthMin) => {
            dispatch({
                type: 'MOVE_EMPLOYEES_COL', payload: {col: col, xDiff: xDiff, widthMin:widthMin}
            });
        },
        onSortColumn: (col) => {
            dispatch({
                type: 'SORT_EMPLOYEES_COL', payload: col
            });
        },
        onSelect: (props, select) => {
            dispatch({
                type: 'SELECT_EMPLOYEE_ROW', payload: {
                    id: props.id,
                    select: select
                }
            });
        },
        onAddRow: (props, select) => {
            dispatch({
                type: 'ADD_EMPLOYEE_ROW', payload: {}
            });
        },
        onDeleteRows: (props, select) => {
            dispatch({
                type: 'DELETE_EMPLOYEES_ROWS', payload: {}
            });
        },
        onSave: (data) => {
            // console.log("сохраняем ");
            dispatch({
                type: 'SAVE_EMPLOYEES', payload: data
            });
        }
    })
)(Employees)