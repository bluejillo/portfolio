import React, { Component } from 'react';

class Portfolio extends Component {

    constructor() {

        super();
        this.state = {};

    }

    render () {
        const styles = {
            paddingTop: "100px"
        }
        return (

            <div className = "Portfolio">
                <p style={styles}>This is my portfolio page</p>
            </div>

        );
    }

}

export default Portfolio;