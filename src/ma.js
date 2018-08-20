import $ from 'jquery';

function mdaFuc() {
    console.log('我是a模块');
    $('body').click(function() {
        console.log(111);
    });
}

export {mdaFuc};
