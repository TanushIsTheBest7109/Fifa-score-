let quali_btn = document.querySelectorAll('.quali');
let disquali_btn = document.querySelectorAll('.disquali');

quali_btn.forEach(quali_btn_each =>{
    quali_btn_each.addEventListener('click', ()=>{
        if(quali_btn_each.className == "quali1 quali"){
            document.querySelector('.bool1').innerText = "Qualified";
            document.querySelector('.bool1').style.color = "#70b170";
    
        }
        else if(quali_btn_each.className == "quali2 quali"){
            document.querySelector('.bool2').innerText = "Qualified";
            document.querySelector('.bool2').style.color = "#70b170";
    
        }
        else{
            document.querySelector('.bool3').innerText = "Qualified";
            document.querySelector('.bool3').style.color = "#70b170";
    
        }
    })
})



disquali_btn.forEach(disquali_btn_each =>{
    disquali_btn_each.addEventListener('click', ()=>{
        if(disquali_btn_each.className == "disquali1 disquali"){
            document.querySelector('.bool1').innerText = "Disqualified";
            document.querySelector('.bool1').style.color = "rgb(255, 83, 83)";
    
        }
        else if(disquali_btn_each.className == "disquali2 disquali"){
            document.querySelector('.bool2').innerText = "Disqualified";
            document.querySelector('.bool2').style.color = "rgb(255, 83, 83)";
    
        }
        else{
            document.querySelector('.bool3').innerText = "Disqualified";
            document.querySelector('.bool3').style.color = "rgb(255, 83, 83)";
    
        }
    })
})