const sb=document.querySelector('input[type="submit"]');
sb.addEventListener('click',onSub);
function onSub(e){
    e.preventDefault();
    
    const val=document.querySelector('#entry').value;
    if(val!==""){
    var nt=document.createElement('li');
    nt.className="list-group-item";
    var bt=document.createElement('button');
    bt.className="btn btn-danger btn-sm float-right delete";
    nt.innerHTML=val;
    nt.appendChild(bt);
    bt.innerHTML="X";
    var p1=document.querySelector("#items");
    p1.appendChild(nt);}
    }
const db=document.querySelector('#items');
db.addEventListener('click',onDel);
function onDel(e){
    e.preventDefault();
    console.log(e.target);
    if(e.target.classList.contains('delete'))
    {confirm('Are you sure');
    const q=e.target.parentElement;
    const qe=q.parentElement;
    qe.removeChild(q);
    }
}
const fl=document.querySelector('#filter');
fl.addEventListener('keyup',comp);
function comp(e){
    e.preventDefault();
    var val=e.target.value.toLowerCase();
    var lis=db.getElementsByTagName('li');
    
    Array.from(lis).forEach((i)=>{  
        var k=i.firstChild.textContent.toLowerCase();
        if(k.indexOf(val)!=-1)
            i.style.display='block';
        else
            i.style.display='none';
    });
    }
const ca=document.querySelector(".card");
ca.addEventListener('mousemove',colorc);
function colorc(e){
    e.preventDefault();
    ca.style.backgroundColor="rgb("+e.offsetX+","+e.clientY+","+e.offsetY+")";
}

