const editableContainers = document.querySelectorAll(".editable")

editableContainers.forEach(container => {
    container.addEventListener("dblclick", e => {
        container.setAttribute("contenteditable", true)
        container.focus();
    });

    container.addEventListener("blur", e => {
        container.setAttribute("contenteditable", false)
    })
})