// function haversineDistance(lat1, lon1, lat2, lon2) {
//     // Convert degrees to radians
//     const toRadians = (angle) => angle * (Math.PI / 180);
//     lat1 = toRadians(lat1);
//     lon1 = toRadians(lon1);
//     lat2 = toRadians(lat2);
//     lon2 = toRadians(lon2);

//     // Difference in latitudes and longitudes
//     const deltaLat = lat2 - lat1;
//     const deltaLon = lon2 - lon1;

//     // Haversine formula
//     const a = Math.sin(deltaLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) ** 2;
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     // Radius of the Earth in kilometers
//     const R = 6371;

//     // Calculate the distance
//     const distance = R * c;

//     return distance;
// }

// const lat1 = 10.772058770420456;  // Latitude of the first point
// const lon1 = 106.65790898396898;  // Longitude of the first point
// const lat2 = 10.77291985993762;  // Latitude of the second point
// const lon2 = 106.65862183455343;   // Longitude of the second point

// const distance = haversineDistance(lat1, lon1, lat2, lon2);
// console.log(`The distance between the two points is ${distance.toFixed(2)} kilometers.`);