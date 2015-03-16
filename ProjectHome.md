Plugin auto changing height of the HTML element when given observed HTML element is changed. It can be useful when you use AJAX or iframes.

Example:
jQuery(document).ready(function($){
> $("#AJAXcontainer").autoResize($("#AJAXcontainer .content"));
});