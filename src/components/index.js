import {generatePlayerChunk} from "./player/index.js";
import {generateTimeLinneChunk} from "./timeline/index.js";
import {chunkOverlay} from "./Overlay/index.js";
import {question} from "./question/index.js";

export {generateTimeLinneChunk};
export {generatePlayerChunk};
export {chunkOverlay};
export {question};

export const contentPlayer = (timelineChunks, playerChunks) => {
    return (
        `
          <div class="timeline">${timelineChunks}</div>
                                                                    
          <div class="player-content-wrapper">
            <div class="player-chunk-switcher player-chunk-prev"></div>
            <div class="player-chunk-switcher player-chunk-next"></div>            
            <div class="player-content">
                ${playerChunks}
            </div>
          </div>
        `
    )
}