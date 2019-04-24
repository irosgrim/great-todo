import React, { Component } from 'react';

import Note from './Note';

class Notescontainer extends Component {
    componentDidMount() {
        this.setState({ notes: this.props.notes });
    }

    render() {
        let filteredNotes = this.props.notes;
        switch (this.props.filternotes) {
            case 'completed':
                filteredNotes = this.props.notes.filter(
                    note => note.done === true
                );
                break;
            case 'todo':
                filteredNotes = this.props.notes.filter(
                    note => note.done === false
                );
                break;
            default:
                filteredNotes = this.props.notes;
                break;
        }
        return (
            <div className="notes-frame">
                {filteredNotes.map(note => {
                    return (
                        <Note
                            handledone={this.props.handledone}
                            handledelete={this.props.handledelete}
                            key={note.id}
                            id={note.id}
                            body={note.body}
                            done={note.done}
                            applyfilter={this.props.filternotes}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Notescontainer;
