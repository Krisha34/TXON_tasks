window.addEventListener("load", () => {
    const form = document.querySelector("#form");
    const input1 = document.querySelector("#taskinp");
    const listel = document.querySelector("#tasks");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const task = input1.value;

        if (!task) {
            alert("Please enter your task");
            return;
        }

        const taskel = document.createElement("div");
        taskel.classList.add("task");
        const taskcontel = document.createElement("div");
        taskcontel.classList.add("content");

        taskel.appendChild(taskcontel);

        const taskinp = document.createElement("input");
        taskinp.classList.add("text");
        taskinp.className = "inpt";
        taskinp.type = "text";
        taskinp.value = task;
        taskinp.setAttribute("readonly", "readonly");
        taskcontel.appendChild(taskinp);

        const taskactions = document.createElement("div");
        taskactions.classList.add("actions");
        const taskedit = document.createElement("button");
        taskedit.classList.add("edit");
        taskedit.innerHTML = "Edit";
        const taskdel = document.createElement("button");
        taskdel.classList.add("delete");
        taskdel.innerHTML = "Delete";

        taskactions.appendChild(taskedit);
        taskactions.appendChild(taskdel);
        taskel.appendChild(taskactions);



        listel.appendChild(taskel);

        input1.value = "";
        taskedit.addEventListener("click", () => {
            if (taskedit.innerText.toLowerCase() == "edit") {
                taskinp.removeAttribute("readonly");
                taskinp.focus();
            }
            else {
                taskinp.setAttribute("readonly", "readonly");

            }
        });
        taskdel.addEventListener("click", () => {
            listel.removeChild(taskel);
        })
    })
}) 