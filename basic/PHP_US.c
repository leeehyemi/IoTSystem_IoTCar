#include <stdio.h>
#include <wiringPi.h>
#include <unistd.h>

#define TRIG 28
#define OUT 29

int main(void){
    int dis;
	long startTime, travelTime;

    if(wiringPiSetup() == -1) return 1;

    pinMode(TRIG,OUTPUT);
	pinMode(OUT,INPUT);

        
    digitalWrite (TRIG, 0);
	usleep(2);
	digitalWrite (TRIG, 1);
	usleep(20);
	digitalWrite (TRIG, 0);
	while(digitalRead(OUT) == 0);
	startTime = micros();
	while(digitalRead(OUT) == 1);
	travelTime = micros() - startTime;
	
	dis = travelTime / 58;
	printf("%d",dis);
	
}
