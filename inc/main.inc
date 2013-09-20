<link href="css/main.css" rel="stylesheet" type="text/css" />    
    
    <!--wrapper-->
    <div id="calculator-mvc">
        
        <!--/header-->
        <div class="header">
            <h2 class="header__title">How many people like you are lorem ipsum?</h2>
            <p class="header__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            <p class="header__description">Choose the gender:</p>
        </div>
        <!--/header-->
        
        <!--container inner-->
        <div class="container-inner">
            
            <!--choices-->
            <div class="choices"> 

                <!--gender choices-->              
                <div class="choices__gender">
                    <h3 class="choices__genderTitle">Gender</h3>
                    <form class="choices__genderSelect" action="">
                         <div class="choices__gender-select-item">
                            <input type="radio" name="gender" value="M"/>
                            <label for="male">Male</label>
                        </div>
                        <div class="choices__gender-select-item choices__gender-select-item--female">
                            <input type="radio" name="gender" value="F"/>
                            <label for="female">Female</label>
                        </div>
                    </form>
                </div>
                <!--/gender choices-->

            </div>
            <!--/choices-->

            <!--results-->
            <div class="results" style="visibility:hidden;">
                <h4 class="results__header"></h4>
                    <div class="results__item results__gender">
                        <div class="results__absolute">
                            <h4 class="your-choice">Men</h4>
                            <h4 class="percentage">6%</h4>
                            <h4 class="number">600,000 claims</h4>
                        </div>
                        <div class="results__relative">
                            <h4 class="up">1.2%</h4>
                            <p>Annual change</p>
                        </div>
                    </div>
                    <!--end of gender results-->                    
            </div> 
            <!--/results-->
        
        </div>
        <!--/container inner--> 

    </div>
    <!--/wrapper-->
    
    <script type="text/javascript" src="js/main.js"></script>