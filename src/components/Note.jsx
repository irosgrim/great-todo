import React, { Component } from 'react';

import CheckIconUnchecked from './icons/check-icon-unchecked.svg';
import CheckIconChecked from './icons/check-icon-checked.svg';

import DeleteIcon from './icons/delete-icon.svg';

class Note extends Component {
    constructor(props) {
        super(props);
        this.handleDone = this.handleDone.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDone() {
        return this.props.handledone(this.props.id);
    }
    handleDelete() {
        return this.props.handledelete(this.props.id);
    }
    render() {
        return (
            <div className="note-container">
                <div className="btn" onClick={this.handleDelete}>
                    <img src={DeleteIcon} alt="" />
                </div>
                <div className={this.props.done ? 'note done' : 'note'}>
                    {this.props.body}
                </div>
                <div className="note-controls">
                    <div
                        className="btn"
                        onClick={this.handleDone}
                        style={this.props.done ? { opacity: '1' } : null}>
                        {this.props.done ? (
                            <img src={CheckIconChecked} alt="" />
                        ) : (
                            <img src={CheckIconUnchecked} alt="" />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Note;
