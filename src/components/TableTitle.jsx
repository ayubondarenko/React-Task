/**
 * Created by alexander on 25.01.18.
 */
import React, {Component} from "react";
export default class TableTitle2 extends Component {

    onSave = (e) => {
        this.props.onSave(this.props.data);
    };

    render() {
        this.value = this.props.value === undefined ? '' : this.props.value;
        return (
            <div class="navbar navbar-inverse">
                <div class="navbar-header">
                    <span className="h3 App-title">{this.props.title}</span>
                </div>
                <div nav navbar-nav>
                    <button class="btn btn-primary titleButton" type="button"
                            onClick={this.props.onAddRow.bind(this)}>
                        <span class="glyphicon glyphicon-plus pull-left"></span>
                        {'   Add'}
                    </button>
                    <button class="btn btn-primary titleButton" type="button"
                            onClick={this.props.onDeleteRows.bind(this)}>
                        <span class="glyphicon glyphicon-trash pull-left"></span>
                        {'   Delete'}
                    </button>
                </div>
                <div nav navbar-nav navbar-right>
                    <button class="btn btn-primary navbar-right titleButton" type="button"
                            disabled={this.props.data.saving}
                            onClick={this.onSave.bind(this)}>
                        <span class="glyphicon glyphicon-floppy-disk pull-left"></span>
                        {this.props.data.saving ? '  Please wait saving...' : '  Save'}
                    </button>
                </div>
            </div>
        )
    }
}