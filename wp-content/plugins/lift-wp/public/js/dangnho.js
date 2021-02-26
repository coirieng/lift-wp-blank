jQuery(document).ready(function(){
    
// jQuery('.pakb-single .treadv').css({
//     'width': '780px',
//     'height': '1000px',
//     'display': 'table'
// });

var dangnho_weather = {
    search: {
        "dallas": {
            name: 'Dallas',
            callname: 'Dallas',
            state: 'Texas',
            country: 'US',
            lol: 'Dallas-Fort Worth-Arlington',
            geo: '32.8208751,-96.8716264'
        },
        "atlanta": {
            name: 'Atlanta',
            callname: 'Atlanta',
            state: 'Georgia',
            country: 'US',
            lol: 'Atlanta-Sandy Springs-Marietta',
            geo: '33.7678358,-84.4906438'
        },
        "orlando": {
            name: 'Orlando',
            callname: 'Orlando',
            state: 'Florida',
            country: 'US',
            lol: 'Orlando-Kissimmee',
            geo: '28.4813989,-81.5089227'
        },
        "los_angeles": {
            name: 'Los Angeles',
            callname: 'Los Angeles',
            state: 'California',
            country: 'US',
            lol: 'Los Angeles-Long Beach-Santa Ana',
            geo: '34.0207305,-118.6919165'
        },
        "hanoi": {
            name: 'Hanoi',
            callname: 'Hà Nội',
            state: 'Hanoi',
            country: 'VN',
            lol: 'Hanoi',
            geo: '20.9740874,105.3724881'
        },
        "saigon": {
            name: 'Ho Chi Minh City',
            callname: 'Sài Gòn',
            state: 'Ho+Chi+Minh+City',
            country: 'VN',
            lol: 'Ho Chi Minh City',
            geo: '10.7553411,106.4150383'
        }
    }
}

for (const key in dangnho_weather.search) {
    if (dangnho_weather.search.hasOwnProperty(key)) {
        var element = dangnho_weather.search[key];
        var __url = "https://api.weather.com/v3/wx/observations/current?geocode="+element.geo+"&units=e&language=en-US&format=json&apiKey=d522aa97197fd864d36b418f39ebb323";
        jQuery.ajax({
            url: __url,
            type: 'GET',
            dataType: 'json', 
            success: function(res) {
                var results = '<div class="dangnho_weather" id="'+key+'">';
                var tempo = '';
                var tempoMin = '';
                
                if(key === 'saigon' || key === 'hanoi') {
                    tempo = '<span>'+((res.temperature-32)/1.8).toFixed(0)+'</span> &#xB0;C';
                    tempoMin = '<span class="mi">'+((res.temperatureMin24Hour-32)/1.8).toFixed(0)+'</span>';
                } else {
                    tempo = '<span>'+(res.temperature).toFixed(0)+'</span> &#xB0;F';
                    tempoMin = '<span class="mi">'+(res.temperatureMin24Hour).toFixed(0)+'</span>';
                }
                results += '<div class="ci">'+dangnho_weather.search[key].callname+'</div>'
                results += '<div class="setcol">';
                results += '<div class="ic"><img src="https://dangnho.s3-us-west-1.amazonaws.com/weather/'+res.iconCode+'.svg" style="width:32px"></div>'
                results += '<div class="info"><div class="te"><label>Thời tiết</label>'+tempoMin+'~'+tempo+'</div></div>'
                results += '<div class="info smm"><div class="hu"><label>Độ ẩm</label><span>'+res.relativeHumidity+'</span>%</div></div>'
                results += '<div class="info smm"><div class="hu"><label>Gió (mph)</label>'+res.windSpeed+'/'+res.windDirectionCardinal+'</div></div>'
                results += '<div class="info r"></div></div>'
                results += '</div>';
                results += '</div>';
                jQuery('#reponsiveweather').append(results)
                checkAir(key)
            }
        });
        
    }
}

function checkAir(e) {
    if (dangnho_weather.search.hasOwnProperty(e)) {
        var element = dangnho_weather.search[e];
        jQuery.ajax({
            url: 'https://api.openaq.org/v1/measurements?country='+dangnho_weather.search[e].country+'&city='+dangnho_weather.search[e].lol+'&parameter=pm25&limit=1&sort=desc&order_by=date',
            type: 'GET',
            dataType: 'json', 
            success: function(res) {
                var type ='good';
                var note ='Tốt';
                if(res.results[0].value <= 12) {
                    type ='good';
                    note ='Tốt';
                } else if(res.results[0].value > 12 && res.results[0].value <= 35.5) {
                    type ='medium';
                    note ='Tạm';
                } else if(res.results[0].value > 35.5 && res.results[0].value <= 55.5) {
                    type ='limit';
                    note ='Báo động';
                } else if(res.results[0].value > 55.5 && res.results[0].value <= 150.5) {
                    type ='unhealthy';
                    note ='Nguy hại';
                } else if(res.results[0].value > 150.5) {
                    type ='die';
                    note ='Kinh khủng';
                }
                jQuery('#reponsiveweather .dangnho_weather#'+e+' .info.r').append('<label>Ô nhiễm</label><div class="aq '+type+'"><b>'+note+'</b>')
            }
        });
    }
}

const player = new Plyr('#player', {
	controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
	settings: ['captions', 'quality', 'speed', 'loop'],
	volume : 1
});
    
jQuery('#bottomads .endads').on('click', function() {
  jQuery(this).parents('#bottomads').hide()
})    
    
});

