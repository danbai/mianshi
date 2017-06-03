$('#demo'); // 无new,直接$()进行构造

(function(window, undefined) {
    var jQuery = function(selector, context) {
        // $()实际上是实例化了其拓展的原型方法$.fn.init
        return new jQuery.fn.init(selector, context);
    };

    // jQuery.prototype即是jQuery的原型,挂载在上面的方法,即可让所有生成的jQuery对象使用
    jQuery.fn = jQuery.prototype = {
        init: function(selector, context) {
            // ...
        }
    };

    // $('#demo')这种实例化方式,实际上调用的是return new jQuery.fn.init('#demo'),
    // 将jQuery.fn.init的prototype属性设置为jQuery.fn,那么原型对象就是jQuery.fn.
    // jQuery.fn.init.prototype = jQuery.fn = jQuery.prototype
    jQuery.fn.init.prototype = jQuery.fn;

    jQuery.extend = jQuery.fn.extend = function() {
        // ...
    }
    /* 
    extend方法在jQuery中是一个很重要的方法,jQuery内部用它来扩展静态方法或实例方法,而我们开发jQuery插件
    的时候也会用到它.jQuery.extend(object)为扩展jQuery类本身,为类添加新的静态方法.this指向的是jQuery
    jQuery.fn.extend(object)给jQuery对象添加实例方法.
    */
}(window));