var currentYear = 2022;
inputyear = prompt("태어난 연도를 입력하세요. (YYYY)","");
age = currentYear - inputyear + 1;
if(inputyear >  currentYear){
  document.write("아직 태어나지 않았습니다");
}else{
  document.write(currentYear + "년 현재" + "<br>");
  document.write(inputyear + "년에 태어난 사람의 나이는 " + age + "세입니다.");
}