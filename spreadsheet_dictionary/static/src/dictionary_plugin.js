/** @odoo-module */

import { _t } from "@web/core/l10n/translation";
import { registries, UIPlugin } from "@odoo/o-spreadsheet";

export class DictionaryPlugin extends UIPlugin {
    static getters = ["doesWordExist"];

    cache = {};

    doesWordExist(word) {
        if (this.cache[word] === undefined) {
            this.fetch(word);
        }
        switch (this.cache[word].status) {
            case "pending":
                throw new Error(_t("Loading..."));
            case "rejected":
                throw this.cache[word].error;
            case "fulfilled":
                return this.cache[word].found;
        }
    }

    fetch(word) {
        // Mark the value as "pending" in the cache
        this.cache[word] = { status: "pending" };
        fetch(`https://api.toys/api/check_dictionary?text=${word}`)
          .then((response) => response.json())
          .then((data) => {
            // Update the cache with the result
            this.cache[word] = {
              status: "fulfilled",
              found: data.found,
            };
          })
          .catch((error) => {
            // Update the cache with the error
            this.cache[word] = {
              status: "rejected",
              error,
            };
          })
          .finally(() => {
            // Trigger a new evaluation when the data is loaded
            this.dispatch("EVALUATE_CELLS");
          });
    }
}

registries.featurePluginRegistry.add("DictionaryPlugin", DictionaryPlugin);
