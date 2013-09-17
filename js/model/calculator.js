/* MODEL
 * Model does not know about controller and views,
 * it has only access to data
 * model holds default data, every time there is a change (for example, user updates
 * a form field and model's properties change), model notifies its subscribers (views)  
 */
define(['bootstrap', 
		'data/data-sample', 
		'js/vendor/observer'
		], 
	function (news, data, makeObservableSubject) {
	
	var $ = news.$,
		CalculatorModel;
		
	CalculatorModel = function (data) { //contructor
	    this.data = data; //passing the data in
	    this.gender = ''; //no gender chosen
	    this.rate = 0;
	    this.claims = 0;
	    this.modelChangedSubject = new makeObservableSubject();
	};

	CalculatorModel.prototype.updateGender = function(currentGender) {
	    	this.gender = currentGender;
			this.rate = this.data['gender'][currentGender]['data']['rate'];
			this.claims = this.data['gender'][currentGender]['data']['population'] * this.rate;
	    	this.modelChangedSubject.notifyObservers();
	};

	CalculatorModel.prototype.numberWithCommas = function(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};

	CalculatorModel.prototype.getGender = function () {
	    return this.gender;
	};

	CalculatorModel.prototype.getRate = function () {
	    return this.rate;
	};

	CalculatorModel.prototype.getClaims = function () {
	    return this.numberWithCommas(this.claims.toFixed(0));
	};

	return CalculatorModel;  
})