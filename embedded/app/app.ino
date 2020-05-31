// Libraries
#include <MKRGSM.h>
#include <Arduino_MKRGPS.h>
#include <SPI.h>
#include <SD.h>

// Configuration
#include "arduino_secrets.h"

const char PINNUMBER[] = SECRET_PINNUMBER;
const char GPRS_APN[] = SECRET_GPRS_APN;
const char GPRS_LOGIN[] = SECRET_GPRS_LOGIN;
const char GPRS_PASSWORD[] = SECRET_GPRS_PASSWORD;

// MKRGSM Instances
GSMSSLClient client;
GPRS gprs;
GSM gsmAccess;

// Setup
void setup()
{
}

// Loop
void loop()
{
}
