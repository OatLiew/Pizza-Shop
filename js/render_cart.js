
// renderCart()
// renders the current cart information to the screen
// parameters are:
//  - cart (object) reference to the cart model
//  - container (jQuery object) reference to the container <div>
//
function renderCart(cart, container) {
    var idx, item;
    
    //empty the container of whatever is there currently
    container.empty();

    //for each item in the cart...
    for (idx = 0; idx < cart.items.length; ++idx) {
        item = cart.items[idx];

        container.append("<div>");
        container.append("<button type='button' class='btn-default item_btn' data-name='"+cart.items[idx].name 
            +"' data-price='" + cart.items[idx].price   
            + "'><span class='glyphicon glyphicon-remove'></span></button>");

        container.append(" "+cart.items[idx].name+ " ");
        container.append(cart.items[idx].type+ " ");
        container.append(cart.items[idx].size+ "    |    ");
        container.append(cart.items[idx].price);
        container.append("</div>");
        //TODO: code to render the cart item

    } //for each cart item

    var sub, tax;
    totalCost = 0; //global

    sub = totalPrize;
    tax = (totalPrize * 0.095).toFixed(2);
    totalCost = parseFloat(sub) + parseFloat(tax);

    $('.subtotal').html(sub);

    $('.tax').html(tax);

    $('.total-price').html(totalCost.toFixed(2));

    //TODO: code to render sub-total price of the cart
    //the tax amount (see instructions), 
    //and the grand total

} //renderCart()