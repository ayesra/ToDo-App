let list = [];

let total = 0;
let completed = 0;

const listInput = document.querySelector("#todo-input");
const listUl = document.querySelector("#todo-ul");
const listButton = document.querySelector("#todo-button");
const gesamt = document.querySelector("#gesamt");

listButton.onclick = () => {
    if (!listInput.value){
        alert("please write your note!");
    }else if(list.includes(listInput.value)) {
        // return;
        alert("Your note is already in the list!");
    }else {
        list.push(listInput.value);

        total += 1;

        listUl.innerHTML = 
        `<li> 
        <i class="fa fa-check fa-lg"></i>
        <p>${list[list.length - 1]}</p>
        <i class="fa fa-trash fa-lg"></i>
        </li>` + listUl.innerHTML;
        gesamt.textContent = total;

        listInput.value="";
        listInput.focus();
    }

    createDeleteButton()

    createCheckButton()
};

const createDeleteButton=()=>{
    document.querySelectorAll(".fa-trash").forEach((a)=>{
        a.onclick=()=>{

            list=list.filter((todo)=>todo!=a.closest("li").querySelector("p").textContent)
            console.log(list);

            a.parentElement.remove()
            total=total-1
            gesamt.textContent = total;
         
            if(a.parentElement.classList.contains("checked"))
            {
                completed=completed-1
                document.querySelector("#vollendet").textContent = completed;
            }
        }
    })
}

const createCheckButton=()=>{
    document.querySelectorAll(".fa-check").forEach((a) => {
        a.onclick = () => {
            if (a.parentElement.className == "checked") {
                a.parentElement.className = "";
                completed = completed - 1;
            }else {
                a.parentElement.className = "checked";
                completed = completed + 1
            }
            document.querySelector("#vollendet").textContent = completed;
        }
    })
}