import React, { CSSProperties } from "react";
import Paper from '@material-ui/core/Paper'
import { Height } from "@material-ui/icons";

interface SectionContainerProps {
    title: string
    subtitle?: string | undefined
}

interface SectionContainerState {
    
}

export default class SectionContainer extends React.Component<SectionContainerProps, SectionContainerState> {

    constructor(props: SectionContainerProps) {
        super(props);
        
    }

    render() {

        return (
            <Paper elevation={2} style={{ padding:"2em", marginBlock: "2em" }}>
                <h4>/info</h4>
                <h6>/info</h6>
                {this.props.children}
            </Paper>
        )
    }
}
