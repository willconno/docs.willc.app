
import React from 'react'
import Sidebar from '../components/Sidebar'
import './Home.css'

export default class Home extends React.Component {

    #something = 0;

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        };

        this.inputChanged = this.inputChanged.bind(this);
    }

    inputChanged(event) {
        var newValue = event.target.value;
        this.setState({inputValue: newValue});
    }

    render() {
        return (
            <div className="root">

                {/* <div style={{ backgroundColor:"red"}}> </div>
                <div style={{  backgroundColor:"blue"}}> </div> */}


                <Sidebar />
                <div style={{display: "grid"}}>

                    <div className="body" >
                        <p className="title">Getting Started</p>
                        <br/>
                        <p className="subtitle">Navigate to an endpoint using the sidebar to
                            view documentation
                        </p>
                        <p className="sectionTitle">
                            Each endpoint provides a model and list of parameters (if applicable)
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
