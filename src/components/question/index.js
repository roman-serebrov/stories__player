const variantsMap = (variants) => variants.map(variant => (`
    <button>${variant}</button>
`)).join('')
export const question = ({question, variants}) => {
    return (`
        <div class="question">
            <p>${question}</p>
            <div class="question-answer">
             ${variantsMap(variants)}
            </div>
        </div>
    `)
}