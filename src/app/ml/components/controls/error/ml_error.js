"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var MlValidatorError = (function () {
    function MlValidatorError() {
    }
    MlValidatorError.prototype.showError = function () {
        if (this.validateControl) {
            return (this.validateControl.hasError(this.validator) && this.validateControl.touched);
        }
    };
    MlValidatorError.prototype.ngOnInit = function () {
        // hack cause: validateControl.errors.minLength != validateControl.errors['minLength'] for example
        this.validator = this.validator.toLowerCase();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MlValidatorError.prototype, "validateControl", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MlValidatorError.prototype, "validator", void 0);
    MlValidatorError = __decorate([
        core_1.Component({
            selector: 'ml-error',
            template: '<div *ngIf="showError()" style="display: block"><ng-content></ng-content></div>'
        }), 
        __metadata('design:paramtypes', [])
    ], MlValidatorError);
    return MlValidatorError;
}());
exports.MlValidatorError = MlValidatorError;
//# sourceMappingURL=ml_error.js.map