import React from 'react';

class ExampleComponent extends React.Component {
    constructor(props) {
        super(props);
        const savedName = window.localStorage.getItem('name');
        this.state = {
            name: savedName ? JSON.parse(savedName) : '',
        };
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={(event) => {
                        this.setState({ name: event.target.value }, () => {
                            window.localStorage.setItem('name', JSON.stringify(this.state.name));
                        });
                    }}
                />
                <p>Name: {this.state.name}</p>
            </div>
        );
    }
}