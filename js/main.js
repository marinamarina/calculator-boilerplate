/*
 * main.js is an entry point to the whole application
 * initialises controller  
 */

(function () {	
	var baseUrl = 'http://localhost',
        projectname = 'calculator-mvc',
        basePath = '/' + projectname + '/',
        config,
        projectWrapper = document.getElementById('projectname'),
	    isDesktop = (window.bbcNewsResponsive); //this objectis only available on bbc desktop

	/* Require configs and dependencies */
    config = {
        paths: {
            'calculator-mvc': baseUrl + basePath,
            'bootstrap': baseUrl + basePath + 'js/bootstrap-desktop',
            'data' : baseUrl + basePath + 'data',
            'vendor' : baseUrl + basePath + 'js/vendor',
        }
    };

    dependencies = ['bootstrap', 
                    'http://localhost/calculator-mvc/js/controller/controller'];

    /* Deciding whether it's desktop or mobile environment */
    if (isDesktop) {
        projectWrapper.className = 'desktop';
		
	} else {
        projectWrapper.className = 'mobile';
        config.paths['bootstrap'] = baseUrl + basePath + 'js/bootstrap-mobile';			
	}

	require(config, dependencies, function (news, Controller) { 
        Controller.init();
	}); //end of require
}());//end of the function