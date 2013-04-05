define(['jquery-1', 
        'calculator-mvc/js/model/calculator',        
        'calculator-mvc/js/views/results', 
        'calculator-mvc/data/data-sample'], function ($, CalculatorModel, ResultsView, data) {
    

    //defining a controller object
    var Controller = function () {

        //initialising model and view
        var calculatorModel = new CalculatorModel(data); //TODO model should be renamed to calculator
        var resultsView = new ResultsView(calculatorModel, $('.choices'));
        
        //controller holds event handlers
        resultsView.input1.on("change", function() {
            var gender = $(this).val();
            calculatorModel.updateGender(gender);
        })

    }

    return Controller;
});
