# IVAO Whazzup to Json API

###### IVAO Whazzup text file to JSON format run under NodeJS

#### System used:

* NodeJs, ExpressJs

#### Configuration:

* No Configuration required

### Install & Use it

    client:~$ git clone https://github.com/Rickyc81/ivaoToJson.git
     Cloning into 'ivaoToJson'...
     remote: Enumerating objects: 2189, done.
     remote: Counting objects: 100% (2189/2189), done.
     remote: Compressing objects: 100% (1731/1731), done.
     remote: Total 2189 (delta 426), reused 2122 (delta 360), pack-reused 0
     Receiving objects: 100% (2189/2189), 2.50 MiB | 5.23 MiB/s, done.
     Resolving deltas: 100% (426/426), done.
    client:~$ cd ivaoToJson
    client:~$ npm install
    client:~$ npm start

### Routes:

|    Method 	|       URL       |   Description	                  |
|:---:	      |:---:            |---	                            |
|   [GET]()	  |   [/status]()	  |  Fetch URL link (most deprec.)  |               
|   [GET]()	  |   [/clients]()	|  Fetch Pilots online data       |               
|   [GET]()	  |   [/metar ]()   |  Not implemented, deprecated	  |               
|   [GET]()	  |   [/taf   ]()	  |  Not implemented, deprecated    |               
|   [GET]()	  |   [/shorttaf]() |  Not implemented, deprecated    |               


### Pilots JSON "Key : Value" Description:

```yaml
{
   "message": "fetch data ok...",
   "data":
     {
      "Pilot": {
          "Callsign":
          "Vid":
          "Rating":
          "Type":
      },
      "Software":
        {
          "SoftwareName":
          "SoftwareVersion":
          "ConnectionTime":
        },
      "Position":
        {
          "Latitude":
          "Longitude":
          "Altitude":
        },
      "Flight_Data":
        {
          "GroundSpeed":
          "Heading":
          "Heading":
        },
      "Flight_Plan":
        {
          "FullAircraft":
          "Squawk":
          "Departure":
          "Destination":
          "DepartureTime":
          "EnrouteTime":
          "Endurace":
          "CruislingLevel":
          "CruisingSpeed":
          "FlightRules":
          "TypeOfFlight":
          "Pob":
          "Route":
          "Alternate":
          "Alternate2":
          "Remarks":              
        },
     }
}
