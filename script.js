  
vowel()
  function vowel(){
    let name=["simeon","sakthiii","mukeshiiiiii"];
    let count=[0,0,0];
    const vowels=["a","e","i","o","u"];
     for(let i=0;i<name.length;i++){
          for(let j=0;j<name[i].length;j++){
               if(vowels.includes(name[i].charAt(j))){
                count[i]+=1;
               }
          }
        }
     index=0;
     let great=count[0];
     for(let i=1;i<count.length;i++){
        if(great<count[i]){
            great=count[i];
            index=i;
        }
     }

     console.log(name[index]);
  }
