import javascriptGenerator from '../javascriptGenerator';
import { registerBlock } from '../register';
import Blockly from 'blockly/core';

const categoryPrefix = 'targets_';
const categoryColor = '#f0f';

function register() {
    registerBlock(`${categoryPrefix}x`, {
        message0: 'x',
        output: "Number",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        return ['this.x', 0];
    })

    registerBlock(`${categoryPrefix}y`, {
        message0: 'y',
        output: "Number",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        return ['this.y', 0];
    })

    registerBlock(`${categoryPrefix}direction`, {
        message0: 'direction',
        output: "Number",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        return ['this.direction', 0];
    })

    registerBlock(`${categoryPrefix}set_x`, {
        message0: 'set x to %1',
        args0: [
            {
                "type": "input_value",
                "name": "X"
            }
        ],
        previousStatement: null,
        nextStatement: null,
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const X = javascriptGenerator.valueToCode(block, 'X');
        return `this.x = ${X};`;
    })

    registerBlock(`${categoryPrefix}set_y`, {
        message0: 'set y to %1',
        args0: [
            {
                "type": "input_value",
                "name": "Y"
            }
        ],
        previousStatement: null,
        nextStatement: null,
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const Y = javascriptGenerator.valueToCode(block, 'Y');
        return `this.y = ${Y};`;
    })

    registerBlock(`${categoryPrefix}set_direction`, {
        message0: 'set direction to %1',
        args0: [
            {
                "type": "input_value",
                "name": "DIRECTION"
            }
        ],
        previousStatement: null,
        nextStatement: null,
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const DIRECTION = javascriptGenerator.valueToCode(block, 'DIRECTION');
        return `this.direction = ${DIRECTION};`;
    })

    registerBlock(`${categoryPrefix}distance_to`, {
        message0: 'distance to x %1 y %2',
        args0: [
            {
                "type": "input_value",
                "name": "TX"
            },
            {
                "type": "input_value",
                "name": "TY"
            }
        ],
        output: "Number",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const TX = javascriptGenerator.valueToCode(block, 'TX');
        const TY = javascriptGenerator.valueToCode(block, 'TY');
        return [`Math.hypot(${TX} - this.x, ${TY} - this.y)`, 0];
    })

    registerBlock(`${categoryPrefix}angle_to`, {
        message0: 'angle to x %1 y %2',
        args0: [
            {
                "type": "input_value",
                "name": "TX"
            },
            {
                "type": "input_value",
                "name": "TY"
            }
        ],
        output: "Number",
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const TX = javascriptGenerator.valueToCode(block, 'TX');
        const TY = javascriptGenerator.valueToCode(block, 'TY');
        return [`Math.atan2(${TY} - this.y, ${TX} - this.x) * 180 / Math.PI`, 0];
    })
}

export default register;
