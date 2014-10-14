var json_data = 
{

		fields: [
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
	
		         	{type: 'text', 
		         		options: {
			        		 helpblock: 'Enter your last name',		         			
			        		 label: 'Last Name',
		         		},		         		
			        	attrs: {
			        		name: 'last_name',
			        		placeholder: "What's your last name?",
			        		required:true,
			        		maxLength:50,
			        		'class':'form-control'
			            }
			        },
	        
			        {type: 'email', 
		         		options: {
		         			helpblock: 'Enter your email',		         			
			        		label: 'Email',
		         		},		  			        	
			        	attrs: {
			        		name: 'email',
			        		placeholder: 'email@something.net',
			        		required:true,
			        		maxLength:50,
			        		'class':'form-control'
			            }
			        },
			        
			        {type: 'tel', 
		         		options: {
				            helpblock: 'Enter your phone',
				            label: 'Phone',
		         		},		  						        	
			        	attrs: {
				        	name: 'phone',
				            placeholder: '___-___-____',
			            	required:true,
			            	maxLength:12,
			    			'data-mask':'000-000-0000',
			    			'class':'form-control',
			    			'pattern':"^\\d{3}[-]\\d{3}[-]\\d{4}$"
			    				
			            },
			        
			        },	        
			
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
		
		        ],

        buttons: [ 
			{   size: 'lg', 
			    validationState: 'success',  
			    label: 'Submit Form', 
			    //onSubmit: function(form, values) { console.log(values); },
			    attrs:{
			    	type:'submit'
			    }
			},
			{   size: 'lg', 
			    validationState: 'danger',  
			    label: 'Reset Form',
			    //onClick: function() { alert('hi'); }
			    attrs:
			    	{
			    		type:'reset'
			    	}
			}
		]
};