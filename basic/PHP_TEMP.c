#include <stdio.h>
#include <stdint.h>
#include <wiringPi.h>

#define MAX_TIME 100
#define TEMP 25


int val[5] = {0,0,0,0,0};

int main(void){
        uint8_t lststate = 1;
        uint8_t cnt = 0;
        uint8_t j=0,i;

        if(wiringPiSetup() == -1) return 1;

        pinMode(TEMP,OUTPUT);
        digitalWrite(TEMP,LOW);
        delay(18);
        digitalWrite(TEMP,HIGH);
        delayMicroseconds(40);
        pinMode(TEMP,INPUT);

        for(i=0;i<MAX_TIME;i++){
                cnt=0;

                while(digitalRead(TEMP) == lststate){
                        cnt++;
                        delayMicroseconds(1);
                        if(cnt == 255) break;
                }

                lststate = digitalRead(TEMP);

                if(cnt == 255) break;

                if((i>=4) && (i%2==0)){
                        val[j/8]<<=1;
                        if(cnt>16) val[j/8]|=1;
                        j++;
                }
        }

	    printf("%d",val[2]);

}
