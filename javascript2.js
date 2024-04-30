const list = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");


function saveListItem(){
    let newListValue = input.value;
    input.value = '';

    
    let new_bullet = document.createElement("li");
    let new_span = document.createElement("span");
    let new_button = document.createElement("button");

    new_button.addEventListener("click",() => {
        list.removeChild(new_bullet);
    })


    new_bullet.append(new_span);
    new_bullet.textContent = newListValue;

    new_bullet.append(new_button);
    new_button.textContent = "Delete";

    list.append(new_bullet);
    input.focus()
}


btn.addEventListener("click",saveListItem);
input.addEventListener("keydown",(event) => {
        if (event.key == "Enter"){
            // console.log("Enter Key Pressed");
            saveListItem();
        }
        console.log(event.key);
    }
);