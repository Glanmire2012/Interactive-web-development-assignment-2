//r00038222
var elTopping = document.getElementsByClassName('topping');


var total=0.00;
var check=false;
function changePrice(){
	var toppings = 0;
	var doubleTop = 0;
	
	if (document.getElementById('Ham').checked){
		toppings+=1;
	}else{};
	if (document.getElementById('Cheese')checked){
		toppings+=1;
	}else{};
	if (document.getElementById('Chicken').checked){
		toppings+=1;
	}else{};
	if (document.getElementById('Mushroom').checked){
		toppings+=1;
	}else{};
	if (document.getElementById('Tuna').checked){
		toppings+=1;
	}else{};
	if (document.getElementById('Onion').checked){
		toppings+=1;
	}else{};
	if (document.getElementById('Salami').checked){
		toppings+=1;
	}else{};
	if (document.getElementById('Sweetcorn').checked){
		toppings+=1;
	}else{};
	if (document.getElementById('Bacon').checked){
		toppings+=1;
	}else{};
	if (document.getElementById('Pineapple').checked){
		toppings+=1;
	}else{};
	if (document.getElementById('Anchovies').checked){
		toppings+=1;
	}else{};
	if (document.getElementById('MixedPeppers').checked){
		toppings+=1;
	}else{};
	if (document.getElementById('SpicyBeef').checked){
		toppings+=1;
	}else{};
	if (document.getElementById('Tomato').checked){
		toppings+=1;
	}else{};
	if (document.getElementById('Pepperoni').checked){
		toppings+=1;
	}else{};
	if (document.getElementById('Jalepenos').checked){
		toppings+=1;
	}else{};
	if (document.getElementById('BeefBites').checked){
		toppings+=1;
	}else{};
	if (document.getElementById('RedPeppers').checked){
		toppings+=1;
	}else{};
	if (document.getElementById('Meatballs').checked){
		toppings+=1;
	}else{};
	if (document.getElementById('ChilliFlakes').checked){
		toppings+=1;
	}else{};
	if (document.getElementById('Garlic').checked){
		toppings+=1;
	}else{};
	if (document.getElementById('DoubleHam').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleCheese').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleChicken').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleMushroom').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleTuna').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleOnion').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleSalami').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleSweetcorn').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleBacon'.checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoublePineapple').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleAnchovies').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleMixedPeppers').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleSpicyBeef').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleTomato').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoublePepperoni').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleJalepenos').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleBeefBites').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleRedPeppers').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleMeatballs').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleChilliFlakes').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleGarlic').checked){
		doubleTop+=1;
	}else{};
	alert(doubleTop);
	alert(toppings);

}


addEventListener('change', changePrice , false);
