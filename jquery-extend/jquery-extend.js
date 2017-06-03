var o = {
    x: 1,
    y: 2
};

var p = {
    x: 2,
    z: 3
};

console.log($.extend(o, p));
console.log(o);

// 基础班jQuery插件
$.extend({
    indexOf2: function(array, item) {
        var ele;

        if (array.indexOf) {
            return array.indexOf(item);
        } else {
            for (var i = 0; i < array.length; i++) {
                ele = array[i];

                if (ele === item) {
                    return i;
                }
            }

            return -1;
        }
    }
})

$.fn.extend({
    // 插件内部的this就是当前调用插件的jQuery对象
    changeStyle: function(colorStr) {
        this.css('color', colorStr);
    }
});

// 满足链式调用的jQuery插件
$.fn.extend({
    ddsclick: function(colorStr) {
        this.on('click', function() {
            $(this).css('color', colorStr);
        })

        return this;
    }
});

// 防止$符号污染的jQuery插件
(function($) {
    $.fn.extend({
        midPosition: function() {
            this.css({
                width: 200,
                height: 200,
                position: 'absolute',
                left: '50%',
                top: '50%',
                marginLeft: -100,
                marginTop: -100,
                border: '1px solid #ccc'
            });
        }
    })
}(jQuery));

// 参数缺省值
(function($) {
    $.fn.extend({
        changeStyle2: function(option) {
            var settings = {
                color: '#0f0',
                fontSize: 20
            };

            $.extend(settings, option);

            this.css({'color': settings.color, 'font-size': settings.fontSize});

            return this;
        }
    })
}(jQuery));