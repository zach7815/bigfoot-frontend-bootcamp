import React from "react";
import '../../Speechbubble.css'

const SpeechBubble=({text, animation, direction, shape, bubblecolor, bordercolor })=>{
    return (<div className={["speech-bubble", animation, direction, shape, bubblecolor, bordercolor].join(' ')}>
    {text}
    </div>
    )
}

export default SpeechBubble