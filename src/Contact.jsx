import React, { Component } from 'react';

class Contact extends Component {

    constructor() {
        
        super();
        this.state = {};

    }

    render() {
        const styles = {
            paddingTop: "100px"
        }
        return(
            <div className = "Contact">
                <p style={styles}>This is the contact page.</p>
            </div>
        );

    }

}

export default Contact;