let name= prompt("Enter your name:");
let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let state=document.querySelector("input").value;
    //console.log(state);
    alert(`Thanks for the ${name}..`);

    let colArr= await getColleges(state);
show(colArr);
})
function show (colArr) {
    let list=document.querySelector("#list");
    list.innerText="";
    for(col of colArr) {
       // console.log(col.name);

        let li = document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);

    }
}
//show(colArr);
async function getColleges (state) {
    try{
        let res=await axios.get(url + state);
        return res.data;
    } catch(e){
        console.log("errror", e);
        return "[]";
    }
    
}