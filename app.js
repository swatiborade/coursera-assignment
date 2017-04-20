(function () {
	// body...
	'use strict';

	angular.module("ShoppingListCheckOff",[])
			.controller("ToBuyController",ToBuyController)
			.controller("AlreadyBoughtController",AlreadyBoughtController)
			.service('ShoppingListService',ShoppingListService);

			ToBuyController.$inject = ['ShoppingListService'];
			function ToBuyController(ShoppingListService){

				
				var shoppinglist=this;
				shoppinglist.items = ShoppingListService.getBuyItems();
					shoppinglist.buyItem = function (itemIndex) {
    ShoppingListService.buyItem(itemIndex);
  }

				}


				AlreadyBoughtController.$inject=['ShoppingListService'];	
				function AlreadyBoughtController(ShoppingListService){
					var showList = this;
					showList.items=ShoppingListService.getBoughtItems();
				}
			

			function ShoppingListService(){
				var service = this;

				  // List of shopping items

				  var buyitems=[
					{
						name:"cookies",
						quantity:"5"
					},
					{
						name:"Milk",
						quantity:"2"
					},
					{
						name:"Donuts",
						quantity:"12"
					},
					{
						name:"Chocolate",
						quantity:"15"
					},
					{
						name:"Peanut Butter",
						quantity:"5"
					}
					]
				  var boughtitems = [];

				  service.buyItem = function (itemIdex) {
					    var item = buyitems[itemIdex];
					    boughtitems.push(item);
					    buyitems.splice(itemIdex, 1);
					  };

					   service.getBuyItems = function () {
					    return buyitems;
					  };

						  service.getBoughtItems = function () {
						    return boughtitems;
						  };
			}

})();