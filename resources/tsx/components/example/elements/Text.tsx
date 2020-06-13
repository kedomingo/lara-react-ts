import React, {useState} from 'react';

type Props = {
  contents: string;
};

const Text = (props: Props) => {
    return (
        <span class="asdhgjasdg">{props.contents}</span>
    );
};

export default Text;
