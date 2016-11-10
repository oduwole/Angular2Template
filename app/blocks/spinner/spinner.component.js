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
var spinner_service_1 = require("./spinner.service");
var ACTIVE_CLASS = 'is-active';
var SpinnerComponent = (function () {
    function SpinnerComponent(_spinnerService) {
        this._spinnerService = _spinnerService;
        this.visible = false;
    }
    SpinnerComponent.prototype.ngOnInit = function () {
        //componentHandler.upgradeDom();
        /*this._spinnerStateChanged = this._spinnerService.spinnerState
          .subscribe((state: ISpinnerState) => this.visible = state.show);*/
    };
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this._spinnerStateChanged.unsubscribe();
    };
    return SpinnerComponent;
}());
SpinnerComponent = __decorate([
    core_1.Component({
        selector: 'story-spinner',
        template: "\n    <div\n      class=\"spinner mdl-spinner mdl-js-spinner mdl-spinner--single-color\"\n      [class.is-active]=\"visible\"></div>\n  ",
        styles: [".spinner {position: absolute;left: 46%;top: 12%"]
    }),
    __metadata("design:paramtypes", [spinner_service_1.SpinnerService])
], SpinnerComponent);
exports.SpinnerComponent = SpinnerComponent;
//# sourceMappingURL=spinner.component.js.map