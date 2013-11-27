
// add size and price to the cart button
$(document).ready(function(){    

    $('.cartItem').hide();
    $('.form-body').hide(); // hide information body


     cart = {
        name: null,
        address1: null,
        zip: null,
        phone: null,
        items: [] //empty array
    }; //cart data

    var count; //counter

    totalPrize = 0; //global totalPrize
    type = 'meat';

    render(com.dawgpizza.menu.pizzas, 'meat');

    $('.menu-ui .btn').click(function(){    
        var clickBtn = $(this);
        type = clickBtn.attr('data-clickby');// global variable for type

        //render(com.dawgpizza.menu.pizzas , type);
        if (type == 'meat')
            render(com.dawgpizza.menu.pizzas, type);
        else if (type == 'vegetarian')
            render(com.dawgpizza.menu.pizzas, type);
        else if (type == 'drinks')
            render(com.dawgpizza.menu.drinks, type);
        else
            render(com.dawgpizza.menu.desserts, type);

        //render(Employees.entries);
    });


    $('.place-order_buy').click(function(){
        
        //TODO: validate the cart to make sure all the required
        //properties have been filled out, and that the 
        //total order is greater than $20 (see homework 
        //instructions) 

        if(totalCost < 20)
        {
            alert("Free Delivery for $20 and up!");
        }
        else{
            //postCart(cart, $('.cart-form'));
            
            // hide all the gui
            $('.menu-book').hide();
            $('.cartItem').hide();
            $('.menu-ui').hide();
            $('.form-body').fadeIn("slow");  

        }
       // $('#myModal').modal('show')
    });
    
    // add all the listener for the buttons
    for(count = 1; count<total+1; count++)
    {

        $(document).on("click", "#cart_"+count.toString(), function() {
            //use the attributes on the button to construct
            //a new cart item object that we can add to the
            //cart's items array
            //size is not selected

            if((type == 'vegetarian') || (type == 'meat'))
            {    

                if(this.getAttribute('data-size') == ""){
                    alert("Please select the size");

                }
                else{   

                    $('.cartItem').show(); //show cart item

                    var newCartItem = {
                        type: this.getAttribute('data-type'),
                        name: this.getAttribute('data-name'),
                        size: this.getAttribute('data-size'),
                        price: this.getAttribute('data-price')
                    };

                    //push the new item on to the items array
                    cart.items.push(newCartItem);

                    //add all the price
                    totalPrize += parseInt(this.getAttribute('data-price'));


                    //render the cart's contents to the element
                    //we're using to contain the cart information
                    //note that you would need a <div> or some
                    //other grouping element on the page that has a
                    //style class of 'cart-container'
                    renderCart(cart, $('.cart-container'));

                    this.setAttribute("data-size","");
                }

            } 
            else{

                $('.cartItem').show(); //show cart item
                
                var newCartItem = {
                    type: this.getAttribute('data-type'),
                    name: this.getAttribute('data-name'),
                    size: this.getAttribute('data-size'),
                    price: this.getAttribute('data-price')
                };

                //push the new item on to the items array
                cart.items.push(newCartItem);

                //add all the price
                totalPrize += parseInt(this.getAttribute('data-price'));


                //render the cart's contents to the element
                //we're using to contain the cart information
                //note that you would need a <div> or some
                //other grouping element on the page that has a
                //style class of 'cart-container'
                renderCart(cart, $('.cart-container'));


                this.setAttribute("data-size","");
            }  
        });
        
        $(document).on("click", "#small_"+count.toString(), function(e) {

            var ids = this.getAttribute('id');// get id attribute
            ids = ids.substr(ids.length - 1); 
            if(ids == 0){
                ids = '10'; // to get 10 (2 digits)
            }   
             $('#cart_'+ids).attr("data-size","small");
             $('#cart_'+ids).attr("data-price",$("#small_" +ids).val());

        });

        $(document).on("click", "#med_"+count.toString(), function(e) {
            var ids = this.getAttribute('id');// get id attribute
            ids = ids.substr(ids.length - 1);
             if(ids == 0){
                ids = '10'; // to get 10 (2 digits)
            }   

            $('#cart_'+ids).attr("data-size","medium");
            $('#cart_'+ids.toString()).attr("data-price",$("#med_" +ids).val());
        });

        $(document).on("click", "#large_"+count.toString(), function(e) {
            var ids = this.getAttribute('id');// get id attribute
            ids = ids.substr(ids.length - 1);
             if(ids == 0){
                ids = '10'; // to get 10 (2 digits)
            }   

            $('#cart_'+ids.toString()).attr("data-size","large");
            $('#cart_'+ids.toString()).attr("data-price",$("#large_" +ids).val());
        });

        //show btn_group_size
        $('.meat_btn').click(function(){
            $( ".size_btn" ).show();
        });

        $('.veg_btn').click(function(){
            $( ".size_btn" ).show();
        });

        $('.drink_btn').click(function(){
            $( ".size_btn" ).hide();
        });

        $('.d_btn').click(function(){
             $( ".size_btn" ).hide();
        });

        $('.cart-container').slimScroll({
            height: '280px'
        });       
    }

    // when removing the item in the cart, it wll remove the item and render new cart 
    // and view
    $(document).on("click", ".item_btn", function(e) {

        var name, price;

        var idx;
        //get data name and price from the button
        name = this.getAttribute('data-name');
        price = this.getAttribute('data-price');    

        //remove item from the cart
        for(idx = 0; idx< cart.items.length; ++idx){
            if((cart.items[idx].name == name) && (cart.items[idx].price == price)){

                //remove 1 item 
                cart.items.splice(idx,1);
                break;         
            }
        }

        totalPrize -= parseInt(price);
        // hide if there is nothing in the cart
        if(totalPrize == 0){
            $('.cartItem').hide();
        }

        renderCart(cart, $('.cart-container'));

    });

});



// postCart()
// posts the cart model to the server using
// the supplied HTML form
// parameters are:
//  - cart (object) reference to the cart model
//  - cartForm (jQuery object) reference to the HTML form
//
function postCart(cart, cartForm) {
    //find the input in the form that has the name of 'cart'    
    //and set it's value to a JSON representation of the cart model
    cartForm.find('input[name="cart"]').val(JSON.stringify(cart));

    //submit the form--this will navigate to an order confirmation page
    cartForm.submit();

} //postCart()
