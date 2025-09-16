import {React, Component, useState} from "react";

function Counter(){
    const [count, setCount] = useState(0)

    function AddCount(){
        setCount(count + 1)
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={AddCount}>Clique aqui</button>
        </div>
    )
}

export class Counter2 extends Component{
    constructor(){
        super();
        this.state = {
            count: 0,
        }
    }

    AddCount = () => {
        this.setState((prev) => ({
            count: prev.count + 1
        }))
    }

    render(){
        return (
            <div>
                <h1>Counter 2: {this.state.count}</h1>
                <button onClick={this.AddCount}>Clique aqui</button>
            </div>
        )
    }
}

export default Counter
