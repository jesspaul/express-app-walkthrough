$('body').on('click', '.direction', toggle);

$('body').find('.code').css('display', 'none');

function toggle(evt) {
    $(evt.target).next().toggle();
}