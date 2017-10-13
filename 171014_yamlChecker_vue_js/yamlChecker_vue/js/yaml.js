new Vue({
	//#areを監視
	el: '#area',
	data: {
		//v-model="message"の初期値
		message: ''
	},
	computed: {
		//計算した結果を{{jsonText}}につど反映
		jsonText: function(){
			try{
				//YAMLをJSONに変換する処理
				return JSON.stringify(jsyaml.load(this.message))
			}catch(e){
				//JSON変換時にエラーが起きたらそのまま表示
				return e
			}
		}
	}
})
