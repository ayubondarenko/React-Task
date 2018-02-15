/**
 * Created by alexander on 25.01.18.
 */
import React, {Component} from "react";

export default class SortType extends Component {
    onClick = (evt) => {
        console.log('выбор сортировки: ' + this.sortType);
        // this.props.onChange(this.props, evt.target.value);
        this.props.onSortColumn(this.props.col);
    };
    sortType = "no";
    pictureClass = "glyphicon glyphicon-minus";


    render() {
        // console.log("рисуем сортировку", this.props);
        if (this.props.sort && this.props.sort.colName === this.props.col.name) {
            this.sortType = this.props.sort.type;
            if (this.sortType === "asc") this.pictureClass = "glyphicon glyphicon-chevron-up";
            else if (this.sortType === "desc") this.pictureClass = "glyphicon glyphicon-chevron-down";
            else  this.pictureClass = "glyphicon glyphicon-minus";
        } else  this.pictureClass = "glyphicon glyphicon-minus";

        return (
            <div class={'sort-button btn-xs ' + this.pictureClass}
                    aria-hidden="true"
                    onClick={(evt) => this.onClick(evt)}>
            </div>
        )
    }
}