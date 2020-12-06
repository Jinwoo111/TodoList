window.onload = function(){
    const Plus = document.getElementById('Plus_Button');
    const MainMenu = document.getElementById('main');
    var ReviseButton = `<button class=\"Revise_Button\">수정하기</button>`
    var DeleteButton = `<button class=\"Delete_Button\">삭제하기</button>`
    Plus.onclick = function(){
        var myTextArea = document.querySelector("[id=Header_TodoList]");
        var newList = document.createElement("div");
        var removerStr = `<div class=\"TodoList_content\">${myTextArea.value}&nbsp;</div>`;
        newList.innerHTML = removerStr + ReviseButton + DeleteButton;
        MainMenu.appendChild(newList);
        myTextArea.value ="";
        Update();

        function Update(){
            var myDelBtns=document.getElementsByClassName("Delete_Button"); 
            var myRevBtns=document.getElementsByClassName("Revise_Button");
            for(var i=0;i<myDelBtns.length;i++){
                myDelBtns[i].addEventListener("click", Delete);
            }
            for(var j=0;j<myRevBtns.length;j++){
                if(myRevBtns[j].addEventListener("click", Revise) == true){
                    myRevBtns[j].addEventListener("click", Revise);
                    break;
                }
            }
            
            function Delete(){
                MainMenu.removeChild(this.parentElement);
            }
            function Revise(){
                const Revise_sentent = prompt('수정할 내용을 입력하시오', '내용 입력하기');
                var removerStr = `<div class=\"TodoList_content\">${Revise_sentent}&nbsp;</div>`;
                newList.innerHTML = removerStr + ReviseButton + DeleteButton;
            }
        }
    }
}
