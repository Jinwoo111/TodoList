window.onload = function(){
    const Plus = document.getElementById('Plus_Button');
    const MainMenu = document.getElementById('main');
    var ReviseButton = `<button class=\"Revise_Button\">수정하기</button>`
    var DeleteButton = `<button class=\"Delete_Button\">삭제하기</button>`
    Plus.onclick = function(){
        var myText = document.querySelector("[id=Header_TodoList]");
        var newList = document.createElement("div");
        var DeleteDiv = `<div class=\"TodoList_content\">${myText.value}&nbsp;</div>`;
        newList.innerHTML = DeleteDiv + ReviseButton + DeleteButton;
        MainMenu.appendChild(newList);  
        myText.value ="";
        Update();

        function Update(){
            var DelBtns=document.getElementsByClassName("Delete_Button"); 
            var RevBtns=document.getElementsByClassName("Revise_Button");
            for(var i=0;i<DelBtns.length;i++){
                DelBtns[i].addEventListener("click", Delete);
            }
            for(var j=0;j<RevBtns.length;j++){
                if(RevBtns[j].addEventListener("click", Revise) == true){
                    RevBtns[j].addEventListener("click", Revise);
                    break;
                }
            }
            
            function Delete(){
                MainMenu.removeChild(this.parentElement);
            }
            function Revise(){
                const Revise_sentent = prompt('수정할 내용을 입력하시오', '내용 입력하기');
                var DeleteDiv = `<div class=\"TodoList_content\">${Revise_sentent}&nbsp;</div>`;
                newList.innerHTML = DeleteDiv + ReviseButton + DeleteButton;
            }
        }
    }
}
