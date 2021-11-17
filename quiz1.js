function check()
{
    var score = 0
    var q1 = document.quiz.set1.value;
    var q2 = document.quiz.set2.value;
    var q3 = document.quiz.set3.value;
    var q4 = document.quiz.set4.value;
    var q5 = document.quiz.set5.value;

   if(q1 =="A"){score++;}
    else{document.getElementById("L1").style.color = 'red';document.getElementById("L1").style.fontWeight = '700'; }
    
    if(q2 =="B"){score++;}
    else {document.getElementById("L2").style.color = 'red';document.getElementById("L2").style.fontWeight = '700'; }
    
    if(q3 =="C"){score++;} 
    else{document.getElementById("L3").style.color = 'red';document.getElementById("L3").style.fontWeight = '700'; } 
    
    if(q4 =="C"){score++;}
    else{document.getElementById("L4").style.color = 'red';document.getElementById("L4").style.fontWeight = '700'; }  
    
    if(q5 =="A"){score++;} 
    else{document.getElementById("L6").style.color = 'red';document.getElementById("L6").style.fontWeight = '700'; }

    if(document.quiz.f2.checked && document.quiz.f3.checked && document.quiz.f2.checked){score++;}
    else{document.getElementById("L6").style.color = 'red';document.getElementById("L6").style.fontWeight = '700'; }

    if(document.quiz.g2.checked && document.quiz.g4.checked && document.quiz.g6.checked){score++;}
    else{document.getElementById("L7").style.color = 'red';document.getElementById("L7").style.fontWeight = '700'; }

    if(document.quiz.h2.checked && document.quiz.h4.checked){score++;}
    else{document.getElementById("L8").style.color = 'red';document.getElementById("L8").style.fontWeight = '700'; }

    if(document.quiz.i1.checked && document.quiz.i3.checked && document.quiz.i5.checked){score++;}
    else{document.getElementById("L9").style.color = 'red';document.getElementById("L9").style.fontWeight = '700'; }

    if(document.quiz.j3.checked && document.quiz.j4.checked){score++;}
    else{document.getElementById("L10").style.color = 'red';document.getElementById("L10").style.fontWeight = '700'; }

    var per =(score/10)*100;
    alert(per+"percent");
}