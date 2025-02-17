import { NormalCompletion } from 'utils/ECMAScriptDataTypesAndValues/ECMAScriptSpecificationTypes/TheCompletionRecodSpecificationType';

/**
 * https://tc39.es/ecma262/#sec-get-o-p
 *
 * The abstract operation Get takes arguments O (an Object) and P (a property key) and
 * returns either a normal completion containing an ECMAScript language value or
 * a throw completion.
 *
 * ```markdown
 * Step:
 * 1. Return ? O.[[Get]](P, O).
 * ```
 *
 * @param {*} O An object.
 * @param {*} P A property key.
 * @returns A normal completion containing an ECMAScript language value or a throw completion.
 */
export function Get(O, P) {
    if (O === null || O === undefined) {
        throw new TypeError(
            `Property '${P.toString()}' of object '${O}' does not exist`
        );
    }

    O = NormalCompletion(O);

    return O.Value[P];
}
