//custom javascript indeed
//for scrolling js
$(function() {

			/*
			* Plugin intialization
			*/
	    	$('#pagepiling').pagepiling({
	    		menu: '#menu',
	    		anchors: ['page1', 'page2', 'page3', 'page4'],
			    // sectionsColor: ['white', '#ee005a', '#2C3E50', '#39C'],
			    navigation: {
			    	'position': 'right',
			   		'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Page 4']
			   	},
			    afterRender: function(){
			    	$('#pp-nav').addClass('custom');
			    },
			    afterLoad: function(anchorLink, index){
			    	if(index>1){
			    		$('#pp-nav').removeClass('custom');
			    	}else{
			    		$('#pp-nav').addClass('custom');
			    	}
			    }
			});
		});
$('ul.tabs > li').click(function(){
            $('div.tab-content').find('div.active-content').removeClass('active-content');
            $('ul.tabs > li').removeClass('active');
            $(this).parents('div.tabs-sec').find('div.tab-content').find('div.'+this.className).addClass('active-content');
            $(this).addClass('active');
        })