var books = [
    {
      "title": "The Night Circus",
      "author": "Erin Morgenstern",
      "price": 12.99
    },
    {
      "title": "Educated",
      "author": "Tara Westover",
      "price": 14.99
    },
    {
      "title": "Dune",
      "author": "Frank Herbert",
      "price": 10.99
    }
  ];
  var tb = document.getElementById("tbod");
  function loadBook(i,x1,x2,x3){

    var para = [i+1,x1,x2,x3];
    tr = document.createElement('tr');
    tr.setAttribute("class","bg-white border-b dark:bg-gray-800 dark:border-gray-700");
    para.forEach(element => {
        td1 = document.createElement('td');
        td1txt = document.createTextNode(element);
        td1.appendChild(td1txt);
        td1.setAttribute("class","px-6 py-4");
        tr.appendChild(td1);
        tb.appendChild(tr);
    });
        td1 = document.createElement('td');
        btn = document.createElement('button');
        btntxt = document.createTextNode("modifier")
        btn.appendChild(btntxt)
        btn.setAttribute("onclick",`edit(${i})`)
        td1.appendChild(btn);
        td1.setAttribute("class","px-6 py-4 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow-lg active:shadow-md active:bg-gray-200 dark:active:bg-gray-600 transition-all duration-200 ease-in-out");
        tr.appendChild(td1);
        tb.appendChild(tr);

        td1 = document.createElement('td');
        btn = document.createElement('button');
        btntxt = document.createTextNode("Supprimer")
        btn.appendChild(btntxt)
        td1.appendChild(btn);
        btn.setAttribute("onclick",`dlt(${i})`)
        td1.setAttribute("class","px-6 py-4 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow-lg active:shadow-md active:bg-gray-200 dark:active:bg-gray-600 transition-all duration-200 ease-in-out");
        tr.appendChild(td1);
        tb.appendChild(tr);


  }
  function loadBooks(){
    tb.innerHTML = '';
  for (let i = 0; i < books.length; i++) {
    loadBook(i,books[i].title,books[i].author,books[i].price);
  }}
  loadBooks();

  function ajt()
  {
     tit = document.getElementById("tit").value
     console.log(tit);
     aut = document.getElementById("aut").value
     prx = document.getElementById("prx").value
     var newBook = {
        "title": tit,
        "author": aut,
        "price": prx
      };
      books.push(newBook)
      loadBooks();
  }
  function dlt(index){
    books.splice(index, 1);
    loadBooks();
  }
function show(){
    editForm.classList.remove('hidden');
}

var editForm = document.getElementById("editForm");

function edit(index)
{
    var book = books[index];
    document.getElementById("editTit").value = book.title;
    document.getElementById("editAut").value = book.author;
    document.getElementById("editPrx").value = book.price;

    editForm.classList.remove('hidden');
    editForm.setAttribute('data-index', index);
}

document.getElementById("saveButton").addEventListener("click", function() {
    var index = editForm.getAttribute('data-index');

    books[index].title = document.getElementById("editTit").value;
    books[index].author = document.getElementById("editAut").value;
    books[index].price = parseFloat(document.getElementById("editPrx").value);

    loadBooks();

    editForm.classList.add('hidden');
});
