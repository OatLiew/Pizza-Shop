
//rendering the menu in from Json 
$(function(){
    render(com.dawgpizza.menu.pizzas, 'meat');
});

$('.menu-ui .btn').click(function(){    
        var clickBtn = $(this);
        var type = clickBtn.attr('data-clickby');

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

function render(entries, type){

    var tem= $('.template');
    var addr= $('.menu-book');
    var instance;
    addr.hide();
    addr.empty();

    $.each(entries, function(){
        if(type == "meat"){
            instance = tem.clone();
            instance.find('.name').html(this.name);
            instance.find('.description').html(this.description);       
            instance.find('.prices').html(this.prices);
            instance.removeClass('template');
             //alert(type);
            if (typeof this.vegetarian !== "undefined"){
            }
            else{      
                addr.append(instance);
                addr.fadeIn("slow");
            }
        }
        else if (type == "vegetarian"){
            instance = tem.clone();
            instance.find('.name').html(this.name);
            instance.find('.description').html(this.description);       
            instance.find('.prices').html(this.prices);
            instance.removeClass('template');
            if (typeof this.vegetarian !== "undefined"){
                addr.append(instance);
                addr.fadeIn("slow");
            }
            else{      
            }
        }else if ((type == "drinks") ||(type == "desserts") ){
            instance = tem.clone();
            instance.find('.name').html(this.name);
            instance.find('.prices').html(this.price);
            instance.removeClass('template');
            addr.append(instance);
            addr.fadeIn("slow");
        }
    });
}

