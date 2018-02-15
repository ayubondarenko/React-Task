/**
 * Created by alexander on 25.01.18.
 */
import React, {Component} from "react";


export default class ColResizer extends Component {


    pressed = false;
    xMove = 0;
    xCurrent = 0;

    handleMouseMove = (evt) => {
        if (this.pressed) {
            this.xMove = evt.clientX - this.xCurrent;
            this.xCurrent = evt.clientX;
            this.props.onColMove(this.props.col, this.xMove);
        }
    };

    handleMouseUp = (evt) => {
        if (this.pressed) {
            this.pressed = false;
            window.removeEventListener('mousemove', this.handleMouseMove);
            window.removeEventListener('mouseup', this.handleMouseUp);
            window.removeEventListener('mousedown', this.handleMouseDownWin);

        }
    };
    handleMouseDown = (evt) => {
        // evt.preventDefault();
        // console.log('onMouseDown:', evt);
        this.pressed = true;
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);
        window.addEventListener('mousedown', this.handleMouseDownWin);
        // this.props.onClick(this.props);
    };
    handleMouseDownWin = (evt) => {
        evt.preventDefault();
        if (this.pressed) {
            this.xCurrent = evt.clientX;
            // console.log('onMouseDownWin xCurrent:', this.xCurrent, evt);
        }
        // this.props.onClick(this.props);
    };

    onDoubleClick = (evt) =>{
        this.props.onDoubleClick(this.props.col);
    };

    render() {
        return (
            <div class="ml-auto btn-xs resize-button
            glyphicon glyphicon-resize-horizontal "
                 data-toggle="tooltip" data-placement="bottom" title="resize"
                 onMouseDown={this.handleMouseDown}
                 onDoubleClick={this.onDoubleClick}
            >
            </div>
        )
    }
}