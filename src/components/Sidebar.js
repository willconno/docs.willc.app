import './Sidebar.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core'
import leftArrow from '../icons/left-arrow.svg';
import leftArrowWhite from '../icons/left-arrow-white.svg';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <Header />
                <Item name="Coffee!">

                </Item>
            </div>
        )
    }
}

function Header() {
    return (
        <div className="header">
            <div style={{ backgroundColor: "#7988b7" }} />

            <div style={{width: "100%"}} >
                <img src={leftArrowWhite} className="pull-right drawerControlButton" />
                <hr color="white" style={{float: "right", width: "100%"}}></hr>
            </div>

            <div style={{
                padding: "16px"
            }}>

                <h4 style={{ width: "100%", textAlign: "center", color: "e8e8e8" }}>api.willco.app</h4>

                <div style={{
                    height: "2.3em",
                    marginTop: "16px",
                    width: "100%",
                    backgroundColor: "#fff",
                    boxShadow: "2px 2px 8px #849DB7",
                    border: "0.5px solid darkGray",
                    borderRadius: "8px"
                }}>
                    <div>
                        <p style={{
                            textAlign: "center",
                            lineHeight: "2.3em",
                            fontWeight: "bold",
                            color: "#5F5F5F"
                        }}>
                            Get a key
                            </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

function Item(props) {
    var iconStyle = {
        color: "#fff", float: "left", height: "40px"
    }
    var pStyle = {
        lineHeight: "39px",
        paddingLeft: "8px",
        float: "left",
        color: "#fff"
    }

    return (
        <div style={{ display: "block", padding: "16px" }} onClick={props.onClick}>
            <FontAwesomeIcon icon={faCoffee} style={iconStyle} />
            <p style={pStyle}>
                {props.name}
            </p>
        </div>
    )
}
