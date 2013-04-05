define(['jquery-1', 
        'calculator-mvc/js/model/calculator',        
        'calculator-mvc/js/views/results', 
        'calculator-mvc/data/data-sample'], function ($, Model, View, data) {
    

    //defining a controller object
    var Controller = function () {

        var model = new Model(data);
        var view = new View(model, $('.choices'));
        
        view.input1.on("change", function() {
            var gender = $(this).val();
            model.updateGender(gender);
        })

    }

    return Controller;
});