$.fn.extend({
    highLight2: function() {
        console.log(this);  // $(table),调用该组件的实例对象
        $('tr').on('mouseenter', function() {
            $(this).css('color', '#f00');
        });
        $('tr').on('mouseleave', function() {
            $(this).css('color', '#000');
        });
    },
    css2: function(prop, str) {
        this[0].style[prop] = str;
    }
});