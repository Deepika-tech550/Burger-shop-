
var products=[

{
	'name':'French Fries',
	'price':100,
	'img':'img/fries.png',
	'quantity':1,
	'active':false
},
{
	'name':'Chicken Cheese Burger',
	'price':180,
	'img':'img/double-cb.png',
	'quantity':1,
	'active':false
},

{
	'name':'Nuggets',
	'price':120,
	'img':'img/nuggets.png',
	'quantity':1,
	'active':false
}

];





const burger_palace = {

    data() {
        return {
            products:window.products,
            total_price: 0,
            delivery:15,
            fees:0


            
           

        }
       
    },
    methods:
    {
    	total:function()
    	{
    		var total=0;
    		this.products.forEach(function(item)
    		{
    			if(item.active)
    			{
    				total+=item.price*item.quantity
    	
    			}
    			

    		});
    	this.fees=total.toFixed(2)
    	return total.toFixed(2)
    	
    	send(total)
    	},

    	amt_pay:function()
    	{
    		return (parseInt(this.delivery)+parseInt(this.fees)).toFixed(2)
    	},
    	
    	send:function(arg1)
    	{
    		this.total_price=arg1


    	},

    	
    	show:function()
    	{
    		var new_word=[]
    		var a='\n'
    		this.products.forEach(function(item)
    		{

    			if(item.active)
    			{
    				
    				new_word.push(item.name+' -'+item.quantity)

    			}
    		});
    		
    		
    		for(var i=0;i<new_word.length;i++)
    		{
    			console.log(new_word[i])

    			a+='\t\t\t\t'+new_word[i]+'\n'
    		}
    		return  a
    	},
    	
    	

}



 };
 Vue.createApp(burger_palace).mount('#app');

 