let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenval = "";
for (item of buttons) {
    item.addEventListener("click", function (e) {

        buttontxt = e.target.innerText;

        switch (buttontxt) {
            case "*":
                buttontxt = "*";

                screenval += buttontxt;
                screen.value = screenval;
                break;
            case "AC":
                screenval = "";
                screen.value = screenval;
                break;
            case "=":
                screen.value = eval(screenval);
                break;
            default:
                screenval += buttontxt;
                screen.value = screenval;

        }
    })
}




