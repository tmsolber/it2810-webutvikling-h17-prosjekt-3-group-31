import React, {Component} from 'react';
import '../css/ClockContainer.css'


class ClockContainer extends Component {
    state = {
        time: new Date()
    };

    componentDidMount() {
        this.update = setInterval(() => {
            this.setState({
                time: new Date()
            });
        }, 1000);
    }

    componentWillMount() {
        clearInterval(this.update);
    }

    render() {
        const {time} = this.state;
        return (
            <div>
                <div className="welcome-text">
                    <h1>
                        Welcome to your own Personal Manager
                    </h1>
                </div>
                <div className="clock">
                    <h2>
                        {time.toLocaleTimeString()}
                    </h2>
                </div>
            </div>
        );
    }
}

export default ClockContainer;