import $ from 'jquery';

function mdbFuc() {
    console.log('我是b模块');

    $('body').click(function() {
        console.log(111);
    });
}

export {mdbFuc};
