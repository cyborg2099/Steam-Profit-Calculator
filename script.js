function myFunction(){var e=Number(document.getElementById("input_id1").value.replace(/,/,".")),n=Number(document.getElementById("input_id2").value.replace(/,/,"."));if(""==document.getElementById("input_id3").value)var t=1;else t=Number(document.getElementById("input_id3").value.replace(/,/,"."));var d=e/100*15+e,i=e/100*15,m=d*t,u=(i=e/100*15)*t,c=n/1.15,o=c*t,r=(u=i*t,e*t),l=o-r;document.getElementById("res_c1").innerHTML=d.toFixed(2),document.getElementById("res_c1").innerHTML=d.toFixed(2),document.getElementById("res_c1").innerHTML=m.toFixed(2),document.getElementById("res_c4").innerHTML=c.toFixed(2),document.getElementById("res_c2").innerHTML=i.toFixed(2),document.getElementById("res_c2").innerHTML=u.toFixed(2),document.getElementById("res_c4").innerHTML=o.toFixed(2),document.getElementById("res_c3").innerHTML=r.toFixed(2),document.getElementById("res_c4").innerHTML=o.toFixed(2),document.getElementById("res_c5").innerHTML=l.toFixed(2)}document.getElementById("input_id1").oninput=myFunction,document.getElementById("input_id2").oninput=myFunction,document.getElementById("input_id3").oninput=myFunction;