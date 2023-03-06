var notify = document.querySelector('.paren__notify');
var item = notify.querySelector('.notify');
notify.onclick=function(){

    this.classList.toggle('Header__notify');

}
item.onclick=function(e){
    e.stopPropagation();
}
var notify__item__array=item.getElementsByClassName('notify__item');
var n=notify__item__array.length;
for(var i = 0;i<n;i++){
    notify__item__array[i].onclick=function(){
        this.style.background.color = '#dfe3e6';
    }
}

var input=document.querySelector('.button_content');
input.onclick=function(){
    var history__seach=this.parentElement.querySelector('.Seach__History');
    history__seach.style.display='block';

}
input.onblur=function(){
    var history__seach=this.parentElement.querySelector('.Seach__History');
    history__seach.style.display='';

}
input.parentElement.querySelector('.Seach__History').onmousedown=function(e){
    e.preventDefault();
};

//modal
function Modal__register(){
    const main=document.getElementById('modal__register');
    if(main){
        const modal=document.createElement('div');
        modal.classList.add('modal');
        // modal.style.animation=`animation: GrowthModal ease-in 500s`;
        modal.innerHTML=`
<div class="modal__body">
    <div class="modal__inner">
        <div class="modal__header">
            <div class="modal__header__register">
                Đăng ký
            </div>
            <div class="modal__header__login">
                Đăng nhập
            </div>
        </div>
        <div class="modal__content">
            <div class="content__form">
            
                <input type="text" class="form" placeholder="email/số điện thoại">
                <input type="password" class="form" placeholder="password">
                <input type="password" class="form" placeholder="nhập lại mật khẩu">
                <p class="form__note">
                    Bằng việc đăng ký,bạn đã đồng ý với Shopee về <a href="" class="form__note-link">điều khoản dịch vụ </a> & <a href="" class="form__note-link">chính sách bảo mật </a>
                </p>
            </div>
        </div>
        <div class="modal__button">
            <button class="btn btn--normal">
                Trở về
            </button>
            <button class="btn btn--main">
                Đăng ký
            </button>
        </div>
    </div>
    <div class="modal__footer">
        <div class="auth-form__socials socials--facebook">
            <i class="fa-brands fa-square-facebook socials__icon"></i>
            <span class="socials__note">Kết nối với facebook</span> 
        </div>
        <div class="auth-form__socials socials--Google">
            <i class="fa-brands fa-google socials__icon"></i>
            <span class="socials__note">  Kết nối với Google</span> 
          
        </div>
    </div>

</div>`;

modal.onclick=function(e){
        if(e.target.closest('.btn--normal')){
            main.removeChild(modal);
        }
        else if(e.target.closest('.modal__header__login')){
            main.removeChild(modal);
            Modal__login();
        }
    };
    document.onkeydown=function(e){
        if(e.which==27){
            main.removeChild(modal);
        }
    }
    main.appendChild(modal);

}

}
function Modal__login(){
    const main=document.getElementById('modal__login');
    if(main){
        const login=document.createElement('div');
        login.classList.add('modal');
        login.innerHTML=`
        <div class="login modal__body">
    <div class="login__title">
        <div class="login__title-header">Đăng nhập</div>
        <div class="login__title-register">Đăng ký</div>
    </div>
    <div class="login__form">
        <input type="text" class="form" placeholder="Email/Số điện thoại/Tên đăng nhập">
    
  
        <input type="password" class="form" placeholder="Mật khẩu">
    </div>
    <div class="login__button btn--main">
        đăng nhập
    </div>
    
    <div class="login__footer">
        <div class="login__selective">
            <a href="" class="login__connec-link">Quên mật khẩu</a>
            <a href="" class="login__connec-link">Đăng nhập với SMS</a>
        </div>
        <div class="login__seperate">
            HOẶC
        </div>
        <div class="login__extend">
            <div class="auth-form__socials socials--facebook">
                <i class="fa-brands fa-square-facebook socials__icon"></i>
                <span class="socials__note">Kết nối với facebook</span> 
            </div>
            <div class="auth-form__socials socials--Google">
                <i class="fa-brands fa-google socials__icon"></i>
                <span class="socials__note">  Kết nối với Google</span> 
              
            </div>
        </div>
    </div>
</div>
        `;
        main.appendChild(login);
        login.onclick=function(e){
            if(e.target.closest('.login__title-register')){
                main.removeChild(login);
                Modal__register();
            }
        };
        document.onkeydown=function(e){
            if(e.which==27){
                main.removeChild(login);
            }
        }
    }
}