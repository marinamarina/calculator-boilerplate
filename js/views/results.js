/* VIEW - results view
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
	    this.genderSelect = rootObject.find('.choices__genderSelect input'); //this is my first input (select gender)
	    this.resultsEl = $('.results');
	    this.rateElement = $('.percentage');
	    this.claimsElement = $('.number');
	
	    pubsub.on('gender-updated', function () {
	    	that.resultsEl.css('visibility', 'visible');
	        that.rateElement.html(model.getRate() + '%'); 
	        that.claimsElement.html(model.getClaims() + ' claims');
		});
	};

	ResultsView.prototype.method_name = function (first_argument) {
		// body...
	};

	return ResultsView;
})
