import {generateTimeLinneChunk} from "./components";
import {generatePlayerChunk} from "./components";
import {contentPlayer} from "./components";
import {onMouseMove, onNext, onPause, onPrev, runChunkSwitching} from "./util/index.js";

/**
*   Инициализирует плеер Stories по заданным парметрам
*   @params {{
*            target: string,
*            slides, Array<{url: string, alt!: string}>
*            delaySlide: number
*        }}params - Параметры инициализации:
*
*
*    1. target - место инициализации плеера css селектор
*    2. slids - список слайдов плееров
*    3. delaySlide - продолжительность слайда
*   @return {void};
*/

export function initPlayer(params) {
    console.log(params)
    const {delaySlide, step} = params;
    
    try {
        
        const
            target    = document.querySelector(params.target);
        
        let
            isFirst   = true,
            $timeline =   '',
            $player   =   '',
            isDragging = false,
            offsetX,
            offsetY;
        
        for(const el of params.slides) {
            $timeline += generateTimeLinneChunk(isFirst);
            $player   += generatePlayerChunk(el, isFirst);
            isFirst    = false;
        }
        
        target.innerHTML = contentPlayer($timeline, $player);
        
        const
              $chunk_prev = target.querySelector('.player-chunk-prev'),
              $chunk_next = target.querySelector('.player-chunk-next'),
              player       = document.querySelector(params.player); ;

        const nextChunk = () => {
            onNext();
           $chunk_next.removeEventListener('click', onNext);
        }

        const prevChunk = () => {
            onPrev();
            $chunk_prev.removeEventListener('click', onPrev);
        }
        
        
        const runNextChunk = () => {
            runChunkSwitching(delaySlide || 1, step);
        };
        
        const dragStart = (e) => {
            e.preventDefault()
        }
        
        
        $chunk_prev.addEventListener('click', prevChunk);
        $chunk_next.addEventListener('click', nextChunk);
        
        player.addEventListener('mousedown', onPause);
        
        runNextChunk();
        
        document.addEventListener('mouseup', runNextChunk);
        player.addEventListener('dragstart', dragStart);
   
        
    }catch (e) {
        alert(new Error('Selector undefined'));
    }
}



