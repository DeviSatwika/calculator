function disp(val){
    const show=document.getElementById('op');
    show.value +=val;
    const l=show.value.length;
   var main=show.value;
   window.sol=main;
    

    




    // if(val ==='ln' || val==='log' || val==='sin' || val ==='cos' ||val==='tan' || val==='sine⁻¹'|| val ==='cos⁻¹' || val==='tan⁻¹' || val==='π' || val ==='e' ||val==='√' || val==='∛'|| val==='θ'){

    // }
    // else{}
}

function del(){
    const show=document.getElementById('op');
    show.value=show.value.substr(0,show.value.length-1);

}
function solve(){
    const show=document.getElementById('op');
    var sol=show.value;
    let l=show.value.length;
    console.log(l);
  console.log(sol);
//   console.log(sol[1]);
  for(var i=0; i<l; i++){
    //ln()
    if(sol[i]=='l' && sol[i+1]=='n'&& sol[i+2]=='('){
        var a=i+3;
        console.log(a);
        console.log(sol[a]);
        var num='';
        while(sol[a]!==')'){
            num+=sol[a];
            a=a+1;
        }
        console.log(num);
        let lnz=num;
        num=eval(num);
        var jab=Math.log(Number(num));
        var sjab= String(jab);
        console.log(sjab);
        var change='ln('+lnz+')';
        console.log(change)
        var sol=sol.replace(change,sjab);
        console.log(sol);
        l=sol.length;
        

    }
    //log
    else if(sol[i]=='l'&& sol[i+1]=='o'&&sol[i+2]=='g'&&sol[i+3]=='('){
        console.log("hey");
        var loga=i+4;
        var lognum='';
        while(sol[loga]!==')'){
            lognum+=sol[loga];
            loga=loga+1;
        }
        console.log(lognum);
        let logz=lognum;
        lognum=eval(lognum);
        var logjab=Math.log10(Number(lognum));
        var logsjab=String(logjab);
        var logchange='log('+logz+')';
        console.log(logchange);
        var sol=sol.replace(logchange,logsjab);
        console.log(sol);
        l=sol.length;
    }
    //10^
    else if(sol[i]=='1' && sol[i+1]=='0' && sol[i+2]=='^' && sol[i+3]){
      var ab=i+4;
      var numb='';
      while(sol[ab]!==')'){
            numb+=sol[ab];
            ab=ab+1;
        }
        let zb=numb;
        numb=eval(numb);
        var jabb=Math.pow(10,numb);
        var sjabb=String(jabb);
        var changeb='10^('+zb+')';
        var sol=sol.replace(changeb,sjabb);
        l=sol.length;
    }
    //sin
    else if(sol[i]=='s' && sol[i+1]=='i' && sol[i+2]=='n'&& sol[i+3]=='('){
        var sina=i+4;
        var sinnum='';
        while(sol[sina]!==')'){
            sinnum+=sol[sina];
            sina=sina+1;
        }
        console.log(sinnum);
        let sinz=sinnum;
        sinnum=eval(sinnum);
        var sinjab=Math.sin(Number(sinnum));
        var sinsjab=String(sinjab);
        var sinchange='sin('+sinz+')';
        console.log(sinchange);
        var sol= sol.replace(sinchange,sinsjab);
        console.log(sol);
        l=sol.length;
    }
    //cos
    else if(sol[i]=='c' && sol[i+1]=='o' && sol[i+2]=='s'&& sol[i+3]=='('){
        var cosa=i+4;
        var cosnum='';
        while(sol[cosa]!==')'){
            cosnum+=sol[cosa];
            cosa=cosa+1;
        }
        console.log(cosnum);
        let cosz=cosnum;
        cosnum=eval(cosnum);
        var cosjab=Math.sin(Number(cosnum));
        var cossjab=String(cosjab);
        var coschange='cos('+cosz+')';
        console.log(coschange);
        var sol= sol.replace(coschange,cossjab);
        console.log(sol);
        l=sol.length;
    }
    //tan
    else if(sol[i]=='t' && sol[i+1]=='a' && sol[i+2]=='n'&& sol[i+3]=='('){
        var tana=i+4;
        var tannum='';
        while(sol[tana]!==')'){
            tannum+=sol[tana];
            tana=tana+1;
        }
        console.log(tannum);
        let tanz=tannum;
        tannum=eval(tannum);
        var tanjab=Math.sin(Number(tannum));
        var tansjab=String(tanjab);
        var tanchange='tan('+tanz+')';
        console.log(tanchange);
        var sol= sol.replace(tanchange,tansjab);
        console.log(sol);
        l=sol.length;
    }
    //sininv
    else if(sol[i]=='s' && sol[i+1]=='i' && sol[i+2]=='n' && sol[i+3]=='⁻' && sol[i+4]=='¹' && sol[i+5]=='('){
        console.log("heyy");
        var insa=i+6;
        var insnum='';
        while(sol[insa]!==')'){
            insnum+=sol[insa];
            insa=insa+1;
        }
        let insz=insnum;

        console.log(insnum);
        insnum=eval(insnum);
        var insjab=Math.asin(Number(insnum));
        var inssjab=String(insjab);
        var inschange='sin⁻¹('+insz+')';
        console.log(inschange);
        var sol= sol.replace(inschange,inssjab);
        console.log(sol);
        l=sol.length;
    }
    //cosinv
    else if(sol[i]=='c' && sol[i+1]=='o' && sol[i+2]=='s' && sol[i+3]=='⁻' && sol[i+4]=='¹' && sol[i+5]=='('){
        console.log("heyy");
        var inca=i+6;
        var incnum='';
        while(sol[inca]!==')'){
            incnum+=sol[inca];
            inca=inca+1;
        }
        console.log(incnum);
        let incz=incnum;
        incnum=eval(incnum);
        var incjab=Math.acos(Number(incnum));
        var incsjab=String(incjab);
        var incchange='cos⁻¹('+incz+')';
        console.log(incchange);
        var sol= sol.replace(incchange,incsjab);
        console.log(sol);
        l=sol.length;
    }
    //taninv
    else if(sol[i]=='t' && sol[i+1]=='a' && sol[i+2]=='n' && sol[i+3]=='⁻' && sol[i+4]=='¹' && sol[i+5]=='('){
        console.log("heyy");
        var inta=i+6;
        var intnum='';
        while(sol[inta]!==')'){
            intnum+=sol[inta];
            inta=inta+1;
        }
        console.log(intnum);
        let intz=intnum;
        intnum=eval(intnum);
        var intjab=Math.atan(Number(intnum));
        var intsjab=String(intjab);
        var intchange='tan⁻¹('+intz+')';
        console.log(intchange);
        var sol= sol.replace(intchange,intsjab);
        console.log(sol);
        l=sol.length;
    }
    
    //pi
    else if(sol[i]=='π'){
        var π='3.14';
    }
    //e
    else if(sol[i]=='e'&& sol[i+1]=='('){
        var ep=i+2;
        var enu='';
        while(sol[ep]!==')'){
            enu+=sol[ep];
            ep=ep+1;
        }
        var ejap=Math.exp(Number(enu));
        var esjab=String(ejap);
        var echange='e('+enu+')';
        var sol=sol.replace(echange,esjab);
        l=sol.length;

    }
    //sqrroot
    else if(sol[i]=='√'&& sol[i+1]=='('){
        var sp=i+2;
        var snu='';
        while(sol[sp]!==')'){
            snu+=sol[sp];
            sp=sp+1;
        }
        let snz=snu;
        snu=eval(snu);
        var sjap=Math.pow(Number(snu),1/2);
        var ssjab=String(sjap);
        var schange='√('+snz+')';
        var sol=sol.replace(schange,ssjab);
        l=sol.length;
    }
    else if(sol[i]=='∛'&& sol[i+1]=='('){
        var cp=i+2;
        var cnu='';
        while(sol[cp]!==')'){
            cnu+=sol[cp];
            cp=cp+1;
        }
        let cnz=cnu;
        cnu=eval(cnu);
        var cjap=Math.pow(Number(cnu),1/2);
        var csjab=String(cjap);
        var cchange='∛('+cnz+')';
        var sol=sol.replace(cchange,csjab);
        l=sol.length;
    }
    else if(sol[i]=='('){
      var vir='';
      var q=i+1;
      while(sol[q]!==')'){
         vir+=sol[q];
         if(sol[q+1]===')'){
            if(sol[q+2]==='²'){
              let hg=vir;
              
              vir=eval(vir);
              console.log(vir);
              vir=Math.pow(Number(vir),2);
              console.log(vir);
              let ch='('+hg+')'+'²';
              var sol=sol.replace(ch,vir);
              console.log(hg);
              console.log(sol);
              l=sol.length;
              break;
            }
            else if(sol[q+2]==='³'){
              let hg=vir;
              vir=eval(vir);
              console.log(vir);
              vir=Math.pow(Number(vir),3);
              let ch='('+hg+')'+'³';
              var sol=sol.replace(ch,vir);
              console.log(sol);
              l=sol.length;
              break;

            }
            else{
                break;
            }
            
         }
         q++;
      }
    }
    // else if(sol[i]=='²'&& sol[i-1]==')'){
    //     var sqp=i-2;
    //     var sqnu='';
    //     while(sol[sqp]!=='('){
            
    //         sqp=sqp-1;
    //     }
    //     console.log(sqp);
    //     sqp=sqp+1;
    //     while(sol[sqp]!==')'){
    //         sqnu+=sol[sqp];
    //         sqp=sqp+1;
    //     }
    //     console.log(sqnu);
    //     var sqjap=Math.pow(Number(sqnu),2);
    //     var sqsjab=String(sqjap);
    //     var sqchange='∛('+sqp+')';
    //     var sol=sol.replace(sqchange,sqsjab);
    //     l=sol.length;
    // }
    
  }
  
    // console.log(glob);
    // var term=[];
    // var j=0;
    // var k=0;
    // for(var i=0;i<l-1; i++){
    //     if(glob[i]==='ln'){
    //         var a='';
    //         var count=0;
    //         while(i+1===')'){
    //             a+=glob[i+1];
    //             i++;
    //             count++;

    //         }
    //         var b=Number(a);
    //         console.log(b);

    //         glob.splice(i,count);
    //         glob[i]=Math.log(b);
            
    //     }
    // }
//    console.log(glob);
    

    let x= sol;
    let y=eval(x);
    show.value=y;
    

}
function ac(){
    const show=document.getElementById('op');
    show.value='';
  }

// function del(){
//     const show=document.getElementById('op');
//     show.value=''
// }

// function x2(){
//     const show=document.getElementById('op');
//     show.value=Math.pow(show.value,2);

// }

// function x3(){
//     const show=document.getElementById('op');
//     show.value=Math.pow(show.value,3);

// }

// function x4(){
//     const show=document.getElementById('op');
//     show.value=Math.pow(show.value,4);

// }

// function x5(){
//     const show=document.getElementById('op');
//     show.value=Math.pow(show.value,5);

// }

// function sin(){
//     const show=document.getElementById('op');
//     show.value=Math.sin(show.value);
// }
// function cos(){
//     const show=document.getElementById('op');
//     show.value=Math.cos(show.value);
// }

// function tan(){
//     const show=document.getElementById('op');
//     show.value=Math.tan(show.value);
// }
// function ln(){
//     const show=document.getElementById('op');
//     show.value=Math.log(show.value);
// }

//  function log(){
//      const show=document.getElementById('op');
//      show.value=Math.log10(show.value);
//  }
//  function sqrt(){
//      const show=document.getElementById('op');
//      show.value=Math.pow(show.value,1/2);
//  }
//  function cbrt(){
//     const show=document.getElementById('op');
//      show.value=Math.pow(show.value,1/3);
// }
//  function pi(){
//     const show=document.getElementById('op');
//      show.value=Math.PI*show.value;
// }