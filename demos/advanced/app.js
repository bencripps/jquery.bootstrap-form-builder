var app = {
	run: function(container)
	{
		container.form_builder({
                    	  attrs:
                    	  {
                    		  id:'test-form',
                    		  novalidate:true,
                   		      'data-bv-feedbackicons-valid':"glyphicon glyphicon-ok",
                   		      'data-bv-feedbackicons-invalid':"glyphicon glyphicon-remove",
                   		      'data-bv-feedbackicons-validating':"glyphicon glyphicon-refresh",
                   		      'data-bv-submitbuttons':'button[type="submit"]',
                   		      'data-bv-live':"enabled"                    		  
                   		  },
                        fields:	json_data.fields,
			            buttons: json_data.buttons,
			            on_events:
			            	{
								field_created:function(field)
								{
									if(field.is('input'))
									{
										if(field.data('mask'))
										{
											field.mask(field.data('mask'));
										}
									}
											
								}

			            	}
                      }).element;
                      
					
                      $("#test-form").bootstrapValidator()
                      .on('success.form.bv', function(e)
                    		  {
                    	  		e.preventDefault();
                    	  		var form = $(e.target);
                    	  		var bv = form.data('bootstrapValidator');
                    	  		var params = form.serialize(); 
                    	  		console.log(params);
                    		  });
	}                 
}