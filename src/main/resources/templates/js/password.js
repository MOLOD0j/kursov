$('body').on('click', '.password-checkbox', function(){
    if ($(this).is(':checked')){
        $('.password').attr('type', 'text');
    } else {
        $('.password').attr('type', 'password');
    }
});