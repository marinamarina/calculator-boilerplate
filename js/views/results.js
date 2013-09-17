/* VIEW - results view
 * View watches the model (calculator.js) and it's 
 * main responsibility is to query and update the DOM
 *
 */

define(['bootstrap',
	'js/vendor/observer'],
	function (news, makeObservableSubject) {
	
	var $ = news.$;
	var ResultsView = function (model, rootObject) {//defining a view object
	    var that = this;
	    this.genderSelect = rootObject.find('#s1 input');//this is my first input (select gender)
	    this.rateElement = $('#result1 .percentage');
	    this.claimsElement = $('#result1 .number');
	
	    model.modelChangedSubject.addObserver(function () {
	        that.rateElement.html(model.getRate() + '%'); 
	        that.claimsElement.html(model.getClaims() + ' claims');
		})
	}
	return ResultsView;
})
