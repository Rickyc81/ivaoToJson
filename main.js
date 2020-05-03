/*

 * App:           ivaoToJson

 * Description:   Simple API REST to convert ivao whazzup.txt to json data
 * Framework:     Express on NodeJs
 * Author:        Riccardo Cosenza
 * Mail:          riccardo.cosenza81@gmail.com
 * Github:        https://github.com/Rickyc81/ivaoToJson.git

 */

const express = require('express');
const fetch = require('node-fetch');
const helmet = require('helmet');
const cors = require('cors');


const app = express();
const PORT = 3000;

const URL = "https://api.ivao.aero/getdata/whazzup/whazzup.txt";
const URL_STATUS = "http://www.ivao.aero/whazzup/status.txt";
const URL_METAR = "http://wx.ivao.aero/metar.php";

app.use(helmet());
app.use(cors());

//  Ivao Section: !GENERAL, !CLIENTS, !SERVERS, !AIRPORTS

// Main page route
app.get('/status', (req, res) => {
  let url_list = [];

  fetch(URL_STATUS)
    .then(response => {
      if (response.ok) {
        return response.text()
      } else {
        return data = null;
      }
      console.log(response.ok);
    })
    .then(
      data => {
        if (data !== null) {
          splitted = data.split('\n');
          splitted.forEach((item) => {
            let sub = item.split("=");
            if (sub[1]) {
              url_list.push({
                Service: sub[0],
                Link: sub[1].replace(/(\r\n|\n|\r)/gm, "")
              });
            }
          });
          res.status(200).send({
            status: 'success',
            code: 200,
            response: {
              message: 'Ivao status URL List',
              data: url_list,
            },
          })
        }
      })

});

app.get('/clients', function(req, res) {
  let dataToSend = [];

  fetch(URL_TEST)
    .then(response => {
      //console.log(response.body._outBuffer.length)
      if (response.body._outBuffer && response.ok) {
        return response.text();
      } else {
        return data = null;
      }
    })
    .then(
      data => {
        //console.log(data)
        if (data !== null) {
          let splitted = data.split('\n');
          let startIndex = splitted.indexOf("!CLIENTS") + 1;
          let endIndex = splitted.indexOf("!AIRPORTS") + 2;
          console.log(startIndex, endIndex)
          if (!startIndex || startIndex === "0") {
            res.send({
              status: 'success',
              code: 200,
              response: {
                message: "Something wrong, malformed file retrived",
              },
            })
            return
          } else {
            let clients = splitted.slice(startIndex, endIndex);
            clients.forEach(line => {
              let fields = line.split(":");
              let temp = {}

              let decodeRating = (ratingNumber) => {
                let ratings = [
                  "Observer",
                  "Basic Flight Student (FS1)",
                  "Flight Student (FS2)",
                  "Advanced Flight Student (FS3)",
                  "Private Pilot (PP)",
                  "Senior Private Pilot (SPP)",
                  "Commercial Pilot (CP)",
                  "Airline Transport Pilot (ATP)",
                  "Senior Flight Instructor (SFI)",
                  "Chief Flight Instructor (CFI)"
                ]
                return ratings[ratingNumber - 1];
              }

              temp.Pilot = {
                Callsign: fields[0],
                Vid: fields[1],
                Rating: decodeRating(fields[41]),
                Type: fields[3]
              };
              temp.Software = {
                SoftwareName: fields[38],
                SoftwareVersion: fields[39],
                ConnectionTime: fields[37]
              };
              temp.Position = {
                Latitude: fields[5],
                Longitude: fields[6],
                Altitude: fields[7],
              };
              temp.Flight_Data = {
                GroundSpeed: fields[8],
                Heading: fields[45],
                OnGround: fields[46]
              };

              temp.Flight_Plan = {
                FullAircraft: fields[9],
                Squawk: fields[17],
                Departure: fields[11],
                Destination: fields[13],
                DepartureTime: fields[22],
                EnrouteTime: parseInt(fields[24]) * 60 + parseInt(fields[25]),
                Endurace: parseInt(fields[26]) * 60 + parseInt(fields[27]),
                CruislingLevel: fields[12],
                CruisingSpeed: fields[10],
                FlightRules: fields[21],
                TypeOfFlight: fields[43],
                Pob: fields[44],
                Route: fields[30],
                Alternate: fields[28],
                Alternate2: fields[42],
                Remarks: fields[29]
              };
              dataToSend.push(temp);
            })
            res.status(200).send({
              status: 'success',
              code: 200,
              response: {
                message: 'fetch data ok',
                data: dataToSend,
              },
            })
          }

        } else {
          res.send({
            status: "success",
            code: 200,
            response: {
              message: "Response ok, but data not found!"
            }
          })
        }
      })
    .catch(error => {
      console.error('Error: ', error)
      res.send({
        status: "fail",
        code: 400,
        response: {
          message: `${error}, check that you typed the url correctly`
        }
      })
    });
});


// Unknow routes
app.all('*', (req, res) => {
  res.sendStatus(404)
})

// Unknow routes
app.all('/taf', (req, res) => {
  res.status(200).send({
    status: 'success',
    code: 200,
    response: {
      message: 'Deprecated',

    },
  })
})

// Unknow Shorttaf
app.all('/shorttaf', (req, res) => {
  res.status(200).send({
    status: 'success',
    code: 200,
    response: {
      message: 'Deprecated',

    },
  })
})

// Metar
app.all('/metar', (req, res) => {
  res.status(200).send({
    status: 'success',
    code: 200,
    response: {
      message: 'Deprecated',

    },
  })
})

app.listen(PORT, () => console.log(`Server listening in ${PORT}`));
