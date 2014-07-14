jQuery-Bootstrap-Form-Builder
=============================

A jQuery Library which helps create Bootstrap Forms. Rather than build an HTML form using bootstrap classes and like a million `<divs>` why not just build a JSON element? Well now you can.

For live demos and full documentation, please visit the [jQuery Bootstrap Form Builder homepage](http://benjamincripps.com/jqueryBootstrapFormBuilder/demo/demo.html).

Examples:
--------

![alt text](http://benjamincripps.com/jqueryBootstrapFormBuilder/img/textInput.png "Text Input")

![alt text](http://benjamincripps.com/jqueryBootstrapFormBuilder/img/selectInput.png "Select")


Documentation:
--------------

For a full list of features and methods please visit the [jQuery Bootstrap Form Builder homepage](http://benjamincripps.com/jqueryBootstrapFormBuilder/demo/demo.html).


### A couple words about form "names" and "ID's"

Semantic HTML requires that form elements all have names, thus they are a required field for most instances where people need forms. **But not always!** So rather than require names, and throw an error if one isnt defined, the plugin will simply create a random name (and ID) which you can choose to use or ignore. 

	**What happens if an ID is provided but no name?** Well the plugin will use the defined ID as a 'name' for the input.

	**What happens if a name is provided but no ID?** Like before, the plugin will use the defined name as an ID for the input.

	By giving each element a name, the form will return meaningful data on submit (which is built into the plugin). See below for more information.

###Creating a Form 

	Javascript:
	$('#someID').bootstrapForm({ options })

	HTML:
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script type="text/javascript" src='../jquery.bootstrapFormBuilder.js'></script>

### All Text Inputs Supported:

The plugin supports Select, Multiselect, Button, Textarea, File, Checkbox, Radio, and Text Inputs ( which includes text, password, datetime, datetime-local, date, month, time, week, number, email, url, search, tel, color)

For information about creating individual inputs or more complex forms please visit the [homepage](http://benjamincripps.com/jqueryBootstrapFormBuilder/demo/demo.html).

### Form Functions

Retrieving a bootstrap form information has never been simpler. Simply add a callback function in your JSON element, and it will be called on submit. The form values will be available as the first argument for the onSubmit function.

	$('#someID').bootstrapForm({
    
    formInputs: [],

    buttons: [ 
            { size: 'lg',
              id: 'submit',
              text: 'Submit Form',
              onSubmit: function(values) { console.log(values) }
            }
    ]

	});

The argument values is an array of objects, where each object is a form element containing the input name and value.	 

Questions:
----------

If you have any questions, please contact me at [ben@benjamincripps.com](mailto:ben@benjamincripps.com), or visit the plugin [homepage](http://benjamincripps.com/jqueryBootstrapFormBuilder/demo/demo.html).