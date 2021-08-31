"use strict";Date.getMonthNumberFromName=function(t){for(var e=Date.CultureInfo.monthNames,n=Date.CultureInfo.abbreviatedMonthNames,r=t.toLowerCase(),o=0;o<e.length;o++)if(e[o].toLowerCase()==r||n[o].toLowerCase()==r)return o;return-1},Date.getDayNumberFromName=function(t){for(var e=Date.CultureInfo.dayNames,n=Date.CultureInfo.abbreviatedDayNames,r=(Date.CultureInfo.shortestDayNames,t.toLowerCase()),o=0;o<e.length;o++)if(e[o].toLowerCase()==r||n[o].toLowerCase()==r)return o;return-1},Date.isLeapYear=function(t){return t%4==0&&t%100!=0||t%400==0},Date.getDaysInMonth=function(t,e){return[31,Date.isLeapYear(t)?29:28,31,30,31,30,31,31,30,31,30,31][e]},Date.getTimezoneOffset=function(t,e){return e?Date.CultureInfo.abbreviatedTimeZoneDST[t.toUpperCase()]:Date.CultureInfo.abbreviatedTimeZoneStandard[t.toUpperCase()]},Date.getTimezoneAbbreviation=function(t,e){var n,r=e?Date.CultureInfo.abbreviatedTimeZoneDST:Date.CultureInfo.abbreviatedTimeZoneStandard;for(n in r)if(r[n]===t)return n;return null},Date.prototype.clone=function(){return new Date(this.getTime())},Date.prototype.compareTo=function(t){if(isNaN(this))throw new Error(this);if(t instanceof Date&&!isNaN(t))return t<this?1:this<t?-1:0;throw new TypeError(t)},Date.prototype.equals=function(t){return 0===this.compareTo(t)},Date.prototype.between=function(t,e){var n=this.getTime();return n>=t.getTime()&&n<=e.getTime()},Date.prototype.addMilliseconds=function(t){return this.setMilliseconds(this.getMilliseconds()+t),this},Date.prototype.addSeconds=function(t){return this.addMilliseconds(1e3*t)},Date.prototype.addMinutes=function(t){return this.addMilliseconds(6e4*t)},Date.prototype.addHours=function(t){return this.addMilliseconds(36e5*t)},Date.prototype.addDays=function(t){return this.addMilliseconds(864e5*t)},Date.prototype.addWeeks=function(t){return this.addMilliseconds(6048e5*t)},Date.prototype.addMonths=function(t){var e=this.getDate();return this.setDate(1),this.setMonth(this.getMonth()+t),this.setDate(Math.min(e,this.getDaysInMonth())),this},Date.prototype.addYears=function(t){return this.addMonths(12*t)},Date.prototype.add=function(t){if("number"==typeof t)return this._orient=t,this;var e=t;return(e.millisecond||e.milliseconds)&&this.addMilliseconds(e.millisecond||e.milliseconds),(e.second||e.seconds)&&this.addSeconds(e.second||e.seconds),(e.minute||e.minutes)&&this.addMinutes(e.minute||e.minutes),(e.hour||e.hours)&&this.addHours(e.hour||e.hours),(e.month||e.months)&&this.addMonths(e.month||e.months),(e.year||e.years)&&this.addYears(e.year||e.years),(e.day||e.days)&&this.addDays(e.day||e.days),this},Date._validate=function(t,e,n,r){if("number"!=typeof t)throw new TypeError(t+" is not a Number.");if(t<e||n<t)throw new RangeError(t+" is not a valid value for "+r+".");return!0},Date.validateMillisecond=function(t){return Date._validate(t,0,999,"milliseconds")},Date.validateSecond=function(t){return Date._validate(t,0,59,"seconds")},Date.validateMinute=function(t){return Date._validate(t,0,59,"minutes")},Date.validateHour=function(t){return Date._validate(t,0,23,"hours")},Date.validateDay=function(t,e,n){return Date._validate(t,1,Date.getDaysInMonth(e,n),"days")},Date.validateMonth=function(t){return Date._validate(t,0,11,"months")},Date.validateYear=function(t){return Date._validate(t,1,9999,"seconds")},Date.prototype.set=function(t){var e=t;return e.millisecond||0===e.millisecond||(e.millisecond=-1),e.second||0===e.second||(e.second=-1),e.minute||0===e.minute||(e.minute=-1),e.hour||0===e.hour||(e.hour=-1),e.day||0===e.day||(e.day=-1),e.month||0===e.month||(e.month=-1),e.year||0===e.year||(e.year=-1),-1!=e.millisecond&&Date.validateMillisecond(e.millisecond)&&this.addMilliseconds(e.millisecond-this.getMilliseconds()),-1!=e.second&&Date.validateSecond(e.second)&&this.addSeconds(e.second-this.getSeconds()),-1!=e.minute&&Date.validateMinute(e.minute)&&this.addMinutes(e.minute-this.getMinutes()),-1!=e.hour&&Date.validateHour(e.hour)&&this.addHours(e.hour-this.getHours()),-1!==e.month&&Date.validateMonth(e.month)&&this.addMonths(e.month-this.getMonth()),-1!=e.year&&Date.validateYear(e.year)&&this.addYears(e.year-this.getFullYear()),-1!=e.day&&Date.validateDay(e.day,this.getFullYear(),this.getMonth())&&this.addDays(e.day-this.getDate()),e.timezone&&this.setTimezone(e.timezone),e.timezoneOffset&&this.setTimezoneOffset(e.timezoneOffset),this},Date.prototype.clearTime=function(){return this.setHours(0),this.setMinutes(0),this.setSeconds(0),this.setMilliseconds(0),this},Date.prototype.isLeapYear=function(){var t=this.getFullYear();return t%4==0&&t%100!=0||t%400==0},Date.prototype.isWeekday=function(){return!(this.is().sat()||this.is().sun())},Date.prototype.getDaysInMonth=function(){return Date.getDaysInMonth(this.getFullYear(),this.getMonth())},Date.prototype.moveToFirstDayOfMonth=function(){return this.set({day:1})},Date.prototype.moveToLastDayOfMonth=function(){return this.set({day:this.getDaysInMonth()})},Date.prototype.moveToDayOfWeek=function(t,e){var n=(t-this.getDay()+7*(e||1))%7;return this.addDays(0===n?n+=7*(e||1):n)},Date.prototype.moveToMonth=function(t,e){var n=(t-this.getMonth()+12*(e||1))%12;return this.addMonths(0===n?n+=12*(e||1):n)},Date.prototype.getDayOfYear=function(){return Math.floor((this-new Date(this.getFullYear(),0,1))/864e5)},Date.prototype.getWeekOfYear=function(t){var e=this.getFullYear(),n=this.getMonth(),r=this.getDate(),o=t||Date.CultureInfo.firstDayOfWeek,a=8-new Date(e,0,1).getDay();8==a&&(a=1);var i,s=(Date.UTC(e,n,r,0,0,0)-Date.UTC(e,0,1,0,0,0))/864e5+1,u=Math.floor((s-a+7)/7);return u===o&&(e--,u=2==(i=8-new Date(e,0,1).getDay())||8==i?53:52),u},Date.prototype.isDST=function(){return console.log("isDST"),"D"==this.toString().match(/(E|C|M|P)(S|D)T/)[2]},Date.prototype.getTimezone=function(){return Date.getTimezoneAbbreviation(this.getUTCOffset,this.isDST())},Date.prototype.setTimezoneOffset=function(t){var e=this.getTimezoneOffset(),n=-6*Number(t)/10;return this.addMinutes(n-e),this},Date.prototype.setTimezone=function(t){return this.setTimezoneOffset(Date.getTimezoneOffset(t))},Date.prototype.getUTCOffset=function(){var t,e=-10*this.getTimezoneOffset()/6;return e<0?(t=(e-1e4).toString())[0]+t.substr(2):"+"+(t=(1e4+e).toString()).substr(1)},Date.prototype.getDayName=function(t){return t?Date.CultureInfo.abbreviatedDayNames[this.getDay()]:Date.CultureInfo.dayNames[this.getDay()]},Date.prototype.getMonthName=function(t){return t?Date.CultureInfo.abbreviatedMonthNames[this.getMonth()]:Date.CultureInfo.monthNames[this.getMonth()]},Date.prototype._toString=Date.prototype.toString,Date.prototype.toString=function(t){function e(t){return 1==t.toString().length?"0"+t:t}var n=this;return t?t.replace(/dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?/g,function(t){switch(t){case"hh":return e(n.getHours()<13?n.getHours():n.getHours()-12);case"h":return n.getHours()<13?n.getHours():n.getHours()-12;case"HH":return e(n.getHours());case"H":return n.getHours();case"mm":return e(n.getMinutes());case"m":return n.getMinutes();case"ss":return e(n.getSeconds());case"s":return n.getSeconds();case"yyyy":return n.getFullYear();case"yy":return n.getFullYear().toString().substring(2,4);case"dddd":return n.getDayName();case"ddd":return n.getDayName(!0);case"dd":return e(n.getDate());case"d":return n.getDate().toString();case"MMMM":return n.getMonthName();case"MMM":return n.getMonthName(!0);case"MM":return e(n.getMonth()+1);case"M":return n.getMonth()+1;case"t":return n.getHours()<12?Date.CultureInfo.amDesignator.substring(0,1):Date.CultureInfo.pmDesignator.substring(0,1);case"tt":return n.getHours()<12?Date.CultureInfo.amDesignator:Date.CultureInfo.pmDesignator;case"zzz":case"zz":case"z":return""}}):this._toString()},Date.now=function(){return new Date},Date.today=function(){return Date.now().clearTime()},Date.prototype._orient=1,Date.prototype.next=function(){return this._orient=1,this},Date.prototype.last=Date.prototype.prev=Date.prototype.previous=function(){return this._orient=-1,this},Date.prototype._is=!1,Date.prototype.is=function(){return this._is=!0,this},Number.prototype._dateElement="day",Number.prototype.fromNow=function(){var t={};return t[this._dateElement]=this,Date.now().add(t)},Number.prototype.ago=function(){var t={};return t[this._dateElement]=-1*this,Date.now().add(t)},function(){for(var t,e=Date.prototype,n=Number.prototype,r="sunday monday tuesday wednesday thursday friday saturday".split(/\s/),o="january february march april may june july august september october november december".split(/\s/),a="Millisecond Second Minute Hour Day Week Month Year".split(/\s/),i=0;i<r.length;i++)e[r[i]]=e[r[i].substring(0,3)]=function(t){return function(){return this._is?(this._is=!1,this.getDay()==t):this.moveToDayOfWeek(t,this._orient)}}(i);for(var s=0;s<o.length;s++)e[o[s]]=e[o[s].substring(0,3)]=function(t){return function(){return this._is?(this._is=!1,this.getMonth()===t):this.moveToMonth(t,this._orient)}}(s);for(var u=0;u<a.length;u++)e[t=a[u].toLowerCase()]=e[t+"s"]=function(t){return function(){return"s"!=t.substring(t.length-1)&&(t+="s"),this["add"+t](this._orient)}}(a[u]),n[t]=n[t+"s"]=function(t){return function(){return this._dateElement=t,this}}(t)}(),Date.prototype.toJSONString=function(){return this.toString("yyyy-MM-ddThh:mm:ssZ")},Date.prototype.toShortDateString=function(){return this.toString(Date.CultureInfo.formatPatterns.shortDatePattern)},Date.prototype.toLongDateString=function(){return this.toString(Date.CultureInfo.formatPatterns.longDatePattern)},Date.prototype.toShortTimeString=function(){return this.toString(Date.CultureInfo.formatPatterns.shortTimePattern)},Date.prototype.toLongTimeString=function(){return this.toString(Date.CultureInfo.formatPatterns.longTimePattern)},Date.prototype.getOrdinal=function(){switch(this.getDate()){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th"}},function(){Date.Parsing={Exception:function(t){this.message="Parse error at '"+t.substring(0,10)+" ...'"}};for(var f=Date.Parsing,y=f.Operators={rtoken:function(n){return function(t){var e=t.match(n);if(e)return[e[0],t.substring(e[0].length)];throw new f.Exception(t)}},token:function(){return function(t){return y.rtoken(new RegExp("^s*"+t+"s*"))(t)}},stoken:function(t){return y.rtoken(new RegExp("^"+t))},until:function(t){return function(e){for(var n=[],r=null;e.length;){try{r=t.call(this,e)}catch(t){n.push(r[0]),e=r[1];continue}break}return[n,e]}},many:function(r){return function(e){for(var n=[],t=null;e.length;){try{t=r.call(this,e)}catch(t){return[n,e]}n.push(t[0]),e=t[1]}return[n,e]}},optional:function(n){return function(e){var t=null;try{t=n.call(this,e)}catch(t){return[null,e]}return[t[0],t[1]]}},not:function(t){return function(e){try{t.call(this,e)}catch(t){return[null,e]}throw new f.Exception(e)}},ignore:function(e){return e?function(t){return[null,e.call(this,t)[1]]}:null},product:function(t){for(var e=t,n=Array.prototype.slice.call(arguments,1),r=[],o=0;o<e.length;o++)r.push(y.each(e[o],n));return r},cache:function(t){var n={},r=null;return function(e){try{r=n[e]=n[e]||t.call(this,e)}catch(t){r=n[e]=t}if(r instanceof f.Exception)throw r;return r}},any:function(){var r=arguments;return function(t){for(var e=null,n=0;n<r.length;n++)if(null!=r[n]){try{e=r[n].call(this,t)}catch(t){e=null}if(e)return e}throw new f.Exception(t)}},each:function(){var o=arguments;return function(e){for(var t=[],n=null,r=0;r<o.length;r++)if(null!=o[r]){try{n=o[r].call(this,e)}catch(t){throw new f.Exception(e)}t.push(n[0]),e=n[1]}return[t,e]}},all:function(){var t=arguments,e=e;return e.each(e.optional(t))},sequence:function(a,i,s){return i=i||y.rtoken(/^\s*/),s=s||null,1==a.length?a[0]:function(t){for(var e=null,n=null,r=[],o=0;o<a.length;o++){try{e=a[o].call(this,t)}catch(t){break}r.push(e[0]);try{n=i.call(this,e[1])}catch(t){n=null;break}t=n[1]}if(!e)throw new f.Exception(t);if(n)throw new f.Exception(n[1]);if(s)try{e=s.call(this,e[1])}catch(t){throw new f.Exception(e[1])}return[r,e?e[1]:t]}},between:function(t,e,n){n=n||t;var o=y.each(y.ignore(t),e,y.ignore(n));return function(t){var e=o.call(this,t);return[[e[0][0],r[0][2]],e[1]]}},list:function(t,e,n){return e=e||y.rtoken(/^\s*/),n=n||null,t instanceof Array?y.each(y.product(t.slice(0,-1),y.ignore(e)),t.slice(-1),y.ignore(n)):y.each(y.many(y.each(t,y.ignore(e))),px,y.ignore(n))},set:function(c,l,d){return l=l||y.rtoken(/^\s*/),d=d||null,function(t){for(var e=null,n=null,r=null,o=null,a=[[],t],i=!1,s=0;s<c.length;s++){e=n=r=null,i=1==c.length;try{e=c[s].call(this,t)}catch(t){continue}if(o=[[e[0]],e[1]],0<e[1].length&&!i)try{r=l.call(this,e[1])}catch(t){i=!0}else i=!0;if(i||0!==r[1].length||(i=!0),!i){for(var u=[],h=0;h<c.length;h++)s!=h&&u.push(c[h]);0<(n=y.set(u,l).call(this,r[1]))[0].length&&(o[0]=o[0].concat(n[0]),o[1]=n[1])}if(o[1].length<a[1].length&&(a=o),0===a[1].length)break}if(0===a[0].length)return a;if(d){try{r=d.call(this,a[1])}catch(t){throw new f.Exception(a[1])}a[1]=r[1]}return a}},forward:function(e,n){return function(t){return e[n].call(this,t)}},replace:function(n,r){return function(t){var e=n.call(this,t);return[r,e[1]]}},process:function(n,r){return function(t){var e=n.call(this,t);return[r.call(this,e[0]),e[1]]}},min:function(n,r){return function(t){var e=r.call(this,t);if(e[0].length<n)throw new f.Exception(t);return e}}},t="optional not ignore cache".split(/\s/),e=0;e<t.length;e++)y[t[e]]=function(o){return function(){var t=null,e=[];if(1<arguments.length?t=Array.prototype.slice.call(arguments):arguments[0]instanceof Array&&(t=arguments[0]),!t)return o.apply(null,arguments);var n=0,r=t.shift();return n<r.length?(t.unshift(r[n]),e.push(o.apply(null,t)),t.shift(),e):void 0}}(y[t[e]]);for(var n="each any all".split(/\s/),o=0;o<n.length;o++)y[n[o]]=function(t){return function(){return arguments[0]instanceof Array?t.apply(null,arguments[0]):t.apply(null,arguments)}}(y[n[o]])}(),function(){Date.Grammar={},Date.Translator={hour:function(t){return function(){this.hour=Number(t)}},minute:function(t){return function(){this.minute=Number(t)}},second:function(t){return function(){this.second=Number(t)}},meridian:function(t){return function(){this.meridian=t.slice(0,1).toLowerCase()}},timezone:function(e){return function(){var t=e.replace(/[^\d\+\-]/g,"");t.length?this.timezoneOffset=Number(t):this.timezone=e.toLowerCase()}},day:function(t){var e=t[0];return function(){this.day=Number(e.match(/\d+/)[0])}},month:function(t){return function(){this.month=3==t.length?Date.getMonthNumberFromName(t):Number(t)-1}},year:function(e){return function(){var t=Number(e);this.year=2<e.length?t:t+(t+2e3<Date.CultureInfo.twoDigitYearMax?2e3:1900)}},rday:function(t){return function(){switch(t){case"yesterday":this.days=-1;break;case"tomorrow":this.days=1;break;case"today":this.days=0;break;case"now":this.days=0,this.now=!0}}},finishExact:function(t){t=t instanceof Array?t:[t];var e=new Date;this.year=e.getFullYear(),this.month=e.getMonth(),this.day=1,this.hour=0,this.minute=0;for(var n=this.second=0;n<t.length;n++)t[n]&&t[n].call(this);if(this.hour="p"==this.meridian&&this.hour<13?this.hour+12:this.hour,this.day>Date.getDaysInMonth(this.year,this.month))throw new RangeError(this.day+" is not a valid value for days.");var r=new Date(this.year,this.month,this.day,this.hour,this.minute,this.second);return this.timezone?r.set({timezone:this.timezone}):this.timezoneOffset&&r.set({timezoneOffset:this.timezoneOffset}),r},finish:function(t){if(0===(t=t instanceof Array?function t(e){for(var n=[],r=0;r<e.length;r++)e[r]instanceof Array?n=n.concat(t(e[r])):e[r]&&n.push(e[r]);return n}(t):[t]).length)return null;for(var e=0;e<t.length;e++)"function"==typeof t[e]&&t[e].call(this);if(this.now)return new Date;var n=Date.today();if(null==this.days&&!this.orient&&!this.operator)return this.meridian&&this.hour&&(this.hour=this.hour<13&&"p"==this.meridian?this.hour+12:this.hour),this.weekday&&!this.day&&(this.day=n.addDays(Date.getDayNumberFromName(this.weekday)-n.getDay()).getDate()),this.month&&!this.day&&(this.day=1),n.set(this);var r,o,a="past"==this.orient||"subtract"==this.operator?-1:1;return this.weekday&&(this.unit="day",r=Date.getDayNumberFromName(this.weekday)-n.getDay(),o=7,this.days=r?(r+a*o)%o:a*o),this.month&&(this.unit="month",r=this.month-n.getMonth(),o=12,this.months=r?(r+a*o)%o:a*o,this.month=null),this.unit||(this.unit="day"),null!=this[this.unit+"s"]&&null==this.operator||(this.value||(this.value=1),"week"==this.unit&&(this.unit="day",this.value=7*this.value),this[this.unit+"s"]=this.value*a),n.add(this)}};var t,i=Date.Parsing.Operators,n=Date.Grammar,e=Date.Translator;n.datePartDelimiter=i.rtoken(/^([\s\-\.\,\/\x27]+)/),n.timePartDelimiter=i.stoken(":"),n.whiteSpace=i.rtoken(/^\s*/),n.generalDelimiter=i.rtoken(/^(([\s\,]|at|on)+)/);var s={};n.ctoken=function(t){var e=s[t];if(!e){for(var n=Date.CultureInfo.regexPatterns,r=t.split(/\s+/),o=[],a=0;a<r.length;a++)o.push(i.replace(i.rtoken(n[r[a]]),r[a]));e=s[t]=i.any.apply(null,o)}return e},n.ctoken2=function(t){return i.rtoken(Date.CultureInfo.regexPatterns[t])},n.h=i.cache(i.process(i.rtoken(/^(0[0-9]|1[0-2]|[1-9])/),e.hour)),n.hh=i.cache(i.process(i.rtoken(/^(0[0-9]|1[0-2])/),e.hour)),n.H=i.cache(i.process(i.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/),e.hour)),n.HH=i.cache(i.process(i.rtoken(/^([0-1][0-9]|2[0-3])/),e.hour)),n.m=i.cache(i.process(i.rtoken(/^([0-5][0-9]|[0-9])/),e.minute)),n.mm=i.cache(i.process(i.rtoken(/^[0-5][0-9]/),e.minute)),n.s=i.cache(i.process(i.rtoken(/^([0-5][0-9]|[0-9])/),e.second)),n.ss=i.cache(i.process(i.rtoken(/^[0-5][0-9]/),e.second)),n.hms=i.cache(i.sequence([n.H,n.mm,n.ss],n.timePartDelimiter)),n.t=i.cache(i.process(n.ctoken2("shortMeridian"),e.meridian)),n.tt=i.cache(i.process(n.ctoken2("longMeridian"),e.meridian)),n.z=i.cache(i.process(i.rtoken(/^(\+|\-)?\s*\d\d\d\d?/),e.timezone)),n.zz=i.cache(i.process(i.rtoken(/^(\+|\-)\s*\d\d\d\d/),e.timezone)),n.zzz=i.cache(i.process(n.ctoken2("timezone"),e.timezone)),n.timeSuffix=i.each(i.ignore(n.whiteSpace),i.set([n.tt,n.zzz])),n.time=i.each(i.optional(i.ignore(i.stoken("T"))),n.hms,n.timeSuffix),n.d=i.cache(i.process(i.each(i.rtoken(/^([0-2]\d|3[0-1]|\d)/),i.optional(n.ctoken2("ordinalSuffix"))),e.day)),n.dd=i.cache(i.process(i.each(i.rtoken(/^([0-2]\d|3[0-1])/),i.optional(n.ctoken2("ordinalSuffix"))),e.day)),n.ddd=n.dddd=i.cache(i.process(n.ctoken("sun mon tue wed thu fri sat"),function(t){return function(){this.weekday=t}})),n.M=i.cache(i.process(i.rtoken(/^(1[0-2]|0\d|\d)/),e.month)),n.MM=i.cache(i.process(i.rtoken(/^(1[0-2]|0\d)/),e.month)),n.MMM=n.MMMM=i.cache(i.process(n.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"),e.month)),n.y=i.cache(i.process(i.rtoken(/^(\d\d?)/),e.year)),n.yy=i.cache(i.process(i.rtoken(/^(\d\d)/),e.year)),n.yyy=i.cache(i.process(i.rtoken(/^(\d\d?\d?\d?)/),e.year)),n.yyyy=i.cache(i.process(i.rtoken(/^(\d\d\d\d)/),e.year)),t=function(){return i.each(i.any.apply(null,arguments),i.not(n.ctoken2("timeContext")))},n.day=t(n.d,n.dd),n.month=t(n.M,n.MMM),n.year=t(n.yyyy,n.yy),n.orientation=i.process(n.ctoken("past future"),function(t){return function(){this.orient=t}}),n.operator=i.process(n.ctoken("add subtract"),function(t){return function(){this.operator=t}}),n.rday=i.process(n.ctoken("yesterday tomorrow today now"),e.rday),n.unit=i.process(n.ctoken("minute hour day week month year"),function(t){return function(){this.unit=t}}),n.value=i.process(i.rtoken(/^\d\d?(st|nd|rd|th)?/),function(t){return function(){this.value=t.replace(/\D/g,"")}}),n.expression=i.set([n.rday,n.operator,n.value,n.unit,n.orientation,n.ddd,n.MMM]),t=function(){return i.set(arguments,n.datePartDelimiter)},n.mdy=t(n.ddd,n.month,n.day,n.year),n.ymd=t(n.ddd,n.year,n.month,n.day),n.dmy=t(n.ddd,n.day,n.month,n.year),n.date=function(t){return(n[Date.CultureInfo.dateElementOrder]||n.mdy).call(this,t)},n.format=i.process(i.many(i.any(i.process(i.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/),function(t){if(n[t])return n[t];throw Date.Parsing.Exception(t)}),i.process(i.rtoken(/^[^dMyhHmstz]+/),function(t){return i.ignore(i.stoken(t))}))),function(t){return i.process(i.each.apply(null,t),e.finishExact)});function r(t){return o[t]=o[t]||n.format(t)[0]}var o={};n.formats=function(t){if(t instanceof Array){for(var e=[],n=0;n<t.length;n++)e.push(r(t[n]));return i.any.apply(null,e)}return r(t)},n._formats=n.formats(["yyyy-MM-ddTHH:mm:ss","ddd, MMM dd, yyyy H:mm:ss tt","ddd MMM d yyyy HH:mm:ss zzz","d"]),n._start=i.process(i.set([n.date,n.time,n.expression],n.generalDelimiter,n.whiteSpace),e.finish),n.start=function(t){try{var e=n._formats.call({},t);if(0===e[1].length)return e}catch(t){}return n._start.call({},t)}}(),Date._parse=Date.parse,Date.parse=function(t){var e=null;if(!t)return null;try{e=Date.Grammar.start.call({},t)}catch(t){return null}return 0===e[1].length?e[0]:null},Date.getParseFunction=function(t){var n=Date.Grammar.formats(t);return function(t){var e=null;try{e=n.call({},t)}catch(t){return null}return 0===e[1].length?e[0]:null}},Date.parseExact=function(t,e){return Date.getParseFunction(e)(t)};