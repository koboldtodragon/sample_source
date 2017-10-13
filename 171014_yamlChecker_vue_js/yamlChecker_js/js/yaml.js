$(function() {
	//左側のYaml入力欄に単語をキー入力するたびに関数を呼び出し
	$('#yamlInput').keyup(checkChange(this));
});

//キー入力時にテキストエリアに変更があったか確認
//変更あり：テキストエリアの文字列をJSON形式に変換して、右側のテキストエリアに表示
//変更なし：何もしない
//エラー時：JSON形式の変換エラーが発生したら、右側のテキストエリアにエラー内容を表示
function checkChange(event){

	//イベントからYaml入力欄の値を２コの変数に代入
	var oldYaml = yaml=$(event).find('#yamlInput').val();
	return function(){
		try{
			yaml=$(event).find('#yamlInput').val();
			
			//古いテキストエリアと新しいテキストエリアの文章を比較
			if(oldYaml != yaml){
				//変更があったとき
				oldYaml = yaml;
				
				//YamlをJSONに変換して右側のテキストエリアに表示
				$('#jsonOutput').text(JSON.stringify(jsyaml.load(yaml)));
			}
		}catch(e){
			//JSON変換時にエラーが起きたら右側のテキストエリアに表示
			$('#jsonOutput').text(e);
		}
	}
}
