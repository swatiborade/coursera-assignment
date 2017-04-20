(function () {
	// body...
	'use strict';

	var shoppinglist1=[
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


	angular.module("ShoppingListCheckOff",[])
			.controller("ToBuyController",ToBuyController)
			.controller("AlreadyBoughtController",AlreadyBoughtController)
			.service('ShoppingListService',ShoppingListService);

			ToBuyController.$inject = ['$scope','ShoppingListService'];
			function ToBuyController($scope,ShoppingListService){

				$scope.shoppinglist1=shoppinglist1;
				var shoppinglist=this;
				shoppinglist.name="";
				shoppinglist.quantity="";
				

					shoppinglist.addItem=function(){
						ShoppingListService.addItem(shoppinglist.name, shoppinglist.quantity);
					}

					

				}


				AlreadyBoughtController.$inject=['ShoppingListService'];	
				function AlreadyBoughtController(ShoppingListService){
					var showList = this;
					showList.items=ShoppingListService.getItems();
				}
			function ShoppingListService(){
				var service = this;

				  // List of shopping items
				  var items = [];

				  service.addItem = function (name, quantity) {
				    var item = {
				      name: name,
				      quantity: quantity
				    };
				    items.push(item);
				  };
				  service.removeItem = function (itemIdex) {
    items.splice(itemIdex, 1);
  };
				  service.getItems = function () {
				    return items;
				  };

			}

})();