<h1 align="center"><code>geopack</code></h1>

<div align="center">
	<sub>
	Created by <a href="https://30c27b.com/">Antoine '30c27b' Coulon</a>
	</sub>
</div>
</div>

---

## Description

Geopack is a Geolocated backpack integration using [Arduino](https://arduino.cc/) embedded circuits and modules. The on-board logic queries its GPS location at a regular interval, stores the data in an SD card and sends it to a remote server over the internet using the 3g/2g network. The remote server stores the recieved data in a database and makes it available through a webserver and the [Google Maps API](https://cloud.google.com/maps-platform/).

## Project sub-sections

### [Embedded](/embedded)
Code and documentation for the on-board Arduino electronics.

### [server](/server)
Code and documentation for the remote server that connects the on-board logic with the database.

### [webserver](/webserver)
Code and documentation for the web application displaying data.


## License

All the code for this project is published under the [MIT License](/LICENSE).
