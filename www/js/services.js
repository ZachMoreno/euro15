'use strict';

angular.module('euro15.services', [])

.service('itineraryService', function($q) {
	return {
		itinerary:  [
		  {
		    "id": "1",
		    "name": "Chicago",
		    "country": "USA",
		    "startDate": "Wed Sept 2",
		    "endDate": "Thur Sept 3",
		    "agenda": [
		      {
		        "date": "Wed Sept 2",
		        "items": [
		          {
		            "title": "Bop N Grill",
		            "startTime": "12:00pm",
		            "endTime": "1:30pm"
		          },
		          {
		            "title": "Giordano's",
		            "startTime": "6:00pm",
		            "endTime": "7:30pm"
		          },
		          {
		            "title": "Adler Planetarium",
		            "startTime": "8:00pm",
		            "endTime": "9:30pm"
		          } 
		        ]
		      }  
		    ]
		  },
		  {
		    "id": "2",
		    "name": "Edinburgh",
		    "country": "Scotland",
		    "startDate": "Fri Sept 4",
		    "endDate": "Sun Sept 6",
		    "agenda": [
		      {
		        "date": "Fri Sept 4",
		        "items": [
		          {
		            "title": "Edinburgh Castle",
		            "startTime": "9:00am",
		            "endTime": "12:00pm"
		          },
		          {
		            "title": "The Scotch Whisky Experience",
		            "startTime": "1:00pm",
		            "endTime": "2:30pm"
		          }
		        ]
		      },
		      {
		        "date": "Sat Sept 5",
		        "items": [
		          {
		            "title": "Sterling Castle",
		            "startTime": "11:00am",
		            "endTime": "5:00pm"
		          }
		        ]
		      }  
		    ]
		  },
		  {
		    "id": "3",
		    "name": "Amsterdam",
		    "country": "Netherlands",
		    "startDate": "Mon Sept 7",
		    "endDate": "Tues Sept 8",
		    "agenda": [
		      {
		        "date": "Mon Sept 7",
		        "items": [
		          {
		            "title": "Cuban Cigar Shop",
		            "startTime": "9:00am",
		            "endTime": "12:00pm"
		          }
		        ]
		      }  
		    ]
		  },
		  {
		    "id": "4",
		    "name": "Munich",
		    "country": "Germany",
		    "startDate": "Wed Sept 9",
		    "endDate": "Thur Sept 10"
		  },
		  {
		    "id": "5",
		    "name": "Venice",
		    "country": "Italy",
		    "startDate": "Fri Sept 11",
		    "endDate": "Sat Sept 12"
		  },
		  {
		    "id": "6",
		    "name": "Marseilles",
		    "country": "France",
		    "startDate": "Sun Sept 13",
		    "endDate": "Mon Sept 14"
		  },
		  {
		    "id": "7",
		    "name": "Barcelona",
		    "country": "Spain",
		    "startDate": "Tues Sept 15",
		    "endDate": "Wed Sept 16"
		  },
		  {
		    "id": "8",
		    "name": "New York",
		    "country": "USA",
		    "startDate": "Thur Sept 17",
		    "endDate": "Fri Sept 18"
		  }
		],

		getItinerary: function() {
			return this.itinerary;
		},

		getCity: function(cityName) {
			var dfd = $q.defer();
			this.itinerary.forEach(function(city) {
				if(city.name === cityName) {
					dfd.resolve(city);
				}
			});

			return dfd.promise;
		},

		getAgendaItem: function(cityName, itemId) {

		}
	}
})