/** @odoo-module */

import { _t } from "@web/core/l10n/translation";
import { registries, UIPlugin } from "@odoo/o-spreadsheet";
import { ServerData } from "@spreadsheet/data_sources/server_data";

export class SurveyPlugin extends UIPlugin {
    static getters = ["getSurveyResults"];
    constructor(config) {
        super(config);
        if (!config.custom.env) {
            return;
        }
        const services = config.custom.env.services;
        this.serverData = new ServerData(services.orm, {
            whenDataIsFetched: () => this.dispatch("EVALUATE_CELLS"),
        });
    }

    getSurveyResults(surveyId) {
        const data = this.serverData?.batch.get(
            "survey.survey",
            "get_survey_results_for_spreadsheet",
            surveyId
        );
        if (!data) {
            throw new Error(_t("Survey %s not available", surveyId));
        }
        return data;
    }
}

registries.featurePluginRegistry.add("SurveyPlugin", SurveyPlugin);
