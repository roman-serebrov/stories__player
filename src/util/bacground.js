import {chunkOverlay} from "../components/index.js";

const isOverlays = (overlays) => overlays === undefined;

export function generateOverlays(slides) {
    
    let
        res = '';
    
    if(isOverlays(slides)) return '';
    
    for(const el of slides) {
        res += chunkOverlay(el);
    }
    
    return res;
    
}


