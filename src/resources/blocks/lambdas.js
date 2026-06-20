import javascriptGenerator from '../javascriptGenerator';
import { registerBlock } from '../register';
import Blockly from 'blockly/core';

const categoryPrefix = 'lambda_';
const categoryColor = '#6cf';

function register() {
    // lambda expression: (args) => { ... }
    registerBlock(`${categoryPrefix}expr`, {
        message0: 'lambda (%1) %2 %3',
        args0: [
            {
                "type": "field_input",
                "name": "PARAMS",
                "text": ""
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "BLOCKS"
            }
        ],
        output: null,
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const PARAMS = block.getFieldValue('PARAMS') || '';
        const BLOCKS = javascriptGenerator.statementToCode(block, 'BLOCKS');
        // Use a function expression so it can be passed around as a value
        const code = `(${PARAMS}) => { ${BLOCKS} }`;
        return [code, 0];
    });

    // call a function/value with provided args
    registerBlock(`${categoryPrefix}call`, {
        message0: 'call %1 with %2',
        args0: [
            {
                "type": "input_value",
                "name": "FUNC"
            },
            {
                "type": "input_value",
                "name": "ARGS"
            }
        ],
        output: null,
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const FUNC = javascriptGenerator.valueToCode(block, 'FUNC') || '(() => {})';
        const ARGS = javascriptGenerator.valueToCode(block, 'ARGS') || '';
        const code = `${FUNC}(${ARGS})`;
        return [code, 0];
    });

    // await a function call (for async lambdas)
    registerBlock(`${categoryPrefix}call_await`, {
        message0: 'await %1 with %2',
        args0: [
            {
                "type": "input_value",
                "name": "FUNC"
            },
            {
                "type": "input_value",
                "name": "ARGS"
            }
        ],
        output: null,
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const FUNC = javascriptGenerator.valueToCode(block, 'FUNC') || '(() => {})';
        const ARGS = javascriptGenerator.valueToCode(block, 'ARGS') || '';
        const code = `await ${FUNC}(${ARGS})`;
        return [code, 0];
    });
}

export default register;
