/**
 * Created by alexander on 25.01.18.
 */
import React, {Component} from "react";

export default class StringCell extends Component {

    // componentDidMount() {
    //     if (this.props.isEdit || this.props.value === '') {
    //         console.log('ssss',this.textInput);
    //         if (this.textInput) this.textInput.focus()
    //     }
    // }


    onClick = () => {

        this.props.onClick(this.props);
    };
    onChange = (evt) => {
        console.log('меняю', evt);
        this.props.onChange(this.props, evt.target.value);
    };


    render() {
        this.value = this.props.value === undefined ? '' : this.props.value;
        return (

            <div style={{width: 'inherit'}}
                 onClick={this.onClick.bind(this)}>
                { this.props.isEdit  ?
                    <input style={{width: '100%'}} type='text'
                           class="form-control"
                           id={this.props.id}
                           ref={(input) => {
                               if(input) input.focus()
                           }}
                           value={this.value}
                           onChange={this.onChange}/> :
                    <div style={{width: 'inherit',
                        overflowX: 'hidden',
                        wordWrap:'break-word'}} id={this.props.id}
                    > {this.props.value}&nbsp; </div> }
            </div>
        )
    }
}