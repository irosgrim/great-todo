import React, { Component } from 'react';
import FilterMenu from './FilterMenu';

export class AddNotesForm extends Component {
    constructor(props) {
        super(props);
        this.handleAddNote = this.handleAddNote.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);

        this.state = {
            input: '',
            error: false
        };
    }
    handleAddNote() {
        if (this.state.input !== '') {
            return this.props.handleaddnote(this.state.input);
        } else {
            this.setState({ error: true });
        }
    }
    handleOnChange(e) {
        this.setState({ input: e.target.value });
    }
    render() {
        let all = this.props.notes.length;
        let completed = this.props.notes.filter(note => note.done === true);
        let todo = all - completed.length;

        return (
            <div className="add-note-frame">
                {this.state.error && (
                    <div className="modal">
                        <div className="modal-window">
                            <h3>The note cannot be empty!</h3>
                            <button
                                className="btn-big"
                                onClick={() => {
                                    this.setState({ error: false });
                                }}>
                                OK
                            </button>
                        </div>
                    </div>
                )}
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        this.setState({ input: '' });
                        return this.handleAddNote;
                    }}>
                    <input
                        type="text"
                        placeholder="add a note..."
                        id="newNote"
                        onChange={this.handleOnChange}
                        value={this.state.input}
                    />
                    <button
                        className="add-btn"
                        type="submit"
                        onClick={this.handleAddNote}>
                        +
                    </button>
                </form>
                <FilterMenu
                    handlefilter={this.props.handlefilter}
                    all={all}
                    completed={completed.length}
                    todo={todo}
                />
            </div>
        );
    }
}

export default AddNotesForm;
