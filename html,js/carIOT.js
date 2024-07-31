function XHR_write(data){
        var xhr = new XMLHttpRequest();

        xhr.open("GET","remote_con.php?" + data);
        xhr.send();
}

function XHR_read(data){
        var xhr = new XMLHttpRequest();

        xhr.open("GET","remote_con.php?" + data, false);
        xhr.send();
		
	return xhr.responseText;
}

function repeat(){
	KNOCK();	//default mode, repeat 
}
setInterval(function(){repeat();},500); //default mode 

//--------------------------------------------------------//
	var interval;


function Parking(){ 
	clearInterval(interval); 
	document.getElementById("D_TEMP_val").value= "undetected"; 
	document.getElementById("TEMP_val").value= "undetected"; 
	document.getElementById("DUST_value").value = "undetected";
	document.getElementById("GAS_value").value = "undetected";
	document.getElementById("LIGHT_val").value = "undetected";
	document.getElementById("US_val").value="undetected";
	document.WINDOW.src='img/limit_off.png';
	document.BUZZER.src='img/buzzer_off.png';
	BLUEOFF();
	REDOFF();
	GREENOFF(); 
	LEDOFF(); 
}

function Driving(){
	D = 1; 
	interval = setInterval(function(){module();},5000); 
}

function module(){
	D_TEMP();
	LIGHT();
	ANTI_C(); 
	WINDOW();
	SAFEON(); 
}

	


function KNOCK() {
	var val = XHR_read('KNOCK');
	if (val == '0') {
		document.KNOCK.src = 'img/bump_on.png';
	} else {
		document.KNOCK.src = 'img/bump_off.png';
	}
}

function TEMP(){
	var val=XHR_read('TEMP'); 
	document.getElementById("TEMP_val").value=val+"'C";
	if (val > 23){
		BLUEON(); 
	}else if(val < 21){
		REDON(); 
	} 
}

function BLUEON() {
	document.BlueRGB.src = 'img/RGB_b.png';
	XHR_write('BLUEON');
}
function BLUEOFF() {
	document.BlueRGB.src = 'img/RGB_off.png';
	XHR_write('BLUEOFF');
}
function REDON() {
	document.RedRGB.src = 'img/RGB_r.png';
	XHR_write('REDON');
}
function REDOFF() {
	document.RedRGB.src = 'img/RGB_off.png';
	XHR_write('REDOFF');
}
function GREENON() {
	document.GreenRGB.src = 'img/RGB_g.png';
	XHR_write('GREENON');
}
function GREENOFF() {
	document.GreenRGB.src = 'img/RGB_off.png';
	XHR_write('GREENOFF');
}


function D_TEMP(){ //driving mode temperature 
	BLUEOFF();
	REDOFF();
	
	var val=XHR_read('TEMP');
	
	document.TEMPOV.style.opacity=0.5-((parseInt(val)+50)/80*0.5);
	document.getElementById("D_TEMP_val").value=val+"'C";
	
	if(val>23){
		BLUEON();
	}else if(val<21){
		REDON(); 
	}
	
}	

function LIGHT(){
	var val=XHR_read('LIGHT');
	document.getElementById("LIGHT_val").value=val;
	if(val<=2000){
		LEDON();
	}else{
		LEDOFF(); 
	}
}

                                        
function ANTI_C(){ //anticollision function
	document.BUZZER.src='img/buzzer_off.png';
	var val=XHR_read('US'); 
	document.getElementById("US_val").value=val;
	if(val<=150){ // ultrasonic sensor 
		BUZZERON();
		DCMON(); 
	}
}

function WINDOW(){
	
	var D_val = XHR_read('DUST'); 
	var G_val = XHR_read('GAS');
	
	document.getElementById("DUST_value").value = "DUST: "+D_val;
	document.getElementById("GAS_value").value = "GAS: "+ G_val;
	if(D_val > 20 || G_val > 200) {
		  document.WINDOW.src='img/dust.png'; 
	}else if(D_val <= 20 && G_val <= 200){
		document.WINDOW.src='img/limit_off.png' // instead changed image 
	}
}	


 
function SAFEON(){ 
	var val=XHR_read('PIR');
	if(val == 1){
		GREENON(); 
	}
	else if(val == 0){ 
		GREENOFF(); 
	}
}


function BUZZERON(){
	XHR_write('BUZZERON');
	document.BUZZER.src='img/buzzer_on.png';
}
function DCMON(){
	XHR_write('DCMON');
}

function DCMOFF(){
	XHR_write('DCMOFF');
}

function LEDON(){
	XHR_write('LEDON');
	document.LED.src='img/led_on.png';
}

function LEDOFF(){
	XHR_write('LEDOFF');
	document.LED.src='img/led_off.png';
}


/*
function LEDON(){
	XHR_write('LEDON');
	
	document.LED.src='img/led_on.png';
}

function LEDOFF(){
	XHR_write('LEDOFF');
	
	document.LED.src='img/led_off.png';
}

function DCMON(){
	XHR_write('DCMON');
	
	document.DCM.src='img/dcm_on.png';
}

function DCMOFF(){
	XHR_write('DCMOFF');
	
	document.DCM.src='img/dcm_off.png';
}

function STMON(){
	XHR_write('STMON');
	
	document.STM.src='img/stm_on.png';
	
	setTimeout(function(){
			document.STM.src='img/stm_off.png';
		},5000);
}

function PIR(){
	var val=XHR_read('PIR');
	
	if(val==1){
		document.PIR.src='img/pir_on.png';
	}else{
		document.PIR.src='img/pir_off.png';
	}
}

function US(){
	var val=XHR_read('US');
	
	if(val>=100){
		document.US.src='img/ultrasonic3.png';
	}else if(val>=50){
		document.US.src='img/ultrasonic2.png';
	}else{
		document.US.src='img/ultrasonic1.png';
	}
	
	document.getElementById("US_val").value=val+"cm";
}
	
function TEMP(){
	var val=XHR_read('TEMP');
	
	if(val!=-1){
		document.TEMPOV.style.opacity=0.5-((parseInt(val)+50)/80*0.5);
		
		document.getElementById("TEMP_val").value=val+"'C";
	}
}	

function LIGHT(){
	var val=XHR_read('LIGHT');
	
	if(val>=1000){
		document.LIGHT.src='img/light_on.png';
	}else{
		document.LIGHT.src='img/light_off.png';
	}
}

function SOUND(){
	var val=XHR_read('SOUND');
	
	document.getElementById('SOUND_val').value=val;
	document.SOUND.style.opacity=val/2048/(4/5)+0.2;
}

function HUMI(){
	var val=XHR_read('HUMI');
	
	if(val!=-1){
		document.HUMIOV.style.opacity=val/100*0.5;
		
		document.getElementById("HUMI_val").value=val+"%";
	}
}	

function VR(){
	var val=XHR_read('VR');
	
	document.getElementById('VR_val').value=val;
	document.VR.style='transform : rotate(' + (val/4095*90-90) + 'deg);';
}	

function SW(){
	var val=XHR_read('SW');
	
	if(val==0){
		document.SW.src='img/sw_on.png';
	}else{
		document.SW.src='img/sw_off.png';
	}
}

function TOUCH(){
	var val=XHR_read('TOUCH');
	
	if(val==1){
		document.TOUCH.src='img/touch_on.png';
	}else{
		document.TOUCH.src='img/touch_off.png';
	}
}

function PD(){
	var val=XHR_read('PD');
	
	if(val==1){
		document.PD.src='img/pd_on.png';
	}else{
		document.PD.src='img/pd_off.png';
	}
}

function BUMP(){
	var val=XHR_read('BUMP');
	
	if(val==1){
		document.BUMP.src='img/bump_on.png';
	}else{
		document.BUMP.src='img/bump_off.png';
	}
}

function IRO(){
	var val=XHR_read('IRO');
	
	if(val==0){
		document.IRO.src='img/iro_on.png';
	}else{
		document.IRO.src='img/iro_off.png';
	}
}

function LASERON(){
	XHR_write('LASERON');
	
	document.LASER.src='img/laser_on.png';
}

function LASEROFF(){
	XHR_write('LASEROFF');
	
	document.LASER.src='img/laser_off.png';
}

function MERC(){
	var val=XHR_read('MERC');
	
	if(val==1){
		document.MERC.src='img/mercury_on.png';
	}else{
		document.MERC.src='img/mercury_off.png';
	}
}

function TILT(){
	var val=XHR_read('TILT');
	
	if(val==1){
		document.TILT.src='img/tilt_on.png';
	}else{
		document.TILT.src='img/tilt_off.png';
	}
}

function FLAME(){
	var val=XHR_read('FLAME');
	
	if(val==1){
		document.FLAME.src='img/flame_on.png';
	}else{
		document.FLAME.src='img/flame_off.png';
	}
}

function REED(){
	var val=XHR_read('REED');
	
	if(val==1){
		document.REED.src='img/reed_on.png';
	}else{
		document.REED.src='img/reed_off.png';
	}
}

function BUZZERON(){
	XHR_write('BUZZERON');
	
	document.BUZZER.src='img/buzzer_on.png';
}

function BUZZEROFF(){
	XHR_write('BUZZEROFF');
	
	document.BUZZER.src='img/buzzer_off.png';
}

function REDON() {
	XHR_write('REDON');

	document.RED.src = 'img/RGB_r.png';
}

function REDOFF() {
	XHR_write('REDOFF');

	document.RED.src = 'img/RGB_off.png';
}

function GREENON() {
	XHR_write('GREENON');

	document.GREEN.src = 'img/RGB_g.png';
}

function GREENOFF() {
	XHR_write('GREENOFF');

	document.GREEN.src = 'img/RGB_off.png';
}

function BLUEON() {
	XHR_write('BLUEON');

	document.BLUE.src = 'img/RGB_b.png';
}

function BLUEOFF() {
	XHR_write('BLUEOFF');

	document.BLUE.src = 'img/RGB_off.png';
}

function RELAYON() {
	XHR_write('RELAYON');

	document.RELAY.src = 'img/relay_on.png';
}

function RELAYOFF() {
	XHR_write('RELAYOFF');

	document.RELAY.src = 'img/relay_off.png';
}

function IRT() {
	var val = XHR_read('IRT');

	if (val == 1) {
		document.IRT.src = 'img/irt_on.png';
	} else {
		document.IRT.src = 'img/irt_off.png';
	}
}

function LIMIT() {
	var val = XHR_read('LIMIT');

	if (val == 0) {
		document.LIMIT.src = 'img/limit_on.png';
	} else {
		document.LIMIT.src = 'img/limit_off.png';
	}
}

function KNOCK() {
	var val = XHR_read('KNOCK');

	if (val == 0) {
		document.KNOCK.src = 'img/knock_on.png';
	} else {
		document.KNOCK.src = 'img/knock_off.png';
	}
}

function DUST() {
	var val = XHR_read('DUST');

	document.DUST.style.opacity = (parseInt(val) / 4095) * 0.8 + 0.2;
	document.getElementById("DUST_val").value = val;
}

function SM() {
	var val = XHR_read('SM');

	document.SM.style.opacity = (parseInt(val) / 4095) * 0.8 + 0.2;
	document.getElementById("SM_val").value = val;
}

function GAS() {
	var val = XHR_read('GAS');

	document.GAS.style.opacity = (parseInt(val) / 4095) * 0.8 + 0.2;
	document.getElementById("GAS_val").value = val;
}

function THERM() {
	var val = XHR_read('THERM');

	document.THERM.style.opacity = ((parseFloat(val) + 30) / 80) * 0.8 + 0.2;
	document.getElementById("THERM_val").value = val;
}

function AT() {
	var val = XHR_read('AT');

	document.AT.style.opacity = ((parseFloat(val) + 30) / 80) * 0.8 + 0.2;
	document.getElementById("AT_val").value = val;
}
*/
