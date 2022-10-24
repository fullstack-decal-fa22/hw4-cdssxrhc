import '../Styles/Block.css';
import React from 'react';

const Block = (props) => {
    /* TODO */
    const pfp = {
        backgroundColor: props.color
    };

    return (
        // Ignore this data-testid, it's purely for testing :)
        <div data-testid='main-component'>
            {/* You'll notice pre-assigned class names 'post' and 'caption', 
            we took care of the basic block styling! 
            If curious, check out the css in Styles/Block.css */}
            {/* Refer to hint if stuck on how to color the posts */}
            {/* Hint: Consider using inline styling to assign the Block’s background color! */}
            <div className="post" style={pfp}></div>
            <div className="caption">{props.color}</div>
        </div>
    );
}

export default Block;