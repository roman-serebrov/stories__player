import {generateOverlays} from "../../util/bacground.js";

export const generatePlayerChunk = ({filter, url, alt, overlays}, isActive) => {
    const style = [];
    
    if(filter) {
        style.push(`filter: ${filter.join(' ')}`);
    }
    const $overlays = generateOverlays(overlays)
    return `
        <div class="player-chunk ${isActive ? 'player-chunk-active' : ''}">
             <img style="${style.join(';')}" src="${url}" alt="${alt ? alt : ''}" >
             ${$overlays}
        </div>
    `
}