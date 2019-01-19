#include <Adafruit_NeoPixel.h>

Adafruit_NeoPixel strip = Adafruit_NeoPixel(50, 6, NEO_GRB + NEO_KHZ800);
uint32_t ledValues[50];
uint32_t newLedValues[50];
uint32_t color;

void setup() {
  pinMode(0, INPUT);
  Serial.begin(9600);
  strip.begin();
  strip.show(); // Initialize all pixels to 'off'

  for (int i = 0; i < 50; i++) {
    ledValues[i] = strip.Color(255, 255, 255);
    newLedValues[i] = strip.Color(0, 0, 0);
    strip.setPixelColor(i , ledValues[i] );
    strip.show();
  }
}
 
void loop() {
  int sound = readSound();
  if (sound != 0) {
    int mapped = map(sound, 1, 20, 1, 255 * 3);
    if (mapped / 255 <= 1 ) {
      color = strip.Color(mapped % 255, 0, 0);
    } else if (mapped / 255 <= 2) {
      color = strip.Color(0, mapped % 255, 0);
    } else {
      color = strip.Color(0, 0, mapped % 255);
    }
    movePixels(color); 
  } else {
    movePixels(strip.Color(0, 0, 0));
  }
  delay(50);
}

int readSound() {
  int soundIntensity = analogRead(0);
  if (soundIntensity > 242) {
    soundIntensity = soundIntensity - 242;
    Serial.println(soundIntensity);
  } else {
    soundIntensity = 0;
  }
  return soundIntensity;
}

void movePixels(uint32_t c) {
  for (uint16_t i = 0; i < 49; i++) {
    newLedValues[0] = c;
    newLedValues[i + 1] = ledValues[i];
  }
  for (uint16_t i = 0; i < 50; i++) {
    ledValues[i] = newLedValues[i]; 
  }
  for(uint16_t i = 0; i < strip.numPixels(); i++) {
    strip.setPixelColor(i , ledValues[i] );
  }
  strip.show();
}
