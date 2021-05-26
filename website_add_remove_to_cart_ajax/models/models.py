# -*- coding: utf-8 -*-
from odoo import models


class Website(models.Model):
    _inherit = "website"

    def check_in_line(self, product_id):
        qty = 0
        if product_id:
            sale_order = self.sale_get_order()
            if sale_order:
                line_id = sale_order.order_line.filtered(lambda line: line.product_id.id == product_id)
                qty = line_id.product_uom_qty
        return int(qty)
