export default{
  "response": {
  "version": "0.1",
  "termsofService": "http://www.wunderground.com/weather/api/d/terms.html",
  "features": {
    "conditions": 1,
    "hourly": 1,
    "forecast10day": 1
    }
  },
  "current_observation": {
    "image": {
      "url": "http://icons.wxug.com/graphics/wu2/logo_130x80.png",
      "title": "Weather Underground",
      "link": "http://www.wunderground.com"
    },
    "display_location": {
      "full": "Denver, CO",
      "city": "Denver",
      "state": "CO",
      "state_name": "Colorado",
      "country": "US",
      "country_iso3166": "US",
      "zip": "80201",
      "magic": "1",
      "wmo": "99999",
      "latitude": "39.74000168",
      "longitude": "-104.98000336",
      "elevation": "1598.1"
    },
    "observation_location": {
      "full": "Capitol Hill, Denver, Colorado",
      "city": "Capitol Hill, Denver",
      "state": "Colorado",
      "country": "US",
      "country_iso3166": "US",
      "latitude": "39.734711",
      "longitude": "-104.977921",
      "elevation": "5331 ft"
    },
    "estimated": {

    },
    "station_id": "KCODENVE218",
    "observation_time": "Last Updated on September 13, 2:57 PM MDT",
    "observation_time_rfc822": "Wed, 13 Sep 2017 14:57:37 -0600",
    "observation_epoch": "1505336257",
    "local_time_rfc822": "Wed, 13 Sep 2017 14:58:11 -0600",
    "local_epoch": "1505336291",
    "local_tz_short": "MDT",
    "local_tz_long": "America/Denver",
    "local_tz_offset": "-0600",
    "weather": "Mostly Cloudy",
    "temperature_string": "81.9 F (27.7 C)",
    "temp_f": 81.9,
    "temp_c": 27.7,
    "relative_humidity": "25%",
    "wind_string": "Calm",
    "wind_dir": "NW",
    "wind_degrees": 319,
    "wind_mph": 0.0,
    "wind_gust_mph": 0,
    "wind_kph": 0,
    "wind_gust_kph": 0,
    "pressure_mb": "1006",
    "pressure_in": "29.72",
    "pressure_trend": "0",
    "dewpoint_string": "43 F (6 C)",
    "dewpoint_f": 43,
    "dewpoint_c": 6,
    "heat_index_string": "NA",
    "heat_index_f": "NA",
    "heat_index_c": "NA",
    "windchill_string": "NA",
    "windchill_f": "NA",
    "windchill_c": "NA",
    "feelslike_string": "81.9 F (27 C)",
    "feelslike_f": "81.9",
    "feelslike_c": "27",
    "visibility_mi": "10.0",
    "visibility_km": "16.1",
    "solarradiation": "191",
    "UV": "2.0",
    "precip_1hr_string": "0.00 in ( 0 mm)",
    "precip_1hr_in": "0.00",
    "precip_1hr_metric": " 0",
    "precip_today_string": "0.00 in (0 mm)",
    "precip_today_in": "0.00",
    "precip_today_metric": "0",
    "icon": "mostlycloudy",
    "icon_url": "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
    "forecast_url": "http://www.wunderground.com/US/CO/Denver.html",
    "history_url": "http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=KCODENVE218",
    "ob_url": "http://www.wunderground.com/cgi-bin/findweather/getForecast?query=39.734711,-104.977921",
    "nowcast": ""
  },
  "forecast": {
    "txt_forecast": {
      "date": "1:44 PM MDT",
      "forecastday": [
        {
          "period": 0,
          "icon": "cloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
          "title": "Wednesday",
          "fcttext": "Cloudy skies. A stray shower or thunderstorm is possible. High 83F. Winds W at 10 to 20 mph.",
          "fcttext_metric": "Cloudy. A stray shower or thunderstorm is possible. High 29C. Winds W at 15 to 25 km/h.",
          "pop": "20"
        },
        {
          "period": 1,
          "icon": "nt_partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
          "title": "Wednesday Night",
          "fcttext": "Partly cloudy skies. A stray shower or thunderstorm is possible. Low 61F. Winds SSW at 5 to 10 mph.",
          "fcttext_metric": "A few clouds. A stray shower or thunderstorm is possible. Low 16C. Winds light and variable.",
          "pop": "20"
        },
        {
          "period": 2,
          "icon": "mostlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
          "title": "Thursday",
          "fcttext": "Partly cloudy skies in the morning will give way to cloudy skies during the afternoon. A stray shower or thunderstorm is possible. High 87F. Winds SW at 10 to 15 mph.",
          "fcttext_metric": "A mix of clouds and sun in the morning followed by cloudy skies during the afternoon. A stray shower or thunderstorm is possible. High near 30C. Winds SW at 15 to 25 km/h.",
          "pop": "20"
        },
        {
          "period": 3,
          "icon": "nt_partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
          "title": "Thursday Night",
          "fcttext": "Cloudy skies early will become partly cloudy later at night. A stray shower or thunderstorm is possible. Low 57F. Winds SW at 5 to 10 mph.",
          "fcttext_metric": "A few clouds from time to time. A stray shower or thunderstorm is possible. Low 14C. Winds WSW at 10 to 15 km/h.",
          "pop": "20"
        },
        {
          "period": 4,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Friday",
          "fcttext": "Sunshine. High 83F. Winds NW at 5 to 10 mph.",
          "fcttext_metric": "Plentiful sunshine. High 28C. Winds NW at 10 to 15 km/h.",
          "pop": "0"
        },
        {
          "period": 5,
          "icon": "nt_partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
          "title": "Friday Night",
          "fcttext": "A few clouds from time to time. A stray shower or thunderstorm is possible. Low near 50F. Winds NNE at 10 to 15 mph.",
          "fcttext_metric": "Partly cloudy. A stray shower or thunderstorm is possible. Low around 10C. Winds NNE at 15 to 25 km/h.",
          "pop": "20"
        },
        {
          "period": 6,
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "title": "Saturday",
          "fcttext": "Partly cloudy skies. Slight chance of a rain shower. High 73F. Winds ENE at 10 to 15 mph.",
          "fcttext_metric": "Partly cloudy skies. Slight chance of a rain shower. High 23C. Winds ENE at 15 to 25 km/h.",
          "pop": "20"
        },
        {
          "period": 7,
          "icon": "nt_partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
          "title": "Saturday Night",
          "fcttext": "Considerable clouds early. Some decrease in clouds late. Slight chance of a rain shower. Low 52F. Winds NE at 5 to 10 mph.",
          "fcttext_metric": "Cloudy skies early, then partly cloudy after midnight. Slight chance of a rain shower. Low 11C. Winds NNE at 10 to 15 km/h.",
          "pop": "20"
        },
        {
          "period": 8,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Sunday",
          "fcttext": "Sunny, along with a few afternoon clouds. High 78F. Winds S at 10 to 15 mph.",
          "fcttext_metric": "Sunny, along with a few afternoon clouds. High 26C. Winds SSW at 15 to 25 km/h.",
          "pop": "0"
        },
        {
          "period": 9,
          "icon": "nt_partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
          "title": "Sunday Night",
          "fcttext": "Some clouds early will give way to generally clear conditions overnight. Low 54F. Winds SW at 5 to 10 mph.",
          "fcttext_metric": "Some clouds early will give way to generally clear conditions overnight. Low 12C. Winds SW at 10 to 15 km/h.",
          "pop": "0"
        },
        {
          "period": 10,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Monday",
          "fcttext": "Sunny. High near 85F. Winds SSW at 10 to 15 mph.",
          "fcttext_metric": "A mainly sunny sky. High around 30C. Winds SSW at 15 to 25 km/h.",
          "pop": "0"
        },
        {
          "period": 11,
          "icon": "nt_clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "title": "Monday Night",
          "fcttext": "A mostly clear sky. Low 54F. Winds SW at 10 to 15 mph.",
          "fcttext_metric": "Mostly clear. Low 12C. Winds SW at 10 to 15 km/h.",
          "pop": "0"
        },
        {
          "period": 12,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Tuesday",
          "fcttext": "A mainly sunny sky. High 86F. Winds SW at 10 to 15 mph.",
          "fcttext_metric": "Sunny. High around 30C. Winds SW at 15 to 25 km/h.",
          "pop": "0"
        },
        {
          "period": 13,
          "icon": "nt_clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "title": "Tuesday Night",
          "fcttext": "Clear skies. Low 53F. Winds SW at 10 to 15 mph.",
          "fcttext_metric": "Clear skies. Low 12C. Winds SW at 15 to 25 km/h.",
          "pop": "0"
        },
        {
          "period": 14,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Wednesday",
          "fcttext": "Mainly sunny. High 78F. Winds SSW at 10 to 20 mph.",
          "fcttext_metric": "A mainly sunny sky. High 26C. Winds SSW at 15 to 30 km/h.",
          "pop": "0"
        },
        {
          "period": 15,
          "icon": "nt_clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "title": "Wednesday Night",
          "fcttext": "Clear skies. Low 54F. Winds SW at 10 to 15 mph.",
          "fcttext_metric": "Clear. Low 12C. Winds WSW at 10 to 15 km/h.",
          "pop": "20"
        },
        {
          "period": 16,
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "title": "Thursday",
          "fcttext": "Intervals of clouds and sunshine. High 73F. Winds SSW at 10 to 15 mph.",
          "fcttext_metric": "Chance of a shower or two during the morning, followed by partly cloudy skies in the afternoon. High 23C. Winds SSW at 15 to 25 km/h. Chance of rain 30%.",
          "pop": "20"
        },
        {
          "period": 17,
          "icon": "nt_partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
          "title": "Thursday Night",
          "fcttext": "Partly cloudy. Low 47F. Winds WSW at 5 to 10 mph.",
          "fcttext_metric": "Clear to partly cloudy. Low 9C. Winds W at 10 to 15 km/h.",
          "pop": "0"
        },
        {
          "period": 18,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Friday",
          "fcttext": "Sunshine and some clouds. High 73F. SW winds shifting to NNE at 10 to 15 mph.",
          "fcttext_metric": "Sunny, along with a few afternoon clouds. High 23C. SW winds shifting to NNE at 15 to 25 km/h.",
          "pop": "0"
        },
        {
          "period": 19,
          "icon": "nt_partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
          "title": "Friday Night",
          "fcttext": "Partly cloudy skies. Low 48F. Winds SW at 5 to 10 mph.",
          "fcttext_metric": "Some clouds early will give way to generally clear conditions overnight. Low 9C. Winds WSW at 10 to 15 km/h.",
          "pop": "0"
        }
      ]
    },
    "simpleforecast": {
      "forecastday": [
        {
          "date": {
            "epoch": "1505350800",
            "pretty": "7:00 PM MDT on September 13, 2017",
            "day": 13,
            "month": 9,
            "year": 2017,
            "yday": 255,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Wed",
            "weekday": "Wednesday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 1,
          "high": {
            "fahrenheit": "88",
            "celsius": "31"
          },
          "low": {
            "fahrenheit": "61",
            "celsius": "16"
          },
          "conditions": "Overcast",
          "icon": "cloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
          "skyicon": "",
          "pop": 20,
          "qpf_allday": {
            "in": 0.00,
            "mm": 0
          },
          "qpf_day": {
            "in": 0.00,
            "mm": 0
          },
          "qpf_night": {
            "in": 0.00,
            "mm": 0
          },
          "snow_allday": {
            "in": 0.0,
            "cm": 0.0
          },
          "snow_day": {
            "in": 0.0,
            "cm": 0.0
          },
          "snow_night": {
            "in": 0.0,
            "cm": 0.0
          },
          "maxwind": {
            "mph": 20,
            "kph": 32,
            "dir": "W",
            "degrees": 277
          },
          "avewind": {
            "mph": 13,
            "kph": 21,
            "dir": "W",
            "degrees": 277
          },
          "avehumidity": 30,
          "maxhumidity": 41,
          "minhumidity": 20
        },
        {
          "date": {
            "epoch": "1505437200",
            "pretty": "7:00 PM MDT on September 14, 2017",
            "day": 14,
            "month": 9,
            "year": 2017,
            "yday": 256,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Thu",
            "weekday": "Thursday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 2,
          "high": {
            "fahrenheit": "87",
            "celsius": "31"
          },
          "low": {
            "fahrenheit": "57",
            "celsius": "14"
          },
          "conditions": "Mostly Cloudy",
          "icon": "mostlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
          "skyicon": "",
          "pop": 20,
          "qpf_allday": {
            "in": 0.00,
            "mm": 0
          },
          "qpf_day": {
            "in": 0.00,
            "mm": 0
          },
          "qpf_night": {
            "in": 0.00,
            "mm": 0
          },
          "snow_allday": {
            "in": 0.0,
            "cm": 0.0
          },
          "snow_day": {
            "in": 0.0,
            "cm": 0.0
          },
          "snow_night": {
            "in": 0.0,
            "cm": 0.0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "SW",
            "degrees": 219
          },
          "avewind": {
            "mph": 12,
            "kph": 19,
            "dir": "SW",
            "degrees": 219
          },
          "avehumidity": 34,
          "maxhumidity": 49,
          "minhumidity": 17
        },
        {
          "date": {
            "epoch": "1505523600",
            "pretty": "7:00 PM MDT on September 15, 2017",
            "day": 15,
            "month": 9,
            "year": 2017,
            "yday": 257,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Fri",
            "weekday": "Friday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 3,
          "high": {
            "fahrenheit": "83",
            "celsius": "28"
          },
          "low": {
            "fahrenheit": "50",
            "celsius": "10"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 0,
          "qpf_allday": {
            "in": 0.00,
            "mm": 0
          },
          "qpf_day": {
            "in": 0.00,
            "mm": 0
          },
          "qpf_night": {
            "in": 0.00,
            "mm": 0
          },
          "snow_allday": {
            "in": 0.0,
            "cm": 0.0
          },
          "snow_day": {
            "in": 0.0,
            "cm": 0.0
          },
          "snow_night": {
            "in": 0.0,
            "cm": 0.0
          },
          "maxwind": {
            "mph": 10,
            "kph": 16,
            "dir": "NW",
            "degrees": 308
          },
          "avewind": {
            "mph": 8,
            "kph": 13,
            "dir": "NW",
            "degrees": 308
          },
          "avehumidity": 36,
          "maxhumidity": 57,
          "minhumidity": 17
        },
        {
          "date": {
            "epoch": "1505610000",
            "pretty": "7:00 PM MDT on September 16, 2017",
            "day": 16,
            "month": 9,
            "year": 2017,
            "yday": 258,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Sat",
            "weekday": "Saturday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 4,
          "high": {
            "fahrenheit": "73",
            "celsius": "23"
          },
          "low": {
            "fahrenheit": "52",
            "celsius": "11"
          },
          "conditions": "Partly Cloudy",
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "skyicon": "",
          "pop": 20,
          "qpf_allday": {
            "in": 0.00,
            "mm": 0
          },
          "qpf_day": {
            "in": 0.00,
            "mm": 0
          },
          "qpf_night": {
            "in": 0.00,
            "mm": 0
          },
          "snow_allday": {
            "in": 0.0,
            "cm": 0.0
          },
          "snow_day": {
            "in": 0.0,
            "cm": 0.0
          },
          "snow_night": {
            "in": 0.0,
            "cm": 0.0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "ENE",
            "degrees": 60
          },
          "avewind": {
            "mph": 11,
            "kph": 18,
            "dir": "ENE",
            "degrees": 60
          },
          "avehumidity": 52,
          "maxhumidity": 75,
          "minhumidity": 33
        },
        {
          "date": {
            "epoch": "1505696400",
            "pretty": "7:00 PM MDT on September 17, 2017",
            "day": 17,
            "month": 9,
            "year": 2017,
            "yday": 259,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Sun",
            "weekday": "Sunday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 5,
          "high": {
            "fahrenheit": "78",
            "celsius": "26"
          },
          "low": {
            "fahrenheit": "54",
            "celsius": "12"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 0,
          "qpf_allday": {
            "in": 0.00,
            "mm": 0
          },
          "qpf_day": {
            "in": 0.00,
            "mm": 0
          },
          "qpf_night": {
            "in": 0.00,
            "mm": 0
          },
          "snow_allday": {
            "in": 0.0,
            "cm": 0.0
          },
          "snow_day": {
            "in": 0.0,
            "cm": 0.0
          },
          "snow_night": {
            "in": 0.0,
            "cm": 0.0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "S",
            "degrees": 187
          },
          "avewind": {
            "mph": 11,
            "kph": 18,
            "dir": "S",
            "degrees": 187
          },
          "avehumidity": 50,
          "maxhumidity": 76,
          "minhumidity": 24
        },
        {
          "date": {
            "epoch": "1505782800",
            "pretty": "7:00 PM MDT on September 18, 2017",
            "day": 18,
            "month": 9,
            "year": 2017,
            "yday": 260,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Mon",
            "weekday": "Monday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 6,
          "high": {
            "fahrenheit": "85",
            "celsius": "29"
          },
          "low": {
            "fahrenheit": "54",
            "celsius": "12"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 0,
          "qpf_allday": {
            "in": 0.00,
            "mm": 0
          },
          "qpf_day": {
            "in": 0.00,
            "mm": 0
          },
          "qpf_night": {
            "in": 0.00,
            "mm": 0
          },
          "snow_allday": {
            "in": 0.0,
            "cm": 0.0
          },
          "snow_day": {
            "in": 0.0,
            "cm": 0.0
          },
          "snow_night": {
            "in": 0.0,
            "cm": 0.0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "SSW",
            "degrees": 210
          },
          "avewind": {
            "mph": 11,
            "kph": 18,
            "dir": "SSW",
            "degrees": 210
          },
          "avehumidity": 33,
          "maxhumidity": 55,
          "minhumidity": 14
        },
        {
          "date": {
            "epoch": "1505869200",
            "pretty": "7:00 PM MDT on September 19, 2017",
            "day": 19,
            "month": 9,
            "year": 2017,
            "yday": 261,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Tue",
            "weekday": "Tuesday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 7,
          "high": {
            "fahrenheit": "86",
            "celsius": "30"
          },
          "low": {
            "fahrenheit": "53",
            "celsius": "12"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 0,
          "qpf_allday": {
            "in": 0.00,
            "mm": 0
          },
          "qpf_day": {
            "in": 0.00,
            "mm": 0
          },
          "qpf_night": {
            "in": 0.00,
            "mm": 0
          },
          "snow_allday": {
            "in": 0.0,
            "cm": 0.0
          },
          "snow_day": {
            "in": 0.0,
            "cm": 0.0
          },
          "snow_night": {
            "in": 0.0,
            "cm": 0.0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "SW",
            "degrees": 230
          },
          "avewind": {
            "mph": 12,
            "kph": 19,
            "dir": "SW",
            "degrees": 230
          },
          "avehumidity": 27,
          "maxhumidity": 43,
          "minhumidity": 12
        },
        {
          "date": {
            "epoch": "1505955600",
            "pretty": "7:00 PM MDT on September 20, 2017",
            "day": 20,
            "month": 9,
            "year": 2017,
            "yday": 262,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Wed",
            "weekday": "Wednesday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 8,
          "high": {
            "fahrenheit": "78",
            "celsius": "26"
          },
          "low": {
            "fahrenheit": "54",
            "celsius": "12"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 0,
          "qpf_allday": {
            "in": 0.00,
            "mm": 0
          },
          "qpf_day": {
            "in": 0.00,
            "mm": 0
          },
          "qpf_night": {
            "in": 0.00,
            "mm": 0
          },
          "snow_allday": {
            "in": 0.0,
            "cm": 0.0
          },
          "snow_day": {
            "in": 0.0,
            "cm": 0.0
          },
          "snow_night": {
            "in": 0.0,
            "cm": 0.0
          },
          "maxwind": {
            "mph": 20,
            "kph": 32,
            "dir": "SSW",
            "degrees": 206
          },
          "avewind": {
            "mph": 14,
            "kph": 23,
            "dir": "SSW",
            "degrees": 206
          },
          "avehumidity": 31,
          "maxhumidity": 45,
          "minhumidity": 20
        },
        {
          "date": {
            "epoch": "1506042000",
            "pretty": "7:00 PM MDT on September 21, 2017",
            "day": 21,
            "month": 9,
            "year": 2017,
            "yday": 263,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Thu",
            "weekday": "Thursday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 9,
          "high": {
            "fahrenheit": "73",
            "celsius": "23"
          },
          "low": {
            "fahrenheit": "47",
            "celsius": "8"
          },
          "conditions": "Partly Cloudy",
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "skyicon": "",
          "pop": 20,
          "qpf_allday": {
            "in": 0.00,
            "mm": 0
          },
          "qpf_day": {
            "in": 0.00,
            "mm": 0
          },
          "qpf_night": {
            "in": 0.00,
            "mm": 0
          },
          "snow_allday": {
            "in": 0.0,
            "cm": 0.0
          },
          "snow_day": {
            "in": 0.0,
            "cm": 0.0
          },
          "snow_night": {
            "in": 0.0,
            "cm": 0.0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "SSW",
            "degrees": 199
          },
          "avewind": {
            "mph": 11,
            "kph": 18,
            "dir": "SSW",
            "degrees": 199
          },
          "avehumidity": 35,
          "maxhumidity": 46,
          "minhumidity": 22
        },
        {
          "date": {
            "epoch": "1506128400",
            "pretty": "7:00 PM MDT on September 22, 2017",
            "day": 22,
            "month": 9,
            "year": 2017,
            "yday": 264,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "September",
            "monthname_short": "Sep",
            "weekday_short": "Fri",
            "weekday": "Friday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 10,
          "high": {
            "fahrenheit": "73",
            "celsius": "23"
          },
          "low": {
            "fahrenheit": "48",
            "celsius": "9"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 0,
          "qpf_allday": {
            "in": 0.00,
            "mm": 0
          },
          "qpf_day": {
            "in": 0.00,
            "mm": 0
          },
          "qpf_night": {
            "in": 0.00,
            "mm": 0
          },
          "snow_allday": {
            "in": 0.0,
            "cm": 0.0
          },
          "snow_day": {
            "in": 0.0,
            "cm": 0.0
          },
          "snow_night": {
            "in": 0.0,
            "cm": 0.0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "NNE",
            "degrees": 13
          },
          "avewind": {
            "mph": 10,
            "kph": 16,
            "dir": "NNE",
            "degrees": 13
          },
          "avehumidity": 37,
          "maxhumidity": 53,
          "minhumidity": 22
        }
      ]
    }
  },
  "hourly_forecast": [
    {
      "FCTTIME": {
        "hour": "15",
        "hour_padded": "15",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "13",
        "mday_padded": "13",
        "yday": "255",
        "isdst": "1",
        "epoch": "1505336400",
        "pretty": "3:00 PM MDT on September 13, 2017",
        "civil": "3:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "84",
        "metric": "29"
      },
      "dewpoint": {
        "english": "38",
        "metric": "3"
      },
      "condition": "Overcast",
      "icon": "cloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
      "fctcode": "4",
      "sky": "90",
      "wspd": {
        "english": "11",
        "metric": "18"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "237"
      },
      "wx": "Cloudy",
      "uvi": "2",
      "humidity": "20",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "84",
        "metric": "29"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.65",
        "metric": "1004"
      }
    },
    {
      "FCTTIME": {
        "hour": "16",
        "hour_padded": "16",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "13",
        "mday_padded": "13",
        "yday": "255",
        "isdst": "1",
        "epoch": "1505340000",
        "pretty": "4:00 PM MDT on September 13, 2017",
        "civil": "4:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "82",
        "metric": "28"
      },
      "dewpoint": {
        "english": "41",
        "metric": "5"
      },
      "condition": "Overcast",
      "icon": "cloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
      "fctcode": "4",
      "sky": "87",
      "wspd": {
        "english": "12",
        "metric": "19"
      },
      "wdir": {
        "dir": "W",
        "degrees": "272"
      },
      "wx": "Cloudy",
      "uvi": "2",
      "humidity": "23",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "82",
        "metric": "28"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.66",
        "metric": "1004"
      }
    },
    {
      "FCTTIME": {
        "hour": "17",
        "hour_padded": "17",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "13",
        "mday_padded": "13",
        "yday": "255",
        "isdst": "1",
        "epoch": "1505343600",
        "pretty": "5:00 PM MDT on September 13, 2017",
        "civil": "5:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "79",
        "metric": "26"
      },
      "dewpoint": {
        "english": "42",
        "metric": "6"
      },
      "condition": "Overcast",
      "icon": "cloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
      "fctcode": "4",
      "sky": "86",
      "wspd": {
        "english": "13",
        "metric": "21"
      },
      "wdir": {
        "dir": "WNW",
        "degrees": "290"
      },
      "wx": "Cloudy",
      "uvi": "1",
      "humidity": "27",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "79",
        "metric": "26"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.67",
        "metric": "1005"
      }
    },
    {
      "FCTTIME": {
        "hour": "18",
        "hour_padded": "18",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "13",
        "mday_padded": "13",
        "yday": "255",
        "isdst": "1",
        "epoch": "1505347200",
        "pretty": "6:00 PM MDT on September 13, 2017",
        "civil": "6:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "80",
        "metric": "27"
      },
      "dewpoint": {
        "english": "41",
        "metric": "5"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "59",
      "wspd": {
        "english": "11",
        "metric": "18"
      },
      "wdir": {
        "dir": "WNW",
        "degrees": "304"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "25",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "80",
        "metric": "27"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.66",
        "metric": "1004"
      }
    },
    {
      "FCTTIME": {
        "hour": "19",
        "hour_padded": "19",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "13",
        "mday_padded": "13",
        "yday": "255",
        "isdst": "1",
        "epoch": "1505350800",
        "pretty": "7:00 PM MDT on September 13, 2017",
        "civil": "7:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "77",
        "metric": "25"
      },
      "dewpoint": {
        "english": "42",
        "metric": "6"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "41",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "233"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "28",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "77",
        "metric": "25"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.68",
        "metric": "1005"
      }
    },
    {
      "FCTTIME": {
        "hour": "20",
        "hour_padded": "20",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "13",
        "mday_padded": "13",
        "yday": "255",
        "isdst": "1",
        "epoch": "1505354400",
        "pretty": "8:00 PM MDT on September 13, 2017",
        "civil": "8:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "75",
        "metric": "24"
      },
      "dewpoint": {
        "english": "43",
        "metric": "6"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "37",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "215"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "32",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "75",
        "metric": "24"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.7",
        "metric": "1006"
      }
    },
    {
      "FCTTIME": {
        "hour": "21",
        "hour_padded": "21",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "13",
        "mday_padded": "13",
        "yday": "255",
        "isdst": "1",
        "epoch": "1505358000",
        "pretty": "9:00 PM MDT on September 13, 2017",
        "civil": "9:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "72",
        "metric": "22"
      },
      "dewpoint": {
        "english": "44",
        "metric": "7"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "37",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SSW",
        "degrees": "204"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "36",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "72",
        "metric": "22"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.71",
        "metric": "1006"
      }
    },
    {
      "FCTTIME": {
        "hour": "22",
        "hour_padded": "22",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "13",
        "mday_padded": "13",
        "yday": "255",
        "isdst": "1",
        "epoch": "1505361600",
        "pretty": "10:00 PM MDT on September 13, 2017",
        "civil": "10:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "70",
        "metric": "21"
      },
      "dewpoint": {
        "english": "44",
        "metric": "7"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "35",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SSW",
        "degrees": "209"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "39",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "70",
        "metric": "21"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.71",
        "metric": "1006"
      }
    },
    {
      "FCTTIME": {
        "hour": "23",
        "hour_padded": "23",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "13",
        "mday_padded": "13",
        "yday": "255",
        "isdst": "1",
        "epoch": "1505365200",
        "pretty": "11:00 PM MDT on September 13, 2017",
        "civil": "11:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "69",
        "metric": "21"
      },
      "dewpoint": {
        "english": "44",
        "metric": "7"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "32",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "227"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "41",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "69",
        "metric": "21"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.72",
        "metric": "1006"
      }
    },
    {
      "FCTTIME": {
        "hour": "0",
        "hour_padded": "00",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "14",
        "mday_padded": "14",
        "yday": "256",
        "isdst": "1",
        "epoch": "1505368800",
        "pretty": "12:00 AM MDT on September 14, 2017",
        "civil": "12:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "68",
        "metric": "20"
      },
      "dewpoint": {
        "english": "43",
        "metric": "6"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "32",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SSW",
        "degrees": "210"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "41",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "68",
        "metric": "20"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.72",
        "metric": "1006"
      }
    },
    {
      "FCTTIME": {
        "hour": "1",
        "hour_padded": "01",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "14",
        "mday_padded": "14",
        "yday": "256",
        "isdst": "1",
        "epoch": "1505372400",
        "pretty": "1:00 AM MDT on September 14, 2017",
        "civil": "1:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "67",
        "metric": "19"
      },
      "dewpoint": {
        "english": "43",
        "metric": "6"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "38",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SSW",
        "degrees": "202"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "41",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "67",
        "metric": "19"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.73",
        "metric": "1007"
      }
    },
    {
      "FCTTIME": {
        "hour": "2",
        "hour_padded": "02",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "14",
        "mday_padded": "14",
        "yday": "256",
        "isdst": "1",
        "epoch": "1505376000",
        "pretty": "2:00 AM MDT on September 14, 2017",
        "civil": "2:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "66",
        "metric": "19"
      },
      "dewpoint": {
        "english": "42",
        "metric": "6"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "43",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SSW",
        "degrees": "202"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "42",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "66",
        "metric": "19"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.73",
        "metric": "1007"
      }
    },
    {
      "FCTTIME": {
        "hour": "3",
        "hour_padded": "03",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "14",
        "mday_padded": "14",
        "yday": "256",
        "isdst": "1",
        "epoch": "1505379600",
        "pretty": "3:00 AM MDT on September 14, 2017",
        "civil": "3:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "65",
        "metric": "18"
      },
      "dewpoint": {
        "english": "42",
        "metric": "6"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "44",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SSW",
        "degrees": "194"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "42",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "65",
        "metric": "18"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.73",
        "metric": "1007"
      }
    },
    {
      "FCTTIME": {
        "hour": "4",
        "hour_padded": "04",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "14",
        "mday_padded": "14",
        "yday": "256",
        "isdst": "1",
        "epoch": "1505383200",
        "pretty": "4:00 AM MDT on September 14, 2017",
        "civil": "4:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "64",
        "metric": "18"
      },
      "dewpoint": {
        "english": "41",
        "metric": "5"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "48",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "S",
        "degrees": "190"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "42",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "64",
        "metric": "18"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.73",
        "metric": "1007"
      }
    },
    {
      "FCTTIME": {
        "hour": "5",
        "hour_padded": "05",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "14",
        "mday_padded": "14",
        "yday": "256",
        "isdst": "1",
        "epoch": "1505386800",
        "pretty": "5:00 AM MDT on September 14, 2017",
        "civil": "5:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "63",
        "metric": "17"
      },
      "dewpoint": {
        "english": "40",
        "metric": "4"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "48",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SSW",
        "degrees": "193"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "43",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "63",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.74",
        "metric": "1007"
      }
    },
    {
      "FCTTIME": {
        "hour": "6",
        "hour_padded": "06",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "14",
        "mday_padded": "14",
        "yday": "256",
        "isdst": "1",
        "epoch": "1505390400",
        "pretty": "6:00 AM MDT on September 14, 2017",
        "civil": "6:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "62",
        "metric": "17"
      },
      "dewpoint": {
        "english": "40",
        "metric": "4"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "19",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "SSW",
        "degrees": "212"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "44",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "62",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.75",
        "metric": "1007"
      }
    },
    {
      "FCTTIME": {
        "hour": "7",
        "hour_padded": "07",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "14",
        "mday_padded": "14",
        "yday": "256",
        "isdst": "1",
        "epoch": "1505394000",
        "pretty": "7:00 AM MDT on September 14, 2017",
        "civil": "7:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "62",
        "metric": "17"
      },
      "dewpoint": {
        "english": "39",
        "metric": "4"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "18",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "215"
      },
      "wx": "Sunny",
      "uvi": "0",
      "humidity": "43",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "62",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.76",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "8",
        "hour_padded": "08",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "14",
        "mday_padded": "14",
        "yday": "256",
        "isdst": "1",
        "epoch": "1505397600",
        "pretty": "8:00 AM MDT on September 14, 2017",
        "civil": "8:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "65",
        "metric": "18"
      },
      "dewpoint": {
        "english": "40",
        "metric": "4"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "15",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "222"
      },
      "wx": "Sunny",
      "uvi": "0",
      "humidity": "39",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "65",
        "metric": "18"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.77",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "9",
        "hour_padded": "09",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "14",
        "mday_padded": "14",
        "yday": "256",
        "isdst": "1",
        "epoch": "1505401200",
        "pretty": "9:00 AM MDT on September 14, 2017",
        "civil": "9:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "71",
        "metric": "22"
      },
      "dewpoint": {
        "english": "39",
        "metric": "4"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "31",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "224"
      },
      "wx": "Partly Cloudy",
      "uvi": "2",
      "humidity": "32",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "71",
        "metric": "22"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.76",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "10",
        "hour_padded": "10",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "14",
        "mday_padded": "14",
        "yday": "256",
        "isdst": "1",
        "epoch": "1505404800",
        "pretty": "10:00 AM MDT on September 14, 2017",
        "civil": "10:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "76",
        "metric": "24"
      },
      "dewpoint": {
        "english": "39",
        "metric": "4"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "38",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "SSW",
        "degrees": "209"
      },
      "wx": "Partly Cloudy",
      "uvi": "3",
      "humidity": "26",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "76",
        "metric": "24"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.74",
        "metric": "1007"
      }
    },
    {
      "FCTTIME": {
        "hour": "11",
        "hour_padded": "11",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "14",
        "mday_padded": "14",
        "yday": "256",
        "isdst": "1",
        "epoch": "1505408400",
        "pretty": "11:00 AM MDT on September 14, 2017",
        "civil": "11:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "80",
        "metric": "27"
      },
      "dewpoint": {
        "english": "38",
        "metric": "3"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "42",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "SSW",
        "degrees": "213"
      },
      "wx": "Partly Cloudy",
      "uvi": "5",
      "humidity": "23",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "80",
        "metric": "27"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.71",
        "metric": "1006"
      }
    },
    {
      "FCTTIME": {
        "hour": "12",
        "hour_padded": "12",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "14",
        "mday_padded": "14",
        "yday": "256",
        "isdst": "1",
        "epoch": "1505412000",
        "pretty": "12:00 PM MDT on September 14, 2017",
        "civil": "12:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "83",
        "metric": "28"
      },
      "dewpoint": {
        "english": "37",
        "metric": "3"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "55",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "E",
        "degrees": "100"
      },
      "wx": "Partly Cloudy",
      "uvi": "6",
      "humidity": "20",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "83",
        "metric": "28"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.68",
        "metric": "1005"
      }
    },
    {
      "FCTTIME": {
        "hour": "13",
        "hour_padded": "13",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "14",
        "mday_padded": "14",
        "yday": "256",
        "isdst": "1",
        "epoch": "1505415600",
        "pretty": "1:00 PM MDT on September 14, 2017",
        "civil": "1:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "84",
        "metric": "29"
      },
      "dewpoint": {
        "english": "36",
        "metric": "2"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
      "fctcode": "3",
      "sky": "61",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "E",
        "degrees": "92"
      },
      "wx": "Mostly Cloudy",
      "uvi": "6",
      "humidity": "18",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "84",
        "metric": "29"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.66",
        "metric": "1004"
      }
    },
    {
      "FCTTIME": {
        "hour": "14",
        "hour_padded": "14",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "14",
        "mday_padded": "14",
        "yday": "256",
        "isdst": "1",
        "epoch": "1505419200",
        "pretty": "2:00 PM MDT on September 14, 2017",
        "civil": "2:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "85",
        "metric": "29"
      },
      "dewpoint": {
        "english": "36",
        "metric": "2"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
      "fctcode": "3",
      "sky": "73",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "SSW",
        "degrees": "199"
      },
      "wx": "Mostly Cloudy",
      "uvi": "5",
      "humidity": "17",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "85",
        "metric": "29"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.64",
        "metric": "1004"
      }
    },
    {
      "FCTTIME": {
        "hour": "15",
        "hour_padded": "15",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "14",
        "mday_padded": "14",
        "yday": "256",
        "isdst": "1",
        "epoch": "1505422800",
        "pretty": "3:00 PM MDT on September 14, 2017",
        "civil": "3:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "83",
        "metric": "28"
      },
      "dewpoint": {
        "english": "37",
        "metric": "3"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
      "fctcode": "3",
      "sky": "76",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "241"
      },
      "wx": "Mostly Cloudy",
      "uvi": "3",
      "humidity": "20",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "83",
        "metric": "28"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.61",
        "metric": "1003"
      }
    },
    {
      "FCTTIME": {
        "hour": "16",
        "hour_padded": "16",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "14",
        "mday_padded": "14",
        "yday": "256",
        "isdst": "1",
        "epoch": "1505426400",
        "pretty": "4:00 PM MDT on September 14, 2017",
        "civil": "4:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "81",
        "metric": "27"
      },
      "dewpoint": {
        "english": "40",
        "metric": "4"
      },
      "condition": "Overcast",
      "icon": "cloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
      "fctcode": "4",
      "sky": "81",
      "wspd": {
        "english": "12",
        "metric": "19"
      },
      "wdir": {
        "dir": "W",
        "degrees": "280"
      },
      "wx": "Cloudy",
      "uvi": "2",
      "humidity": "24",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "81",
        "metric": "27"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.6",
        "metric": "1002"
      }
    },
    {
      "FCTTIME": {
        "hour": "17",
        "hour_padded": "17",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "14",
        "mday_padded": "14",
        "yday": "256",
        "isdst": "1",
        "epoch": "1505430000",
        "pretty": "5:00 PM MDT on September 14, 2017",
        "civil": "5:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "79",
        "metric": "26"
      },
      "dewpoint": {
        "english": "41",
        "metric": "5"
      },
      "condition": "Overcast",
      "icon": "cloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
      "fctcode": "4",
      "sky": "82",
      "wspd": {
        "english": "10",
        "metric": "16"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "255"
      },
      "wx": "Cloudy",
      "uvi": "1",
      "humidity": "26",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "79",
        "metric": "26"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.62",
        "metric": "1003"
      }
    },
    {
      "FCTTIME": {
        "hour": "18",
        "hour_padded": "18",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "14",
        "mday_padded": "14",
        "yday": "256",
        "isdst": "1",
        "epoch": "1505433600",
        "pretty": "6:00 PM MDT on September 14, 2017",
        "civil": "6:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "78",
        "metric": "26"
      },
      "dewpoint": {
        "english": "41",
        "metric": "5"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
      "fctcode": "3",
      "sky": "75",
      "wspd": {
        "english": "10",
        "metric": "16"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "238"
      },
      "wx": "Mostly Cloudy",
      "uvi": "0",
      "humidity": "27",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "78",
        "metric": "26"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.62",
        "metric": "1003"
      }
    },
    {
      "FCTTIME": {
        "hour": "19",
        "hour_padded": "19",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "14",
        "mday_padded": "14",
        "yday": "256",
        "isdst": "1",
        "epoch": "1505437200",
        "pretty": "7:00 PM MDT on September 14, 2017",
        "civil": "7:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "74",
        "metric": "23"
      },
      "dewpoint": {
        "english": "43",
        "metric": "6"
      },
      "condition": "Overcast",
      "icon": "cloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
      "fctcode": "4",
      "sky": "81",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "248"
      },
      "wx": "Cloudy",
      "uvi": "0",
      "humidity": "34",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "74",
        "metric": "23"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.64",
        "metric": "1004"
      }
    },
    {
      "FCTTIME": {
        "hour": "20",
        "hour_padded": "20",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "14",
        "mday_padded": "14",
        "yday": "256",
        "isdst": "1",
        "epoch": "1505440800",
        "pretty": "8:00 PM MDT on September 14, 2017",
        "civil": "8:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "71",
        "metric": "22"
      },
      "dewpoint": {
        "english": "44",
        "metric": "7"
      },
      "condition": "Overcast",
      "icon": "cloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_cloudy.gif",
      "fctcode": "4",
      "sky": "80",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "NW",
        "degrees": "325"
      },
      "wx": "Cloudy",
      "uvi": "0",
      "humidity": "39",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "71",
        "metric": "22"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.65",
        "metric": "1004"
      }
    },
    {
      "FCTTIME": {
        "hour": "21",
        "hour_padded": "21",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "14",
        "mday_padded": "14",
        "yday": "256",
        "isdst": "1",
        "epoch": "1505444400",
        "pretty": "9:00 PM MDT on September 14, 2017",
        "civil": "9:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "69",
        "metric": "21"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
      "fctcode": "3",
      "sky": "73",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "S",
        "degrees": "181"
      },
      "wx": "Mostly Cloudy",
      "uvi": "0",
      "humidity": "43",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "69",
        "metric": "21"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.67",
        "metric": "1005"
      }
    },
    {
      "FCTTIME": {
        "hour": "22",
        "hour_padded": "22",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "14",
        "mday_padded": "14",
        "yday": "256",
        "isdst": "1",
        "epoch": "1505448000",
        "pretty": "10:00 PM MDT on September 14, 2017",
        "civil": "10:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "67",
        "metric": "19"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
      "fctcode": "3",
      "sky": "69",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "215"
      },
      "wx": "Mostly Cloudy",
      "uvi": "0",
      "humidity": "47",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "67",
        "metric": "19"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.67",
        "metric": "1005"
      }
    },
    {
      "FCTTIME": {
        "hour": "23",
        "hour_padded": "23",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "14",
        "mday_padded": "14",
        "yday": "256",
        "isdst": "1",
        "epoch": "1505451600",
        "pretty": "11:00 PM MDT on September 14, 2017",
        "civil": "11:00 PM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "66",
        "metric": "19"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
      "fctcode": "3",
      "sky": "70",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "223"
      },
      "wx": "Mostly Cloudy",
      "uvi": "0",
      "humidity": "49",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "66",
        "metric": "19"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.67",
        "metric": "1005"
      }
    },
    {
      "FCTTIME": {
        "hour": "0",
        "hour_padded": "00",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "15",
        "mday_padded": "15",
        "yday": "257",
        "isdst": "1",
        "epoch": "1505455200",
        "pretty": "12:00 AM MDT on September 15, 2017",
        "civil": "12:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "64",
        "metric": "18"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "42",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "225"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "52",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "64",
        "metric": "18"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.66",
        "metric": "1004"
      }
    },
    {
      "FCTTIME": {
        "hour": "1",
        "hour_padded": "01",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "15",
        "mday_padded": "15",
        "yday": "257",
        "isdst": "1",
        "epoch": "1505458800",
        "pretty": "1:00 AM MDT on September 15, 2017",
        "civil": "1:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "63",
        "metric": "17"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "45",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "217"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "54",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "63",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.65",
        "metric": "1004"
      }
    },
    {
      "FCTTIME": {
        "hour": "2",
        "hour_padded": "02",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "9",
        "mon_padded": "09",
        "mon_abbrev": "Sep",
        "mday": "15",
        "mday_padded": "15",
        "yday": "257",
        "isdst": "1",
        "epoch": "1505462400",
        "pretty": "2:00 AM MDT on September 15, 2017",
        "civil": "2:00 AM",
        "month_name": "September",
        "month_name_abbrev": "Sep",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "62",
        "metric": "17"
      },
      "dewpoint": {
        "english": "45",
        "metric": "7"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "54",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SSW",
        "degrees": "199"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "55",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "62",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.64",
        "metric": "1004"
      }
    }
  ]
}
