




function visualizePath() {
	const svg = document.getElementById('map-svg');
	svg.innerHTML = '';  // Clear previous visualization
	const mapContainer = document.getElementById('map-container');
	const containerWidth = mapContainer.clientWidth;
	const containerHeight = mapContainer.clientHeight;
	
	// Coordinates for nodes
	const nodeCoordinates = {
		//streline
		'gate1':{x:containerWidth*0.175,y:containerHeight*0.527},
		'gate2':{x:containerWidth*0.546,y:containerHeight*0.7},
		'gate3':{x:containerWidth*0.723,y:containerHeight*0.563},
		'1a':{x:containerWidth*0.202,y:containerHeight*0.53},
		'1b':{x:containerWidth*0.196,y:containerHeight*0.62},
		'1c':{x:containerWidth*0.305,y:containerHeight*0.45},
		'1d':{x:containerWidth*0.3,y:containerHeight*0.535},
		'2a':{x:containerWidth*0.3245,y:containerHeight*0.45},
		'2b':{x:containerWidth*0.321,y:containerHeight*0.545},
		'2c':{x:containerWidth*0.319,y:containerHeight*0.625},
		'2d':{x:containerWidth*0.318,y:containerHeight*0.65},
		'2e':{x:containerWidth*0.315,y:containerHeight*0.701},
		'3a':{x:containerWidth*0.404,y:containerHeight*0.376},
		'3b':{x:containerWidth*0.402,y:containerHeight*0.452},
		'4a':{x:containerWidth*0.4428,y:containerHeight*0.426},
		'4b':{x:containerWidth*0.4428,y:containerHeight*0.453},
		'4c':{x:containerWidth*0.4414,y:containerHeight*0.55},
		'4d':{x:containerWidth*0.4402,y:containerHeight*0.654},
		'4e':{x:containerWidth*0.444,y:containerHeight*0.705},
		'5a':{x:containerWidth*0.46,y:containerHeight*0.377},
		'5b':{x:containerWidth*0.46,y:containerHeight*0.427},
		'6a':{x:containerWidth*0.501,y:containerHeight*0.285},
		'6b':{x:containerWidth*0.502,y:containerHeight*0.378},
		'7*':{x:containerWidth*0.542,y:containerHeight*0.245},
		'7a':{x:containerWidth*0.542,y:containerHeight*0.287},
		'7b':{x:containerWidth*0.543,y:containerHeight*0.378},
		'7c':{x:containerWidth*0.544,y:containerHeight*0.432},
		'7d':{x:containerWidth*0.5445,y:containerHeight*0.46},
		'm7':{x:containerWidth*0.545,y:containerHeight*0.51},
		'7e':{x:containerWidth*0.5455,y:containerHeight*0.555},
		'8a':{x:containerWidth*0.596,y:containerHeight*0.25},
		'8b':{x:containerWidth*0.597,y:containerHeight*0.285},
		'8c':{x:containerWidth*0.599,y:containerHeight*0.38},
		'8d':{x:containerWidth*0.601,y:containerHeight*0.46},
		'8e':{x:containerWidth*0.615,y:containerHeight*0.505},
		'9a':{x:containerWidth*0.617,y:containerHeight*0.088},
		'9b':{x:containerWidth*0.6185,y:containerHeight*0.146},
		'9c':{x:containerWidth*0.62,y:containerHeight*0.19},
		'9d':{x:containerWidth*0.622,y:containerHeight*0.25},
		'9e':{x:containerWidth*0.624,y:containerHeight*0.285},
		'10a':{x:containerWidth*0.695,y:containerHeight*0.1},
		'10b':{x:containerWidth*0.695,y:containerHeight*0.135},
		'10c':{x:containerWidth*0.7,y:containerHeight*0.19},
		'10d':{x:containerWidth*0.708,y:containerHeight*0.286},
		'10e':{x:containerWidth*0.72,y:containerHeight*0.5},

		'2d.4d':{x:containerWidth*0.376,y:containerHeight*0.652},

		//specialplaces
		'bkhouse':{x:containerWidth*0.297,y:containerHeight*0.48},
		'thuvien':{x:containerWidth*0.5,y:containerHeight*0.595},
		'nhaxetht':{x:containerWidth*0.7,y:containerHeight*0.48},
		'nhaxeltk':{x:containerWidth*0.25,y:containerHeight*0.4},
		'nhaxegv':{x:containerWidth*0.545,y:containerHeight*0.63},
		'cantin':{x:containerWidth*0.38,y:containerHeight*0.345},
		'sanbongda':{x:containerWidth*0.381,y:containerHeight*0.588},
		'sanbongchuyen':{x:containerWidth*0.57,y:containerHeight*0.3},
		'santennis':{x:containerWidth*0.57,y:containerHeight*0.3},
		'sancaulong':{x:containerWidth*0.6,y:containerHeight*0.37},
		'sanbongdanho':{x:containerWidth*0.6,y:containerHeight*0.37},
		'phongyte':{x:containerWidth*0.73,y:containerHeight*0.38},
		'sanbongro':{x:containerWidth*0.52,y:containerHeight*0.33},
		'bangiamhieu':{x:containerWidth*0.47,y:containerHeight*0.658},
		'phongdaotao':{x:containerWidth*0.47,y:containerHeight*0.685},
		'a3':{x:containerWidth*0.588,y:containerHeight*0.595},
		'c1':{x:containerWidth*0.57,y:containerHeight*0.2},
		'c2':{x:containerWidth*0.65,y:containerHeight*0.42},
		'c3':{x:containerWidth*0.65,y:containerHeight*0.31},
		'b7':{x:containerWidth*0.75,y:containerHeight*0.4},
		'b10':{x:containerWidth*0.65,y:containerHeight*0.52},
		'b11':{x:containerWidth*0.61,y:containerHeight*0.39},		
		'b12':{x:containerWidth*0.61,y:containerHeight*0.26},	
		//b1
		//stair
		'b1-ls':{x:containerWidth*0.2,y:containerHeight*0.65},
		'b1-rs':{x:containerWidth*0.2665,y:containerHeight*0.638},
		//floor1
		'b1-108':{x:containerWidth*0.212,y:containerHeight*0.6355},
		'b1-109':{x:containerWidth*0.224,y:containerHeight*0.636},
		'b1-110':{x:containerWidth*0.236,y:containerHeight*0.6365},
		'b1-111':{x:containerWidth*0.248,y:containerHeight*0.637},
		'b1-112':{x:containerWidth*0.26,y:containerHeight*0.6375},
		'b1-106':{x:containerWidth*0.195,y:containerHeight*0.7},
		'b1-105':{x:containerWidth*0.1935,y:containerHeight*0.72},
		'b1-104':{x:containerWidth*0.192,y:containerHeight*0.74},
		'b1-103':{x:containerWidth*0.1905,y:containerHeight*0.76},
		'b1-102':{x:containerWidth*0.189,y:containerHeight*0.78},
		'b1-114':{x:containerWidth*0.265,y:containerHeight*0.67},
		'b1-119':{x:containerWidth*0.2635,y:containerHeight*0.7},
		'b1-116':{x:containerWidth*0.262,y:containerHeight*0.73},
		'b1-115':{x:containerWidth*0.26,y:containerHeight*0.76},
		'b1-118':{x:containerWidth*0.258,y:containerHeight*0.79},
		//floor2
		'b1-200':{x:containerWidth*0.189,y:containerHeight*0.78},
		'b1-201':{x:containerWidth*0.1905,y:containerHeight*0.76},
		'b1-202':{x:containerWidth*0.192,y:containerHeight*0.74},
		'b1-203':{x:containerWidth*0.1935,y:containerHeight*0.72},
		'b1-205':{x:containerWidth*0.195,y:containerHeight*0.7},
		'b1-204':{x:containerWidth*0.2,y:containerHeight*0.65},
		'b1-206':{x:containerWidth*0.212,y:containerHeight*0.6355},
		'b1-207':{x:containerWidth*0.236,y:containerHeight*0.6365},
		'b1-208':{x:containerWidth*0.26,y:containerHeight*0.6375},
		'b1-209':{x:containerWidth*0.268,y:containerHeight*0.65},
		'b1-210':{x:containerWidth*0.266,y:containerHeight*0.67},
		'b1-211':{x:containerWidth*0.264,y:containerHeight*0.72},
		'b1-212':{x:containerWidth*0.262,y:containerHeight*0.74},
		'b1-213':{x:containerWidth*0.26,y:containerHeight*0.76},
		'b1-214':{x:containerWidth*0.258,y:containerHeight*0.78},
		'b1-215':{x:containerWidth*0.256,y:containerHeight*0.79},
		//floor3
		'b1-303':{x:containerWidth*0.195,y:containerHeight*0.7},
		'b1-302':{x:containerWidth*0.1935,y:containerHeight*0.72},
		'b1-301':{x:containerWidth*0.192,y:containerHeight*0.74},
		'b1-300a':{x:containerWidth*0.1905,y:containerHeight*0.76},
		'b1-300b':{x:containerWidth*0.189,y:containerHeight*0.78},
		'b1-305':{x:containerWidth*0.212,y:containerHeight*0.6355},
		'b1-306':{x:containerWidth*0.236,y:containerHeight*0.6365},
		'b1-307':{x:containerWidth*0.26,y:containerHeight*0.6375},
		'b1-308':{x:containerWidth*0.265,y:containerHeight*0.65},
		'b1-309':{x:containerWidth*0.265,y:containerHeight*0.67},
		'b1-310':{x:containerWidth*0.265,y:containerHeight*0.69},
		'b1-311':{x:containerWidth*0.264,y:containerHeight*0.71},
		'b1-312':{x:containerWidth*0.262,y:containerHeight*0.73},
		'b1-313':{x:containerWidth*0.26,y:containerHeight*0.75},
		'b1-314':{x:containerWidth*0.258,y:containerHeight*0.77},
		'b1-315':{x:containerWidth*0.256,y:containerHeight*0.79},

		//b3
		//ground
		//specialnodes
		'b3-a':{x:containerWidth*0.208,y:containerHeight*0.44},
		'b3-b':{x:containerWidth*0.23,y:containerHeight*0.53},
		'b3-c':{x:containerWidth*0.26,y:containerHeight*0.515},
		'b3-d':{x:containerWidth*0.296,y:containerHeight*0.51},
		'b3-e':{x:containerWidth*0.3,y:containerHeight*0.462},
		'b3-s':{x:containerWidth*0.26,y:containerHeight*0.5094},
		//leftside
		'b3-107':{x:containerWidth*0.211,y:containerHeight*0.48},
		'b3-106':{x:containerWidth*0.2118,y:containerHeight*0.47},
		'b3-105':{x:containerWidth*0.2126,y:containerHeight*0.46},
		'b3-104':{x:containerWidth*0.2132,y:containerHeight*0.45},
		'b3-103':{x:containerWidth*0.214,y:containerHeight*0.44},
		'b3-102':{x:containerWidth*0.2148,y:containerHeight*0.42},
		'b3-101':{x:containerWidth*0.2156,y:containerHeight*0.4},
		//midside
		'b3-108':{x:containerWidth*0.23,y:containerHeight*0.508},
		'b3-109':{x:containerWidth*0.235,y:containerHeight*0.5082},
		'b3-110':{x:containerWidth*0.24,y:containerHeight*0.5084},
		'b3-111':{x:containerWidth*0.245,y:containerHeight*0.5086},
		'b3-112':{x:containerWidth*0.25,y:containerHeight*0.5088},
		'b3-113':{x:containerWidth*0.255,y:containerHeight*0.509},
		'b3-114':{x:containerWidth*0.26,y:containerHeight*0.5092},
		//rightside
		'b3-115':{x:containerWidth*0.27,y:containerHeight*0.5096},
		'b3-116':{x:containerWidth*0.297,y:containerHeight*0.48},
		'circlek':{x:containerWidth*0.299,y:containerHeight*0.465},
		//floor2
		'b3-201':{x:containerWidth*0.22,y:containerHeight*0.499},
		'b3-202':{x:containerWidth*0.23,y:containerHeight*0.5},
		'b3-203':{x:containerWidth*0.235,y:containerHeight*0.501},
		'b3-204':{x:containerWidth*0.24,y:containerHeight*0.5012},
		'b3-205':{x:containerWidth*0.245,y:containerHeight*0.5014},
		'b3-206':{x:containerWidth*0.25,y:containerHeight*0.5016},
		'b3-207':{x:containerWidth*0.255,y:containerHeight*0.5018},
		'b3-208':{x:containerWidth*0.26,y:containerHeight*0.502},
		
		//b4
		//ground
		//specialnodes
		'b4-ms':{x:containerWidth*0.36,y:containerHeight*0.435},
		'b4-ls':{x:containerWidth*0.308,y:containerHeight*0.435},
		'b4-a':{x:containerWidth*0.308,y:containerHeight*0.44},
		'b4-b':{x:containerWidth*0.36,y:containerHeight*0.441},
		'b4-c':{x:containerWidth*0.395,y:containerHeight*0.442},
		'b4-d':{x:containerWidth*0.395,y:containerHeight*0.4},
		'b4-e':{x:containerWidth*0.36,y:containerHeight*0.398},

		//leftside(fromleftstair(b4-ls)toroom106)
		'b4-101':{x:containerWidth*0.31,y:containerHeight*0.44},
		'b4-102':{x:containerWidth*0.32,y:containerHeight*0.44},
		'b4-103':{x:containerWidth*0.325,y:containerHeight*0.44},
		'b4-104':{x:containerWidth*0.329,y:containerHeight*0.44},
		'b4-105':{x:containerWidth*0.334,y:containerHeight*0.44},
		'b4-106':{x:containerWidth*0.338,y:containerHeight*0.44},

		//rightside(frommiddlestair(b4-ms)tohtb4)
		'b4-htb4':{x:containerWidth*0.384,y:containerHeight*0.44},

		//floor2
		//leftside(fromb4-lstoroom206)
		'b4-201':{x:containerWidth*0.31,y:containerHeight*0.435},
		'b4-202':{x:containerWidth*0.33,y:containerHeight*0.435},
		'b4-203':{x:containerWidth*0.34,y:containerHeight*0.435},
		
		
		//rightside(fromb4-mstoroom209(x,y)~b4-c)
		'b4-204':{x:containerWidth*0.365,y:containerHeight*0.435},
		'b4-205':{x:containerWidth*0.37,y:containerHeight*0.435},
		'b4-206':{x:containerWidth*0.375,y:containerHeight*0.435},
		'b4-207':{x:containerWidth*0.38,y:containerHeight*0.435},
		'b4-208':{x:containerWidth*0.385,y:containerHeight*0.435},
		'b4-209':{x:containerWidth*0.39,y:containerHeight*0.435},

		//floor3:
		//left-side(fromb4-lstoroom303)
		'b4-301':{x:containerWidth*0.31,y:containerHeight*0.43},
		'b4-302':{x:containerWidth*0.325,y:containerHeight*0.43},
		'b4-303':{x:containerWidth*0.34,y:containerHeight*0.43},
		//right-side(fromb4-mstoroom306)
		'b4-304':{x:containerWidth*0.365,y:containerHeight*0.43},
		'b4-305':{x:containerWidth*0.37,y:containerHeight*0.43},
		'b4-306':{x:containerWidth*0.375,y:containerHeight*0.43},
		
		//floor4:
		//left-side(fromb4-lstoroom403)
		'b4-401':{x:containerWidth*0.31,y:containerHeight*0.425},
		'b4-402':{x:containerWidth*0.325,y:containerHeight*0.425},
		'b4-403':{x:containerWidth*0.34,y:containerHeight*0.425},
		//right-side(fromb4-mstoroom406)
		'b4-405':{x:containerWidth*0.37,y:containerHeight*0.425},
		'b4-406':{x:containerWidth*0.375,y:containerHeight*0.425},

		//floor5:
		//left-side(fromb4-lstoroom503)
		'b4-501':{x:containerWidth*0.31,y:containerHeight*0.42},
		'b4-502':{x:containerWidth*0.325,y:containerHeight*0.42},
		'b4-503':{x:containerWidth*0.34,y:containerHeight*0.42},
		//right-side(fromb4-mstoroom506)
		'b4-504':{x:containerWidth*0.365,y:containerHeight*0.42},
		'b4-505':{x:containerWidth*0.37,y:containerHeight*0.42},
		'b4-506':{x:containerWidth*0.375,y:containerHeight*0.42},

		//floor6:
		//left-side(fromb4-lstoroom603)
		'b4-601':{x:containerWidth*0.31,y:containerHeight*0.415},
		'b4-602':{x:containerWidth*0.325,y:containerHeight*0.415},
		'b4-603':{x:containerWidth*0.34,y:containerHeight*0.415},
		//right-side(fromb4-mstoroom606)
		'b4-604':{x:containerWidth*0.365,y:containerHeight*0.415},
		'b4-605':{x:containerWidth*0.37,y:containerHeight*0.415},
		'b4-606':{x:containerWidth*0.375,y:containerHeight*0.415},

		//b6
		//ground
		//special-nodes
		'b6-a':{x:containerWidth*0.397,y:containerHeight*0.33},
		'b6-b':{x:containerWidth*0.4,y:containerHeight*0.36},
		'b6-c':{x:containerWidth*0.464,y:containerHeight*0.365},
		'b6-s':{x:containerWidth*0.463,y:containerHeight*0.355},
		'b6-gdb6':{x:containerWidth*0.463,y:containerHeight*0.3},

		//floor1
		//left-side(fromb6-101tob6-105)
		'b6-101':{x:containerWidth*0.402,y:containerHeight*0.355},
		'b6-102':{x:containerWidth*0.414,y:containerHeight*0.355},
		'b6-103':{x:containerWidth*0.426,y:containerHeight*0.355},
		'b6-104':{x:containerWidth*0.438,y:containerHeight*0.355},
		'b6-105':{x:containerWidth*0.45,y:containerHeight*0.355},
		//rightside(b6-106)
		'b6-106':{x:containerWidth*0.48,y:containerHeight*0.355},

		//floor2
		//leftside(fromb6-201tob6-meetingroom='b6-105'+'b6-104')
		'b6-201':{x:containerWidth*0.402,y:containerHeight*0.353},
		'b6-202c':{x:containerWidth*0.414,y:containerHeight*0.353},
		'b6-202b':{x:containerWidth*0.426,y:containerHeight*0.353},
		'b6-202a':{x:containerWidth*0.438,y:containerHeight*0.353},
		'b6-meetingroom':{x:containerWidth*0.455,y:containerHeight*0.353},
		//rightside(b6-CE)

		//floor3
		//leftside(fromb6-301='b6-202C'tob6-305)
		'b6-301':{x:containerWidth*0.402,y:containerHeight*0.347},
		'b6-302':{x:containerWidth*0.414,y:containerHeight*0.347},
		'b6-303':{x:containerWidth*0.426,y:containerHeight*0.347},
		'b6-304':{x:containerWidth*0.438,y:containerHeight*0.347},
		'b6-305':{x:containerWidth*0.45,y:containerHeight*0.347},
		//rightside(b6-306)
		'b6-306':{x:containerWidth*0.482,y:containerHeight*0.347},

		//b2
		//ground
		//specialnodes
		'b2-fs':{x:containerWidth*0.302,y:containerHeight*0.645},
		'b2-ls':{x:containerWidth*0.302,y:containerHeight*0.717},
		'b2-ms':{x:containerWidth*0.32,y:containerHeight*0.72},
		'b2-rs':{x:containerWidth*0.382,y:containerHeight*0.725},
		'b2-entrance':{x:containerWidth*0.375,y:containerHeight*0.703},

		//floor1
		//horizontal
		'b2-114':{x:containerWidth*0.38,y:containerHeight*0.71},
		'b2-115':{x:containerWidth*0.375,y:containerHeight*0.725},
		'b2-113':{x:containerWidth*0.355,y:containerHeight*0.725},
		'b2-112':{x:containerWidth*0.35,y:containerHeight*0.725},
		'b2-111':{x:containerWidth*0.345,y:containerHeight*0.725},
		'b2-110':{x:containerWidth*0.34,y:containerHeight*0.725},
		'b2-109':{x:containerWidth*0.335,y:containerHeight*0.725},
		'b2-108':{x:containerWidth*0.33,y:containerHeight*0.725},
		'b2-107':{x:containerWidth*0.325,y:containerHeight*0.725},
		'b2-106':{x:containerWidth*0.31,y:containerHeight*0.716},
		//floor2
		'b2-208':{x:containerWidth*0.31,y:containerHeight*0.72},
		'b2-209':{x:containerWidth*0.325,y:containerHeight*0.725},
		'b2-210':{x:containerWidth*0.33,y:containerHeight*0.725},
		'b2-211':{x:containerWidth*0.335,y:containerHeight*0.725},
		'b2-212':{x:containerWidth*0.34,y:containerHeight*0.725},
		'b2-213':{x:containerWidth*0.345,y:containerHeight*0.725},
		'b2-214':{x:containerWidth*0.353,y:containerHeight*0.725},

		//vertical
		//floor1
		'b2-101':{x:containerWidth*0.302,y:containerHeight*0.645},
		'b2-102':{x:containerWidth*0.302,y:containerHeight*0.665},
		'b2-102a':{x:containerWidth*0.302,y:containerHeight*0.675},
		'b2-103':{x:containerWidth*0.302,y:containerHeight*0.72},
		'b2-104':{x:containerWidth*0.302,y:containerHeight*0.764},
		'b2-105':{x:containerWidth*0.302,y:containerHeight*0.785},
		//floor2
		'b2-201a':{x:containerWidth*0.302,y:containerHeight*0.645},
		'b2-201':{x:containerWidth*0.302,y:containerHeight*0.655},
		'b2-202':{x:containerWidth*0.302,y:containerHeight*0.665},
		'b2-203':{x:containerWidth*0.302,y:containerHeight*0.675},
		'b2-204':{x:containerWidth*0.302,y:containerHeight*0.72},
		'b2-205':{x:containerWidth*0.302,y:containerHeight*0.75},
		'b2-206':{x:containerWidth*0.302,y:containerHeight*0.772},
		'b2-207':{x:containerWidth*0.302,y:containerHeight*0.785},
		//floor3
		'b2-301a':{x:containerWidth*0.302,y:containerHeight*0.645},
		'b2-301':{x:containerWidth*0.302,y:containerHeight*0.655},
		'b2-302':{x:containerWidth*0.302,y:containerHeight*0.665},
		'b2-303':{x:containerWidth*0.302,y:containerHeight*0.675},
		'b2-304':{x:containerWidth*0.302,y:containerHeight*0.72},
		'b2-305':{x:containerWidth*0.302,y:containerHeight*0.75},
		'b2-306':{x:containerWidth*0.302,y:containerHeight*0.772},
		'b2-307':{x:containerWidth*0.302,y:containerHeight*0.785},
		//floor4
		'b2-401':{x:containerWidth*0.302,y:containerHeight*0.658},
		'b2-402':{x:containerWidth*0.302,y:containerHeight*0.677},
		'b2-403':{x:containerWidth*0.302,y:containerHeight*0.72},
		'b2-404':{x:containerWidth*0.302,y:containerHeight*0.75},
		'b2-405':{x:containerWidth*0.302,y:containerHeight*0.772},
		'b2-406':{x:containerWidth*0.302,y:containerHeight*0.785},
		
		//a4
		//ground
		//specialnodes
		'a4-fs':{x:containerWidth*0.508,y:containerHeight*0.534},
		'a4-bs':{x:containerWidth*0.508,y:containerHeight*0.45},
		'a4-fe':{x:containerWidth*0.511,y:containerHeight*0.534},
		'a4-be':{x:containerWidth*0.518,y:containerHeight*0.43},
		'a4-hta4':{x:containerWidth*0.525,y:containerHeight*0.47},
		//floor1
		'a4-108':{x:containerWidth*0.52,y:containerHeight*0.44},
		//floor2
		'a4-201':{x:containerWidth*0.532,y:containerHeight*0.5},
		'a4-202':{x:containerWidth*0.532,y:containerHeight*0.493},
		'a4-203':{x:containerWidth*0.532,y:containerHeight*0.488},
		'a4-204':{x:containerWidth*0.532,y:containerHeight*0.468},
		'a4-205':{x:containerWidth*0.532,y:containerHeight*0.448},
		'a4-206':{x:containerWidth*0.532,y:containerHeight*0.43},
		'a4-207':{x:containerWidth*0.517,y:containerHeight*0.43},
		//floor3
		'a4-306':{x:containerWidth*0.532,y:containerHeight*0.5},
		'a4-311':{x:containerWidth*0.532,y:containerHeight*0.493},
		'a4-312':{x:containerWidth*0.532,y:containerHeight*0.488},
		'a4-313':{x:containerWidth*0.532,y:containerHeight*0.468},
		'a4-314':{x:containerWidth*0.532,y:containerHeight*0.454},
		'a4-315':{x:containerWidth*0.532,y:containerHeight*0.448},
		//floor4
		'a4-401':{x:containerWidth*0.521,y:containerHeight*0.5},
		'a4-402':{x:containerWidth*0.532,y:containerHeight*0.5},
		'a4-407':{x:containerWidth*0.532,y:containerHeight*0.493},
		'a4-408':{x:containerWidth*0.532,y:containerHeight*0.488},
		'a4-409':{x:containerWidth*0.532,y:containerHeight*0.468},
		'a4-410':{x:containerWidth*0.532,y:containerHeight*0.454},
		'a4-411':{x:containerWidth*0.532,y:containerHeight*0.448},
		'a4-412':{x:containerWidth*0.532,y:containerHeight*0.43},
		'a4-413':{x:containerWidth*0.517,y:containerHeight*0.43},
		//floor5
		'a4-501':{x:containerWidth*0.521,y:containerHeight*0.5},
		'a4-506':{x:containerWidth*0.532,y:containerHeight*0.496},
		'a4-507':{x:containerWidth*0.532,y:containerHeight*0.493},
		'a4-508':{x:containerWidth*0.532,y:containerHeight*0.488},
		'a4-509':{x:containerWidth*0.532,y:containerHeight*0.468},
		'a4-510':{x:containerWidth*0.532,y:containerHeight*0.448},
		'a4-511':{x:containerWidth*0.532,y:containerHeight*0.43},
		//a5
		//ground
		//specialnodes
		'a5-ls':{x:containerWidth*0.455,y:containerHeight*0.525},
		'a5-rs':{x:containerWidth*0.498,y:containerHeight*0.528},
		'a5-hta5re':{x:containerWidth*0.49,y:containerHeight*0.506},
		'a5-hta5le':{x:containerWidth*0.465,y:containerHeight*0.505},
		'a5-hta5':{x:containerWidth*0.477,y:containerHeight*0.48},
		//floor1
		'a5-101':{x:containerWidth*0.49,y:containerHeight*0.52},
		'a5-102':{x:containerWidth*0.477,y:containerHeight*0.52},
		'a5-103':{x:containerWidth*0.463,y:containerHeight*0.52},
		'a5-104':{x:containerWidth*0.46,y:containerHeight*0.495},
		'a5-105':{x:containerWidth*0.46,y:containerHeight*0.455},
		'a5-106':{x:containerWidth*0.46,y:containerHeight*0.44},
		'a5-107':{x:containerWidth*0.49,y:containerHeight*0.44},
		'a5-108':{x:containerWidth*0.495,y:containerHeight*0.46},
		'a5-109':{x:containerWidth*0.495,y:containerHeight*0.5},

		//c4
		//ground
		//specialnodes
		'c4-le':{x:containerWidth*0.637,y:containerHeight*0.24},
		'c4-ls':{x:containerWidth*0.635,y:containerHeight*0.23},
		'c4-re':{x:containerWidth*0.694,y:containerHeight*0.24},
		'c4-rs':{x:containerWidth*0.698,y:containerHeight*0.235},
		//floor1
		'c4-101':{x:containerWidth*0.65,y:containerHeight*0.238},
		'c4-102':{x:containerWidth*0.66,y:containerHeight*0.238},
		'c4-103':{x:containerWidth*0.67,y:containerHeight*0.238},
		'c4-104':{x:containerWidth*0.68,y:containerHeight*0.238},
		'c4-105':{x:containerWidth*0.695,y:containerHeight*0.22},
		//floor2
		'c4-201':{x:containerWidth*0.65,y:containerHeight*0.234},
		'c4-202':{x:containerWidth*0.66,y:containerHeight*0.234},
		'c4-203':{x:containerWidth*0.67,y:containerHeight*0.234},
		'c4-204':{x:containerWidth*0.674,y:containerHeight*0.234},
		'c4-204.2':{x:containerWidth*0.68,y:containerHeight*0.234},
		//floor3
		'c4-301':{x:containerWidth*0.65,y:containerHeight*0.230},
		'c4-302':{x:containerWidth*0.66,y:containerHeight*0.230},
		'c4-303':{x:containerWidth*0.67,y:containerHeight*0.230},
		'c4-304':{x:containerWidth*0.68,y:containerHeight*0.230},
		//floor4
		'c4-401':{x:containerWidth*0.65,y:containerHeight*0.226},
		'c4-402':{x:containerWidth*0.67,y:containerHeight*0.226},
		'c4-403':{x:containerWidth*0.67,y:containerHeight*0.226},
		'c4-404':{x:containerWidth*0.68,y:containerHeight*0.226},
		//floor5
		'c4-501':{x:containerWidth*0.65,y:containerHeight*0.222},
		'c4-502':{x:containerWidth*0.67,y:containerHeight*0.222},
		'c4-503':{x:containerWidth*0.68,y:containerHeight*0.222},

		//c5
		//ground
		//specialnodes
		'c5-le':{x:containerWidth*0.634,y:containerHeight*0.185},
		'c5-ls':{x:containerWidth*0.63,y:containerHeight*0.17},
		'c5-re':{x:containerWidth*0.69,y:containerHeight*0.185},
		'c5-rs':{x:containerWidth*0.696,y:containerHeight*0.175},
		//floor1
		'c5-101':{x:containerWidth*0.65,y:containerHeight*0.175},
		'c5-102':{x:containerWidth*0.66,y:containerHeight*0.175},
		'c5-104':{x:containerWidth*0.67,y:containerHeight*0.175},
		'c5-106':{x:containerWidth*0.68,y:containerHeight*0.175},
		'c5-107':{x:containerWidth*0.695,y:containerHeight*0.1705},
		//floor2
		'c5-201':{x:containerWidth*0.65,y:containerHeight*0.171},
		'c5-202':{x:containerWidth*0.657,y:containerHeight*0.171},
		'c5-203':{x:containerWidth*0.67,y:containerHeight*0.171},
		'c5-204':{x:containerWidth*0.676,y:containerHeight*0.171},
		'c5-205':{x:containerWidth*0.68,y:containerHeight*0.171},
		'c5-206':{x:containerWidth*0.685,y:containerHeight*0.171},
		'c5-207':{x:containerWidth*0.69,y:containerHeight*0.171},
		'c5-208':{x:containerWidth*0.693,y:containerHeight*0.171},
		'c5-209':{x:containerWidth*0.695,y:containerHeight*0.171},
		//floor3
		'c5-301':{x:containerWidth*0.65,y:containerHeight*0.167},
		'c5-302':{x:containerWidth*0.66,y:containerHeight*0.167},
		'c5-303':{x:containerWidth*0.67,y:containerHeight*0.167},
		'c5-304':{x:containerWidth*0.68,y:containerHeight*0.167},
		//floor4
		'c5-401':{x:containerWidth*0.65,y:containerHeight*0.163},
		'c5-402':{x:containerWidth*0.66,y:containerHeight*0.163},
		'c5-403':{x:containerWidth*0.67,y:containerHeight*0.163},
		'c5-404':{x:containerWidth*0.68,y:containerHeight*0.163},
		//floor5
		'c5-501':{x:containerWidth*0.65,y:containerHeight*0.159},
		'c5-502':{x:containerWidth*0.66,y:containerHeight*0.159},
		'c5-503':{x:containerWidth*0.67,y:containerHeight*0.159},
		'c5-504':{x:containerWidth*0.68,y:containerHeight*0.159},

		//c6
		//ground
		//specialnodes
		'c6-le':{x:containerWidth*0.666,y:containerHeight*0.076},
		'c6-ls':{x:containerWidth*0.635,y:containerHeight*0.075},
		'c6-re':{x:containerWidth*0.685,y:containerHeight*0.125},
		'c6-rs':{x:containerWidth*0.67,y:containerHeight*0.08},
		'c6-be':{x:containerWidth*0.69,y:containerHeight*0.1},
		//floor1
		'c6-105':{x:containerWidth*0.64,y:containerHeight*0.124},
		'c6-104':{x:containerWidth*0.657,y:containerHeight*0.124},
		'c6-103':{x:containerWidth*0.67,y:containerHeight*0.124},
		'c6-102':{x:containerWidth*0.676,y:containerHeight*0.124},
		'c6-101':{x:containerWidth*0.678,y:containerHeight*0.124},
		//floor2
		'c6-208':{x:containerWidth*0.64,y:containerHeight*0.120},
		'c6-207':{x:containerWidth*0.657,y:containerHeight*0.120},
		'c6-206':{x:containerWidth*0.663,y:containerHeight*0.120},
		'c6-205':{x:containerWidth*0.668,y:containerHeight*0.120},
		'c6-204':{x:containerWidth*0.672,y:containerHeight*0.120},
		'c6-203':{x:containerWidth*0.676,y:containerHeight*0.120},
		'c6-202':{x:containerWidth*0.68,y:containerHeight*0.120},
		'c6-201':{x:containerWidth*0.69,y:containerHeight*0.120},
		//floor3
		'c6-309':{x:containerWidth*0.65,y:containerHeight*0.116},
		'c6-308':{x:containerWidth*0.657,y:containerHeight*0.116},
		'c6-307':{x:containerWidth*0.67,y:containerHeight*0.116},
		'c6-306':{x:containerWidth*0.676,y:containerHeight*0.116},
		'c6-305':{x:containerWidth*0.68,y:containerHeight*0.116},
		'c6-304':{x:containerWidth*0.685,y:containerHeight*0.116},
		'c6-303':{x:containerWidth*0.69,y:containerHeight*0.116},
		'c6-302':{x:containerWidth*0.693,y:containerHeight*0.116},
		'c6-301':{x:containerWidth*0.695,y:containerHeight*0.116},
		//floor4
		'c6-403':{x:containerWidth*0.65,y:containerHeight*0.113},
		'c6-402':{x:containerWidth*0.665,y:containerHeight*0.113},
		'c6-401':{x:containerWidth*0.685,y:containerHeight*0.113},
		//floor5
		'c6-503':{x:containerWidth*0.65,y:containerHeight*0.110},
		'c6-502':{x:containerWidth*0.665,y:containerHeight*0.110},
		'c6-501':{x:containerWidth*0.685,y:containerHeight*0.110},
		//floor6
		'c6-604':{x:containerWidth*0.65,y:containerHeight*0.107},
		'c6-603':{x:containerWidth*0.665,y:containerHeight*0.107},
		'c6-602':{x:containerWidth*0.68,y:containerHeight*0.107},
		'c6-601':{x:containerWidth*0.685,y:containerHeight*0.107},

		//b8
		//ground
		//specialnodes
		'b8-rs':{x:containerWidth*0.6,y:containerHeight*0.465},
		'b8-ls':{x:containerWidth*0.56,y:containerHeight*0.465},
		//floor1
		'b8-102':{x:containerWidth*0.57,y:containerHeight*0.465},
		'b8-103':{x:containerWidth*0.575,y:containerHeight*0.465},
		'b8-104':{x:containerWidth*0.58,y:containerHeight*0.465},
		'b8-105':{x:containerWidth*0.585,y:containerHeight*0.465},
		'b8-106':{x:containerWidth*0.59,y:containerHeight*0.465},
		'b8-107':{x:containerWidth*0.6,y:containerHeight*0.465},
		//floor2
		'b8-202':{x:containerWidth*0.57,y:containerHeight*0.465},
		'b8-203':{x:containerWidth*0.575,y:containerHeight*0.465},
		'b8-204':{x:containerWidth*0.58,y:containerHeight*0.465},
		'b8-205':{x:containerWidth*0.585,y:containerHeight*0.465},
		'b8-206':{x:containerWidth*0.59,y:containerHeight*0.465},
		//floor3
		'b8-301':{x:containerWidth*0.57,y:containerHeight*0.465},
		'b8-302':{x:containerWidth*0.583,y:containerHeight*0.465},
		'b8-303':{x:containerWidth*0.587,y:containerHeight*0.465},
		'b8-304':{x:containerWidth*0.593,y:containerHeight*0.465},
		'point1':{x:containerWidth*0.68,y:containerHeight*0.034},
	};

  
	if (end() === "a5-hta5") {
        graph.addEdge("a5-hta5le","a5-ls",100);
        graph.addEdge("a5-hta5re","a5-rs",1);
	}
    else {
        graph.addEdge("a5-hta5le","a5-ls",1);
        graph.addEdge("a5-hta5re","a5-rs",100);
	}



	// const pathNodes =['a5-108']; //this is for test
	// 	console.log(pathNodes);
	  
	// 	for (let i = 0; i < pathNodes.length - 1; i++) {
	// 	  const startNode = pathNodes[i];
	// 	  const endNode = pathNodes[i + 1];
	// 	  const startX = nodeCoordinates[startNode].x;
	// 	  const startY = nodeCoordinates[startNode].y;
	// 	  const endX = nodeCoordinates[endNode].x;
	// 	  const endY = nodeCoordinates[endNode].y;
	  
	// 	  const pathLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	// 	  pathLine.setAttribute('x1', startX);
	// 	  pathLine.setAttribute('y1', startY);
	// 	  pathLine.setAttribute('x2', endX);
	// 	  pathLine.setAttribute('y2', endY);
	// 	  pathLine.setAttribute('stroke', 'red');
	// 	  pathLine.setAttribute('stroke-width', '5');
	// 	  svg.appendChild(pathLine);
	// 	}
	// 	const startNode = pathNodes[0];
	//   const endNode = pathNodes[pathNodes.length - 1];
	//   const startCircle = createCircle(nodeCoordinates[startNode].x, nodeCoordinates[startNode].y, 'blue');
	//   const endCircle = createCircle(nodeCoordinates[endNode].x, nodeCoordinates[endNode].y, 'green');
	//   svg.appendChild(startCircle);
	//   svg.appendChild(endCircle);
	start()
	.then(resultArray => {
		if (resultArray.slice(-1) == end()) {
			const pathNodes = resultArray;
			console.log(resultArray);
			for (let i = 0; i < pathNodes.length - 1; i++) {
				const startNode = pathNodes[i];
				const endNode = pathNodes[i + 1];
				const startX = nodeCoordinates[startNode].x;
				const startY = nodeCoordinates[startNode].y;
				const endX = nodeCoordinates[endNode].x;
				const endY = nodeCoordinates[endNode].y;
			
				const pathLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
				pathLine.setAttribute('x1', startX);
				pathLine.setAttribute('y1', startY);
				pathLine.setAttribute('x2', endX);
				pathLine.setAttribute('y2', endY);
				pathLine.setAttribute('stroke', 'red');
				pathLine.setAttribute('stroke-width', '5');
				svg.appendChild(pathLine);
			  }
			  const startNode = pathNodes[0];
			const endNode = pathNodes[pathNodes.length - 1];
			const startCircle = createCircle(nodeCoordinates[startNode].x, nodeCoordinates[startNode].y, 'blue');
			const endCircle = createCircle(nodeCoordinates[endNode].x, nodeCoordinates[endNode].y, 'green');
			svg.appendChild(startCircle);
			svg.appendChild(endCircle);
		}
		else alert("Sorry, we don't have data for your destination");
	})


}

function createCircle(x, y, color) {
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', x);
  circle.setAttribute('cy', y);
  circle.setAttribute('r', 8);  // Adjust the radius as needed
  circle.setAttribute('fill', color);
  return circle;
}
