$(document).ready(function() {
    var text = $('article .content').text();
    var EN = text.match(/[\u00ff-\uffff]|\S+/g);
    var lenE = EN.length;
    // var CJK = text.match(/\u4e00-\u9fcc/g);
    // var lenC = CJK.length;
    var eta = Math.round(lenE/170);
    if (eta == 0) {
        eta = 'less than 1';
    }

    $('.eta .word-count').html(lenE.toLocaleString());
    $('.eta .read-time').html(eta);
});