(function($) {
	"use strict";

	$(window).load(function() {
		landapp_revolution_slider_init();
	});

	/* ---------------------------------------------------------------------- */
	/* ----------------------------- Revolution Slider -----------------------*/
	/* ---------------------------------------------------------------------- */
	function landapp_revolution_slider_init() {

    //1. Revolution Slider Fullwidth/Default
    //2. Revolution Slider Fullscreen

    //file location
    var js_File_Location = "js/revolution-slider/js/";
    var tpj = jQuery;


    //1. Revolution Slider Fullwidth/Default
    var revapi_1;
    var rev_slider_fullwidth = "#revolution-slider-fullwidth";
    if (tpj(rev_slider_fullwidth).revolution == undefined) {
    	revslider_showDoubleJqueryError(rev_slider_fullwidth);
    } else {
    	revapi_1 = tpj(rev_slider_fullwidth).show().revolution({
    		sliderType: "standard",
    		jsFileLocation: js_File_Location,
    		sliderLayout: "fullwidth",
    		dottedOverlay: "none",
            delay: 6000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "on",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    style: "gyges",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 800,
                    style: "hebe",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 30,
                    space: 5,
                    tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title"></span>'
                }
            },
    		responsiveLevels:[1170],
    		gridwidth:[1170],
    		gridheight:[730],
    		lazyType: "none",
    		parallax: {
    			type: "scroll",
    			origo: "slidercenter",
    			speed: 1000,
    			levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55]
    		},               
    		shadow: 0,
    		spinner: "off",
    		stopLoop: "off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
    		shuffle: "off",
    		autoHeight: "off",
    		fullScreenAutoWidth: "off",
    		fullScreenAlignForce: "off",
    		fullScreenOffsetContainer: "",
    		fullScreenOffset: "0",
    		hideThumbsOnMobile: "off",
    		hideSliderAtLimit: 0,
    		hideCaptionAtLimit: 0,
    		hideAllCaptionAtLilmit: 0,
    		debugMode: false,
    		fallbacks: {
    			simplifyAll: "off",
    			nextSlideOnWindowFocus: "off",
    			disableFocusListener: false
    		}
    	});
	}
    //1. Revolution Slider Fullwidth/Default
    var revapi_2;
    var rev_slider_single = "#revolution-single-slider";
    if (tpj(rev_slider_single).revolution == undefined) {
        revslider_showDoubleJqueryError(rev_slider_single);
    } else {
        revapi_2 = tpj(rev_slider_single).show().revolution({
            sliderType: "standard",
            jsFileLocation: js_File_Location,
            sliderLayout: "fullwidth",
            dottedOverlay: "none",
            delay: 6000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "on",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    style: "gyges",
                    enable: false,
                    hide_onmobile: false,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: false,
                    hide_onmobile: true,
                    hide_under: 800,
                    style: "hebe",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 30,
                    space: 5,
                    tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title"></span>'
                }
            },
            responsiveLevels:[1170],
            gridwidth:[1170],
            gridheight:[730],
            lazyType: "none",
            parallax: {
                type: "scroll",
                origo: "slidercenter",
                speed: 1000,
                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55]
            },               
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "0",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false
            }
        });
    }


    //2. Revolution Slider Fullscreen
    var revapi_3;
    var rev_slider_fullscreen = "#revolution-slider-fullscreen";
    if (tpj(rev_slider_fullscreen).revolution == undefined) {
        revslider_showDoubleJqueryError(rev_slider_fullscreen);
    } else {
        revapi_3 = tpj(rev_slider_fullscreen).show().revolution({
            sliderType: "standard",
            jsFileLocation: js_File_Location,
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "on",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    style: "gyges",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 800,
                    style: "hebe",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 30,
                    space: 5,
                    tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title"></span>'
                }
            },
            responsiveLevels:[1170],
            gridwidth:[1170],
            gridheight:[730],
            lazyType: "none",
            parallax: {
                type: "scroll",
                origo: "slidercenter",
                speed: 1000,
                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55]
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "on",
            stopAfterLoops: 0,
            stopAtSlide: 1,
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "0",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false
            }
        });
    }

    //3. Revolution Slider Fullscreen Dark Overlay
    var revapi_4;
    var rev_slider_fullscreen_darkoverlay = "#revolution-slider-fullscreen-darkoverlay";
    if (tpj(rev_slider_fullscreen_darkoverlay).revolution == undefined) {
        revslider_showDoubleJqueryError(rev_slider_fullscreen_darkoverlay);
    } else {
        revapi_4 = tpj(rev_slider_fullscreen_darkoverlay).show().revolution({
            sliderType: "standard",
            jsFileLocation: js_File_Location,
            sliderLayout: "fullscreen",
            dottedOverlay: "onexone",
            delay: 9000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "on",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    style: "gyges",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 800,
                    style: "hebe",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 30,
                    space: 5,
                    tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title"></span>'
                }
            },
            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [868, 768, 960, 720],
            lazyType: "none",
            parallax: {
                type: "scroll",
                origo: "slidercenter",
                speed: 1000,
                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55]
            },
            shadow: 0,
            spinner: "off",
            stopLoop: "on",
            stopAfterLoops: 0,
            stopAtSlide: 1,
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "0",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false
            }
        });
    }


    //1. Revolution Slider Fullwidth/bullet-bottom-right
    var revapi_5;
    var rev_slider_fullwidth_bulletbuttonleft = "#revolution-slider-fullwidth-bullet-bottom-right";
    if (tpj(rev_slider_fullwidth_bulletbuttonleft).revolution == undefined) {
        revslider_showDoubleJqueryError(rev_slider_fullwidth_bulletbuttonleft);
    } else {
        revapi_5 = tpj(rev_slider_fullwidth_bulletbuttonleft).show().revolution({
            sliderType: "standard",
            jsFileLocation: js_File_Location,
            sliderLayout: "fullwidth",
            dottedOverlay: "none",
            delay: 6000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "on",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    style: "gyges",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable:true,
                    hide_onmobile:true,
                    hide_under:960,
                    style:"zeus",
                    hide_onleave:false,
                    direction:"horizontal",
                    h_align:"right",
                    v_align:"bottom",
                    h_offset:80,
                    v_offset:50,
                    space:5,
                    tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title">{{title}}</span>'
                }
            },
            responsiveLevels:[1170],
            gridwidth:[1170],
            gridheight:[550],
            lazyType: "none",
            parallax: {
                type: "scroll",
                origo: "slidercenter",
                speed: 1000,
                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55]
            },               
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "0",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false
            }
        });
    }
		
    //1. Revolution Slider Fullwidth/bullet-bottom-right
    var revapi_6;
    var rev_slider_fullscreen_bulletbuttonleft = "#revolution-slider-fullscreen-bullet-bottom-right";
    if (tpj(rev_slider_fullscreen_bulletbuttonleft).revolution == undefined) {
        revslider_showDoubleJqueryError(rev_slider_fullscreen_bulletbuttonleft);
    } else {
        revapi_6 = tpj(rev_slider_fullscreen_bulletbuttonleft).show().revolution({
            sliderType: "standard",
            jsFileLocation: js_File_Location,
            sliderLayout: "fullscreen",
            dottedOverlay: "none",
            delay: 6000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "on",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    style: "gyges",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: true,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable:true,
                    hide_onmobile:true,
                    hide_under:960,
                    style:"zeus",
                    hide_onleave:false,
                    direction:"horizontal",
                    h_align:"right",
                    v_align:"bottom",
                    h_offset:80,
                    v_offset:50,
                    space:5,
                    tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title">{{title}}</span>'
                }
            },
            responsiveLevels:[1170],
            gridwidth:[1170],
            gridheight:[550],
            lazyType: "none",
            parallax: {
                type: "scroll",
                origo: "slidercenter",
                speed: 1000,
                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55]
            },               
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "0",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false
            }
        });
    }

}


})(jQuery);