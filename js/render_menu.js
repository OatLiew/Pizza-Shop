// render the menu
function render(entries, type){

    var tem= $('.template');
    var addr= $('.menu-book');
    var instance;
    addr.hide();
    addr.empty();
    var id = 1;;
    total = 0;//counting each line

    $.each(entries, function(){
        if(type == "meat"){
            instance = tem.clone();
            instance.find('.name').html(this.name);
            instance.find('.description').html(this.description);       
            instance.find('.prices').html(this.prices[0]+","+this.prices[1]+","+this.prices[2]);
            
            //edit the price value of each button
            instance.find('.small').val(this.prices[0]);
            instance.find('.med').val(this.prices[1]);
            instance.find('.large').val(this.prices[2]);

            //change the id of each buttons
            instance.find('.small').attr("id", "small_"+ id.toString());
            instance.find('.med').attr("id", "med_"+ id.toString());
            instance.find('.large').attr("id", "large_"+ id.toString());
            instance.find('.large').attr("id", "large_"+ id.toString());


            //set data in add_ cart button
            instance.find('#cart').attr("data-type","pizza");
            instance.find('#cart').attr("data-name",this.name);
            instance.find('#cart').attr("id","cart_"+id.toString());

             //increment ID
            id++;
            total++; //increment each lines

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
            instance.find('.prices').html(this.prices[0]+","+this.prices[1]+","+this.prices[2]);
            
            //edit the price value of each button
            instance.find('.small').val(this.prices[0]);
            instance.find('.med').val(this.prices[1]);
            instance.find('.large').val(this.prices[2]);

            //change the id of each buttons
            instance.find('.small').attr("id", "small_"+ id.toString());
            instance.find('.med').attr("id", "med_"+ id.toString());
            instance.find('.large').attr("id", "large_"+ id.toString());
            instance.find('.large').attr("id", "large_"+ id.toString());


            //set data in add_ cart button
            instance.find('#cart').attr("data-type","pizza");
            instance.find('#cart').attr("data-name",this.name);
            instance.find('#cart').attr("id","cart_"+id.toString());

             //increment ID
            id++;
            total++; //increment each lines

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

            if (type == "drinks")
                instance.find('#cart').attr("data-type","drinks");
            else
                instance.find('#cart').attr("data-type","desserts");

            instance.find('#cart').attr("data-name",this.name);
            instance.find('#cart').attr("data-price", this.price.toString());
            instance.find('#cart').attr("id","cart_"+id.toString());

             id++;
            total++; //
        }
    });
}
