/* 
 * VIEW - results view
 * View watches the model (calculator.js) and it's 
 * main responsibility is to query and update the DOM
 *
 */

define(['bootstrap'],
	function (news) {
	
	var $ = news.$,
		pubsub = news.pubsub,
		ResultsView;

	ResultsView = function (model, rootObject) { //defining a view object
	    var that = this;
	    this.model = model;
	    this.genderSelect = rootObject.find('.choices__genderSelect input'); //this is my first input (select gender)
	    this.resultsElement = $('.results');
	    this.yourChoiceElement = $('.your-choice');
	    this.rateElement = $('.percentage');
	    this.claimsElement = $('.number');
        this.relativeRateEl = $('.results__relative>h4');
	
	    pubsub.on('gender-updated', function () {
	    	that.showResults();
	        that.updateGenderPanel(); 
	     
		});
	};

	ResultsView.prototype.showResults = function () {
		this.resultsElement.css('visibility', 'visible');
	};

	ResultsView.prototype.updateGenderPanel = function () {
		
		this.yourChoiceElement.html(this.model.getGender());
		this.rateElement.html(this.model.getRate() + '%');
		this.claimsElement.html(this.model.getClaims() + ' claims');
        this.relativeRateEl.html(this.model.getRelativeRate() + '%');
	};

	ResultsView.prototype.method_name = function () {
		
	};

	return ResultsView;
})
