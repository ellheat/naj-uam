window.addEventListener('DOMContentLoaded', function () {
	//When the page structure is loaded...
	
	var weight = document.querySelector('.weight input[type="range"]');
	var weightValue = +(weight.value);
	var height = document.querySelector('.height input[type="range"]');
	var heightValue = +(height.value);	
	
	weight.addEventListener('change', function() {
		weightValue = parseInt(weight.value);
		document.querySelector('.weight span').textContent = weightValue;	
		BMI(heightValue, weightValue);
	});
	
	height.addEventListener('change', function() {
		heightValue = parseInt(height.value);
		document.querySelector('.height span').textContent = heightValue;	
		BMI(heightValue, weightValue);
	});
	
	function BMI(heightValue, weightValue) {
		var bmi = Math.round(((weightValue/Math.pow(heightValue, 2))*10000)*100)/100;
		var span = document.querySelector('h1 span');
		
		if (bmi >= 19 && bmi <= 25){
			span.className = 'ok';
		} else if (bmi > 25 && bmi <= 30) {
			span.className ='medium';
		} else {
			span.className = 'bad'
		}	
		span.textContent = bmi;
	}
	
});

