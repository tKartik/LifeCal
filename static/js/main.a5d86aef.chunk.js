(window.webpackJsonplifec=window.webpackJsonplifec||[]).push([[0],[,,,,,,,,function(e,a,t){},,,function(e,a,t){e.exports=t.p+"static/media/P5.4d0fc60a.jpg"},function(e,a,t){e.exports=t(25)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var o=t(0),s=t.n(o),n=t(9),i=(t(17),t(10)),d=t(1),m=t(2),r=t(4),C=t(3),N=t(5),l=(t(18),function(e){function a(){var e,t;Object(d.a)(this,a);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(t=Object(r.a)(this,(e=Object(C.a)(a)).call.apply(e,[this].concat(n)))).state={height:"",width:"",rad:""},t.container=s.a.createRef(),t.radOfCircle=function(e,a,t){for(var o,s=1;s<200&&!(t/s*(o=e/s)<a);s++);return(o-4)/2},t}return Object(N.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this.container.current.offsetWidth,a=this.container.current.clientHeight;this.setState({height:a}),this.setState({width:e})}},{key:"render",value:function(){var e,a,t=[],o=this.state.height,n=this.state.width,i=this.props.totalWeeks,d=this.radOfCircle(n,o,i);this.props.theme?(e={backgroundColor:"#919191",borderRadius:"50%",padding:"".concat(d,"px")},a={backgroundColor:"#528F9A",borderRadius:"50%",padding:"".concat(d,"px")}):(e={backgroundColor:"#CECECE",borderRadius:"50%",padding:"".concat(d,"px")},a={backgroundColor:"#FFB917",borderRadius:"50%",padding:"".concat(d,"px")});for(var m=0;m<this.props.weeks;m++){var r=(new Date).getTime();t.push(s.a.createElement("div",{key:r+m,className:"list2",style:e}))}for(var C=0;C<this.props.totalWeeks-this.props.weeks;C++)t.push(s.a.createElement("div",{key:C,className:"list1",style:a}));return s.a.createElement("div",{className:"container",ref:this.container},t)}}]),a}(s.a.Component)),k=(t(8),{countries:[{Name:"Aruba",Code:"ABW",Weeks:76.01},{Name:"Afghanistan",Code:"AFG",Weeks:64.047},{Name:"Angola",Code:"AGO",Weeks:61.809},{Name:"Albania",Code:"ALB",Weeks:78.495},{Name:"Andorra",Code:"AND",Weeks:""},{Name:"Arab World",Code:"ARB",Weeks:71.43312252},{Name:"United Arab Emirates",Code:"ARE",Weeks:77.412},{Name:"Argentina",Code:"ARG",Weeks:76.738},{Name:"Armenia",Code:"ARM",Weeks:74.782},{Name:"American Samoa",Code:"ASM",Weeks:""},{Name:"Antigua and Barbuda",Code:"ATG",Weeks:76.519},{Name:"Australia",Code:"AUS",Weeks:82.49756098},{Name:"Austria",Code:"AUT",Weeks:81.64146341},{Name:"Azerbaijan",Code:"AZE",Weeks:72.123},{Name:"Burundi",Code:"BDI",Weeks:57.857},{Name:"Belgium",Code:"BEL",Weeks:81.43902439},{Name:"Benin",Code:"BEN",Weeks:61.171},{Name:"Burkina Faso",Code:"BFA",Weeks:60.77},{Name:"Bangladesh",Code:"BGD",Weeks:72.808},{Name:"Bulgaria",Code:"BGR",Weeks:74.81219512},{Name:"Bahrain",Code:"BHR",Weeks:77.038},{Name:"Bahamas, The",Code:"BHS",Weeks:75.823},{Name:"Bosnia and Herzegovina",Code:"BIH",Weeks:77.087},{Name:"Belarus",Code:"BLR",Weeks:74.12926829},{Name:"Belize",Code:"BLZ",Weeks:70.588},{Name:"Bermuda",Code:"BMU",Weeks:81.44195122},{Name:"Bolivia",Code:"BOL",Weeks:69.473},{Name:"Brazil",Code:"BRA",Weeks:75.723},{Name:"Barbados",Code:"BRB",Weeks:76.057},{Name:"Brunei Darussalam",Code:"BRN",Weeks:77.374},{Name:"Bhutan",Code:"BTN",Weeks:70.565},{Name:"Botswana",Code:"BWA",Weeks:67.618},{Name:"Central African Republic",Code:"CAF",Weeks:52.89},{Name:"Canada",Code:"CAN",Weeks:82.4704878},{Name:"Central Europe and the Baltics",Code:"CEB",Weeks:77.03396591},{Name:"Switzerland",Code:"CHE",Weeks:83.60243902},{Name:"Channel Islands",Code:"CHI",Weeks:81.255},{Name:"Chile",Code:"CHL",Weeks:79.732},{Name:"China",Code:"CHN",Weeks:76.41},{Name:"Cote d'Ivoire",Code:"CIV",Weeks:54.102},{Name:"Cameroon",Code:"CMR",Weeks:58.575},{Name:"Congo, Dem. Rep.",Code:"COD",Weeks:60.031},{Name:"Congo, Rep.",Code:"COG",Weeks:65.088},{Name:"Colombia",Code:"COL",Weeks:74.562},{Name:"Comoros",Code:"COM",Weeks:63.912},{Name:"Cabo Verde",Code:"CPV",Weeks:73.004},{Name:"Costa Rica",Code:"CRI",Weeks:80.03},{Name:"Caribbean small states",Code:"CSS",Weeks:73.31854945},{Name:"Cuba",Code:"CUB",Weeks:79.921},{Name:"Curacao",Code:"CUW",Weeks:78.01707317},{Name:"Cayman Islands",Code:"CYM",Weeks:""},{Name:"Cyprus",Code:"CYP",Weeks:80.67},{Name:"Czech Republic",Code:"CZE",Weeks:79.47560976},{Name:"Germany",Code:"DEU",Weeks:80.9902439},{Name:"Djibouti",Code:"DJI",Weeks:62.643},{Name:"Dominica",Code:"DMA",Weeks:""},{Name:"Denmark",Code:"DNK",Weeks:81.00487805},{Name:"Dominican Republic",Code:"DOM",Weeks:74.048},{Name:"Algeria",Code:"DZA",Weeks:76.293},{Name:"East Asia & Pacific (excluding high income)",Code:"EAP",Weeks:74.64356348},{Name:"Early-demographic dividend",Code:"EAR",Weeks:69.97443658},{Name:"East Asia & Pacific",Code:"EAS",Weeks:75.55201893},{Name:"Europe & Central Asia (excluding high income)",Code:"ECA",Weeks:73.17862544},{Name:"Europe & Central Asia",Code:"ECS",Weeks:77.64421915},{Name:"Ecuador",Code:"ECU",Weeks:76.551},{Name:"Egypt, Arab Rep.",Code:"EGY",Weeks:71.661},{Name:"Euro area",Code:"EMU",Weeks:81.95072351},{Name:"Eritrea",Code:"ERI",Weeks:65.536},{Name:"Spain",Code:"ESP",Weeks:83.32926829},{Name:"Estonia",Code:"EST",Weeks:77.64146341},{Name:"Ethiopia",Code:"ETH",Weeks:65.874},{Name:"European Union",Code:"EUU",Weeks:80.99115121},{Name:"Fragile and conflict affected situations",Code:"FCS",Weeks:62.90637894},{Name:"Finland",Code:"FIN",Weeks:81.42926829},{Name:"Fiji",Code:"FJI",Weeks:70.417},{Name:"France",Code:"FRA",Weeks:82.52439024},{Name:"Faroe Islands",Code:"FRO",Weeks:82.4},{Name:"Micronesia, Fed. Sts.",Code:"FSM",Weeks:69.316},{Name:"Gabon",Code:"GAB",Weeks:66.48},{Name:"United Kingdom",Code:"GBR",Weeks:81.15609756},{Name:"Georgia",Code:"GEO",Weeks:73.436},{Name:"Ghana",Code:"GHA",Weeks:63.033},{Name:"Gibraltar",Code:"GIB",Weeks:""},{Name:"Guinea",Code:"GIN",Weeks:60.617},{Name:"Gambia, The",Code:"GMB",Weeks:61.424},{Name:"Guinea-Bissau",Code:"GNB",Weeks:57.805},{Name:"Equatorial Guinea",Code:"GNQ",Weeks:57.939},{Name:"Greece",Code:"GRC",Weeks:81.38780488},{Name:"Grenada",Code:"GRD",Weeks:73.78},{Name:"Greenland",Code:"GRL",Weeks:""},{Name:"Guatemala",Code:"GTM",Weeks:73.654},{Name:"Guam",Code:"GUM",Weeks:79.763},{Name:"Guyana",Code:"GUY",Weeks:66.766},{Name:"High income",Code:"HIC",Weeks:80.68439957},{Name:"Hong Kong SAR, China",Code:"HKG",Weeks:84.6804878},{Name:"Honduras",Code:"HND",Weeks:73.774},{Name:"Heavily indebted poor countries (HIPC)",Code:"HPC",Weeks:62.47392059},{Name:"Croatia",Code:"HRV",Weeks:77.82682927},{Name:"Haiti",Code:"HTI",Weeks:63.589},{Name:"Hungary",Code:"HUN",Weeks:76.06341463},{Name:"IBRD only",Code:"IBD",Weeks:72.96694105},{Name:"IDA & IBRD total",Code:"IBT",Weeks:70.67965585},{Name:"IDA total",Code:"IDA",Weeks:63.93232032},{Name:"IDA blend",Code:"IDB",Weeks:62.04811278},{Name:"Indonesia",Code:"IDN",Weeks:69.355},{Name:"IDA only",Code:"IDX",Weeks:64.8980448},{Name:"Isle of Man",Code:"IMN",Weeks:""},{Name:"India",Code:"IND",Weeks:68.803},{Name:"Not classified",Code:"INX",Weeks:""},{Name:"Ireland",Code:"IRL",Weeks:81.95609756},{Name:"Iran, Islamic Rep.",Code:"IRN",Weeks:76.153},{Name:"Iraq",Code:"IRQ",Weeks:70.038},{Name:"Iceland",Code:"ISL",Weeks:82.20487805},{Name:"Israel",Code:"ISR",Weeks:82.60243902},{Name:"Italy",Code:"ITA",Weeks:83.24390244},{Name:"Jamaica",Code:"JAM",Weeks:76.097},{Name:"Jordan",Code:"JOR",Weeks:74.476},{Name:"Japan",Code:"JPN",Weeks:84.0997561},{Name:"Kazakhstan",Code:"KAZ",Weeks:72.95},{Name:"Kenya",Code:"KEN",Weeks:67.291},{Name:"Kyrgyz Republic",Code:"KGZ",Weeks:71.2},{Name:"Cambodia",Code:"KHM",Weeks:69.331},{Name:"Kiribati",Code:"KIR",Weeks:66.506},{Name:"St. Kitts and Nevis",Code:"KNA",Weeks:""},{Name:"Korea, Rep.",Code:"KOR",Weeks:82.62682927},{Name:"Kuwait",Code:"KWT",Weeks:74.811},{Name:"Latin America & Caribbean (excluding high income)",Code:"LAC",Weeks:75.57025443},{Name:"Lao PDR",Code:"LAO",Weeks:67.021},{Name:"Lebanon",Code:"LBN",Weeks:79.758},{Name:"Liberia",Code:"LBR",Weeks:63.006},{Name:"Libya",Code:"LBY",Weeks:72.11},{Name:"St. Lucia",Code:"LCA",Weeks:75.696},{Name:"Latin America & Caribbean",Code:"LCN",Weeks:75.73420788},{Name:"Least developed countries: UN classification",Code:"LDC",Weeks:64.75237624},{Name:"Low income",Code:"LIC",Weeks:63.24892343},{Name:"Liechtenstein",Code:"LIE",Weeks:82.25853659},{Name:"Sri Lanka",Code:"LKA",Weeks:75.485},{Name:"Lower middle income",Code:"LMC",Weeks:67.98994347},{Name:"Low & middle income",Code:"LMY",Weeks:70.62000811},{Name:"Lesotho",Code:"LSO",Weeks:54.568},{Name:"Late-demographic dividend",Code:"LTE",Weeks:75.92407033},{Name:"Lithuania",Code:"LTU",Weeks:74.67073171},{Name:"Luxembourg",Code:"LUX",Weeks:82.68536585},{Name:"Latvia",Code:"LVA",Weeks:74.6804878},{Name:"Macao SAR, China",Code:"MAC",Weeks:83.991},{Name:"St. Martin (French part)",Code:"MAF",Weeks:79.72195122},{Name:"Morocco",Code:"MAR",Weeks:76.059},{Name:"Monaco",Code:"MCO",Weeks:""},{Name:"Moldova",Code:"MDA",Weeks:71.718},{Name:"Madagascar",Code:"MDG",Weeks:66.312},{Name:"Maldives",Code:"MDV",Weeks:77.649},{Name:"Middle East & North Africa",Code:"MEA",Weeks:73.72989973},{Name:"Mexico",Code:"MEX",Weeks:77.305},{Name:"Marshall Islands",Code:"MHL",Weeks:""},{Name:"Middle income",Code:"MIC",Weeks:71.52182998},{Name:"North Macedonia",Code:"MKD",Weeks:75.851},{Name:"Mali",Code:"MLI",Weeks:58.456},{Name:"Malta",Code:"MLT",Weeks:82.45365854},{Name:"Myanmar",Code:"MMR",Weeks:66.744},{Name:"Middle East & North Africa (excluding high income)",Code:"MNA",Weeks:73.23215988},{Name:"Montenegro",Code:"MNE",Weeks:77.271},{Name:"Mongolia",Code:"MNG",Weeks:69.465},{Name:"Northern Mariana Islands",Code:"MNP",Weeks:""},{Name:"Mozambique",Code:"MOZ",Weeks:58.872},{Name:"Mauritania",Code:"MRT",Weeks:63.384},{Name:"Mauritius",Code:"MUS",Weeks:74.51463415},{Name:"Malawi",Code:"MWI",Weeks:63.671},{Name:"Malaysia",Code:"MYS",Weeks:75.452},{Name:"North America",Code:"NAC",Weeks:78.93665161},{Name:"Namibia",Code:"NAM",Weeks:64.85},{Name:"New Caledonia",Code:"NCL",Weeks:77.14878049},{Name:"Niger",Code:"NER",Weeks:60.422},{Name:"Nigeria",Code:"NGA",Weeks:53.875},{Name:"Nicaragua",Code:"NIC",Weeks:75.653},{Name:"Netherlands",Code:"NLD",Weeks:81.56097561},{Name:"Norway",Code:"NOR",Weeks:82.5097561},{Name:"Nepal",Code:"NPL",Weeks:70.604},{Name:"Nauru",Code:"NRU",Weeks:""},{Name:"New Zealand",Code:"NZL",Weeks:81.65853659},{Name:"OECD members",Code:"OED",Weeks:80.29709581},{Name:"Oman",Code:"OMN",Weeks:77.258},{Name:"Other small states",Code:"OSS",Weeks:68.17582661},{Name:"Pakistan",Code:"PAK",Weeks:66.629},{Name:"Panama",Code:"PAN",Weeks:78.195},{Name:"Peru",Code:"PER",Weeks:75.22},{Name:"Philippines",Code:"PHL",Weeks:69.238},{Name:"Palau",Code:"PLW",Weeks:""},{Name:"Papua New Guinea",Code:"PNG",Weeks:65.705},{Name:"Poland",Code:"POL",Weeks:77.85121951},{Name:"Pre-demographic dividend",Code:"PRE",Weeks:60.33553086},{Name:"Puerto Rico",Code:"PRI",Weeks:79.97363415},{Name:"Korea, Dem. People\u2019s Rep.",Code:"PRK",Weeks:71.887},{Name:"Portugal",Code:"PRT",Weeks:81.12439024},{Name:"Paraguay",Code:"PRY",Weeks:73.211},{Name:"West Bank and Gaza",Code:"PSE",Weeks:73.646},{Name:"Pacific island small states",Code:"PSS",Weeks:71.09601791},{Name:"Post-demographic dividend",Code:"PST",Weeks:80.6329633},{Name:"French Polynesia",Code:"PYF",Weeks:76.996},{Name:"Qatar",Code:"QAT",Weeks:78.331},{Name:"Romania",Code:"ROU",Weeks:75.3097561},{Name:"Russian Federation",Code:"RUS",Weeks:72.11902439},{Name:"Rwanda",Code:"RWA",Weeks:67.496},{Name:"South Asia",Code:"SAS",Weeks:68.92216194},{Name:"Saudi Arabia",Code:"SAU",Weeks:74.72},{Name:"Sudan",Code:"SDN",Weeks:64.698},{Name:"Senegal",Code:"SEN",Weeks:67.477},{Name:"Singapore",Code:"SGP",Weeks:82.89512195},{Name:"Solomon Islands",Code:"SLB",Weeks:71.006},{Name:"Sierra Leone",Code:"SLE",Weeks:52.214},{Name:"El Salvador",Code:"SLV",Weeks:73.75},{Name:"San Marino",Code:"SMR",Weeks:""},{Name:"Somalia",Code:"SOM",Weeks:56.714},{Name:"Serbia",Code:"SRB",Weeks:76.08780488},{Name:"Sub-Saharan Africa (excluding high income)",Code:"SSA",Weeks:60.80152984},{Name:"South Sudan",Code:"SSD",Weeks:57.288},{Name:"Sub-Saharan Africa",Code:"SSF",Weeks:60.80276179},{Name:"Small states",Code:"SST",Weeks:69.28019173},{Name:"Sao Tome and Principe",Code:"STP",Weeks:66.762},{Name:"Suriname",Code:"SUR",Weeks:71.523},{Name:"Slovak Republic",Code:"SVK",Weeks:77.16585366},{Name:"Slovenia",Code:"SVN",Weeks:81.17560976},{Name:"Sweden",Code:"SWE",Weeks:82.30731707},{Name:"Eswatini",Code:"SWZ",Weeks:58.268},{Name:"Sint Maarten (Dutch part)",Code:"SXM",Weeks:""},{Name:"Seychelles",Code:"SYC",Weeks:74.3},{Name:"Syrian Arab Republic",Code:"SYR",Weeks:70.963},{Name:"Turks and Caicos Islands",Code:"TCA",Weeks:""},{Name:"Chad",Code:"TCD",Weeks:53.208},{Name:"East Asia & Pacific (IDA & IBRD countries)",Code:"TEA",Weeks:74.67788238},{Name:"Europe & Central Asia (IDA & IBRD countries)",Code:"TEC",Weeks:73.6080885},{Name:"Togo",Code:"TGO",Weeks:60.477},{Name:"Thailand",Code:"THA",Weeks:75.498},{Name:"Tajikistan",Code:"TJK",Weeks:71.214},{Name:"Turkmenistan",Code:"TKM",Weeks:67.956},{Name:"Latin America & the Caribbean (IDA & IBRD countries)",Code:"TLA",Weeks:75.63307819},{Name:"Timor-Leste",Code:"TLS",Weeks:69.199},{Name:"Middle East & North Africa (IDA & IBRD countries)",Code:"TMN",Weeks:73.22720526},{Name:"Tonga",Code:"TON",Weeks:73.179},{Name:"South Asia (IDA & IBRD)",Code:"TSA",Weeks:68.92216194},{Name:"Sub-Saharan Africa (IDA & IBRD countries)",Code:"TSS",Weeks:60.80276179},{Name:"Trinidad and Tobago",Code:"TTO",Weeks:70.783},{Name:"Tunisia",Code:"TUN",Weeks:75.943},{Name:"Turkey",Code:"TUR",Weeks:76.009},{Name:"Tuvalu",Code:"TUV",Weeks:""},{Name:"Tanzania",Code:"TZA",Weeks:66.31},{Name:"Uganda",Code:"UGA",Weeks:60.182},{Name:"Ukraine",Code:"UKR",Weeks:71.78097561},{Name:"Upper middle income",Code:"UMC",Weeks:75.51429007},{Name:"Uruguay",Code:"URY",Weeks:77.645},{Name:"United States",Code:"USA",Weeks:78.53902439},{Name:"Uzbekistan",Code:"UZB",Weeks:71.42},{Name:"St. Vincent and the Grenadines",Code:"VCT",Weeks:73.294},{Name:"Venezuela, RB",Code:"VEN",Weeks:74.726},{Name:"British Virgin Islands",Code:"VGB",Weeks:""},{Name:"Virgin Islands (U.S.)",Code:"VIR",Weeks:79.4195122},{Name:"Vietnam",Code:"VNM",Weeks:76.454},{Name:"Vanuatu",Code:"VUT",Weeks:72.334},{Name:"World",Code:"WLD",Weeks:72.23323767},{Name:"Samoa",Code:"WSM",Weeks:75.24},{Name:"Kosovo",Code:"XKX",Weeks:71.94634146},{Name:"Yemen, Rep.",Code:"YEM",Weeks:65.157},{Name:"South Africa",Code:"ZAF",Weeks:63.404},{Name:"Zambia",Code:"ZMB",Weeks:62.255},{Name:"Zimbabwe",Code:"ZWE",Weeks:61.712}]}),c=(t(19),t(6)),W=t.n(c),u=function(e){function a(){var e,t;Object(d.a)(this,a);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(t=Object(r.a)(this,(e=Object(C.a)(a)).call.apply(e,[this].concat(n)))).dob=s.a.createRef(),t.country=s.a.createRef(),t.nWord=s.a.createRef(),t.goAhead=function(e){e.preventDefault(),t.props.updateName(t.nWord.current.value);var a=new Date,o=new Date(t.dob.current.value),s=t.diff_weeks(o,a);t.props.updateDate(s);var n=t.country.current.value,i=k.countries.find(function(e){return e.Code===n});t.props.updateDate2(i.Weeks)},t.handleChange=function(e){console.log(e.target.value),t.props.toggleTheme(),console.log(t.props.theme)},t.diff_weeks=function(e,a){var t=(e.getTime()-a.getTime())/1e3;return t/=604800,Math.abs(Math.round(t))},t}return Object(N.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e="hide";return this.props.menuVisibility&&(e="show"),s.a.createElement("div",{id:"flyoutMenu",className:e},s.a.createElement("div",{onMouseDown:this.props.handleMouseDown,className:"cross"},s.a.createElement(W.a,{name:"times",size:"2x"})),s.a.createElement("div",{className:"padContainer"},s.a.createElement("form",{onSubmit:this.goAhead,className:"form1"},s.a.createElement("p",{className:"enterName",style:{marginTop:"8vmin"}},"Name"),s.a.createElement("input",{type:"text",name:"name",ref:this.nWord}),s.a.createElement("p",{className:"enterName"},"Birthday "),s.a.createElement("input",{type:"date",required:!0,ref:this.dob}),s.a.createElement("p",{className:"enterName"},"Country of Residence"),s.a.createElement("select",{required:!0,ref:this.country},s.a.createElement("option",null,"Country"),k.countries&&k.countries.map(function(e,a){return s.a.createElement("option",{key:a,value:e.Code},e.Name)})),s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},s.a.createElement("button",{type:"submit"},"GO Ahead"))),s.a.createElement("div",null,s.a.createElement("div",{className:"theme"},"Theme"),s.a.createElement("form",{style:{display:"flex",justifyContent:"center"}},s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"Dark",checked:!0===this.props.theme,onChange:this.handleChange}),"Dark"),s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"Light",checked:!1===this.props.theme,onChange:this.handleChange}),"Light"))),s.a.createElement("div",{className:"info"},"LifeCal is a tab extension which aims to bring your whole life into perspective. The circles represent weeks in the average lifespan of a person in your country. A bitter-sweet motivational tool, to remind you that life is short and you need to get going."),s.a.createElement("div",{className:"footer"},"Created by \xa0",s.a.createElement("span",{style:{color:"grey"}},s.a.createElement("a",{href:"https://tkartik.com/"}," Kartik")))))}}]),a}(s.a.Component),h=(t(23),function(e){function a(){return Object(d.a)(this,a),Object(r.a)(this,Object(C.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{id:"roundButton"},s.a.createElement(W.a,{name:"sliders",size:"2x"}))}}]),a}(o.Component)),p=(t(24),function(e){function a(){return Object(d.a)(this,a),Object(r.a)(this,Object(C.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e,a=new Date,t=(a.getHours()<10?"0":"")+a.getHours(),o=(a.getMinutes()<10?"0":"")+a.getMinutes(),n=t>=12?"PM":"AM";o=o<10?"0"+o:o,e=0<(t=(t%=12)||12)&&t<=5&&"PM"===n?"Good afternoon,":4<t&&t<12&&"AM"===n?"Good morning,":"Good evening,";var i,d,m,r=this.props.name;return"null"==r||""==r||null==r?(r="Click on the settings button on the lower left corner of the screen to start",i=3):i=6,!0===this.props.theme?(m={color:"#ffffff",textShadow:"0 0 20px black"},d={fontSize:"".concat(i,"vmin"),color:"#ffffff",textShadow:"0 0 30px black"}):(m={color:"#383838"},d={fontSize:"".concat(i,"vmin"),color:"#383838"}),s.a.createElement("div",{className:"centerHeading"},s.a.createElement("div",null,s.a.createElement("h1",{style:m,className:"nameTime"},t," : ",o," ",n)),s.a.createElement("div",null,s.a.createElement("h2",{style:d,className:"nameName"},e," ",r,".")))}}]),a}(s.a.Component)),g=t(11),f=t.n(g),S=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(r.a)(this,Object(C.a)(a).call(this,e))).toggleMenu=function(){t.setState({visible:!t.state.visible})},t.toggleTheme=function(){t.setState({theme:!t.state.theme})},t.handleMouseDown=function(e){t.toggleMenu(),e.stopPropagation()},t.updateDate=function(e){var a=t.state.weeks;a=e,t.setState({weeks:a})},t.updateDate2=function(e){var a=t.state.totalWeeks;a=52*e,t.setState({totalWeeks:a})},t.updateName=function(e){var a=t.state.name;a=e,t.setState({name:a})},t.state={totalWeeks:"",weeks:"",country:"",name:"",visible:!1,theme:!0},t}return Object(N.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("weeks"),a=localStorage.getItem("totalWeeks"),t=localStorage.getItem("name"),o=JSON.parse(localStorage.getItem("theme"));this.setState({weeks:e,totalWeeks:a,name:t,theme:o})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("totalWeeks",this.state.totalWeeks),localStorage.setItem("weeks",this.state.weeks),localStorage.setItem("name",this.state.name),localStorage.setItem("theme",this.state.theme)}},{key:"render",value:function(){var e;return console.log(this.state.theme),!0===this.state.theme?e={backgroundColor:"#3B3B3B"}:!1===this.state.theme&&(e={backgroundColor:"#ffffff"}),s.a.createElement("div",{style:e,className:"overall"},s.a.createElement("div",{className:"wrapper"},s.a.createElement(l,{weeks:this.state.weeks,totalWeeks:this.state.totalWeeks,theme:this.state.theme})),s.a.createElement("div",{onMouseDown:this.handleMouseDown,className:"buttonM"},s.a.createElement(h,{handleMouseDown:this.handleMouseDown})),s.a.createElement("div",null,s.a.createElement("a",{href:"https://tkartik.com/"},s.a.createElement("img",Object(i.a)({className:"logo",src:f.a,alt:"logo"},"className","logo")))),s.a.createElement("div",null,s.a.createElement(p,{name:this.state.name,theme:this.state.theme})),s.a.createElement(u,{updateDate:this.updateDate,updateDate2:this.updateDate2,updateName:this.updateName,toggleTheme:this.toggleTheme,theme:this.state.theme,menuVisibility:this.state.visible,handleMouseDown:this.handleMouseDown}))}}]),a}(s.a.Component);Object(n.render)(s.a.createElement(S,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.a5d86aef.chunk.js.map