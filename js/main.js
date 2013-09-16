(function () {	
	var baseUrl = "http://localhost:8888",
        basePath = '/calculator-mvc',
	    isDesktop = (window.bbc);

	if (isDesktop) {
        console.log('desktop');
        document.getElementById('projectname').className = 'desktop';
		config = {
            	paths: {
                	'calculator-mvc': baseUrl + basePath,
            		'bootstrap': 'js/bootstrap'
            	}
        	}
	} else {
        console.log("mobile environment");
        document.getElementById('newsspec_4950').className = 'mobile';
			config = {
            	paths: {
                	'newsspec_4950': baseUrl + basePath,
        		    'bootstrap': 'js/bootstrap-mobile'
        		}
        	};
	}

    dependencies = ['bootstrap',
                    'js/controller/controller'];

	require(config, dependencies, function (news, Controller) { 

       if (isDesktop) {
        news.$(function () {  //desktop
            var $ = news.$;
            Controller.init();
        })
       } else {
            Controller.init();

       }
	}); //end of require
}());//end of the function