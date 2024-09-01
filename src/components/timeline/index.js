export const generateTimeLinneChunk = (isActive) => {
    return `
        <div class="timeline-chunk ${isActive ? 'timeline-chunk-active': ''}">
          <div class="timeline-chunk-inner"></div>
        </div>
    `
}