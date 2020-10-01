let btn = document.querySelector(".submit"); 
let x_field = document.querySelector(".x_field");
let y_field = document.querySelector(".y_field");
let table = document.querySelector(".history")

let sx = document.querySelector(".sx")
let sy = document.querySelector(".sy")
let sxy = document.querySelector(".sxy")
let sx2 = document.querySelector(".sx2")
let sy2 = document.querySelector(".sy2")
let n = document.querySelector(".n")
let r = document.querySelector(".r")



const sum = ()=>{
    let x = document.querySelectorAll(".x")
    let y = document.querySelectorAll(".y")
    let xy = document.querySelectorAll(".xy")
    let x2 = document.querySelectorAll(".x2")
    let y2 = document.querySelectorAll(".y2")

    

   
    let length = x.length;
    
    n.innerText = length;
    
    console.log(length)
    for (let i = 0 ; i < length; i++)
    {
        sx.innerText  = parseInt(sx.innerText) + parseInt(x[i].innerText);
        sy.innerText  = parseInt(sy.innerText) + parseInt(y[i].innerText);
        sxy.innerText  = parseInt(sxy.innerText) +parseInt( xy[i].innerText);;
        sy2.innerText  = parseInt(sy2.innerText)+parseInt( y2[i].innerText);;
        sx2.innerText  = parseInt(sx2.innerText) + parseInt(x2[i].innerText);;
        
    }
}
const createX = ( data)=>{
    let td = document.createElement("td");
    td.innerText = data;
    td.classList.add("x");
    return td;
}

const createY = ( data)=>{
    let td = document.createElement("td");
    td.innerText = data;
    td.classList.add("y");
    return td;
}

const createXY = ( data)=>{
    let td = document.createElement("td");
    td.innerText = data;
    td.classList.add("xy");
    return td;
}

const createX2 = ( data)=>{
    let td = document.createElement("td");
    td.innerText = data;
    td.classList.add("x2");
    return td;
}
const createY2 = ( data)=>{
    let td = document.createElement("td");
    td.innerText = data;
    td.classList.add("y2");
    return td;
}

const createDelBtn = (btn)=>{

    let td = document.createElement("td");
    td.appendChild(btn);
    return td;
}
const calcutation = ()=>{
   

        let x = x_field.value;
        let y = y_field.value;

        let tr = document.createElement("tr");
        let btn = document.createElement("button");
        btn.setAttribute("class", "btn btn-danger dlt");
        btn.innerText = "Delete";
        tr.appendChild(createX( x))
        tr.appendChild(createY( y))
        tr.appendChild(createXY( x*y))
        tr.appendChild(createX2( x*x))
        tr.appendChild(createY2( y*y))
        tr.appendChild(createDelBtn(btn));

        let sxv = sx.innerText = parseInt(sx.innerText) + parseInt(x)
        let syv = sy.innerText = parseInt(sy.innerText) + parseInt(y)
        let sxyv =sxy.innerText = parseInt(sxy.innerText) + x*y
        let sx2v =sx2.innerText = parseInt(sx2.innerText) + x*x
        let sy2v =sy2.innerText = parseInt(sy2.innerText) + y*y;
        let nv = n.innerText = parseInt(n.innerText) + 1;
        
        let r_value = 0;
        if (nv - 1  > 0)
             r_value = ((nv * sxyv) - (sxv*syv)) / (Math.sqrt((nv * sx2v) - (sxv * sxv)) * Math.sqrt((nv*sy2v - (syv * syv))));

     
        r.innerText  = r_value;
        table.appendChild(tr)
        x_field.value = "";
        y_field.value = "";
       

       
    
}

const deleteRow = ()=>{
    let dlt = document.querySelectorAll(".dlt");
    let item = dlt[dlt.length-1];
    
    if (item != undefined)
    {
        item.addEventListener("click", (e)=>{
            let tr = e.target.parentElement.parentElement;
            let x = tr.querySelector(".x");
            let y = tr.querySelector(".y");
            
            x = parseInt(x.innerText)
            y = parseInt(y.innerText);
            let sxv = sx.innerText = parseInt(sx.innerText) - parseInt(x)
            let syv = sy.innerText = parseInt(sy.innerText) - parseInt(y)
            let sxyv =sxy.innerText = parseInt(sxy.innerText) - x*y
            let sx2v =sx2.innerText = parseInt(sx2.innerText) - x*x
            let sy2v =sy2.innerText = parseInt(sy2.innerText) - y*y;
            let nv = n.innerText = parseInt(n.innerText) - 1;
    
            let r_value = 0;
            if (nv - 1  > 0)
                r_value = ((nv * sxyv) - (sxv*syv)) / (Math.sqrt((nv * sx2v) - (sxv * sxv)) * Math.sqrt((nv*sy2v - (syv * syv))));

        
            r.innerText  = r_value;
            table.removeChild(tr);
        })
    }
    
}


btn.addEventListener("click", ()=>{
    if (x_field.value != "" && y_field.value != "" )
    {
        calcutation();
    }
    deleteRow();

})
deleteRow();


//let btn = document.querySelector(".btn");