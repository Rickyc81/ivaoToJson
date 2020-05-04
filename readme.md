# IVAO Whazzup to Json API

###### IVAO Whazzup text file to JSON format run under NodeJS

#### System used:

* NodeJs, ExpressJs

#### Configuration:

* No Configuration required

### Install & Use it

    client:~$ git clone https://github.com/Rickyc81/ivaoToJson.git
    client:~$ cd ivaoToJson
    client:~$ npm i
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
