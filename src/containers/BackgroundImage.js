import {Component} from 'react';

class BackgroundImage extends Component {
    componentDidMount() {
        document.body.style.backgroundImage = "url(https://wallpaperscraft.com/image/switzerland_alps_mountains_night_beautiful_landscape_99817_1920x1080.jpg)";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
    }
    render() {
        /*https://static.pexels.com/photos/132037/pexels-photo-132037.jpeg*/
        return null;
    }
}

export default BackgroundImage;