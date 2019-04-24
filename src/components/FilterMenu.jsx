import React, { Component } from 'react';

class FilterMenu extends Component {
    constructor(props) {
        super(props);
        this.handleFilter = this.handleFilter.bind(this);
        this.state = {
            active: ''
        };
    }
    handleFilter(e) {
        this.setState({ active: e });
        return this.props.handlefilter(e);
    }
    render() {
        return (
            <nav>
                {this.props.all > 0 && (
                    <ul>
                        <li
                            className="link"
                            style={
                                this.state.active === 'all'
                                    ? { fontWeight: 700 }
                                    : null
                            }
                            onClick={() => {
                                return this.handleFilter('all');
                            }}>
                            all({this.props.all})
                        </li>
                        <li> | </li>
                        <li
                            className="link"
                            style={
                                this.state.active === 'completed'
                                    ? { fontWeight: 700 }
                                    : null
                            }
                            onClick={() => {
                                return this.handleFilter('completed');
                            }}>
                            completed({this.props.completed})
                        </li>
                        <li> | </li>
                        <li
                            className="link"
                            style={
                                this.state.active === 'todo'
                                    ? { fontWeight: 700 }
                                    : null
                            }
                            onClick={() => {
                                return this.handleFilter('todo');
                            }}>
                            to do({this.props.todo})
                        </li>
                    </ul>
                )}
            </nav>
        );
    }
}

export default FilterMenu;
