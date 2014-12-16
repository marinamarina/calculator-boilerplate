Calculator-mvc
==============

## Project description 

During my placement year with the BBC I had a task to come up with a framework for the various calculators, 
as they became a really popular format in the Visual Journalism team. However, all calculators were
written by different developers using different coding styles and techniques, so calculators needed some common structure. 

I have worked out a Javascript MVC-based Framework, which is at the moment used for calculator-like web applications
(it was already used for the Unemploment calculator, Inflation calculator, Dog years calculator
on the BBC website. 

The main principle is to separate the business logic (presented in the model) from the manipulation of DOM elements
(usually presented in several views) and keep the events handlers in the controller.

This is the set of rules:

* If the calculator is using a set of data, only model should have access to it. Then model can pass this 'knowledge' to the other parts of the application via its getters.
* Controller should not manipulate the DOM. If you need to refer to a DOM element within controller, create a helper module 'inputelements.js',
  and use it as a holder for the DOM elements for later use in other modules
* Module notifies observers (views) about changes made to it using observer pattern, for example an eventEmitter. 



