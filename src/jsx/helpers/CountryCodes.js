const data = {
  Andorra: 'ad', 'United Arab Emirates (the)': 'ae', Afghanistan: 'af', 'Antigua and Barbuda': 'ag', Anguilla: 'ai', Albania: 'al', Armenia: 'am', Angola: 'ao', Antarctica: 'aq', Argentina: 'ar', 'American Samoa': 'as', Austria: 'at', Australia: 'au', Aruba: 'aw', 'Åland Islands': 'ax', Azerbaijan: 'az', 'Bosnia and Herzegovina': 'ba', Barbados: 'bb', Bangladesh: 'bd', Belgium: 'be', 'Burkina Faso': 'bf', Bulgaria: 'bg', Bahrain: 'bh', Burundi: 'bi', Benin: 'bj', 'Saint Barthélemy': 'bl', Bermuda: 'bm', 'Brunei Darussalam': 'bn', 'Bolivia (Plurinational State of)': 'bo', 'Bonaire, Sint Eustatius and Saba': 'bq', Brazil: 'br', Bahamas: 'bs', Bhutan: 'bt', 'Bouvet Island': 'bv', Botswana: 'bw', Belarus: 'by', Belize: 'bz', Canada: 'ca', 'Cocos (Keeling) Islands (the)': 'cc', 'Congo (the Democratic Republic of the)': 'cd', 'Central African Republic (the)': 'cf', 'Congo (the)': 'cg', Switzerland: 'ch', 'Côte d\'Ivoire': 'ci', 'Cook Islands (the)': 'ck', Chile: 'cl', Cameroon: 'cm', China: 'cn', Colombia: 'co', 'Costa Rica': 'cr', Cuba: 'cu', 'Cabo Verde': 'cv', Curaçao: 'cw', 'Christmas Island': 'cx', Cyprus: 'cy', Czechia: 'cz', Germany: 'de', Djibouti: 'dj', Denmark: 'dk', Dominica: 'dm', 'Dominican Republic (the)': 'do', Algeria: 'dz', Ecuador: 'ec', Estonia: 'ee', Egypt: 'eg', 'Western Sahara': 'eh', Eritrea: 'er', Spain: 'es', Ethiopia: 'et', Finland: 'fi', Fiji: 'fj', 'Falkland Islands (the) [Malvinas]': 'fk', 'Micronesia (Federated States of)': 'fm', 'Faroe Islands (the)': 'fo', France: 'fr', Gabon: 'ga', 'United Kingdom': 'gb', Grenada: 'gd', Georgia: 'ge', 'French Guiana': 'gf', Guernsey: 'gg', Ghana: 'gh', Gibraltar: 'gi', Greenland: 'gl', 'Gambia (the)': 'gm', Guinea: 'gn', Guadeloupe: 'gp', 'Equatorial Guinea': 'gq', Greece: 'gr', 'South Georgia and the South Sandwich Islands': 'gs', Guatemala: 'gt', Guam: 'gu', 'Guinea-Bissau': 'gw', Guyana: 'gy', 'China‚ Hong Kong SAR': 'hk', 'Heard Island and McDonald Islands': 'hm', Honduras: 'hn', Croatia: 'hr', Haiti: 'ht', Hungary: 'hu', Indonesia: 'id', Ireland: 'ie', Israel: 'il', 'Isle of Man': 'im', India: 'in', 'British Indian Ocean Territory (the)': 'io', Iraq: 'iq', 'Iran (Islamic Republic of)': 'ir', Iceland: 'is', Italy: 'it', Jersey: 'je', Jamaica: 'jm', Jordan: 'jo', Japan: 'jp', Kenya: 'ke', Kyrgyzstan: 'kg', Cambodia: 'kh', Kiribati: 'ki', 'Comoros (the)': 'km', 'Saint Kitts and Nevis': 'kn', 'Korea (the Democratic People\'s Republic of)': 'kp', 'Republic of Korea': 'kr', Kuwait: 'kw', 'Cayman Islands (the)': 'ky', Kazakhstan: 'kz', 'Lao People\'s Democratic Republic (the)': 'la', Lebanon: 'lb', 'Saint Lucia': 'lc', Liechtenstein: 'li', 'Sri Lanka': 'lk', Liberia: 'lr', Lesotho: 'ls', Lithuania: 'lt', Luxembourg: 'lu', Latvia: 'lv', Libya: 'ly', Morocco: 'ma', Monaco: 'mc', 'Moldova (the Republic of)': 'md', Montenegro: 'me', 'Saint Martin (French part)': 'mf', Madagascar: 'mg', 'Marshall Islands': 'mh', 'North Macedonia': 'mk', Mali: 'ml', Myanmar: 'mm', Mongolia: 'mn', Macao: 'mo', 'Northern Mariana Islands (the)': 'mp', Martinique: 'mq', Mauritania: 'mr', Montserrat: 'ms', Malta: 'mt', Mauritius: 'mu', Maldives: 'mv', Malawi: 'mw', Mexico: 'mx', Malaysia: 'my', Mozambique: 'mz', Namibia: 'na', 'New Caledonia': 'nc', 'Niger (the)': 'ne', 'Norfolk Island': 'nf', Nigeria: 'ng', Nicaragua: 'ni', 'Netherlands (Kingdom of the)': 'nl', Norway: 'no', Nepal: 'np', Nauru: 'nr', Niue: 'nu', 'New Zealand': 'nz', Oman: 'om', Panama: 'pa', Peru: 'pe', 'French Polynesia': 'pf', 'Papua New Guinea': 'pg', Philippines: 'ph', Pakistan: 'pk', Poland: 'pl', 'Saint Pierre and Miquelon': 'pm', Pitcairn: 'pn', 'Puerto Rico': 'pr', 'Palestine, State of': 'ps', Portugal: 'pt', Palau: 'pw', Paraguay: 'py', Qatar: 'qa', Réunion: 're', Romania: 'ro', Serbia: 'rs', 'Russian Federation': 'ru', Rwanda: 'rw', 'Saudi Arabia': 'sa', 'Solomon Islands': 'sb', Seychelles: 'sc', 'Sudan (the)': 'sd', Sweden: 'se', Singapore: 'sg', 'Saint Helena, Ascension and Tristan da Cunha': 'sh', Slovenia: 'si', 'Svalbard and Jan Mayen': 'sj', Slovakia: 'sk', 'Sierra Leone': 'sl', 'San Marino': 'sm', Senegal: 'sn', Somalia: 'so', Suriname: 'sr', 'South Sudan': 'ss', 'Sao Tome and Principe': 'st', 'El Salvador': 'sv', 'Sint Maarten (Dutch part)': 'sx', 'Syrian Arab Republic (the)': 'sy', Eswatini: 'sz', 'Turks and Caicos Islands (the)': 'tc', Chad: 'td', 'French Southern Territories (the)': 'tf', Togo: 'tg', Thailand: 'th', Tajikistan: 'tj', Tokelau: 'tk', 'Timor-Leste': 'tl', Turkmenistan: 'tm', Tunisia: 'tn', Tonga: 'to', Türkiye: 'tr', 'Trinidad and Tobago': 'tt', Tuvalu: 'tv', 'Taiwan (Province of China)': 'tw', 'Tanzania, the United Republic of': 'tz', Ukraine: 'ua', Uganda: 'ug', 'United States Minor Outlying Islands (the)': 'um', 'United States of America': 'us', Uruguay: 'uy', Uzbekistan: 'uz', 'Holy See (the)': 'va', 'Saint Vincent and the Grenadines': 'vc', 'Venezuela (Bolivarian Republic of)': 've', 'Virgin Islands (British)': 'vg', 'Virgin Islands (U.S.)': 'vi', 'Viet Nam': 'vn', Vanuatu: 'vu', 'Wallis and Futuna': 'wf', Samoa: 'ws', Yemen: 'ye', Mayotte: 'yt', 'South Africa': 'za', Zambia: 'zm', Zimbabwe: 'zw', 'Union of Soviet Socialist Republics': 'su', 'Federal Republic of Germany': 'de'
};

const CountryCodes = (country) => (data[country]);
export default CountryCodes;
