define(["js/text!../../menu.html"], function (menufile) {
    return {
        getMenu: function () {
            'use strict';
			console.log('getMenu()');
			var menu = document.querySelector('.navbar');
			var html = menufile;
			menu.innerHTML = html;
        }
    };
});
