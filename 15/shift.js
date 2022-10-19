document.querySelector('#btn_shift').onclick =function(){
  if(document.querySelector('#ta1').value != ""){
    document.querySelector('#ta2').value = document.querySelector('#ta1').value;
    document.querySelector('#ta1').value ="";
  }
  
}
document.querySelector('#btn_shift_left').onclick =function(){
  if(document.querySelector('#ta2').value != ""){
    document.querySelector('#ta1').value = document.querySelector('#ta2').value;
    document.querySelector('#ta2').value ="";
  }
  
}
