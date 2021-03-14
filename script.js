// cached elements
const $expand = $('#expand');
const $collapse = $('#collapse');

// event handlers
$('body').on('click', '.direction', toggle);
$expand.on('click', expandAll);
$collapse.on('click', collapseAll);

// functions
function toggle(evt) {
    $(evt.target).next().fadeToggle();
    if ($(evt.target).html().indexOf('caret-down') !== -1) {
        $(evt.target).children().remove();
        $(evt.target).append(' <i class="fa fa-caret-up"></i>');
    } else if ($(evt.target).html().indexOf('caret-up') !== -1) {
        $(evt.target).children().remove();
        $(evt.target).append(' <i class="fa fa-caret-down"></i>');
    }
}

function expandAll() {
    $('body').find('.code').fadeIn();
    $('body').find('.direction').children().remove();
    $('body').find('.direction').append(' <i class="fa fa-caret-up"></i>');
}

function collapseAll() {
    $('body').find('.code').fadeOut();
    $('body').find('.direction').children().remove();
    $('body').find('.direction').append(' <i class="fa fa-caret-down"></i>');
}

// execute on page load
$('body').find('.code').css('display', 'none');
$('body').find('.direction').append(' <i class="fa fa-caret-down"></i>');