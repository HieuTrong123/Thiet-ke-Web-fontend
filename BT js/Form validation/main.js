function Validate(option){
    var getForm=document.querySelector(option.selector);
    var getBoolForm=true;
   function validation(getError,getRule){
    if(!getError){
        getRule.nextElementSibling.textContent='';
        getRule.parentElement.classList.add('form--success');
        getRule.parentElement.classList.remove('form--eror');
        getBoolForm=true
    }
    else{
         getRule.nextElementSibling.textContent=getError;
         getRule.parentElement.classList.add('form--eror');
         getRule.parentElement.classList.remove('form--success');
         getBoolForm=false;
    }
    return getBoolForm;
   }
    if(getForm){
        getForm.onsubmit=function(e){
            e.preventDefault();
            var getBoolForm=false;
            for(var i=0;i<option.rules.length;i++){
                var getIDElement=option.rules[i].selector;
                var getRule = getForm.querySelector(getIDElement);
                switch  (getRule.type)
                {
                    case 'text':
                        case 'password':
                            var getError=option.rules[i].rule(getRule.value);
                            getBoolForm=validation(getError,getRule);
                            break;
                            default:
                               var listInput=getRule.querySelectorAll('input[name="gender"]');
                            var BoolChecked=false;
                            var ArrayInput=Array.from(listInput);       
                            for(var j = 0; j <ArrayInput.length;j++){
                                if(ArrayInput[j].checked){
                                    BoolChecked=true;
                                    break;
                                }        
                            }
                            var getError=option.rules[i].rule(BoolChecked);
                            getBoolForm=validation(getError,getRule);
                        
                }
                   
            }
            if(getBoolForm){
                var getRulesValue=document.getElementsByClassName('form__group-item');
                var result=Array.from(getRulesValue).reduce(function(oj,input){
                  switch(input.type){
                    case 'text':
                        case 'password':
                            oj[input.id]=input.value;
                            break;
                            default:
                                var listInput=getRule.querySelectorAll('input[name="gender"]');
                                var ArrayInput=Array.from(listInput);       
                                for(var j = 0; j <ArrayInput.length;j++){
                                    if(ArrayInput[j].checked){
                                        oj[ArrayInput[j].name]=ArrayInput[j].value;
                                        break;
                                    }        
                                }
                  }
                    return oj;
                },{});
                console.log(result);
            }
        }
        option.rules.forEach(function(element){
            var getIDElement=element.selector;
            var getRule = getForm.querySelector(getIDElement);
            getRule.onblur=function(){
                var getError=element.rule(getRule.value);
                validation(getError,getRule);
            }
        });
    }
}
function isEmail(selector,message){
    return {
        selector:selector,
        rule:function test(value){
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)?undefined:message;
        }
    }
}
function isPassword(selector,message,min){
    return {
        selector:selector,
        rule:function test(value){
            var length=value.length;
            return length>=min?undefined:message;
            
        }
    }
}
function isPasswordConfirm(selector,password,message){
    return {
        selector:selector,
        rule:function test(value){
            return value===password()&&value!==''?undefined:message;
        }
    }
}
function  isForm__gender(selector,message){
    return {
        selector:selector,
        rule:function test(value){
           return value?undefined:message;
        }
      
    }
}
Validate({
    selector: '.form_1',
    rules: [
        isEmail('#email','email không hợp lệ'),
        isPassword('#password','bạn chưa nhập mật khẩu',8),
        isPasswordConfirm('#password__confirm',function(){
            return document.querySelector('#password').value;
        },'mật khẩu không chính xác'),
        isForm__gender('#form-gender','bạn chưa chọn giới tính')
    ]
})