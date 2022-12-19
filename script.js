(function(){

    //GET BTNS
    let display = document.querySelector('.screen')
    let btns = document.querySelectorAll('.vbtn')
    let clear = document.querySelector('.clear')
    let equal = document.querySelector('.equal')
    let ans = document.querySelector('.answer')
    let del = document.querySelector('.del')

    //Looping buttons and getting values to display
    btns.forEach(function(btn){
        btn.addEventListener('click',(e)=>{
            let btnValue = e.target.dataset.num;
            display.value += btnValue
        })
    })

    //Evaluating 
    equal.addEventListener('click',(e)=>{
        if(display.value === ''){
            display.value==""
        }else{
            let answer = eval(display.value)
            ans.textContent = answer
            ans.textContent = btnValue
        }
    })

    //Clearing display
    clear.addEventListener('click',(e)=>{
        display.value = '';
        ans.textContent = ''
        
    })

    //Deleting one character
    del.addEventListener('click',(e)=>{
        let delArray = display.value.split("");
        let newArr = delArray.slice(0,-1)
        display.value=newArr.join("");
    })
    
})();
