let alarmInterval;
function setAlarm() {
	const alarmTime = document.getElementById("alarmTime").value;  // 알람 시간 입력값 가져오기
	const [alarmHour, alarmMinute] = alarmTime.split(":");  // 알람 시간과 분 분리
	const now = new Date();  // 현재 시간
	const alarm = new Date();  // 알람 시간
	alarm.setHours(alarmHour, alarmMinute, 0);  // 알람 시간 설정
	if (alarm < now) {  // 알람 시간이 현재 시간보다 이전이면
		alarm.setDate(alarm.getDate() + 1);  // 알람 시간을 하루 뒤로 미룸
	}
	const timeUntilAlarm = alarm.getTime() - now.getTime();  // 알람까지 남은 시간 계산
	alarmInterval = setTimeout(() => {  // 알람 설정
		playAlarm();  // 알람 울리기
	}, timeUntilAlarm);
}
function playAlarm() {
	const alarmSound = document.getElementById("alarmSound");  // 오디오 요소 가져오기
	alarmSound.play();  // 오디오 재생
	alarmInterval = setInterval(() => {  // 5초 간격으로 오디오 반복 재생
		alarmSound.pause();
		alarmSound.currentTime = 0;
		alarmSound.play();
	}, 5000);
}
function stopAlarm() {
	const alarmSound = document.getElementById("alarmSound");  // 오디오 요소 가져오기
	clearInterval(alarmInterval);  // 알람 인터벌 정지
	alarmSound.pause();  // 오디오 정지
	alarmSound.currentTime = 0;  // 오디오 재생 시간 초기화
}
