import './Sidebar.css'
import React, { CSSProperties, useState } from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { faCoffee, faHamburger, faArrowLeft, faGripLines, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontawesomeObject, IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { transform } from 'typescript'
import { Button } from 'react-bootstrap'

interface SidebarState {
    
}

interface SidebarProps {
    onClick: () => void
    expanded: Boolean
}

export default class Sidebar extends React.Component<SidebarProps, SidebarState> {

    render() {
        let header

        if (this.props.expanded) {
            header = <Header />
        } 

        let items = [
            <Item key="0" name="Coffee" icon={ faCoffee } expanded={this.props.expanded} onClick={ () => { console.log("coffee pressed")} } />,
            <Item key="1" name="Hamburgers" icon={ faHamburger } expanded={this.props.expanded} onClick={ () => { console.log("hamburger pressed")} } />
        ]

        return (
            <div className="sidebar">

                <div style={{width: "100%", float:"left", }} onClick={() => this.props.onClick() } >

                    <div className="menu-button-container">
                        <FontAwesomeIcon icon={ this.props.expanded ? faArrowLeft : faBars } pull={ this.props.expanded ? "right" : undefined } className="menu-button-icon vertical-center" />
                    </div>

                    <hr color="white" style={{float: "right", width: "100%", marginBottom: "0px"}}></hr>

                </div>

                {header}

                <div style={{ display: "block" }}>
                { items }
                </div>

            </div>
        )
    }
}

interface HeaderProps {

}
function Header(props: HeaderProps) {

    let containerStyle: CSSProperties = {
        backgroundColor: "#5A7DA0",
        float: "left",
        width: "100%"
    }

    return (
        <div style={containerStyle} >

            <h4 style={{ width: "100%", textAlign: "center", color: "#fff", padding: "16px" }}>api.willco.app</h4>

            <div style={ { width: "100%", textAlign: "center", paddingBottom: "16px"} }>
                <Button variant="info" >
                    Get A Key
                </Button>
            </div>
        </div>
    )
}

interface ItemProps {
    key: String
    name: String
    icon: IconDefinition
    expanded: Boolean
    onClick: () => void
}

function Item(props: ItemProps) {

    let containerStyle: CSSProperties = {
        backgroundColor: "#ffffff1e",
        float: "left",
        width: "100%"
    }

    var iconStyle: CSSProperties = {
        height: "1em",
        color: "#fff",
        marginLeft: props.expanded ? "16px" : "0px",
        marginRight: props.expanded ? "16px" : "0px",
        marginTop: "16px",
        marginBottom: "16px",
        width: props.expanded ? "1em" : "100%",
        float: props.expanded ? "left" : "none"
    }

    var pStyle: CSSProperties = {
        marginLeft: "8px",
        color: "#fff",
        height: "100%",
        float: "left"
    }

    var label = undefined

    if (props.expanded) {
        label =  <p style={ pStyle } className="vertical-center" > { props.name } </p>
    }

    return (
        <div style={ containerStyle } onClick={ props.onClick }>

            <FontAwesomeIcon icon={ props.icon } style={ iconStyle } />

            { label }

        </div>
    )
}
