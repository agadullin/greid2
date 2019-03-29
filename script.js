define(['jquery'], function($){
    var CustomWidget = function () {
    	var self = this;
		this.callbacks = {
			render: function(){
				console.log('render');
				return true;
			},
			init: function(){
				console.log('init');
				return true;
			},
			bind_actions: function(){
				console.log('bind_actions');
				return true;
			},
			settings: function(){
				return true;
			},
			onSave: function(){
				alert('click');
				return true;
			},
			destroy: function(){
				
			},
			contacts: {
					//select contacts in list and clicked on widget name
					selected: function(){
						console.log('contacts');
					}
				},
			leads: {
					//select leads in list and clicked on widget name
					selected: function(){
						var l_data = self.list_selected().selected;
						var arrIdLeads = [];
						console.log(l_data);
						for (var i = 0; i < l_data.length; i++){
							arrIdLeads[i] = l_data[i]['id'];
						}
                        $.ajax({
                            type: "POST",
                            url: "http://localhost/widget.php",
                            data: {value: arrIdLeads},
							success: function(data){
                            	console.log(data);
							}
                        });
						alert("ок");
					}
				},
			tasks: {
					//select taks in list and clicked on widget name
					selected: function(){
						console.log('tasks');
					}
				}
		};
		return this;
    };

return CustomWidget;
});