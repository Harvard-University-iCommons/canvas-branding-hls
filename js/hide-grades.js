function hlsHideGrades() {
    $('.Button.button-sidebar-wide:contains(View Grades)').hide();
}
$(document).ready(function() {
    hlsHideGrades();
});
$(document).ajaxComplete(function() {
    hlsHideGrades();
});

