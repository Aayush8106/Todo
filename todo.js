/// <reference path="./jquery/jquery.d.ts" />

$(document).ready(() => {

    const msg = $('#taskInput');
    const add = $('#add');
    const area = $('.area');
    const total = $('#total');

    area.hide();

    // Initial count
    total.text($('.area .task').length);

    add.on("click", () => {

        if (msg.val().trim() === "") {
            return;
        }

        addTask(msg.val());
        msg.val("");

        if ($('.area .task').length > 0) {
            area.show();
        }

        // Update count
        total.text($('.area .task').length);

        console.log("Task:" + $('.area .task').length);
    });

    msg.on("keydown", (e) => {
        if (e.key === "Enter") {
            add.click();
        }
    });

});


function addTask(message) {

    const area = $('.area');

    const task = $("<div>");
    task.addClass('task');

    const msg = $('<span>');
    msg.text(message);
    msg.addClass("message");
    task.append(msg);

    const del = $("<button>");
    del.attr("id", "delBtn");
    del.text('❌');
    task.append(del);

    del.on("click", function () {

        $(this).parent().remove();

        console.log("Task:" + $('.area .task').length);

        const total = $('#total');
        // Update count
        total.text($('.area .task').length);

        if ($('.area .task').length === 0) {
            area.hide();
        }
    });

    area.append(task);
}