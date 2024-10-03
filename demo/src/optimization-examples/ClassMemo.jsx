import React, { Component, PureComponent } from 'react'
import Button from '@components/Button'
import Input from '@components/Input'

class ChildMemo extends Component {
    renderCount = 0

    shouldComponentUpdate(nextProps) {
        return nextProps.value !== this.props.value
    }

    render() {
        this.renderCount++
        return (
            <div>
                ChildMemo value: {this.props.value} Render count {this.renderCount}
            </div>
        )
    }
}

export class ChildPure extends PureComponent {
    renderCount = 0

    render() {
        this.renderCount++
        return (
            <div>
                ChildPure value: {this.props.value} Render count {this.renderCount}
            </div>
        )
    }
}

export class ChildSimple extends Component {
    renderCount = 0

    render() {
        this.renderCount++
        return (
            <div>
                ChildSimple value: {this.props.value} Render count {this.renderCount}
            </div>
        )
    }
}

export default class ClassMemo extends Component {
    state = {
        count: 0,
        text: ''
    }

    increment = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    }

    handleTextChange = (e) => {
        this.setState({ text: e.target.value })
    }

    render() {
        const { count, text } = this.state

        return (
            <div className="flex items-center gap-4">
                <h1 className="w-40">Count: {count}</h1>
                <Button onClick={this.increment}>Increment</Button>

                <Input
                    value={text}
                    onChange={this.handleTextChange}
                    placeholder="Type something"
                />

                <div className="flex flex-col">
                    <ChildMemo value={count} />
                    <ChildPure value={count} />
                    <ChildSimple value={count} />
                </div>
            </div>
        )
    }
}