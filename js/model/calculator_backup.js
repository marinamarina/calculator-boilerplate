define(['jquery-1'],function ($) {
     /*var Calculator = function (data) {
        this.rate = data.rate;
        this.bindEvents();
    };
    Calculator.prototype.setGender = function (gender) {

    }*/

    var makeObservableSubject = function () {
	    var observers = [];
	    var addObserver = function (o) {
	        if (typeof o !== 'function') {
	            throw new Error('observer must be a function');
	        }
	        for (var i = 0, ilen = observers.length; i < ilen; i += 1) {
	            var observer = observers[i];
	            if (observer === o) {
	                throw new Error('observer already in the list');
	            }
	        }
	        observers.push(o);
	    }
	    var removeObserver = function (o) {
	        for (var i = 0, ilen = observers.length; i < ilen; i += 1) {
	            var observer = observers[i];
	            if (observer === o) {
	                observers.splice(i, 1);
	                return;
	            }
	        }
	        throw new Error('could not find observer in list of observers');
	    }

	    var notifyObservers = function (data) {
	        // Make a copy of observer list in case the list
	        // is mutated during the notifications.
	        var observersSnapshot = observers.slice(0);
	        for (var i = 0, ilen = observersSnapshot.length; i < ilen; i += 1) {
	            observersSnapshot[i](data);
	        }
	    }

	    return {
	        addObserver: addObserver,
	        removeObserver: removeObserver,
	        notifyObservers: notifyObservers,
	        notify: notifyObservers
	    }
	}

	//data file
	var data = {
	   "gender":{
	      "M":{
	         "data":{
	            "rate":0.0427,
	            "population":1604200
	         }
	      },
	      "F":{
	         "data":{
	            "rate":0.0627,
	            "population":1600000
	         }
	    }}}


	//defining a model object
	var Model = function (data) {
	    var that = this;
	    this.data = data; //passing the data in
	    this.gender = ''; //no gender chosen
	    this.rate = 0; 
	    this.modelChangedSubject = new makeObservableSubject();
	    
	    this.updateGender = function(currentGender) {
	    	that.gender = currentGender;
			that.rate = that.data['gender'][currentGender]['data']['rate'];
	    	that.modelChangedSubject.notifyObservers();
	    }
	    this.getGender = function () {
	    	return that.gender;
	    }
	    this.getRate = function () {
	        return that.rate;
	    }
	}

	//defining a view object
	var View = function (model, rootObject) {
	    var that = this;
	    this.input1 = rootObject.find('#s1 input');//this is my first input (select gender)


	    model.modelChangedSubject.addObserver(function () {
	        console.log("Rate deployed", model.getRate());    
		})
	}

	//defining a controller object
	var Controller = function (model, view) {

		view.input1.on("change", function() {
			var gender = $(this).val();
			model.updateGender(gender);
		})

	}

	//main.js
	$(document).ready(function () {

		//initialise my model, view and controller
	    var model = new Model(data);
	    var view = new View(model, $('.choices'));
	    var controller = new Controller(model, view);
	})    
    
})