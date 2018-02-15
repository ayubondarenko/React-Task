/**
 * Created by alexander on 23.01.18.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import TableBody from "../components/TableBody.jsx";
import TableTitle from "../components/TableTitle.jsx";


class Departments extends Component {
    render() {
        return (
            <div>
                <TableTitle
                    title="Departments"
                    data={this.props.departments}
                    onAddRow={this.props.onAddRow}
                    onDeleteRows={this.props.onDeleteRows}
                    onSave={this.props.onSave}
                />
                <TableBody
                    onSelect={this.props.onSelect}
                    onSortColumn={this.props.onSortColumn}
                    onColMove={this.props.onColMove}
                    sort={this.props.departments.sort}
                    columns={this.props.departments.columns}
                    onColSet={this.props.onColSet}
                    data={this.props.departments.data}
                    edit={this.props.departments.edit}
                    dataName={'DEPARTMENT'}
                />
            </div>
        )
    }
}

export default connect(state => ({departments: state.departments}),
    dispatch => ({
        onSortColumn: (col) => {
            // console.log('сортируем', col);
            dispatch({
                type: 'SORT_DEPARTMENTS_COL', payload: col
            });
        },

        onColSet: (col, widthMin) => {
            dispatch({
                type: 'SET_DEPARTMENTS_COL', payload: {col: col, width:widthMin}
            });
        },

        onColMove: (col,xDiff, widthMin) => {
            dispatch({
                type: 'MOVE_DEPARTMENTS_COL', payload: {col: col, xDiff: xDiff, widthMin:widthMin}
            });
        },
        onSelect: (props, select) => {
            dispatch({
                type: 'SELECT_DEPARTMENT_ROW', payload: {
                    id: props.id,
                    select: select
                }
            });
        },
        onAddRow: (props, select) => {
            dispatch({
                type: 'ADD_DEPARTMENT_ROW', payload: {}
            });
        },
        onDeleteRows: (props, select) => {
            dispatch({
                type: 'DELETE_DEPARTMENT_ROWS', payload: {}
            });
        },
        onSave: (data) => {
            // console.log("сохраняем ");
            dispatch({
                type: 'SAVE_DEPARTMENTS', payload: data
            });
        }
    })
)(Departments)