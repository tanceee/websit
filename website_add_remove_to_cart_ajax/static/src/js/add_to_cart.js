odoo.define('website_add_to_cart_ajax.add_to_cart', function (require) {
    "use strict";

    var publicWidget = require('web.public.widget');
    var VariantMixin = require('sale.VariantMixin');
    var wSaleUtils = require('website_sale.utils');

    publicWidget.registry.ProductAddCartAJAX = publicWidget.Widget.extend(VariantMixin, {
        selector: '.oe_website_sale',
        events: {
            'click .o_add_cart_ajax': '_onClickAddCartAJAX',
        },

        /**
         * @private
         * @param {Event} ev
         */
        _onClickAddCartAJAX: function (ev) {
            this._addNewProducts($(ev.currentTarget));
        },

        /**
         * @private
         */
        _addNewProducts: function ($el) {
            
            var $navButton = wSaleUtils.getNavBarButton('.o_wsale_my_cart');
            var product = $el.data('product-product-id');
            console.log("event element", $el, product)

            $('.o_wsale_my_cart').removeClass('d-none');
            // wSaleUtils.animateClone($navButton, $el.closest('form'), 25, 40);
            if($($el).hasClass("add_init")){
                $el.closest(".td-qty").find('.input-qty').val(1)
            }
            var qty = $el.closest(".td-qty").find('.input-qty').val()
            
            var qty_2 = parseFloat(qty)
            if (isNaN(qty_2)) {
                qty = 1
            }
            else if (qty_2 < 0) {
                qty = 1

            }
            if (qty_2 == 1 && $($el).hasClass("add_init")) {
                $el.closest(".td-qty").find('.input_block').removeClass('d-none')
                $el.addClass("d-none")
            }
            if (qty_2 == 0) {
                $el.closest(".td-qty").find('.input_block').addClass('d-none')
                $el.closest(".td-qty").find('.add_init').removeClass("d-none")
            }
            if($($el).hasClass("add_init")){
                this._addToCart(product, qty);
            }
        },
        /**
         * @private
         */
        _addToCart: function (productID, qty_id) {
            return this._rpc({
                route: "/shop/cart/update_json",
                params: {
                    product_id: parseInt(productID, 10),
                    add_qty: parseInt(qty_id, 10),
                    display: false,
                },
            }).then(function (resp) {
                if (resp.warning) {
                    if (!$('#data_warning').length) {
                        $('.wishlist-section').prepend('<div class="mt16 alert alert-danger alert-dismissable" role="alert" id="data_warning"></div>');
                    }
                    var cart_alert = $('.wishlist-section').parent().find('#data_warning');
                    cart_alert.html('<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button> ' + resp.warning);
                }
                $('.my_cart_quantity').html(resp.cart_quantity || '<i class="fa fa-warning" /> ');
            });
        },
    })
});
