/** @odoo-module **/

import { _t } from "@web/core/l10n/translation";

import { helpers, registries } from "@odoo/o-spreadsheet";
const { arg, toString } = helpers;

registries.functionRegistry.add("WORD.EXIST", {
    description: _t("Returns TRUE or FALSE if the word provided is found within an English dictionary"),
    args: [arg("word (string)", _t("The word to search for"))],
    returns: ["BOOLEAN"],
    compute: function (word) {
        return this.getters.doesWordExist(toString(word, this.locale).toLowerCase());
    },
});
