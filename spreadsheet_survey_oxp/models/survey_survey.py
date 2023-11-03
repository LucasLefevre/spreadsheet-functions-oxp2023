from odoo import models, _


class Survey(models.Model):
    _inherit = "survey.survey"

    def get_survey_results_for_spreadsheet(self):
        return [survey._get_result_table() for survey in self]

    def _get_result_table(self):
        """Returns a 2d array of the results of the survey"""
        self.ensure_one()
        if not self.search([("id", "=", self.id)]):
            return False
        result = []
        all_answers = self.user_input_ids.user_input_line_ids
        data = self.question_ids._prepare_statistics(all_answers)
        for question_results in data:
            question = question_results["question"]
            answers = question_results["answer_line_ids"]
            column = [question.title] + answers.mapped("display_name")
            result.append(column)
        return result
