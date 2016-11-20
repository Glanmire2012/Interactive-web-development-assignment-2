//r00038222
var elTopping = document.getElementsByClassName('topping');


var total=0.00;
var check=false;
function changePrice(){
	var toppings = 0;
	var doubleTop = 0;
	
	var elCheese = document.getElementById('Cheese');
	var elChicken = document.getElementById('Chicken');
	var elMushroom = document.getElementById('Mushroom');
	var elTuna = document.getElementById('Tuna');
	var elOnion = document.getElementById('Onion');
	var elSalami = document.getElementById('Salami');
	var elSweetcorn = document.getElementById('Sweetcorn');
	var elBacon = document.getElementById('Bacon');
	var elPineapple = document.getElementById('Pineapple');
	var elAnchovies = document.getElementById('Anchovies');
	var elMixedPeppers = document.getElementById('MixedPeppers');
	var elSpicyBeef = document.getElementById('SpicyBeef');
	var elTomato = document.getElementById('Tomato');
	var elPepperoni = document.getElementById('Pepperoni');
	var elJalepenos = document.getElementById('Jalepenos');
	var elBeefBites = document.getElementById('BeefBites');
	var elRedPeppers = document.getElementById('RedPeppers');
	var elMeatballs = document.getElementById('Meatballs');
	var elChilliFlakes = document.getElementById('ChilliFlakes');
	var elGarlic = document.getElementById('Garlic');
	var elDoubleHam = document.getElementById('DoubleHam');
	var elDoubleCheese = document.getElementById('DoubleCheese');
	var elDoubleChicken = document.getElementById('DoubleChicken');
	var elDoubleMushroom = document.getElementById('DoubleMushroom');
	var elDoubleTuna = document.getElementById('DoubleTuna');
	var elDoubleOnion = document.getElementById('DoubleOnion');
	var elDoubleSalami = document.getElementById('DoubleSalami');
	var elDoubleSweetcorn = document.getElementById('DoubleSweetcorn');
	var elDoubleBacon = document.getElementById('DoubleBacon');
	var elDoublePineapple = document.getElementById('DoublePineapple');
	var elDoubleAnchovies = document.getElementById('DoubleAnchovies');
	var elDoubleMixedPeppers = document.getElementById('DoubleMixedPeppers');
	var elDoubleSpicyBeef = document.getElementById('DoubleSpicyBeef');
	var elDoubleTomato = document.getElementById('DoubleTomato');
	var elDoublePepperoni = document.getElementById('DoublePepperoni');
	var elDoubleJalepenos = document.getElementById('DoubleJalepenos');
	var elDoubleBeefBites = document.getElementById('DoubleBeefBites');
	var elDoubleRedPeppers = document.getElementById('DoubleRedPeppers');
	var elDoubleMeatballs = document.getElementById('DoubleMeatballs');
	var elDoubleChilliFlakes = document.getElementById('DoubleChilliFlakes');
	var elDoubleGarlic = document.getElementById('DoubleGarlic');
	if (document.getElementById('Ham').checked){
		toppings+=1;
	}else{};
	if (elCheese.checked){
		toppings+=1;
	}else{};
	if (elChicken.checked){
		toppings+=1;
	}else{};
	if (elMushroom.checked){
		toppings+=1;
	}else{};
	if (elTuna.checked){
		toppings+=1;
	}else{};
	if (elOnion.checked){
		toppings+=1;
	}else{};
	if (elSalami.checked){
		toppings+=1;
	}else{};
	if (elSweetcorn.checked){
		toppings+=1;
	}else{};
	if (elBacon.checked){
		toppings+=1;
	}else{};
	if (elPineapple.checked){
		toppings+=1;
	}else{};
	if (elAnchovies.checked){
		toppings+=1;
	}else{};
	if (elMixedPeppers.checked){
		toppings+=1;
	}else{};
	if (elSpicyBeef.checked){
		toppings+=1;
	}else{};
	if (elTomato.checked){
		toppings+=1;
	}else{};
	if (elPepperoni.checked){
		toppings+=1;
	}else{};
	if (elJalepenos.checked){
		toppings+=1;
	}else{};
	if (elBeefBites.checked){
		toppings+=1;
	}else{};
	if (elRedPeppers.checked){
		toppings+=1;
	}else{};
	if (elMeatballs.checked){
		toppings+=1;
	}else{};
	if (elChilliFlakes.checked){
		toppings+=1;
	}else{};
	if (elGarlic.checked){
		toppings+=1;
	}else{};
	if (elDoubleHam.checked){
		doubleTop+=1;
	}else{};
	if (elDoubleCheese.checked){
		doubleTop+=1;
	}else{};
	if (elDoubleChicken.checked){
		doubleTop+=1;
	}else{};
	if (elDoubleMushroom.checked){
		doubleTop+=1;
	}else{};
	if (elDoubleTuna.checked){
		doubleTop+=1;
	}else{};
	if (elDoubleOnion.checked){
		doubleTop+=1;
	}else{};
	if (elDoubleSalami.checked){
		doubleTop+=1;
	}else{};
	if (elDoubleSweetcorn.checked){
		doubleTop+=1;
	}else{};
	if (elDoubleBacon.checked){
		doubleTop+=1;
	}else{};
	if (elDoublePineapple.checked){
		doubleTop+=1;
	}else{};
	if (elDoubleAnchovies.checked){
		doubleTop+=1;
	}else{};
	if (elDoubleMixedPeppers.checked){
		doubleTop+=1;
	}else{};
	if (elDoubleSpicyBeef .checked){
		doubleTop+=1;
	}else{};
	if (elDoubleTomato.checked){
		doubleTop+=1;
	}else{};
	if (elDoublePepperoni.checked){
		doubleTop+=1;
	}else{};
	if (elDoubleBeefBites.checked){
		doubleTop+=1;
	}else{};
	if (elDoubleRedPeppers.checked){
		doubleTop+=1;
	}else{};
	if (elDoubleMeatballs.checked){
		doubleTop+=1;
	}else{};
	if (elDoubleChilliFlakes.checked){
		doubleTop+=1;
	}else{};
	if (elDoubleGarlic.checked){
		doubleTop+=1;
	}else{};
	alert(doubleTop);
	alert(toppings);

}


addEventListener('change', changePrice , false);
