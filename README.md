# IoT Car System

라즈베리 파이와 여러가지의 센서, 제어 장치들을 통합하여 자동화된 IoT Car 시스템을 구축했습니다.
기본 기능과 driving mode, parking mode의 기능들이 있습니다.
맡은 역할 : Driving Mode - Anti-Collision System, Auto Window System, Safety Mode, Light System
## 기본 기능
1. Crash Detection
   - 센서 : Knock sensor
   - 자동차가 충격을 감지하면 충돌 감지의 이미지가 바뀌고, 사용자에게 알림이 가게 합니다.

2. Air conditional & Heater
   - 센서 : RGB
   - 에어컨과 히터를 키고 끌 수 있습니다.
   - 에어컨이 켜질 경우 파란색 RGB 센서가 작동하고 해당 메뉴에 있는 원이 파란색으로 표시됩니다.
   - 히터가 켜질 경우 빨간색 RGB 센서가 작동하고 해당 메뉴에 있는 원이 빨간색으로 표시됩니다.

## Parking Mode
mode를 선택할 때 Parking 버튼을 클릭하면 parking mode가 실행됩니다.

1. Temperature System
   - 센서 :  RGB, Temperature sensor
   - 사용자는 차를 타기 전에 자동차의 내부 온도를 알 수 있습니다.
   - 온도에 따라서 히터나 에어컨이 자동으로 켜지도록 구현했습니다.
     

## Driving Mode
mode를 선택할 때 Driving 버튼을 클릭하면 driving mode가 실행됩니다. 
driving mode를 중지하려면 parking mode를 클릭하여 모든 시스템을 종료할 수 있습니다.

1. Temperature System
   - 센서 : RGB, Temperature sensor
   - driving mode가 켜지면 온도 센서가 자동차 내부 온도를 감지
   - 온도가 21도보다 낮으면 히터가 가동됩니다. 이 프로젝트에서는 빨간색 RGB가 실행됩니다.
   - 온도가 23도보다 높으면 에어컨이 가동됩니다. 이 프로젝트에서는 파란색 RGB가 실행됩니다.
   - 이 시스템은 5초에 한번 씩 반복합니다.

2. Auto Window System
   - 센서 : Dust Sensor, Gas Sensor
   - 차 내부의 먼지 센서 값과 가스 값을 감지
   - 먼지 센서의 값이 20보다 크거나 가스의 값이 200보다 높으면 창문이 열립니다. 이 시스템에서는 창문을 여는 대신 웹페이지의 이미지가 바뀌도록 구현했습니다.

3. Safety Mode
   - 센서 : PIR Sensor, RGB
   - 운전을 하는 도중에 차안의 동승자가 창 밖으로 몸을 내밀면 PIR 센서가 이를 감지해 해당 메뉴의 원이 녹색으로 채워지며 녹색 RGB 센서가 가동됩니다.
   - 자녀를 둔 부모에게 유용한 기능

4. Anti-Collision System
   - 센서 : Ultrasonic sensor, DC Motor, Buzzer
   - 실제로 달리는 차의 속도를 알 수 있다면 속도가 빠르고, Ultrasonic sensor를 이용해서 앞차와 뒷차와의 거리가 짧을 때 사고가 날 수 있다는 것을 인지합니다.
   - 2초동안 DC Motor가 작동하고 이는 브레이크 페달을 사용하고 있다는 것을 의미합니다. 이 과정에서 부저가 2초동안 울리고 해당 메뉴의 이미지가 바뀝니다.

5. Light System
   - 센서 : Light sensor(CDS), LED
   - Light sensor가 차 주변의 밝기를 감지
   - 차 주변이 어둘 때 LED를 키고 주변이 밝을 때 LED를 끄도록 구현했습니다.
