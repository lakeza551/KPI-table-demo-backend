const mathjs = require('mathjs')
const userData = require('../templates/user_data_1.json')
const summaryTemplate = require('../templates/summary_template_1.json')

const isOperator = term => {
    return term === '+' || term === '-' || term === '*' || term === '/' || term == '(' || term == ')'
}

const calculateSummation = range => {
    const reg = /\(([^)]*)\)/;
    const selected = exp.match(reg)[1]
}

const evaluate = expression => {
    const expSplit = expression.split(' ')
    for(const [index, term] of expSplit.entries()) {
        if(isOperator(term))
            continue
        if(term.startsWith('sum')) {
            expSplit[index] = calculateSummation(term)
        }
    }
}

const createSummaryData = (summary, queue) => {
    for(const row of summaryTemplate.rows) {
        for(const cell of row.columns) {
            if(cell.type = 'formula') {
                cell.value = evaluate(cell.value.substring(1))
            }
        }
    }
}

module.exports = createSummaryData