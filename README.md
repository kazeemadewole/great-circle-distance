# great-circle-distance

# to set up and start the app
   -  clone the repository
   -  run yarn to install all the dependencies
   -  type yarn start:dev to start the server
   -  endpoint are :
   -   getall : get method to http://localhost:3000/circle-distance
   -   getOne : get method to http://localhost:3000/circle-distance/id     note: the id is the id of one of the results from getall
   -   create : post request to http://localhost:3000/circle-distance  with the following as the json data 
              {
                    "location": "banana island",
                   "name": "Mike Adenuga",
                  "description": "the land of the rich",
                   "phone": "09046368284",
                   "contactPerson": "kunle",
                   "latitude": 53,
                   "longitude": 90

                }
  - update: a put request to http://localhost:3000/circle-distance 

  - delete: a delete request to http://localhost:3000/circle-distance/id     note: the id is the id of one of the results from getall

# tools used
  nestjs mongodb
