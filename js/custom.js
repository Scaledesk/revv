//custom javascript indeed
//for scrolling js
$(function() {

			/*
			* Plugin intialization
			*/
			if(window.outerWidth<=600){

			}else{
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
			    		if(anchorLink=='page1'){
			    			$('header.header').removeClass('fix');
			    		}else if($('header.header').hasClass('fix')){
			    		}else{
			    			$('header.header').addClass('fix')
			    		}
			    	}else{
			    		$('#pp-nav').addClass('custom');
			    		if(anchorLink=='page1'){
			    			$('header.header').removeClass('fix');
			    		}else if($('header.header').hasClass('fix')){
			    		}else{
			    			$('header.header').addClass('fix')
			    		}
			    	}
			    }
			});
	    }
		});
$('ul.tabs > li').click(function(){
            $('div.tab-content').find('div.active-content').removeClass('active-content');
            $('ul.tabs > li').removeClass('active');
            $(this).parents('div.tabs-sec').find('div.tab-content').find('div.'+this.className).addClass('active-content');
            $(this).addClass('active');
        });
$(function(){
		$('div.section').not('').css('padding-top',$('header.header').outerHeight()-10)
});
$(function(){
	$("#testomanial-slider").lightSlider({
          gallery:true,
          item:1,
          thumbItem:0,
          slideMargin: 0,
          speed:2200,
          auto:false,
          loop:true,
          onSliderLoad: function() {
              $('#testomanial-slider').removeClass('cS-hidden');
          }
      });
	$("#pfq-slider").lightSlider({
          gallery:true,
          item:3,
          thumbItem:0,
          slideMargin: 10,
          speed:1200,
          pause:3000,
          auto:false,
          loop:true,
          responsive: [ {
            breakpoint:817,
            settings: {
              item: 2,
              slideMove: 1,
              }
            }, {
            breakpoint: 480,
            settings: {
              item: 1,
              slideMove: 1,
              }
            }],
          onSliderLoad: function() {
              $('#pfq-slider').removeClass('cS-hidden');
          }
      });
})
$(function() {
        $('ul.tabs > li').click(function(){
            $('div.tab-content').find('div.active-content').removeClass('active-content');
            $('ul.tabs > li').removeClass('active');
            $(this).parents('div.tabs-sec').find('div.tab-content').find('div.'+this.className).addClass('active-content');
            $(this).addClass('active');
        })
        $('.panel > .panel-title').click(function(){
            if($(this).parents('.panel').find('.panel-content').hasClass('in')==true){
                $(this).parents('.panel').find('.panel-content').slideUp(150).removeClass('in');
                $(this).find('i.fa').removeClass('fa-minus').addClass('fa-angle-down');
            }else if($('.panel-content').hasClass('in')==true){
                $('.faq-content .panel-content').removeClass('in').slideUp(150);
                $('.panel-title').find('i.fa').removeClass('fa-minus').addClass('fa-angle-down');
                $(this).parents('.panel').find('.panel-content').slideDown(150).addClass('in');
                $(this).find('i.fa').removeClass('fa-angle-down').addClass('fa-minus');
            }else{
            $(this).parents('.panel').find('.panel-content').slideDown(150).addClass('in');
            $(this).find('i.fa').removeClass('fa-angle-down').addClass('fa-minus')
            }
        });

        $('.panel-content').slideUp().eq(0).slideDown(150).addClass('in').parents('.panel').find('.panel-title').find('i.fa').removeClass('fa-angle-down').addClass('fa-minus');
    });