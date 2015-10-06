var app = {
	run: function()
	{
		$('#app-page-demo').form_builder({
			fields:[
			        {type: 'select', 
		         		options: {
				            helpblock: 'I bet your favorite isn\'t listed.',
				            label: 'What is your favorite band?',
		         		},		  
			        	attrs: {
				            options: [ 
				                {value: 'val1', label: 'The Wonder Years' }, 
				                {value: 'val2', label: 'Polar Bear Club' }, 
				                {value: 'val3', label: 'Frank Turner' } 
			                ],
			                'class':'form-control'				                
			            }
			        }
			]
		});
					
	}                 
};

$(document).ready(
		function(){
			app.run();
		}
);
