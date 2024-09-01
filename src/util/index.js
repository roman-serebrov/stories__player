

let timer, _timer;
const prevSlide = () => {
    return moveClass('timeline-chunk-active', 'previousElementSibling', (el) => {
        const inner = el.querySelector('.timeline-chunk-inner'),
        width_block = parseFloat(inner.style.width) || 0;
        el.querySelector('.timeline-chunk-inner').style.width = '';
        return width_block < 30;

    });
}

export const onPrev = () => {
    const prev = prevSlide();
    if(prev) moveClass('player-chunk-active',   'previousElementSibling');
    
}

export const onNext = () => {
    moveClass('player-chunk-active',   'nextElementSibling');
    const el =  moveClass('timeline-chunk-active', 'nextElementSibling');
    if(el) {
        el.querySelector('.timeline-chunk-inner').style.width = '';
    }
}


function moveClass(className, method, pred) {
        try {
            const
                active = document.querySelector(`.${className}`),
                next = active[method];
            if(pred && !pred(active)) {
                return null;
            }
            if(next) {
                active.classList.remove(className);
                next.classList.add(className);
                return active;
            }
            return null;
            
        } catch (e) {
            alert(e.message);
        }
}

export function runChunkSwitching(time, step) {
    clearInterval(timer);
    timer = setInterval(() => {
        const
             active = document.querySelector('.timeline-chunk-active').querySelector('.timeline-chunk-inner'),
             width_block = parseFloat(active.style.width) || 0;

        if(width_block === 100) {
            onNext()
            return;

        } 
        active.style.width = `${width_block + step}%`;
        },(time || 1 ) * 1000 * (step || 1) / 100)
}

export const onPause = (e) => {
    clearInterval(timer);
    
    //e.target.addEventListener('mousemove', ())
}


export const onMouseMove = (e) => {
    console.log(e);
}
const mapStyles = ([key, value]) => `${key}: ${value}`
export const getStyles = ({styles}) => (styles !== undefined
                    ? Object.entries(styles)
                    : []
                    ).map(mapStyles).join(';')



