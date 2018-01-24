import Battle from '../components/battle';


export default class ToDo extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            lng: "Hello"
        }

    }

    update = x => {
        this.setState({ lng: x });
    }

    render = () => {
        return (
            <div>
                <Battle update={this.update} />
                <hr />
                <span>{this.state.lng}</span>
            </div>
        )
    }

}

