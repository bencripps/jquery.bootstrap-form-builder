var app = {
	run: function()
	{
		$('#app-page-demo').form_builder({
			fields:[
			        {type: 'checkbox', 
		         		options: {
				            label: 'select your favorite drinks.',
		         		},		  			        	
			        	attrs: {
				        	name: 'fav_drinks',
				            checkboxes: [ 
				                { value: '1', label: 'coke' }, 
				                { value: '2', label: 'pepsi' }, 
				                { value: '3', label: 'rain water' },
				                { value: '4', label: 'ditch water' }
				            ],
				            'class':'checkbox'
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
