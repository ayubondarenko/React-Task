/**
 * Created by alexander on 25.01.18.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import SelectSell from "../components/SelectCell.jsx";
import StringCell from "../components/StringCell.jsx";
import DateCell from "../components/DateCell.jsx";

class CellByType extends Component {

    render() {
        // console.log('свойства dataName: ', this.props.dataName);
        let field = null;
        // console.log("тип:", this.props.col.type);
        if (!this.props.col.editable) field = this.props.value;
        else switch (this.props.col.type) {

            case "string":
                field = <StringCell onClick={this.props.onCellClick}
                                    onChange={this.props.onCellChange}
                                    id={this.props.id}
                                    isEdit={this.props.isEdit}
                                    name={this.props.col.name} // наименование колонки
                                    value={this.props.value}
                                    dataName={this.props.dataName}
                />;
                break;
            case "selectDepartments":
                field = <SelectSell onChange={this.props.onDepartmentChange}
                                    optionsFieldName={'name'}
                                    id={this.props.id}
                                    value={this.props.value}
                                    name={this.props.col.name} // наименование колонки
                                    options={this.props.departments}
                                    dataName={this.props.dataName}
                />;
                break;
            case "date":
                field = <DateCell onClick={this.props.onCellClick}
                                  onChange={this.props.onCellChange}
                                  id={this.props.id}
                                  isEdit={this.props.isEdit}
                                  name={this.props.col.name} // наименование колонки
                                  value={this.props.value}
                                  dataName={this.props.dataName}
                />;
                break;
        }


        return (
            <td style={{padding:10,  wordWrap: 'break-word', width:this.props.col.width}}>
                {field}
            </td>
        )
    }
}

export default connect(state => ({departments: state.departments.data}),
    dispatch => ({
        onCellChange: (props, newValue) => {
            dispatch({
                type: 'CHANGE_' + props.dataName + '_CELL', payload: {
                    id: props.id,
                    name: props.name,
                    value: newValue
                }
            });
        },
        onCellClick: (props) => {

            dispatch({
                type: 'CLICK_' + props.dataName + '_CELL', payload: {
                    id: props.id,
                    name: props.name
                }
            });
        },
        onDepartmentChange: (props, newValue) => {
            // console.log("Выбор департамента:", props, newValue);
            dispatch({
                type: 'CHANGE_' + props.dataName + '_CELL', payload: {
                    id: props.id,
                    name: props.name,
                    value: parseInt(newValue, 0)
                }
            });
        }
    })
)(CellByType)
