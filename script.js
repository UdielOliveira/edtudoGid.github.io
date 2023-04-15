function menuShow(){
    let menuMobile = document.querySelector('.mobile_menu')
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "1024px-Hamburger_icon_white.svg.png"
    } else{
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "Cross_icon_(white).svg.png"
    }
}
function minhaMensagem(){
    var meuBotao = document.getElementById("login_button");
    var minhaMensagem = document.getElementById("minhaMensagem");

login_button.addEventListener("click", function() {
  minhaMensagem.style.display = "block";
});
}

