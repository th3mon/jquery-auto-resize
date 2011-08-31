(function($){
    $.fn.autoResize = function(observed, options) {
        var resizing = undefined;

        var defaults = {
            time: 1000,
            animation: false,
            bouncingMode: false,
            callback: undefined
        };

        var options = $.extend(defaults, observed, options);

        var init = function(){
            setTimeout(function(){
                init();
            }, options.time);

            if (options.bouncingMode === true) {
                resizeInBouncingMode();
            } else if (options.bouncingMode === false) {
                resize();
            }

            if (typeof options.callback === "function") {
                options.callback(resizing, observed);
            }
        }

        var resize = function(){
            if(resizing.height() < observed.height()){
                if (options.animation === true) {
                    animatedResizing();
                } else {
                    resizing.height(observed.height());
                }
            }
        }

        var resizeInBouncingMode = function(){
            if(resizing.height() != observed.height()){
                if (options.animation === true) {
                    animatedResizing();
                } else {
                    resizing.height(observed.height());
                }
            }

        }

        var animatedResizing = function(){
            resizing.animate({
                height: observed.height()
            })
        }
        
        return this.each(function() {
            resizing = $(this);
            init();
        });
    };
})(jQuery);
