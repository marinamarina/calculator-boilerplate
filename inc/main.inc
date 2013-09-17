<link href="css/main.css" rel="stylesheet" type="text/css" />    
    <!--container-->
    <div id="projectname">
        <!--/header-->
        <div class="header">
            <h2>How many people like you are lorem ipsum?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            <p class="description">Choose the gender:</p>
        </div>
        <!--/header-->
        
        <!--container inner-->
        <div class="container-inner">
            <!--choices-->
            <div class="choices"> 
                <!--gender choices-->              
                <div class="gender">
                    <h3>Gender</h3>
                    <form class="gender-form" id="s1" action="">
                        <div class="half-wide">
                            <label for="male">Male</label>
                            <input type="radio" id="male" name="gender" value="M">
                        </div>
                        <div class="half-wide">
                            <label for="female">Female</label>
                            <input type="radio" id="female" name="gender" value="F">
                        </div>
                    </form>
                    <input type="hidden" id="1" value="0">
                </div>
                <!--/gender choices-->

                <br class="clear" />
            </div>
            <!--/choices-->

            <!--results-->
            <div class="results">
                <!--all-->
                <div class="all" style="display: block;">
                    <h3>Your results</h3>
                    <div class="arrow first-arrow"></div>
                    <div class="arrow"></div>
                    <div class="column">
                        <div id="result1">
                            <div class="result-absolute">
                                <h4 class="your-choice">Men</h4>
                                <h4 class="percentage">6%</h4>
                                <h4 class="number">600,000 claims</h4>
                                <p>One year ago: <span>7.0%</span></p>
                                <p>Five years ago: <span>8.2%</span></p>
                            </div>
                            <div class="result-relative">
                                <h4 class="up">1.2%</h4>
                                <p>Annual<br/>change</p>
                            </div>
                        </div>
                    </div>
                </div>                 
            </div> 
            <!--/results-->
        </div>
        <!--/container inner-->               
    </div>
    <!--/wrapper-->
    <script type="text/javascript" src="js/main.js"></script>