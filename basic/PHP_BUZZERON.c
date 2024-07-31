#include <wiringPi.h>
#include <stdio.h>

#define PIN 15

int main(void){
        if(wiringPiSetup() == -1) return 1;

        pinMode(PIN,OUTPUT);

        digitalWrite(PIN,HIGH);
        delay(2000);
        digitalWrite(PIN,LOW);

	printf("1");
}
