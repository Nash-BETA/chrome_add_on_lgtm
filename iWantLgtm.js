//自分の投稿のみ処理を行う(view数のdivが存在するか確認している)
if(document.getElementsByClassName('it-Header_pv').length){

    var like = document.getElementsByClassName('it-Actions_likeCount');

    //LGTMが0だった場合はLGTMを777に変える
    if (like[0].textContent == 0){
        like[0].textContent = '7777';
    }
}