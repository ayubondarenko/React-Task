/**
 * Created by alexander on 24.01.18.
 */
import React, {Component} from "react";
// import {spring, Motion} from "react-motion";
import CheckBoxSelect from "./CheckBoxSelect.jsx";
import SortType from "./SortType.jsx";
import CellByType from "../containers/CellByType.jsx";
import ColResizer from "../components/ColResizer.jsx";

export default class TableBody extends Component {


    onColMove = (col, xDiff) => {
        const mCol = document.getElementById(col.name)
        // console.log('шапка ширина:', mCol.offsetWidth);
        this.props.onColMove(col, xDiff, mCol.offsetWidth + 40);
    };

    onColSet = (col) => {
        const mCol = document.getElementById(col.name)
        // console.log('шапка ширина:', mCol.offsetWidth);
        this.props.onColSet(col, mCol.offsetWidth + 40);
    };

    render() {
        return (
            <table class="table-bordered table-fix">
                <thead>
                <tr class="bg-light">
                    <th style={{width: '20px'}}></th>
                    {
                        this.props.columns ? this.props.columns.map(col => (
                                <th class="col-hd"
                                    style={{width: col.width}}>
                                    <div class="d-flex justify-content-start"
                                         style={{
                                             height: '100%',
                                             width: '100%'
                                         }}>
                                        {/*<div style={{display: 'table-cell', width:'100%'}}>*/}
                                        <div id={col.name}
                                             style={{padding: '10px', whiteSpace: 'nowrap'}}>{col.title}</div>

                                        <SortType onSortColumn={this.props.onSortColumn}
                                                  sort={this.props.sort}
                                                  col={col}/>

                                        <ColResizer col={col}
                                                    onDoubleClick = {this.onColSet}
                                                    onColMove={this.onColMove}/>
                                    </div>
                                </th>
                            )) : <h3> wait a bit please... </h3>
                    }
                </tr>
                </thead>
                <tbody>

                {this.props.data.map(d => (
                    <tr key={d.id} class={d.select ? "selected" : "notSelected"}>
                        <td style={{padding: 10, width: '20px'}}>
                            <CheckBoxSelect id={d.id}
                                            select={d.select}
                                            onSelect={this.props.onSelect}
                            />
                        </td>
                        {this.props.columns.map(col => {
                            {/*console.log('свойства : ', this.props);*/
                            }
                            {/*console.log('свойства dataName: ', this.props.dataName);*/
                            }
                            return <CellByType col={col}
                                               id={d.id}
                                               value={d[col.name]}
                                               dataName={this.props.dataName}
                                               isEdit={
                                                   this.props.edit !== undefined &&
                                                   this.props.edit.name === col.name &&
                                                   this.props.edit.id === d.id
                                               }
                            />
                        })}
                    </tr>
                ))}
                </tbody>
            </table>

        )
    }
}
