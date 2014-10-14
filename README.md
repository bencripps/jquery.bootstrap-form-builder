jQuery-Tools-Form-Builder
=============================

A jQuery library which builds forms from JSON and includes an extendable framework that defaults to bootstrap. This work is inspired and forked from [Benjamin Cripps] (http://benjamincripps.com/) work at [bencripps@github] (https://github.com/bencripps/jQuery-Bootstrap-Form-Builder). The unique spin is the conversion to a jQuery widget, added a form building wrapper extension, adding custom dom attributes to form and fields, and added demo of form validation.

For live demos and full documentation, please visit the [homepage](http://kel-nelson.github.io/jQuery-Tools-Form-Builder).

Examples:
--------

![alt text](https://googledrive.com/host/0B8Yc8B7vG7ceT1BZWDlROEhsb1k/example-checkboxes.png "Checkboxes")
![alt text](https://googledrive.com/host/0B8Yc8B7vG7ceT1BZWDlROEhsb1k/example-radios.png "Radios")
![alt text](https://googledrive.com/host/0B8Yc8B7vG7ceT1BZWDlROEhsb1k/example-select.png "Select")
![alt text](https://googledrive.com/host/0B8Yc8B7vG7ceT1BZWDlROEhsb1k/example-textbox.png "Textbox")


Documentation:
--------------

For a full list of features and methods please visit the [homepage](http://kel-nelson.github.io/jQuery-Tools-Form-Builder).


### A couple words about form "names" and "ID's"

Semantic HTML requires that form elements all have names, thus they are a required field for most instances where people need forms. **But not always!** So rather than require names, and throw an error if one isnt defined, the plugin will simply create a random name (and ID) which you can choose to use or ignore. 

	**What happens if an ID is provided but no name?** Well the plugin will use the defined ID as a 'name' for the input.

	**What happens if a name is provided but no ID?** Like before, the plugin will use the defined name as an ID for the input.

	By giving each element a name, the form will return meaningful data on submit (which is built into the plugin). See below for more information.

###Creating a Form 

	Javascript:
	$('#someID').form_builder({ options })

	HTML:
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script type="text/javascript" src='../src/jquery-tools-form-builder.js'></script>

### All Text Inputs Supported:

The plugin supports Select, Multiselect, Button, Textarea, File, Checkbox, Radio, and Text Inputs ( which includes text, password, datetime, datetime-local, date, month, time, week, number, email, url, search, tel, color)

For information about creating individual inputs or more complex forms please visit the [homepage](http://kel-nelson.github.io/jQuery-Tools-Form-Builder).

### Form Functions

Retrieving a bootstrap form information has never been simpler. Simply add a callback function in your JSON element, and it will be called on submit. The form values will be available as the first argument for the onSubmit function.

	$('#someID').bootstrapForm({
		fields: [],
		buttons: [ 
				{ 
					size: 'lg',
					label: 'Submit Form',
					onSubmit: function(values) { console.log(values) }
					attrs: //extra attrs to append
					{
						id: 'submit_form',
					}

				},
				{ 
					size: 'lg',
					label: 'Clear Form',
					onClick: function(form) { //do something. }
					attrs: //extra attrs to append
					{
						id: 'clear_form',
					}
				}
			]

	});

The argument values is an array of objects, where each object is a form element containing the input name and value.	 

Questions:
----------

If you have any questions on this implementation, please contact me at [ukcn001@gmail.com](mailto:ukcn001@gmail.com), or visit the plugin [homepage](http://kel-nelson.github.io/jQuery-Tools-Form-Builder).

For original work see [Benjamin Cripps] (http://benjamincripps.com/) work at [bencripps@github].
