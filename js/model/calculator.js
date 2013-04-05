//model does not know about controller and views, it has only access to data
//model holds default data, every time there is a change, model notify its subscribers (views)  
define(['jquery-1', 
	'calculator-mvc/data/data-sample', 
	'calculator-mvc/js/vendor/observer'
		], 
	function ($, data, makeObservableSubject) {
	
	var CalculatorModel = function (data) {
	    var that = this;
	    this.data = data; //passing the data in
	    this.gender = ''; //no gender chosen
	    this.rate = 0;
	    this.claims = 0;
	    this.modelChangedSubject = new makeObservableSubject();
	    
	    this.updateGender = function(currentGender) {
	    	that.gender = currentGender;
			that.rate = that.data['gender'][currentGender]['data']['rate'];
			that.claims = that.data['gender'][currentGender]['data']['population']*that.rate;
	    	that.modelChangedSubject.notifyObservers();
	    }
	    this.numberWithCommas = function(x) {
		    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
	    this.getGender = function () {
	    	return that.gender;
	    }
	    this.getRate = function () {
	        return that.rate;
	    }
	    this.getClaims = function () {
	        return that.numberWithCommas(that.claims.toFixed(0));
	    }
	}

	return CalculatorModel;
    
})
