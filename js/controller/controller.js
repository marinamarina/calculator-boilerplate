define(['jquery-1', 
        'calculator-mvc/js/model/calculator',        
        'calculator-mvc/js/views/results', 
        'calculator-mvc/data/data-sample'], function ($, CalculatorModel, ResultsView, data) {
    

    //defining a controller object
    var Controller = function () {

        //initialising model and view
        var calculatorModel = new CalculatorModel(data); 
        var resultsView = new ResultsView(calculatorModel, $('.choices'));
        
        //controller holds event handlers
        resultsView.genderSelect.on("change", function() {
            var gender = $(this).val();
            calculatorModel.updateGender(gender);
        })

    }

    return Controller;
});
