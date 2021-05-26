# -*- coding: utf-8 -*-

from odoo import models, fields


class ProductTemplate(models.Model):
    _inherit = "product.template"

    x_gjendje = fields.Float(related='product_variant_ids.x_gjendje', readonly=False, copy=False,
                                   default=0)


class ProductProduct(models.Model):
    _inherit = "product.product"

    x_gjendje = fields.Float(copy=False, default=0)
