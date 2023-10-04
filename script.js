let string = ""
let buttons = document.querySelectorAll("button")

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (a) => {
        try {
            if (a.target.innerText == "=") {
                string = eval(string)
                document.querySelector("input").value = string
            }
            else if (a.target.innerText == "AC") {
                string = ""
                document.querySelector("input").value = string
            }
            else if (a.target.innerText == "DEL") {
                string = string.slice(0, -1)
                document.querySelector("input").value = string
            }
            else {
                string = string + a.target.innerText;
                document.querySelector("input").value = string
            }
        } 
         catch (error) {
         
            string = "Error";
            document.querySelector("input").value = string;
            
        }
    });
});
