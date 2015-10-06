var app = {
	run: function()
	{
		$('#app-page-demo').form_builder({
			fields:[
		         	{type: 'text', 
		         		options: {
			        		 helpblock: 'Enter your first name',		         			
			        		 label: 'First Name',
		         		},
			        	 attrs: {
			        		 name: 'first_name',
			        		 placeholder: "What's your first name?", 
			        		 id: 'firstName', 
			        		 required:true,
			        		 maxLength:50,
			        		 'class':'form-control'
			        	 }
		         	},
			]
		});
					
	}                 
};

$(document).ready(
		function(){
			app.run();
		}
);
