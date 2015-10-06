


(function($) {

	$.widget("handy.form_builder", {

	    options: {
	    	attrs:{}, //extra form attributes
	        fields: [], //just fields.
			subforms:[], //subforms + inner fields.
	        buttons: [],
	        field_wrapper_name:'bootstrap',
	        //field_wrapper_function:null, //is the function that wraps form elements - used to bootstrap wrap form fields.
	        field_wrappers:{},
	        on_events:{
	        	field_created:null
	        }
	    },
	    
	    _namespace:'hfb',
	    _next_auto_id:0,
	    _field_wrapper_selected:null,
	    //_ids_used:[],
		
		_create: function () {
			var self = this;
			var container = this.element;
			
			self._field_wrapper_presets = {

	            'bootstrap': {
	            		wrapper_func: function(form_field_element, field_obj) {
	                    
	                	    var _wrap_helper_block = function(help_text) {
	                	        return (
	                	        		help_text?
	                	        				$("<p />")
	                	        					.addClass('help-block')
	                	        					.text(help_text)
	                        			: 
	                        					null
	                	        );
	                	    };
	                	
	                	    /*var _get_validation_icon = function (){
	                	       return (
	                	    		   $("<span/>")
	                	    		   		.addClass('form-control-feedback')
	                	       );
	                	    };*/
	                	
	                	    var _wrap_form_field_group = function(){
	                	        return (
	                	        		$("<div/>")
	                	        			.addClass('form-group')
	                	        			.addClass('has-feedback')
	                	        			.addClass()
	                	        );
	                	    };
	                	    
	                	    var _wrap_label = function(text){
	                	        return (
	                	        		text?
	                	        				$("<label/>")
	                	        					.text(text) 
	                	        					.addClass('control-label')
	                    				:null
	                	        );
	                	    };	                        

							var _wrap_form_field = function(element)
							{
								if(field_obj.type == "text" || field_obj.type == "textarea" || field_obj.type == "select")
								{
									element.addClass('form-control');
								}
								return element;
							}
	                    
	                	    this.wrap_subform = function(subform) {
	                	        return (
											$("<div />")
												.addClass("row")
												.append(
	                	        					$("<div />")
	                	        						.addClass("col-lg-10 col-lg-offset-1")
	                	        						.append(subform)
												)
	                	        );
	                	    };
	                    
		                    return (
		                    		_wrap_form_field_group().append(
		                    				_wrap_label(field_obj.attrs.title),
		                    				_wrap_form_field(form_field_element),
		                    				_wrap_helper_block(field_obj.helpblock)
		                    		)
		                    );
	            		}
	            }
			};
			
			var form = self._build_form();
		    container.append(form);
		    return form;
		},
		
		_destroy: function()
		{
			
		},
	    
	    _getRandomNumber: function (){
	        return Math.floor(Math.random() * 9999);
	    },
	    
	    _get_next_auto_id : function()
	    {
	    	var self = this;
	    	/*var id = self._getRandomNumber();
	    	var is_found = false;
			for(var i=0;i<self._ids_used.length;i++)
			{
				if(id == _self._ids_used[i])
				{
					is_found = true;
					break;
				}
			}
	    	
			if(!is_found)
			{
				self._ids_used.push(id);
				return id;
			}
	    	
			return self._get_next_auto_id();*/
	    	return self._next_auto_id++;
	    	
	    },
	
		_build_form_buttons: function (buttons) {
			var self = this;
	        var items = [];
	        $.each(buttons, function(index, button) {
	    
	            var item = $(
            			'<button/>', 
            			{
            				id: (button.id || 'button_' + self._get_next_auto_id()), 
            				'class': 'btn' + (button.validationState?' btn-' + button.validationState:'') + ' btn-' + (button.size || 'lg')
	        			}
	            	)
	            	.text((button.label || 'submit'))
	            	;
	            
	            if(button.attrs)
            	{
	            	self._append_attrs_from_json(item,button.attrs);
            	}
	            
	            if (button.onSubmit) {
	
	                item
	                	.on(
	            			'click',   
	            			function(e) {
	            				e.preventDefault();
	            				var form = $(item).closest('form');
	            				button.onSubmit(form, form.serializeArray());
	            			}
	                	);
	            }
	            if(button.onClick)
	            	item.on("click", button.onClick);
	            
	            items.push(item);
	        });
	        
	        return (
	        		$("<div />")
	        		.addClass('form-group button-set')
	        		.append(
	        				$("<div />")
	        					.append(items)
	        		)
	        );
	    },
	    
	    _build_form: function(){
		    var self = this;
		    
	    	var field_wrappers_merged = $.extend(self._field_wrapper_presets, self.options.field_wrappers); //merge wrappers
	    	self._field_wrapper_selected = field_wrappers_merged[self.options.field_wrapper_name];
	    	
	    	if(!(self._field_wrapper_selected))
	    		throw "can't find wrapper " + self.options.field_wrapper_name + ".";
	    		
	        var form = $("<form role='form' />");
	        
	        self._append_attrs_from_json(form, self.options.attrs);
	        
			if(self.options.subforms != null)
			{
				$.each(self.options.subforms, function(index, subform){	
					form.append($("<h1/>").text(subform.title));
					var field_groups = [];
					$.each(self._build_form_fields(subform.fields), function(index, item){
	        			var field_obj = item.data(self._namespace + '_field_obj');
	        			field_groups.push(self._field_wrapper_selected.wrapper_func(item, field_obj));  
	        		});
					form.append(self._field_wrapper_selected.wrap_subform(field_groups));
				});
			}
			else if(self.options.fields != null)
			{
				var field_groups = [];
				$.each(self._build_form_fields(self.options.fields), function(index, item)
	        			{
	        				var field_obj = item.data(self._namespace + '_field_obj');
	        				field_groups.push(self._field_wrapper_selected.wrapper_func(item, field_obj));
	        			}
				);
				form.append(field_groups);
			}
	        form.append(self._build_form_buttons(self.options.buttons));
	        return form;
	    },
	    
	    _build_form_fields: function(fields)
	    {
	    	var self = this;
	        var items = [];
	        $.each(fields, function(index, field) {
	        	field_attrs = $.extend({},field.attrs);
	        	
	        	field_attrs.id = (field_attrs.id?field_attrs.id:(field_attrs.name?(field_attrs.name):'form_field_' + self._get_next_auto_id()));
	        	field_attrs.name = (field_attrs.name?field_attrs.name:field_attrs.id);
	        	
	            var item = null;
	            //var adjustedFormElement = addNameAndID( item );
	
	            switch(field.type){   
	
	                case 'radio':
	                    item = $("<div/>");
	                    item.append(self._create_radios(field));
	                    break;
	
	                case 'select':
	                    item = 
	                    	self._append_attrs_from_json(
	                    			self._append_element_form_field_from_json(
	                    					$('<select />'), 
	                    					{
	                    						name:field_attrs.name, 
	                    						id: field_attrs.id
	                						}
	            					),
	            					field_attrs 
	            					//['type','multiple','required']
	                    	);
	                    item.append(self._create_options(field));
	                    break;
	
	                case 'checkbox':
	                    item = $("<div />");
	                    item.append(self._create_checkboxes(field));
	                    break;
	
	                case 'file':
	                    item = self._append_attrs_from_json(
	                    		self._append_element_form_field_from_json(
	                    			$('<input />'), 
	                        		{
	                        			name:field_attrs.name, 
	                        			id: field_attrs.id
	                    			}
	                        ),
	                        $.extend({type:field.type},field_attrs)
	                        //['required']
	                    );
	                    break;
	
	                case 'textarea':
	                    item = self._append_attrs_from_json(
	                    		self._append_element_form_field_from_json(
	                        		$('<textarea />'), 
	                        		{
	                        			name:field_attrs.name, 
	                        			id: field_attrs.id
	                    			}
	                    		),
	                    		field_attrs 
	                    		//['rows', 'required', 'maxLength']
	                    );
	                    break;
	
	                default:
	                    item = self._append_attrs_from_json(
	                    		self._append_element_form_field_from_json(
	                        		$('<input />'), 
	                        		{
	                        			name:field_attrs.name, 
	                        			id: field_attrs.id
	                    			}
	                    		),
	                    		$.extend({type:field.type},field_attrs) 
	                    		//['type','placeholder', 'required', 'pattern', 'maxLength']
	                    );
	                    break;
	            }
	            
	            if(item)
	            {
	            	item.data(self._namespace + '_field_obj', field);
	            	if(self.options.on_events.field_created)
	            		self.options.on_events.field_created(item);
	            		
	                items.push(item);
	            }
	
	        });
	        return items;
	    },
	    
	    _append_element_form_field_from_json: function(element, attrs)
	    {
	    	var self = this;
	        return this._append_attrs_from_json(element,
		        		{ 
		        			'name':attrs.name, 
		        			'id': attrs.id,
	        			}
    				);
	    },
	    
	    _build_element_from_json: function(tag_name, attrs, attrs_allowed)
	    {
	        return this._append_attrs_from_json($('<' + tag_name + ' />'), attrs, attrs_allowed);
	        
	    },
	    
	    _append_attrs_from_json: function(element, attrs, attrs_allowed){
	               
	        for(var name in attrs)        
	        {
	            var is_ok = false;
	            if(attrs[name] !== null)
            	{
		            if(attrs_allowed)
		            {
		                for(var i=0;i<attrs_allowed.length;i++)
		                {
		                    var match_name = attrs_allowed[i];                 
		                    if(name == match_name)
		                    {
		                        is_ok = true;
		                        break;
		                    }
		                }
		            }
		            else
		                is_ok = true; //no allowed list
            	}
	            if(is_ok)
	                element.attr(name, attrs[name]);
	        }
	        
	        element.attr("required")?element.attr("aria-required",true):null;
	
	        return element;
	    },
	    
	    _create_options: function (field) {
	    	var options = field.options;
			if(!options)
				return null;
	        var items = [];
	        $.each(options, function(index, option) {
	            var item = $("<option>" +  option.label +"</option>");
	            item.attr("value", (option.value!=null?option.value:option.label));
	            
	            items.push(item);
	        });
			
	        return items;
	    },
	    
	    _create_checkboxes: function (field) {
	    	var id = field["attrs"].id, name = field["attrs"].name, checkboxes = field.checkboxes;
			if(!checkboxes)
				return null;
	    	var self = this;
	        var items = [];
	        $.each(checkboxes, function(index, checkbox) {
	            var item = 
	                $("<div/>")
	                	.addClass('checkbox')
	                    .append(
	                        $("<label/>")
	                        .append(
	                            $("<input type='checkbox' value='" + (checkbox.value!=null?checkbox.value:checkbox.label) + "'>" + checkbox.label + "</input>")
	                            	.addClass(field["attrs"]['class'])
	                            	.attr('name',name?name + '[' + items.length + ']':null)
	                            	.attr('id', checkbox.id?checkbox.id:(id?(id + "[" + items.length + "]"):null))
	                        )
	                    );
	            items.push(item);
	        });
	        return items;
	    },
	    
	    _create_radios: function (field) {
	    	var id = field["attrs"].id, name = field["attrs"].name, radios = field.radios;
			if(!radios)
				return null;
	    	var self = this;
	        var items = [];
	        $.each(radios, function(index, radio) {
	            var item = 
	                $("<div/>")
	                	.addClass("radio")
	                    .append(
	                        $("<label/>")
	                        .append(
	                            $("<input type='radio' value='" + (radio.value!=null?radio.value:radio.label) + "'>" + radio.label + "</input>")
	                            	.addClass(field["attrs"]['class'])
	                            	.attr('name',name?name:null)
                    				.attr('id', radio.id?radio.id:(id?(id + "[" + items.length + "]"):null))
	                        )
	                    );
	            items.push(item);
	        });
	        return items;
	    }
   
	});
	
})(jQuery);

