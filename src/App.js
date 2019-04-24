import React, { Component } from 'react';
import AddNotesForm from './components/AddNotesForm';
import Notescontainer from './components/Notescontainer';
import uuid from 'uuid';
import './style/App.css';

export class App extends Component {
    constructor() {
        super();
        this.handleDone = this.handleDone.bind(this);
        this.handleAddNote = this.handleAddNote.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            notes: [],
            notesFilter: 'all'
        };
    }
    componentDidMount() {
        if (localStorage.getItem('greatNotes') !== null) {
            let greatNotes = JSON.parse(localStorage.getItem('greatNotes'));
            this.setState({ notes: greatNotes });
        }
    }
    handleAddNote(e) {
        // avoid mutations
        const notesClone = JSON.parse(JSON.stringify(this.state.notes));
        const newNote = { id: uuid(), body: e, done: false };
        notesClone.push(newNote);
        localStorage.setItem('greatNotes', JSON.stringify(notesClone));
        this.setState({ notes: notesClone });
    }
    handleDone(e) {
        // avoid mutating state by cloning the state
        const notesClone = JSON.parse(JSON.stringify(this.state.notes));
        const foundNote = notesClone.findIndex(element => element.id === e);
        notesClone[foundNote].done = !notesClone[foundNote].done;
        localStorage.setItem('greatNotes', JSON.stringify(notesClone));
        this.setState({ notes: notesClone });
    }
    handleFilter(e) {
        console.log(e);
        switch (e) {
            case 'all':
                this.setState({ notesFilter: 'all' });
                break;

            case 'completed':
                this.setState({ notesFilter: 'completed' });
                break;

            case 'todo':
                this.setState({ notesFilter: 'todo' });
                break;

            default:
                console.log('all');
        }
    }
    handleDelete(e) {
        const notesClone = JSON.parse(JSON.stringify(this.state.notes));
        const arrayWithoutNote = notesClone.filter(note => note.id !== e);
        localStorage.setItem('greatNotes', JSON.stringify(arrayWithoutNote));
        this.setState({ notes: arrayWithoutNote });
    }
    render() {
        return (
            <div className="App">
                <AddNotesForm
                    handleaddnote={this.handleAddNote}
                    handlefilter={this.handleFilter}
                    notes={this.state.notes}
                />

                <Notescontainer
                    handledone={this.handleDone}
                    handledelete={this.handleDelete}
                    notes={this.state.notes}
                    filternotes={this.state.notesFilter}
                />
            </div>
        );
    }
}

export default App;
