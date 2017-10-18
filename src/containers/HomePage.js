import React, {Component} from 'react';
import BackgroundImage from "./BackgroundImage";
import ClockContainer from "./ClockContainer";

class HomePage extends Component {

    render() {
        return (
            <div>
                <BackgroundImage/>
                <ClockContainer/>
            </div>
        );

    }
}

export default HomePage;