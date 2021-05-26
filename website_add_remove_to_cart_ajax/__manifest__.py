# -*- coding: utf-8 -*-
{
    'name': "Add/Remove to Cart with Quantity AJAX",

    'summary': """Quickly Add Products with quantity to Cart""",

    'description': """
        This module allow the user to add products with required quantity to the cart without refreshing the page.
        And from the same view user can also remove the quantity from the cart 
    """,

    'author': 'ErpMstar Solutions',
    'category': 'Management System',
    'version': '1.0',

    # any module necessary for this one to work correctly
    'depends': ['website_sale'],

    # always loaded
    'data': [
        'views/templates.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
    ],
    'images': ['static/description/banner.jpg'],
    'installable': True,
    'application': True,
    'live_test_url': "https://youtu.be/9983djFXo6Q",
}
