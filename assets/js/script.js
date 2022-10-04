const editableContainers = document.querySelectorAll(".editable")

editableContainers.forEach(container => {

    const id = container.getAttribute("id");
    let savedContent = localStorage.getItem(`data__${id}`);

    if (savedContent) {
        container.innerHTML = savedContent;
    }

    container.addEventListener("dblclick", e => {
        container.setAttribute("contenteditable", true);
        container.focus();
    });

    container.addEventListener("blur", e => {
        container.setAttribute("contenteditable", false);
        const currentContent = container.innerHTML;
        if (currentContent !== savedContent) {
            persistData(id, currentContent);
            savedContent = currentContent;
            alert("Data successfully saved")
        }
    })
});

const persistData = (id, content) => {
    localStorage.setItem(`data__${id}`, content);
}