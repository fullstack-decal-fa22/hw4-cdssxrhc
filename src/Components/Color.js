import React from 'react';

/* TODO: Translate the below class component to a functional component! 
functional component vs class component
https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components-in-react/
*/

// CLASS COMPONENT
/* class Color extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <button onClick={() => this.props.handleClick(this.props.color)}>Post {this.props.color}</button>
    }
}

export default Color;
*/

// FUNCTIONAL COMPONENT
const Color = (props) => {

    return (
        <button onClick={() => this.props.handleClick(this.props.color)}>Post {this.props.color}</button>
    );
}

export default Color;