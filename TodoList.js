window.onload = function(){
    const MainMenu = document.getElementById('main');
    const PlusTodoList = document.getElementById('Plus_TodoList');
    PlusTodoList.onclick = function(){
        const sentents = prompt('TodoList 만들기', '내용을 작성해주세요');
        let TodoListBlock = `<div class="TodoList_content">${sentents} &nbsp;<img title="수정하기" src="./img/pencil.png">&nbsp;<img title="삭제하기" src="./img/trash.png"></div>`
        MainMenu.insertAdjacentHTML("beforeend", TodoListBlock);
    }
}