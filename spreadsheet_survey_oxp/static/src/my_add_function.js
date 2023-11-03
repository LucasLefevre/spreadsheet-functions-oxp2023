/** @odoo-module **/

import { _t } from "@web/core/l10n/translation";

import { helpers, registries } from "@odoo/o-spreadsheet";
const { arg, toNumber } = helpers;

const MY_ADD = {
    description: _t("Adds two numbers together."),
    args: [
        arg("value1 (number)", _t("The first number")),
        arg("value2 (number)", _t("The second number")),
    ],
    returns: ["NUMBER"],
    compute: function (value1, value2) {
        value1 = toNumber(value1, this.locale)
        value2 = toNumber(value2, this.locale)
        return value1 + value2;
    },
};
registries.functionRegistry.add("MY.ADD", MY_ADD);
