
import React from 'react'
import MiniDrawer from '../components/Drawer';
import SectionContainer from '../components/SectionContainer';
import Sidebar from '../components/Sidebar'
import './Home.css'

interface HomeState {
    inputValue?: String | null
    expanded: Boolean
}

interface HomeProps {

}

export default class Home extends React.Component<HomeProps, HomeState> {

    constructor(props: HomeProps) {
        super(props);
        this.state = {
            inputValue: "",
            expanded: true
        };

        this.inputChanged = this.inputChanged.bind(this);
    }

    inputChanged(event) {
        var newValue = event.target.value;
        this.setState({inputValue: newValue});
    }

    render() {
        return (
            <div >

                <MiniDrawer>


                        <SectionContainer />
                        <SectionContainer />
                    
                </MiniDrawer>

            </div>
        )
    }
}



