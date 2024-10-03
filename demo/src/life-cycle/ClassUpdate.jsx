import React, { Component } from 'react'
import Button from '@components/Button'

class UpdatingExample extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
        console.log('1. Constructor: Инициализация компонента')
    }

    static getDerivedStateFromProps() {
        console.log('2. getDerivedStateFromProps: Обновление локального состояния на основе props')
        return null
    }

    shouldComponentUpdate() {
        console.log('3. shouldComponentUpdate: Нужно ли перерендеривать компонент?')
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('5. getSnapshotBeforeUpdate: Снятие снимка перед обновлением')
        return null
    }

    componentDidUpdate() {
        console.log('6. componentDidUpdate: Компонент обновлен')
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        console.log('4. Render: Отрисовка компонента')
        return (
            <div className="flex gap-4 items-center text-sm">
                <Button onClick={this.handleIncrement}>Increment</Button>
                <p>Count: {this.state.count}</p>
            </div>
        );
    }
}

export default class ClassMount extends Component {
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
                {this.state.mounted && <UpdatingExample/>}
            </div>
        )
    }
}