$.extend({
    highLight: function(selector) {
        selector.find('tr').each(function(index) {
            if (index % 2 === 0) {
                $(this).css('background-color', '#ccc');
            }
        });
    }
});