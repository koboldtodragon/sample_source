new Vue({
	//#are���Ď�
	el: '#area',
	data: {
		//v-model="message"�̏����l
		message: ''
	},
	computed: {
		//�v�Z�������ʂ�{{jsonText}}�ɂǔ��f
		jsonText: function(){
			try{
				//YAML��JSON�ɕϊ����鏈��
				return JSON.stringify(jsyaml.load(this.message))
			}catch(e){
				//JSON�ϊ����ɃG���[���N�����炻�̂܂ܕ\��
				return e
			}
		}
	}
})
