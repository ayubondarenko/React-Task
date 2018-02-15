/**
 * Created by alexander on 25.01.18.
 */
import React, {Component} from "react";

export default class CheckBoxSelect extends Component {
    onSelect = (evt) => {
        // console.log('выбор строк');
        this.props.onSelect(this.props, evt.target.checked);
    };

    render() {
        return (

            <div>{this.props.select}<input id={this.props.id} type="checkbox"
                                          value={this.props.select}
                                          onChange={(evt)=>this.onSelect(evt)}
                                          checked={this.props.select?true:false}/>
            </div>
        )
    }
}