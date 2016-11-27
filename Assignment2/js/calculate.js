//r00038222
var elTopping = document.getElementsByClassName('topping');
var viewDoubleHam, hamFiller,
viewDoubleHam = document.getElementById('doubleHam').classList;
hamFiller = document.getElementById('hamFiller').classList;
var total=0.00;
var check=false;
function changePrice(){
	var toppings = 0;
	var doubleTop = 0;
	var price=0.00;
	var total =document.getElementById('price')
	
	if (document.getElementsByName('BaseType').value == 'Stuffed'){
		price+=2.5;
	}else{};
	if (document.getElementById('Ham').checked){
		toppings+=1;
		if (viewDoubleHam.contains('hidden')){
			viewDoubleHam.remove('hidden');
			hamFiller.add('hidden');
		}else{};
	}else{viewDoubleHam.add('hidden');
			hamFiller.remove('hidden');};
	if (document.getElementById('Cheese').checked){
		toppings+=1;
	}else{};
	if (document.getElementById('Chicken').checked){
		toppings+=1;
	}else{};
	if (document.getElementById('Mushroom').checked){
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
	if (document.getElementById('Pepperoni').checked){
		toppings+=1;
	}else{};
	if (document.getElementById('Jalepenos').checked){
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
	if (document.getElementById('DoubleOnion').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleSalami').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleSweetcorn').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleBacon').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoublePineapple').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleAnchovies').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoublePepperoni').checked){
		doubleTop+=1;
	}else{};
	if (document.getElementById('DoubleJalepenos').checked){
		doubleTop+=1;
	}else{};
	
	price = (1.50*toppings)+(0.60*doubleTop);
	return total.innerHTML="Your price is "+price.toFixed(2);
	
	alert(doubleTop);
	alert(toppings);

}


addEventListener('change', changePrice , false);
