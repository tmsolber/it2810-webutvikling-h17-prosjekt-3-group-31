import React, {Component} from 'react';
import BackgroundImage from "./BackgroundImage";
import ClockContainer from "./ClockContainer";

//The home page which shows the background image and the clock
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