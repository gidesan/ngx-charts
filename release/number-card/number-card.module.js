"use strict";
var core_1 = require("@angular/core");
var common_module_1 = require("../common/common.module");
var card_component_1 = require("./card.component");
var card_series_component_1 = require("./card-series.component");
var number_card_component_1 = require("./number-card.component");
var NumberCardModule = (function () {
    function NumberCardModule() {
    }
    NumberCardModule = __decorate([
        core_1.NgModule({
            imports: [common_module_1.CommonModule],
            declarations: [
                card_component_1.Card,
                card_series_component_1.CardSeries,
                number_card_component_1.NumberCard
            ],
            exports: [
                card_component_1.Card,
                card_series_component_1.CardSeries,
                number_card_component_1.NumberCard
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], NumberCardModule);
    return NumberCardModule;
}());
exports.NumberCardModule = NumberCardModule;
//# sourceMappingURL=number-card.module.js.map