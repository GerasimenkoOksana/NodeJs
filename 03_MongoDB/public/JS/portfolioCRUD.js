let portfoliosList = [];
//read
function LoadPortfolios(){
    fetch("/api/portfolio")
        .then(res =>res.json())
        .then (json => {console.log(json);portfoliosList = json; buildPortfolioList();})
        .catch(err => {if (err) console.log(err);});
}
LoadPortfolios();

//create
let btnCreatePortfolio = document.getElementById("btnCreate");
btnCreatePortfolio.onclick = function (){
    let form = document.forms.newPortfolioForm;
    let newPortfolio = {};
    for (let i=0; i<form.elements.length; i++){
        newPortfolio[form.elements[i].name] = form.elements[i].value;
        form.elements[i].value = "";
    }
    console.log(newPortfolio);
    fetch ("/api/portfolio", {
        method: "post",
        body: JSON.stringify(newPortfolio),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(json => {portfoliosList.push(json); buildPortfolioList();})
        .catch(err => {if (err) console.log(err);});
    let areaCreateModal = document.getElementById("areaCreate");
    areaCreateModal.style.display='none';
}
document.getElementById("btnCancelCreate").onclick = function (){
    let areaCreateModal = document.getElementById("areaCreate");
    areaCreateModal.style.display='none';
}
let btnCreateArea = document.getElementById("btnCreateArea");
btnCreateArea.onclick = function (){
    let areaCreateModal = document.getElementById("areaCreate");
    areaCreateModal.style.display='block';
}
function buildPortfolioList(){
    let table = document.getElementById("tableBody");
    table.innerHTML = "";
    for(let i=0; i<portfoliosList.length; i++){
        let btnEdit = document.createElement("button");
        btnEdit.type = "button";
        btnEdit.className = "btn btn-warning btn-icon-split";
        let spanIcon = document.createElement('span');
        spanIcon.className = "icon text-white-70"
        spanIcon.innerHTML = '<i class="fas fa-exclamation-triangle"></i>'
        let spanText = document.createElement('span');
        spanText.className = "text";
        spanText.innerText = "Edit";
        btnEdit.appendChild(spanIcon);
        btnEdit.appendChild(spanText);
        btnEdit.id = portfoliosList[i]._id;
        btnEdit.onclick = editPortfolio;

        let btnDel = document.createElement("button");
        btnDel.type = "button";
        btnDel.className = "btn btn-danger btn-icon-split";
        let spanIcon1 = document.createElement('span');
        spanIcon1.className = "icon text-white-70"
        spanIcon1.innerHTML = ' <i class="fas fa-trash"></i>'
        let spanText1 = document.createElement('span');
        spanText1.className = "text";
        spanText1.innerText = "Delete";
        btnDel.appendChild(spanIcon1);
        btnDel.appendChild(spanText1);
        btnDel.id = portfoliosList[i]._id;
        btnDel.onclick = delPortfolio;

        let tr = document.createElement("tr");
        let tdName = document.createElement("td");
        tdName.innerText = portfoliosList[i].name;
        tr.appendChild(tdName);
        let tdAuthor = document.createElement("td");
        tdAuthor.innerText = portfoliosList[i].author;
        tr.appendChild(tdAuthor);
        let tdCountWorks = document.createElement("td");
        tdCountWorks.style.textAlign = "center";
        tdCountWorks.innerText = portfoliosList[i].works.length;
        tr.appendChild(tdCountWorks);
        let tdEdit = document.createElement("td");
        tdEdit.appendChild(btnEdit);
        tdEdit.style.textAlign = "center";
        tr.appendChild(tdEdit);
        let tdDel = document.createElement("td");
        tdDel.appendChild(btnDel);
        tdDel.style.textAlign = "center";
        tr.appendChild(tdDel);
        table.appendChild(tr);
    }
}
function editPortfolio(){
    let areaEdit = document.getElementById("areaEdit");
    areaEdit.style.display='block';
    let index = portfoliosList.findIndex(p => p._id == this.id)
    document.getElementById("editName").value = portfoliosList[index].name;
    document.getElementById("editAuthor").value = portfoliosList[index].author;
    document.getElementById("editDescription").value = portfoliosList[index].description;

    document.getElementById("btnCancelEdit").onclick = function () {
        areaEdit.style.display = 'none';
    }
    let id = this.id;
   document.getElementById("btnEdit").onclick = function () {
       let form = document.forms.editPortfolioForm;
       let portfolio = {};
       for (let i = 0; i < form.elements.length; i++) {
           portfolio[form.elements[i].name] = form.elements[i].value;
       }
       console.log(portfolio);

       fetch("/api/portfolio", {
           method: "put",
           body: JSON.stringify({_id: id, element: portfolio}),
           headers: {'Content-Type': 'application/json'}
       })
           .then(res => res.json())
           .then(json => {
               portfoliosList.splice(portfoliosList.findIndex(p => p._id == id), 1);
               portfoliosList.push(json);
               buildPortfolioList();
           })
           .catch(err => { if (err) console.log(err); });
       areaEdit.style.display='none';
   }
}

function delPortfolio(){
    fetch("/api/portfolio",{
        method: "delete",
        body: JSON.stringify({_id: this.id}),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res =>{
            if(res.status ===200){
                portfoliosList.splice(portfoliosList.findIndex(p => p._id == this.id), 1);
                buildPortfolioList();
            }else console.log(res);
        })
        .catch(err => {if (err) console.log(err)})
}
