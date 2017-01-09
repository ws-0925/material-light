//todo: documentar funciones
//todo: hacer una funcion factoria (mdlConstructor) que elimine repeticion de codigo en los constructores
"use strict";
function isDefined(value) { return typeof value !== 'undefined'; }
exports.isDefined = isDefined;
function setClass(elementRef, className, renderer) { renderer.setElementClass(elementRef.nativeElement, className, true); }
exports.setClass = setClass;
function setAttribute(elementRef, attrName, attrValue, renderer) { renderer.setElementAttribute(elementRef.nativeElement, attrName, attrValue); }
exports.setAttribute = setAttribute;
function randomStr() { return Math.random().toString(36).substr(2, 5); }
exports.randomStr = randomStr;
function isSubstring(subStr, bigStr) {
    if (bigStr)
        return bigStr.indexOf(subStr) > -1;
    else
        return false;
}
exports.isSubstring = isSubstring;
//# sourceMappingURL=C:/Users/Yago/WebstormProjects/material-light/src/app/ml/lib/ml_lib.js.map