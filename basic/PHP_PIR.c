#include <wiringPi.h>
#include <stdio.h>

#define PIN 2



int main(void){
        if(wiringPiSetup() == -1) return 1;

        pinMode(PIN,INPUT);
        
        delay(1000); 

        printf("%d",digitalRead(PIN));
}
