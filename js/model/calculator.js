/* MODEL
 * Model does not know about controller and views,
 * it has only access to data
 * model holds default data, every time there is a change (for example, user updates
 * a form field and model's properties change), model notifies its subscribers (views)  
 */
define(['bootstrap',
		'data/data-sample'
		],
	function (news, data) {
	
	    var $ = news.$,
		    pubsub = news.pubsub,
            CalculatorModel;
		
	/* Constructor */
	CalculatorModel = function (data) {
	        this.data = data; //passing the data in
	        this.gender = ''; //no gender chosen
	        this.rate = 0;
            this.rateLastYear = 0;
	        this.claims = 0;
	};

	/* Getters */
	CalculatorModel.prototype.getGender = function() {
		return (this.gender === 'M') ? 'Men' : 'Women';
	};

	CalculatorModel.prototype.getRate = function() {
	    return this.rate.toFixed(1);
	};

	CalculatorModel.prototype.getClaims = function() {
	    return this.numberWithCommas(this.claims.toFixed(0));
	};
        
    CalculatorModel.prototype.getRelativeRate = function() {
        return (this.rate - this.rateLastYear).toFixed(1);
    };

	/* Utility functions */
	CalculatorModel.prototype.numberWithCommas = function(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};

	CalculatorModel.prototype.updateGender = function(currentGender) {
	    this.gender = currentGender;
		this.rate = this.data['gender'][currentGender]['data']['rate'];
        this.rateLastYear = this.data['gender'][currentGender]['data']['rateLastYear'];
		this.claims = this.data['gender'][currentGender]['data']['population'] * this.rate;

	    pubsub.emitEvent('gender-updated');
	};

	return CalculatorModel;  
});