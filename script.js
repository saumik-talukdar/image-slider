
function addImage(i){
    let img = document.createElement('div');
    img.style='background-image : url(assets/img'+i+'.jpg)';
    img.className='img i'+i;
    
    let target = document.querySelector('#img-all');
    target.appendChild(img);
}

for(let i=1; i<=14;i++){
    addImage(i);
}

let img=document.querySelector('.view');
let next = document.querySelector('.view-next-btn');
let prev = document.querySelector('.view-prev-btn');
let borderAll = document.querySelector('.img');
let ind=1;

// console.log(next.style.display);

next.addEventListener('click',function(){
    ind++;
    borderAll.style.border='none';
    let bordersp = document.querySelector('.i'+ind);
    bordersp.style.border='2px solid red';

    img.style='background-image : url(assets/img'+ind+'.jpg)';
    if(ind==14){
        ind=0;
    }
});

prev.addEventListener('click',function(){
    ind--;
    borderAll.style.border='none';
    let bordersp = document.querySelector('.i'+ind);
    bordersp.style.border='2px solid red';

    img.style='background-image : url(assets/img'+ind+'.jpg)';
    if(ind==1){
        ind=15;
    }
});

