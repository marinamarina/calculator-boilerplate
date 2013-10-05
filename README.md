Calculator-mvc
==============

## Project preview

http://marinamarina.github.io/calculator-mvc/

## Project description 

During my placement year with the BBC I had a task to come up with a framework for the various calculators, 
as they became a really popular format in the Visual Journalism team. However, all calculators were
written by different developers using different coding styles and techniques, so calculators needed some common structure. 

I have worked out a Javascript MVC-based Framework, which is at the moment used for calculator-like web applications
(it was already used for the Unemploment calculator, Inflation calculator, Dog years calculator or Great British Class calculator) 
on the BBC website (News Specials). 

The main principle is to separate the business logic (presented in the model) from the manipulation with the DOM elements
(usually presented in several views) and keep the events handlers in the controller.
You could find many variations on the MVC pattern and all of them would have different set of rules
on how the three parts of the application should communicate with each other. 
I was not looking for the best pattern, but perhaps for the most suitable one.

This is the set of rules:

* If the calculator is using a set of data, only model should have access to it. Then model can pass this 'knowledge' onto other parts of the application via its getters.
* Controller should not manipulate the DOM. If you need to refer to a DOM element within controller, create a helper module 'inputelements.js',
  and use it as a holder for the DOM elements for later use in other modules
* Module notifies observers (views) about changes made to it using observer pattern, for example an eventEmitter. 



