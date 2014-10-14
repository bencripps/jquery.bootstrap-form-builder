var app = {
	run: function()
	{
		$('#app-page-demo').form_builder({
			fields:[
			        {type: 'radio', 
		         		options: {
				            label: 'select your favorite food.'
		         		},		  			        	
			        	attrs: {
				        	name: 'fav_food',
				            radios: [ 
				                { label: 'pizza' }, 
				                { label: 'tacos' }, 
				                { label: 'wings' } 
				            ],
				            'class':'radio'
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
