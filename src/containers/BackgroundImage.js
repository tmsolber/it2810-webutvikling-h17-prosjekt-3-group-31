import {Component} from 'react';

class BackgroundImage extends Component {
    // Since react doesn't have direct access to the <body /> we had to access it like this.
    componentDidMount() {
        document.body.style.backgroundImage = "url(https://wallpaperscraft.com/image/switzerland_alps_mountains_night_beautiful_landscape_99817_1920x1080.jpg)";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
    }
    render() {
        return null;
    }
}

export default BackgroundImage;