const btn=document.querySelector('button');

btn.addEventListener('click',myFun)

function myFun()
{
  document.querySelector('.btn').disabled=true
}




function spinner() {
  const spinnerDisplayer = document.querySelector('.spinner-displayer');
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
  spinnerDisplayer.classList.add('loading');
})
}

spinner();