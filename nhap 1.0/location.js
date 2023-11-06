function getLocation() {
    return new Promise((resolve, reject) => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                //these 2 lines below is for testing
                // latitude = 10.773383984785754;
                // longitude = 106.6597150743817;
                document.getElementById("coordinates").textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;


                // Points on the image map with GPS coordinates
                const points = {
                    //streetline
                    'gate1': { lat: 10.772058770420456, lon: 106.65790898396898 },
                    'gate2': { lat: 10.772699511183433, lon: 106.66053337540292 },
                    'gate3': { lat: 10.773922434355761, lon: 106.66142183333362 },
                    '1a': { lat: 10.772113297499391, lon: 106.65801245272863 },
                    '1b': { lat: 10.771857649097987, lon: 106.65816317681188 },
                    '1c': { lat: 10.772847590010096, lon: 106.65847867254682 },
                    '1d': { lat: 10.772532441611954, lon: 106.65869559530134 },
                    '2a': { lat: 10.77291985993762, lon: 106.65862183455343 },
                    '2b': { lat: 10.772561590638283, lon: 106.6588511634242 },
                    '2c': { lat: 10.772279734256971, lon: 106.65901611927862 },
                    '2d': { lat: 10.77217713616312, lon: 106.65905098799581 },
                    '2e': { lat: 10.772011217020829, lon: 106.65914084199781 },
                    '3a': { lat: 10.773558008058968, lon: 106.65894638184423 },
                    '3b': { lat: 10.773228806138931, lon: 106.6591395008933 },
                    '4a': { lat: 10.773450387560926, lon: 106.65937151197309 },
                    '4b': { lat: 10.773360882190104, lon: 106.65941040400381 },
                    '4c': { lat: 10.772999978479218, lon: 106.6596424150836 },
                    '4d': { lat: 10.772615359880005, lon: 106.65986369732732 },
                    '4e': { lat: 10.772462615684313, lon: 106.65997769121046 },
                    '5a': { lat: 10.773719562246258, lon: 106.65934334877844 },
                    '5b': { lat: 10.773524659706766, lon: 106.6594814825427 },
                    '6a': { lat: 10.774288871265272, lon: 106.659445272721 },
                    '6b': { lat: 10.77391479402564, lon: 106.65960218194837 },
                    '7*': { lat: 10.774597322013987, lon: 106.65960352305288 },
                    '7a': { lat: 10.774426134357721, lon: 106.65969874147291 },
                    '7b': { lat: 10.774094216118675, lon: 106.65987979058141 },
                    '7c': { lat: 10.773849250177923, lon: 106.66002597097273 },
                    '7d': { lat: 10.773738665487967, lon: 106.6600943673026 },
                    'm7': { lat: 10.77351214378103, lon: 106.66021640781278 },
                    '7e': { lat: 10.773325392932657, lon: 106.6602915096652 },
                    '8a': { lat: 10.774801199057235, lon: 106.65996293906088 },
                    '8b': { lat: 10.774672170266, lon: 106.66004474643583 },
                    '8c': { lat: 10.774271744252324, lon: 106.66025798205251 },
                    '8d': { lat: 10.773939825843078, lon: 106.6604712176692 },
                    '9a': { lat: 10.775668663043174, lon: 106.65974970344419 },
                    '9b': { lat: 10.775426333298501, lon: 106.65987174395437 },
                    '9c': { lat: 10.775157654186055, lon: 106.66001792434568 },
                    '9d': { lat: 10.774923228788486, lon: 106.66015337590093 },
                    '9e': { lat: 10.774770485763506, lon: 106.66025395873899 },
                    '10a': { lat: 10.775906216816935, lon: 106.66034381274099 },
                    '10b': { lat: 10.775782458323176, lon: 106.66042830232496 },
                    '10c': { lat: 10.77551641444281, lon: 106.66057448271627 },
                    '10d': { lat: 10.775081735619253, lon: 106.66082795146818 },

                    '2d.4d': { lat: 10.772336015859993, lon: 106.65936408235956 },

                    'a5-hta5':{ lat: 10.773352982896292, lon: 106.6597213338446 },
                    // '4e': { lat: , lon:  },
                   

                };
                
                // Initialize variables to keep track of the nearest point and its distance
                let nearestPoint = null;
                let minDistance = Number.MAX_VALUE;
                
                // Calculate the distance to each point and find the nearest point
                // Haversine formula
                for (const pointName in points) {
                    const point = points[pointName];
                    const lat2 = point.lat;
                    const lon2 = point.lon;
                
                    const dLat = (lat2 - latitude) * (Math.PI / 180);
                    const dLon = (lon2 - longitude) * (Math.PI / 180);
                
                    const a =
                    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(latitude * (Math.PI / 180)) *
                    Math.cos(lat2 * (Math.PI / 180)) *
                    Math.sin(dLon / 2) * Math.sin(dLon / 2);
                
                    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                    const distance = 6371 * c; // Radius of the Earth in kilometers
                
                    if (distance < minDistance) {
                    minDistance = distance;
                    nearestPoint = pointName;
                    }
                }
                
                console.log(`Nearest point: ${nearestPoint} (Distance: ${minDistance} km)`);

                resolve(`${nearestPoint}`);
                
            }, function(error) {
                reject("Error getting location: " + error.message);

            }, { enableHighAccuracy: true });
        } else {
            reject("Geolocation is not supported by your browser.");
        }
    });
}

document.getElementById("getLocationBtn").addEventListener("click", getLocation);


function start() {
    return getLocation()
        .then(result => {
            const dijkstraResult = graph.Dijkstra(result, end()); 
            return dijkstraResult;
        });
}

