import React, { Component } from 'react'
import Button from '@components/Button'

class UnmountingExample extends Component {
    componentWillUnmount() {
        console.log('Компонент размонтируется')
    }

    render() {
        return (
            <div className="text-sm">
                <h1>Click unmount</h1>
            </div>
        )
    }
}

export default class ClassUnmount extends Component {
    constructor(props) {
        super(props)
        this.state = { mounted: false }
    }

    render() {
        return (
            <div className="flex gap-4 items-center">
                <Button onClick={() => this.setState({mounted: !this.state.mounted})}>
                    {this.state.mounted ? 'Unmount' : 'Mount'}
                </Button>
                {this.state.mounted && <div className="w-40"><UnmountingExample/></div>}
            </div>
        )
    }
}