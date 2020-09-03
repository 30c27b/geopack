<h1 align="center"><code>geopack-server</code></h1>

<div align="center">
	<sub>
	Created by <a href="https://30c27b.com/">Antoine '30c27b' Coulon</a>
	</sub>
</div>
</div>

---

## Description

Code Code and documentation for the remote server that connects the on-board logic with the database.
and documentation for the remote servers.

## Config

To run the SSL server, you need to create a file called `config.json` and add fill it as follows:
```json
{
	"mongoUrl": "mongodb+srv://user@password@example.net/geopack",
	"port": 666
}
```
