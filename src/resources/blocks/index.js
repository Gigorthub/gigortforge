import registerGeneric from "./generic";
import registerEvents from "./events";
import registerControl from "./control";
import registerMath from "./math";
import registerStrings from "./strings";
import registerVectors from "./vectors";
import registerInputs from "./inputs";
import registerVariables from "./variables";
import registerLists from "./lists";
import registerBlocks from "./blocks";
import registerTargets from "./targets";
import registerLambdas from "./lambdas";

import registerRuntime from "./runtime";
import registerScript from "./script";

export default () => {
    registerGeneric();
    registerEvents();
    registerControl();
    registerMath();
    registerStrings();
    registerVectors();
    registerInputs();
    registerVariables();
    registerLists();
    registerBlocks();
    registerTargets();
    registerLambdas();

    registerRuntime();
    registerScript();
}
