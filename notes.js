http://tutorials.jenkov.com/angularjs/index.html


AngularJS is based on the MVC pattern (Model View Control). Therefore AngularJS separates your RIA application into models, views and controllers. The views are specified using HTML + AngularJS's own template language. The models and controllers are specified via JavaScript objects and JavaScript functions. Thus, the views are specified declaratively, as HTML normally is, and the models and controllers are specified imperatively, as JavaScript normally is.

http://latentflip.com/imperative-vs-declarative/

With imperative programming, you tell the compiler what you want to happen, step by step.

In contrast to the imperative one, declarative programming is about describing what you're trying to achieve, without instructing how to do it.

Third, AngularJS executes the controller functions and update (render) the views with data from the model populated by the controller. The page is now ready.

Fourth, AngularJS listens for browser events (e.g. input fields being changed, buttons clicked, the mouse moved etc.). If any of these browser events require a view to change, AngularJS will update the view correspondingly. If the event requires that the corresponding controller function is called, AngularJS will do that too. Not all events require the controller function to be called, even if the view is updated as a result of the event.

JavaScript?!

These day's it's unthinkable that all actions on a webpage should go back and forth to the web server. Nowadays all web pages extensively use JavaScript which cause several advantages:

More interactive and responsive UI
Save bandwidth
Save CPU consumption on the web server
These advantages have several consequences. A more responsive UI and faster loading times mean a better google ranking. Less bandwidth and CPU consumption mean cheaper hosting. The hard part of all this beauty is that it takes more time to code, especially if you want a graceful degradation. If your client doesn't have JavaScript enabled, you still want your website to be functional. Now this is where several frameworks come in to make the life of the developer easier.


Model-View-Whatever is a term used to indicate the capability of the framework being used to give the option to choose from MVC or MVVM approaches. Like in Angular.js. Angular gives the facility of structuring the code in whatever way the developer prefers- MVC (more separation of view and logic) or MVVM (model reads the changes in view by itself and gets updated).



The main difference is the ViewModel object, which acts as a sort of conceptual or view-specific interpretation of the domain data that might not be persistent.

The advantage is that the ViewModel is a sort of "empty table" that the View can either grab data from much more quickly than it can the Model via Controllers—or more commonly—it binds directly to values on the ViewModel, making it a near real-time reflection of the data in play for a given View.

While it has uses in a rich client environment, it's important to be careful not to let too much Model (especially data validation) or Controller logic creep and be duplicatd into the ViewModel.

