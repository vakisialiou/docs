import React, { Component } from 'react'
import Button from '@components/Button'

class MountingExample extends Component {
    constructor(props) {
        super(props)
        this.state = { data: null }
        console.log('1. Инициализация компонента')
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('2. Обновление состояния на основе props', { nextProps, prevState })
        return null
    }

    componentDidMount() {
        console.log('4. Компонент был смонтирован')
        setTimeout(() => {
            this.setState({ data: 'Загруженные данные' })
        }, 2000)
    }

    render() {
        console.log('3. Render: Отрисовка компонента')
        return (
            <div className="flex gap-4 text-sm">
                <h1 className="w-40">Монтирование</h1>
                <p className="w-40">{this.state.data ? this.state.data : 'Загрузка...'}</p>
            </div>
        )
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
                {this.state.mounted && <MountingExample/>}
            </div>
        )
    }
}