{
    'name': "Spreadsheet survey functions",
    'version': '1.0',
    'category': 'Hidden',
    'summary': 'Spreadsheet survey functions',
    'description': 'Spreadsheet survey functions',
    'depends': ['spreadsheet', 'survey'],
    'installable': True,
    'auto_install': True,
    'license': 'LGPL-3',
    'assets': {
        'spreadsheet.o_spreadsheet': [
            (
                'after',
                'spreadsheet/static/src/o_spreadsheet/o_spreadsheet.js',
                'spreadsheet_survey_oxp/static/src/**/*.js'
            ),
        ],
        'web.qunit_suite_tests': [
            'spreadsheet_survey_oxp/static/tests/**/*.js',
        ],
    }
}
