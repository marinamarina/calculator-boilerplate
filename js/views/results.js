/*This is the view for displaying results*/
//VIEW keeps an eye on a model and is responsible for updating the DOM

//in fact, all DOM manipulation are happening here. EG., I assign the input to a variable
//and use it later in controller to bind an event handler to it. Controller is not allowed to query the DOM

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
