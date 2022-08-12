var input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","input")
input.setAttribute("placeholder","search...");
input.style.width ="50%"
input.style.marginLeft = "420px";
input.style.marginBottom = "10px";
input.addEventListener("input",filter_list);

document.body.append(input);

async function foo(){
    for (var i=1; i<=12; i++){
    var url = `https://anapioficeandfire.com/api/books/${i}`
    var res = await fetch(url);
    var result = await res.json();
    var books = document.createElement("div");
    books.setAttribute("id","books");
    books.innerHTML = 
    `<ul class="list-group">
    <li class="list-group-item active" aria-current="true" style="color: brown; font-size: 25px; list-style:none; font-weight:bold">Name: ${result["name"]}, isbn: ${result["isbn"]}</li>
    <li class="list-group-item" style="color: blue; font-size: 20px; list-style:none" >No.of. pages: ${result["numberOfPages"]}</li>
    <li class="list-group-item" style="color: green; font-size: 20px; list-style:none">Authors: ${result["authors"]}</li>
    <li class="list-group-item" style="color: red; font-size: 20px; list-style:none">Publisher: ${result["publisher"]},  Released date: ${result["released"]}</li>
    <li class="list-group-item" style="color: black; font-size: 20px; list-style:none">${result.characters[0]}, ${result.characters[1]},
     ${result.characters[2]}, ${result.characters[3]}, ${result.characters[4]}</li>
  </ul>`
    document.body.append(books)
    }
}
foo();

let list = document.querySelector('.books, .list-group').querySelectorAll('.li');
function filter_list(){
   books.innerHTML.forEach(x=>{
    let re = new RegExp(input.value, i);
    if (re.text(x.textContent)){
        x.innerHTML = x.textContent.replace(re,'<br>$&</br>')
        x.style.display = "block";
    }else{
        x.style.display = "none"
    }
   })
}



// function filter_list(){
//     var input,filter,ul,li,a,i,txtvalue;
//     input = document.getElementById('input');
//     filter = input.value.toUpperCase();
//     ul = document.getElementsByClassName('list-group');
//     li = ul.getElementByTagName('li');
//     for (i=0; i<li.length; i++){
//         a = li[i].getElementsByClassName('list-group-item')[0];
//         txtvalue = a.textContent || a.innerHTML
//         if(txtvalue.toUpperCase().indexOf(filter)>-1){
//             li[i].style.display = "";
//         }else{
//             li[i].style.display = "none";
//         }
//     }
// }
