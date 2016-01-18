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


ng-bind Directive

The ng-bind directive is an alternative to the interpolation directive {{}}}}. You use it by inserting an ng-bind attribute into the HTML element you want AngularJS to insert data into. Here is an example:

If you are not using ng-bind, instead something like this:

<div>
  Hello, {{user.name}}
</div>
you might see the actual Hello, {{user.name}} for a second before user.name is resolved (before the data is loaded)

You could do something like this

<div>
  Hello, <span ng-bind="user.name"></span>
</div>
if that's an issue for you.

Another solution is to use ng-cloak.

Visibility:

While your angularjs is bootstrapping, the user might see your placed brackets in the html. This can be handled with ng-cloak. But for me this is a workaround, that i don't need to use, if i use ng-bind.

Performance:

The {{}} is much slower.

This ng-bind is a directive and will place a watcher on the passed variable. So the ng-bind will only apply, when the passed value does actually change.

The brackets on the other hand will be dirty checked and refreshed in every $digest, even if it's not necessary.

I am currently building a big single page app (~500 bindings per view). Changing from {{}} to strict ng-bind did save us like 20% in every scope.$digest

ng-bind has one-way data binding ($scope --> view). It has a shortcut {{ val }} which displays the scope value $scope.val inserted into html where val is a variable name.

ng-model is intended to be put inside of form elements and has two-way data binding ($scope --> view and view --> $scope) e.g. <input ng-model="val"/>.

Would it be a fair assumption to say that ng-bind is only required where the value to display does not require user input. And, ng-modal would be used for values (<input>) that do. The angular documentation seems to suggest this but I'm after a better understanding.




They do the same job relatively.

Looking at api docs, you may find what are they exactly.

ngCloak
The ngCloak directive is used to prevent the Angular html template from being briefly displayed by the browser in its raw (uncompiled) form while your application is loading. Use this directive to avoid the undesirable flicker effect caused by the html template display.
The ng-cloak directive is a built-in angular directive that hides all of the elements on the page that contain the directive.

<div ng-cloak>
<h1>Hello {{ foo }}</h1>
</div>
After the browser is done loading and the compile phase of the template is rendering, angular will delete the ngCloak element attribute and the element will become visible.

ngBind
The ngBind attribute tells Angular to replace the text content of the specified HTML element with the value of a given expression, and to update the text content when the value of that expression changes.
Using ng-bind instead of {{ }} will prevent the unrendered {{ }} from showing up instead of empty elements being rendered. The example from above can be rewritten to the following which will prevent the page from flickering with {{ }}:

<div>
<h1>Hello <span ng-bind="foo"></span></h1>
</div>

Escaping HTML From The Model

If the data obtained from the model contains HTML elements, these are escaped before being inserted into the HTML template. The escaping means that the HTML is displayed as text, and not as HTML.

This is done to prevent HTML injection attacks. For instance, in a chat application somebody might insert a <script> element with JavaScript into a chat message. If this element was not escaped, anyone seeing the chat message might have the <script> element executed. With the HTML escaping the <script> element will just be displayed as text.

You can disable the HTML escaping by using the ng-bind-html-unsafe directive, like this:

<div ng-controller="MyController" >
  <span ng-bind-html-unsafe="myData.textf()"></span>
</div>

Conditional Rendering

AngularJS can show or hide HTML depending on the state of data in the model. You do so using a set of AngularJS directives which are created specifically for that purpose. I will cover these directives in the following sections.




The ng-switch directive is used if you want to add or remove HTML elements from the DOM based on data in the model. 


This example contains a div element with an ng-switch attribute and an on attribute. The on attribute tells which data in the model to switch on.

Inside the div element are three nested div elements. The first two nested div elements contains an ng-switch-when attribute. The value of this attribute tells what value the model data referenced in the on attribute of the parent div should have, for the nested div to be visible. In this example the first nested div is visible when myData.switch is 1, and the second nested div is visible when myData.switch is 2.

The third nested div has an ng-switch-default attribute. If no of the other ng-switch-when directives are matched, then the div with the ng-switch-default attribute is shown.

In the example above the controller function sets myData.switch to 3. That means that the nested div with the ng-switch-default attribute will be shown. The two other nested div elements will be removed from the DOM completely.












