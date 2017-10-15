import React, {Component} from 'react';
import '../CSS/ClockComponent.css'
import HeaderTextComponent from "../components/HeaderTextComponent";


class ClockComponent extends Component {
    state = {
      time: new Date()
    };

    componentDidMount() {
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1000);
    }

    componentWillMount() {
        clearInterval(this.update);
    }

    render() {
        const {time} = this.state;
        return (
            <div className="clock">
                <h2>
                    {time.toLocaleTimeString()}
                    <HeaderTextComponent text={"ToDo"}/>
                </h2>
            </div>
        );
    }
}

export default ClockComponent;