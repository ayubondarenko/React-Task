/**
 * Created by alexander on 25.01.18.
 */
import React, {Component} from "react";

export default class SelectCell extends Component {
    onChange = (evt) => {
        // console.log('Выбор опции');
        this.props.onChange(this.props, evt.target.value);
    };


    render() {
        return (
            <div >
                <select style={{width: '100%'}}
                        class="form-control "
                        onChange={(evt) => this.onChange(evt)}
                        name={this.props.optionsFieldName}
                        value={this.props.value}>
                    <option key={0} value={0} style={{ cursor:'pointer'}}>please select</option>
                    {this.props.options.map(o => (
                        <option key={o.id}
                                value={o.id}
                                style={{ cursor:'pointer'}}>{o[this.props.optionsFieldName]}</option>
                    ))}
                </select>
            </div>
        )
    }
}