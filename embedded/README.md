<h1 align="center"><code>geopack-embedded</code></h1>

<div align="center">
	<sub>
	Created by <a href="https://30c27b.com/">Antoine '30c27b' Coulon</a>
	</sub>
</div>
</div>

---

## Description

Code and documentation for the on-board Arduino electronics.

## Electronics

this project is going to use these electronics:

* [Arduino MKR GSM 1400](https://store.arduino.cc/arduino-mkr-gsm-1400-1415)
* [Arduino MKR GPS Shield](https://store.arduino.cc/arduino-mkr-gps-shield)
* [Velleman VMA304 SD Card Logging Shield](https://www.velleman.eu/products/view/?id=435522)

## Dependencies

The needed dependencies are the following:

* [MKRGSM](https://www.arduino.cc/en/Reference/MKRGSM): gsm network library
* [MKRGPS](https://www.arduino.cc/en/Reference/ArduinoMKRGPS): gps shield library
* [SD Library](https://www.arduino.cc/en/Reference/SD): SD interaction library
* [ArduinoJSON](https://arduinojson.org/): Arduino (de)serialization

## Config

To use the `app.ino` code, you need to create your own `arduino_secrets.h` file and fill it as follows:
```c
#define SECRET_PINNUMBER "0000"            // Pincode of your sim card
#define SECRET_GPRS_APN "example.com"      // Access Point Name of your sim card provider
#define SECRET_GPRS_LOGIN "login"          // APN login
#define SECRET_GPRS_PASSWORD "password"    // APN password
```