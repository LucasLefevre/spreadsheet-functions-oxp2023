{
    'name': "Spreadsheet dictionary function",
    'version': '1.0',
    'category': 'Hidden',
    'summary': 'Spreadsheet dictionary functions',
    'description': 'Spreadsheet dictionary functions',
    'depends': ['spreadsheet'],
    'installable': True,
    'auto_install': True,
    'license': 'LGPL-3',
    'assets': {
        'spreadsheet.o_spreadsheet': [
            (
                'after',
                'spreadsheet/static/src/o_spreadsheet/o_spreadsheet.js',
                'spreadsheet_dictionary/static/src/**/*.js'
            ),
        ],
        'web.qunit_suite_tests': [
            'spreadsheet_dictionary/static/tests/**/*.js',
        ],
    }
}
