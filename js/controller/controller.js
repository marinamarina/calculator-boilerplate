define(['bootstrap', 
        'js/model/calculator',        
        'js/views/results', 
        'data/data-sample'], function (news, CalculatorModel, ResultsView, data) {
    

    var $ = news.$;
    function init() {

        //initialising model and view
        var calculatorModel = new CalculatorModel(data); 
        var resultsView = new ResultsView(calculatorModel, $('.choices'));
        
        //controller holds event handlers
        resultsView.genderSelect.on("change", function() {
            var gender = $(this).val();
            calculatorModel.updateGender(gender);
        })

    }

    return {init: init}
})