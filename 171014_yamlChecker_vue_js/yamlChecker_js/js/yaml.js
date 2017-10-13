$(function() {
	//������Yaml���͗��ɒP����L�[���͂��邽�тɊ֐����Ăяo��
	$('#yamlInput').keyup(checkChange(this));
});

//�L�[���͎��Ƀe�L�X�g�G���A�ɕύX�����������m�F
//�ύX����F�e�L�X�g�G���A�̕������JSON�`���ɕϊ����āA�E���̃e�L�X�g�G���A�ɕ\��
//�ύX�Ȃ��F�������Ȃ�
//�G���[���FJSON�`���̕ϊ��G���[������������A�E���̃e�L�X�g�G���A�ɃG���[���e��\��
function checkChange(event){

	//�C�x���g����Yaml���͗��̒l���Q�R�̕ϐ��ɑ��
	var oldYaml = yaml=$(event).find('#yamlInput').val();
	return function(){
		try{
			yaml=$(event).find('#yamlInput').val();
			
			//�Â��e�L�X�g�G���A�ƐV�����e�L�X�g�G���A�̕��͂��r
			if(oldYaml != yaml){
				//�ύX���������Ƃ�
				oldYaml = yaml;
				
				//Yaml��JSON�ɕϊ����ĉE���̃e�L�X�g�G���A�ɕ\��
				$('#jsonOutput').text(JSON.stringify(jsyaml.load(yaml)));
			}
		}catch(e){
			//JSON�ϊ����ɃG���[���N������E���̃e�L�X�g�G���A�ɕ\��
			$('#jsonOutput').text(e);
		}
	}
}
