import {question} from "../question/index.js";
import {getStyles} from "../../util/index.js";

export const chunkOverlay = (chunk) => {
    const
          {classes} = chunk,
          _styles = getStyles(chunk);
    
    const _classes = Array.isArray(classes) === true ? classes.join(' ') : ''
    return (
        `<div class="player-chunk-overlay ${_classes}" style="${_styles}">
            ${renderOverlay(chunk)}
        </div>
    `)
    
    function renderOverlay(overlay) {
        
        const {value, type} = overlay;
        if(type === 'text') {
            return value;
        }
        if(type === 'question') {
            return question(overlay)
        }
        if(type === 'img') {
            return `<img src='${value}' alt="">`;
        }
        return '';
    }
}

