# -*- coding: utf-8 -*-
{
    'name': "Website Stock Filter by Availability",

    'summary': """Website Stock Filter by Availability""",

    'description': """
        Website Stock Filter by Availability
    """,

    'author': 'ErpMstar Solutions',
    'category': 'eCommerce',
    'version': '1.0',

    # any module necessary for this one to work correctly
    'depends': ['website_sale'],

    # always loaded
    'data': [
        'views/views.xml',
        'views/templates.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
    ],
    'installable': True,
    'application': True,
}
