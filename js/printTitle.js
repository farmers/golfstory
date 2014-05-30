
var count = 0;

function printTitle(){
	var titleList = new Array();
	titleList[0] = '1.아직도... 평일 낮 시간에 골프장이 텅텅 비어있나요?';
	titleList[1] = '2. 아직도... 스미싱에 떨고 있는 고객에게 비효율적인 문자광고를 하시나요?';
	titleList[2] = '3. 아직도... 골프장을 방문했던 모든 고객들의 정보를 얻지 못하고 있나요?';
	titleList[3] = '2. 아직도... 스미싱에 떨고 있는 고객에게 비효율적인 <br/>문자광고를 하시나요?';
	titleList[4] = '3. 아직도... 골프장을 방문했던 모든 고객들의 정보를 <br/>얻지 못하고 있나요?';

	var title = document.getElementById("intro");
	
	switch(count){
		case 0:
			title.innerHTML = '<h2 id=titlelist>' + titleList[0] + '</h2>' + '<h4>' + titleList[1] + '</h4>' + '<h4>' + titleList[2] + '</h4>';
			break;
		case 1:
			title.innerHTML = '<h4>' + titleList[0] + '</h4>' + '<h2 id=titlelist>' + titleList[3] + '</h2>' + '<h4>' + titleList[2] + '</h4>';
			break;
		default:
			title.innerHTML = '<h4>' + titleList[0] + '</h4>' + '<h4>' + titleList[1] + '</h4>' + '<h2 id=titlelist>' + titleList[4] + '</h2>';
			break;
	}

	if(count < 2) count++;
	else count=0;

	setTimeout("printTitle()", 6900);
}

window.onload = function(){
	printTitle();
}