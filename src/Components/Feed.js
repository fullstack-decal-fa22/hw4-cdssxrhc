import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

// Refer to Hint 2 for more help!
// Hint: Consider the useState hook for the new variable!
// Think of the state of the feed as a LIST of Block components,
// where every time you add a block, the list now contains the newly added block :]

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    const [blocks, setPost] = useState([Block]);
    setPost([...blocks, []]);

    /* Use the map() function to render multiple Blocks! */
    // TODO: edit this variable
    const posts = blocks.map((block) =>
        <li key={block.toString()}>
            {block}
        </li>
    );

    return (
        <div>
            <Menu></Menu>

            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;