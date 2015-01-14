	$( document ).ready(function() {

		var totalstories=$(".timelineinner nav > li").length;

		//alert(totalstories);

		//function to reset all active classes within LI tags of .timelineinner
		function resetactivelists(){
			$(".timelineinner nav li").each(function(){
				var cls=$(this).attr('class');
				if(cls='active')
					$(this).removeClass();
			});
			return false;
		};
		//getting the order count of the nav item trigger
		function gettriggercount(collection, domelement){
			var count=$(collection).index(domelement);
			return count;
		};

		//setting active class for LI tag on click event + showing corresponding story item
		$(".timelineinner nav li a").click(function(){
				resetactivelists();//removes all .active classes
				var triggercount=gettriggercount(".timelineinner nav li", $(this).parent())+1;//fetching the order number of the trigger, to be used to show res
				//alert(triggercount);
				var i=0;
				$(".timelineitems article").each(function(){
					i++;
					var cls=$(this).attr('class');
					if($(this).hasClass('hidden')==false)
						$(this).addClass('hidden');
					if (i==triggercount){
						$(this).removeClass('hidden');
					}
				});
				$(this).parent().addClass("active");
				return false;
		});
	});