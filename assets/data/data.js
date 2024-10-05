const countryInfo = [
  {
    countryName: "South Georgia",
    flagUrl: "https://flagcdn.com/w320/gs.png",
    currencyName: "SHP",
  },
  {
    countryName: "Grenada",
    flagUrl: "https://flagcdn.com/w320/gd.png",
    currencyName: "XCD",
  },
  {
    countryName: "Switzerland",
    flagUrl: "https://flagcdn.com/w320/ch.png",
    currencyName: "CHF",
  },
  {
    countryName: "Sierra Leone",
    flagUrl: "https://flagcdn.com/w320/sl.png",
    currencyName: "SLL",
  },
  {
    countryName: "Hungary",
    flagUrl: "https://flagcdn.com/w320/hu.png",
    currencyName: "HUF",
  },
  {
    countryName: "Taiwan",
    flagUrl: "https://flagcdn.com/w320/tw.png",
    currencyName: "TWD",
  },
  {
    countryName: "Wallis and Futuna",
    flagUrl: "https://flagcdn.com/w320/wf.png",
    currencyName: "XPF",
  },
  {
    countryName: "Barbados",
    flagUrl: "https://flagcdn.com/w320/bb.png",
    currencyName: "BBD",
  },
  {
    countryName: "Pitcairn Islands",
    flagUrl: "https://flagcdn.com/w320/pn.png",
    currencyName: "NZD",
  },
  {
    countryName: "Ivory Coast",
    flagUrl: "https://flagcdn.com/w320/ci.png",
    currencyName: "XOF",
  },
  {
    countryName: "Tunisia",
    flagUrl: "https://flagcdn.com/w320/tn.png",
    currencyName: "TND",
  },
  {
    countryName: "Italy",
    flagUrl: "https://flagcdn.com/w320/it.png",
    currencyName: "EUR",
  },
  {
    countryName: "Benin",
    flagUrl: "https://flagcdn.com/w320/bj.png",
    currencyName: "XOF",
  },
  {
    countryName: "Indonesia",
    flagUrl: "https://flagcdn.com/w320/id.png",
    currencyName: "IDR",
  },
  {
    countryName: "Cape Verde",
    flagUrl: "https://flagcdn.com/w320/cv.png",
    currencyName: "CVE",
  },
  {
    countryName: "Saint Kitts and Nevis",
    flagUrl: "https://flagcdn.com/w320/kn.png",
    currencyName: "XCD",
  },
  {
    countryName: "Laos",
    flagUrl: "https://flagcdn.com/w320/la.png",
    currencyName: "LAK",
  },
  {
    countryName: "Caribbean Netherlands",
    flagUrl: "https://flagcdn.com/w320/bq.png",
    currencyName: "USD",
  },
  {
    countryName: "Uganda",
    flagUrl: "https://flagcdn.com/w320/ug.png",
    currencyName: "UGX",
  },
  {
    countryName: "Andorra",
    flagUrl: "https://flagcdn.com/w320/ad.png",
    currencyName: "EUR",
  },
  {
    countryName: "Burundi",
    flagUrl: "https://flagcdn.com/w320/bi.png",
    currencyName: "BIF",
  },
  {
    countryName: "South Africa",
    flagUrl: "https://flagcdn.com/w320/za.png",
    currencyName: "ZAR",
  },
  {
    countryName: "France",
    flagUrl: "https://flagcdn.com/w320/fr.png",
    currencyName: "EUR",
  },
  {
    countryName: "Libya",
    flagUrl: "https://flagcdn.com/w320/ly.png",
    currencyName: "LYD",
  },
  {
    countryName: "Mexico",
    flagUrl: "https://flagcdn.com/w320/mx.png",
    currencyName: "MXN",
  },
  {
    countryName: "Gabon",
    flagUrl: "https://flagcdn.com/w320/ga.png",
    currencyName: "XAF",
  },
  {
    countryName: "Northern Mariana Islands",
    flagUrl: "https://flagcdn.com/w320/mp.png",
    currencyName: "USD",
  },
  {
    countryName: "North Macedonia",
    flagUrl: "https://flagcdn.com/w320/mk.png",
    currencyName: "MKD",
  },
  {
    countryName: "China",
    flagUrl: "https://flagcdn.com/w320/cn.png",
    currencyName: "CNY",
  },
  {
    countryName: "Yemen",
    flagUrl: "https://flagcdn.com/w320/ye.png",
    currencyName: "YER",
  },
  {
    countryName: "Saint Barthélemy",
    flagUrl: "https://flagcdn.com/w320/bl.png",
    currencyName: "EUR",
  },
  {
    countryName: "Guernsey",
    flagUrl: "https://flagcdn.com/w320/gg.png",
    currencyName: "GBP",
  },
  {
    countryName: "Solomon Islands",
    flagUrl: "https://flagcdn.com/w320/sb.png",
    currencyName: "SBD",
  },
  {
    countryName: "Svalbard and Jan Mayen",
    flagUrl: "https://flagcdn.com/w320/sj.png",
    currencyName: "NOK",
  },
  {
    countryName: "Faroe Islands",
    flagUrl: "https://flagcdn.com/w320/fo.png",
    currencyName: "DKK",
  },
  {
    countryName: "Uzbekistan",
    flagUrl: "https://flagcdn.com/w320/uz.png",
    currencyName: "UZS",
  },
  {
    countryName: "Egypt",
    flagUrl: "https://flagcdn.com/w320/eg.png",
    currencyName: "EGP",
  },
  {
    countryName: "Senegal",
    flagUrl: "https://flagcdn.com/w320/sn.png",
    currencyName: "XOF",
  },
  {
    countryName: "Sri Lanka",
    flagUrl: "https://flagcdn.com/w320/lk.png",
    currencyName: "LKR",
  },
  {
    countryName: "Palestine",
    flagUrl: "https://flagcdn.com/w320/ps.png",
    currencyName: "EGP",
  },
  {
    countryName: "Bangladesh",
    flagUrl: "https://flagcdn.com/w320/bd.png",
    currencyName: "BDT",
  },
  {
    countryName: "Peru",
    flagUrl: "https://flagcdn.com/w320/pe.png",
    currencyName: "PEN",
  },
  {
    countryName: "Singapore",
    flagUrl: "https://flagcdn.com/w320/sg.png",
    currencyName: "SGD",
  },
  {
    countryName: "Turkey",
    flagUrl: "https://flagcdn.com/w320/tr.png",
    currencyName: "TRY",
  },
  {
    countryName: "Afghanistan",
    flagUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
    currencyName: "AFN",
  },
  {
    countryName: "Aruba",
    flagUrl: "https://flagcdn.com/w320/aw.png",
    currencyName: "AWG",
  },
  {
    countryName: "United Kingdom",
    flagUrl: "https://flagcdn.com/w320/gb.png",
    currencyName: "GBP",
  },
  {
    countryName: "Zambia",
    flagUrl: "https://flagcdn.com/w320/zm.png",
    currencyName: "ZMW",
  },
  {
    countryName: "Finland",
    flagUrl: "https://flagcdn.com/w320/fi.png",
    currencyName: "EUR",
  },
  {
    countryName: "Niger",
    flagUrl: "https://flagcdn.com/w320/ne.png",
    currencyName: "XOF",
  },
  {
    countryName: "Christmas Island",
    flagUrl: "https://flagcdn.com/w320/cx.png",
    currencyName: "AUD",
  },
  {
    countryName: "Tokelau",
    flagUrl: "https://flagcdn.com/w320/tk.png",
    currencyName: "NZD",
  },
  {
    countryName: "Guinea-Bissau",
    flagUrl: "https://flagcdn.com/w320/gw.png",
    currencyName: "XOF",
  },
  {
    countryName: "Azerbaijan",
    flagUrl: "https://flagcdn.com/w320/az.png",
    currencyName: "AZN",
  },
  {
    countryName: "Réunion",
    flagUrl: "https://flagcdn.com/w320/re.png",
    currencyName: "EUR",
  },
  {
    countryName: "Djibouti",
    flagUrl: "https://flagcdn.com/w320/dj.png",
    currencyName: "DJF",
  },
  {
    countryName: "North Korea",
    flagUrl: "https://flagcdn.com/w320/kp.png",
    currencyName: "KPW",
  },
  {
    countryName: "Mauritius",
    flagUrl: "https://flagcdn.com/w320/mu.png",
    currencyName: "MUR",
  },
  {
    countryName: "Montserrat",
    flagUrl: "https://flagcdn.com/w320/ms.png",
    currencyName: "XCD",
  },
  {
    countryName: "United States Virgin Islands",
    flagUrl: "https://flagcdn.com/w320/vi.png",
    currencyName: "USD",
  },
  {
    countryName: "Colombia",
    flagUrl: "https://flagcdn.com/w320/co.png",
    currencyName: "COP",
  },
  {
    countryName: "Greece",
    flagUrl: "https://flagcdn.com/w320/gr.png",
    currencyName: "EUR",
  },
  {
    countryName: "Croatia",
    flagUrl: "https://flagcdn.com/w320/hr.png",
    currencyName: "EUR",
  },
  {
    countryName: "Morocco",
    flagUrl: "https://flagcdn.com/w320/ma.png",
    currencyName: "MAD",
  },
  {
    countryName: "Algeria",
    flagUrl: "https://flagcdn.com/w320/dz.png",
    currencyName: "DZD",
  },
  {
    countryName: "Netherlands",
    flagUrl: "https://flagcdn.com/w320/nl.png",
    currencyName: "EUR",
  },
  {
    countryName: "Sudan",
    flagUrl: "https://flagcdn.com/w320/sd.png",
    currencyName: "SDG",
  },
  {
    countryName: "Fiji",
    flagUrl: "https://flagcdn.com/w320/fj.png",
    currencyName: "FJD",
  },
  {
    countryName: "Liechtenstein",
    flagUrl: "https://flagcdn.com/w320/li.png",
    currencyName: "CHF",
  },
  {
    countryName: "Nepal",
    flagUrl: "https://flagcdn.com/w320/np.png",
    currencyName: "NPR",
  },
  {
    countryName: "Puerto Rico",
    flagUrl: "https://flagcdn.com/w320/pr.png",
    currencyName: "USD",
  },
  {
    countryName: "Georgia",
    flagUrl: "https://flagcdn.com/w320/ge.png",
    currencyName: "GEL",
  },
  {
    countryName: "Pakistan",
    flagUrl: "https://flagcdn.com/w320/pk.png",
    currencyName: "PKR",
  },
  {
    countryName: "Monaco",
    flagUrl: "https://flagcdn.com/w320/mc.png",
    currencyName: "EUR",
  },
  {
    countryName: "Botswana",
    flagUrl: "https://flagcdn.com/w320/bw.png",
    currencyName: "BWP",
  },
  {
    countryName: "Lebanon",
    flagUrl: "https://flagcdn.com/w320/lb.png",
    currencyName: "LBP",
  },
  {
    countryName: "Papua New Guinea",
    flagUrl: "https://flagcdn.com/w320/pg.png",
    currencyName: "PGK",
  },
  {
    countryName: "Mayotte",
    flagUrl: "https://flagcdn.com/w320/yt.png",
    currencyName: "EUR",
  },
  {
    countryName: "Dominican Republic",
    flagUrl: "https://flagcdn.com/w320/do.png",
    currencyName: "DOP",
  },
  {
    countryName: "Norfolk Island",
    flagUrl: "https://flagcdn.com/w320/nf.png",
    currencyName: "AUD",
  },
  {
    countryName: "Qatar",
    flagUrl: "https://flagcdn.com/w320/qa.png",
    currencyName: "QAR",
  },
  {
    countryName: "Madagascar",
    flagUrl: "https://flagcdn.com/w320/mg.png",
    currencyName: "MGA",
  },
  {
    countryName: "India",
    flagUrl: "https://flagcdn.com/w320/in.png",
    currencyName: "INR",
  },
  {
    countryName: "Syria",
    flagUrl: "https://flagcdn.com/w320/sy.png",
    currencyName: "SYP",
  },
  {
    countryName: "Montenegro",
    flagUrl: "https://flagcdn.com/w320/me.png",
    currencyName: "EUR",
  },
  {
    countryName: "Eswatini",
    flagUrl: "https://flagcdn.com/w320/sz.png",
    currencyName: "SZL",
  },
  {
    countryName: "Paraguay",
    flagUrl: "https://flagcdn.com/w320/py.png",
    currencyName: "PYG",
  },
  {
    countryName: "El Salvador",
    flagUrl: "https://flagcdn.com/w320/sv.png",
    currencyName: "USD",
  },
  {
    countryName: "Ukraine",
    flagUrl: "https://flagcdn.com/w320/ua.png",
    currencyName: "UAH",
  },
  {
    countryName: "Isle of Man",
    flagUrl: "https://flagcdn.com/w320/im.png",
    currencyName: "GBP",
  },
  {
    countryName: "Namibia",
    flagUrl: "https://flagcdn.com/w320/na.png",
    currencyName: "NAD",
  },
  {
    countryName: "United Arab Emirates",
    flagUrl: "https://flagcdn.com/w320/ae.png",
    currencyName: "AED",
  },
  {
    countryName: "Bulgaria",
    flagUrl: "https://flagcdn.com/w320/bg.png",
    currencyName: "BGN",
  },
  {
    countryName: "Greenland",
    flagUrl: "https://flagcdn.com/w320/gl.png",
    currencyName: "DKK",
  },
  {
    countryName: "Germany",
    flagUrl: "https://flagcdn.com/w320/de.png",
    currencyName: "EUR",
  },
  {
    countryName: "Cambodia",
    flagUrl: "https://flagcdn.com/w320/kh.png",
    currencyName: "KHR",
  },
  {
    countryName: "Iraq",
    flagUrl: "https://flagcdn.com/w320/iq.png",
    currencyName: "IQD",
  },
  {
    countryName: "French Southern and Antarctic Lands",
    flagUrl: "https://flagcdn.com/w320/tf.png",
    currencyName: "EUR",
  },
  {
    countryName: "Sweden",
    flagUrl: "https://flagcdn.com/w320/se.png",
    currencyName: "SEK",
  },
  {
    countryName: "Cuba",
    flagUrl: "https://flagcdn.com/w320/cu.png",
    currencyName: "CUC",
  },
  {
    countryName: "Kyrgyzstan",
    flagUrl: "https://flagcdn.com/w320/kg.png",
    currencyName: "KGS",
  },
  {
    countryName: "Russia",
    flagUrl: "https://flagcdn.com/w320/ru.png",
    currencyName: "RUB",
  },
  {
    countryName: "Malaysia",
    flagUrl: "https://flagcdn.com/w320/my.png",
    currencyName: "MYR",
  },
  {
    countryName: "Cyprus",
    flagUrl: "https://flagcdn.com/w320/cy.png",
    currencyName: "EUR",
  },
  {
    countryName: "Canada",
    flagUrl: "https://flagcdn.com/w320/ca.png",
    currencyName: "CAD",
  },
  {
    countryName: "Malawi",
    flagUrl: "https://flagcdn.com/w320/mw.png",
    currencyName: "MWK",
  },
  {
    countryName: "Saudi Arabia",
    flagUrl: "https://flagcdn.com/w320/sa.png",
    currencyName: "SAR",
  },
  {
    countryName: "Bosnia and Herzegovina",
    flagUrl: "https://flagcdn.com/w320/ba.png",
    currencyName: "BAM",
  },
  {
    countryName: "Ethiopia",
    flagUrl: "https://flagcdn.com/w320/et.png",
    currencyName: "ETB",
  },
  {
    countryName: "Spain",
    flagUrl: "https://flagcdn.com/w320/es.png",
    currencyName: "EUR",
  },
  {
    countryName: "Slovenia",
    flagUrl: "https://flagcdn.com/w320/si.png",
    currencyName: "EUR",
  },
  {
    countryName: "Oman",
    flagUrl: "https://flagcdn.com/w320/om.png",
    currencyName: "OMR",
  },
  {
    countryName: "Saint Pierre and Miquelon",
    flagUrl: "https://flagcdn.com/w320/pm.png",
    currencyName: "EUR",
  },
  {
    countryName: "Macau",
    flagUrl: "https://flagcdn.com/w320/mo.png",
    currencyName: "MOP",
  },
  {
    countryName: "San Marino",
    flagUrl: "https://flagcdn.com/w320/sm.png",
    currencyName: "EUR",
  },
  {
    countryName: "Lesotho",
    flagUrl: "https://flagcdn.com/w320/ls.png",
    currencyName: "LSL",
  },
  {
    countryName: "Marshall Islands",
    flagUrl: "https://flagcdn.com/w320/mh.png",
    currencyName: "USD",
  },
  {
    countryName: "Sint Maarten",
    flagUrl: "https://flagcdn.com/w320/sx.png",
    currencyName: "ANG",
  },
  {
    countryName: "Iceland",
    flagUrl: "https://flagcdn.com/w320/is.png",
    currencyName: "ISK",
  },
  {
    countryName: "Luxembourg",
    flagUrl: "https://flagcdn.com/w320/lu.png",
    currencyName: "EUR",
  },
  {
    countryName: "Argentina",
    flagUrl: "https://flagcdn.com/w320/ar.png",
    currencyName: "ARS",
  },
  {
    countryName: "Turks and Caicos Islands",
    flagUrl: "https://flagcdn.com/w320/tc.png",
    currencyName: "USD",
  },
  {
    countryName: "Nauru",
    flagUrl: "https://flagcdn.com/w320/nr.png",
    currencyName: "AUD",
  },
  {
    countryName: "Cocos (Keeling) Islands",
    flagUrl: "https://flagcdn.com/w320/cc.png",
    currencyName: "AUD",
  },
  {
    countryName: "Western Sahara",
    flagUrl: "https://flagcdn.com/w320/eh.png",
    currencyName: "DZD",
  },
  {
    countryName: "Dominica",
    flagUrl: "https://flagcdn.com/w320/dm.png",
    currencyName: "XCD",
  },
  {
    countryName: "Costa Rica",
    flagUrl: "https://flagcdn.com/w320/cr.png",
    currencyName: "CRC",
  },
  {
    countryName: "Australia",
    flagUrl: "https://flagcdn.com/w320/au.png",
    currencyName: "AUD",
  },
  {
    countryName: "Thailand",
    flagUrl: "https://flagcdn.com/w320/th.png",
    currencyName: "THB",
  },
  {
    countryName: "Haiti",
    flagUrl: "https://flagcdn.com/w320/ht.png",
    currencyName: "HTG",
  },
  {
    countryName: "Tuvalu",
    flagUrl: "https://flagcdn.com/w320/tv.png",
    currencyName: "AUD",
  },
  {
    countryName: "Honduras",
    flagUrl: "https://flagcdn.com/w320/hn.png",
    currencyName: "HNL",
  },
  {
    countryName: "Equatorial Guinea",
    flagUrl: "https://flagcdn.com/w320/gq.png",
    currencyName: "XAF",
  },
  {
    countryName: "Saint Lucia",
    flagUrl: "https://flagcdn.com/w320/lc.png",
    currencyName: "XCD",
  },
  {
    countryName: "French Polynesia",
    flagUrl: "https://flagcdn.com/w320/pf.png",
    currencyName: "XPF",
  },
  {
    countryName: "Belarus",
    flagUrl: "https://flagcdn.com/w320/by.png",
    currencyName: "BYN",
  },
  {
    countryName: "Latvia",
    flagUrl: "https://flagcdn.com/w320/lv.png",
    currencyName: "EUR",
  },
  {
    countryName: "Palau",
    flagUrl: "https://flagcdn.com/w320/pw.png",
    currencyName: "USD",
  },
  {
    countryName: "Guadeloupe",
    flagUrl: "https://flagcdn.com/w320/gp.png",
    currencyName: "EUR",
  },
  {
    countryName: "Philippines",
    flagUrl: "https://flagcdn.com/w320/ph.png",
    currencyName: "PHP",
  },
  {
    countryName: "Gibraltar",
    flagUrl: "https://flagcdn.com/w320/gi.png",
    currencyName: "GIP",
  },
  {
    countryName: "Denmark",
    flagUrl: "https://flagcdn.com/w320/dk.png",
    currencyName: "DKK",
  },
  {
    countryName: "Cameroon",
    flagUrl: "https://flagcdn.com/w320/cm.png",
    currencyName: "XAF",
  },
  {
    countryName: "Guinea",
    flagUrl: "https://flagcdn.com/w320/gn.png",
    currencyName: "GNF",
  },
  {
    countryName: "Bahrain",
    flagUrl: "https://flagcdn.com/w320/bh.png",
    currencyName: "BHD",
  },
  {
    countryName: "Suriname",
    flagUrl: "https://flagcdn.com/w320/sr.png",
    currencyName: "SRD",
  },
  {
    countryName: "DR Congo",
    flagUrl: "https://flagcdn.com/w320/cd.png",
    currencyName: "CDF",
  },
  {
    countryName: "Somalia",
    flagUrl: "https://flagcdn.com/w320/so.png",
    currencyName: "SOS",
  },
  {
    countryName: "Czechia",
    flagUrl: "https://flagcdn.com/w320/cz.png",
    currencyName: "CZK",
  },
  {
    countryName: "New Caledonia",
    flagUrl: "https://flagcdn.com/w320/nc.png",
    currencyName: "XPF",
  },
  {
    countryName: "Vanuatu",
    flagUrl: "https://flagcdn.com/w320/vu.png",
    currencyName: "VUV",
  },
  {
    countryName: "Saint Helena, Ascension and Tristan da Cunha",
    flagUrl: "https://flagcdn.com/w320/sh.png",
    currencyName: "GBP",
  },
  {
    countryName: "Togo",
    flagUrl: "https://flagcdn.com/w320/tg.png",
    currencyName: "XOF",
  },
  {
    countryName: "British Virgin Islands",
    flagUrl: "https://flagcdn.com/w320/vg.png",
    currencyName: "USD",
  },
  {
    countryName: "Kenya",
    flagUrl: "https://flagcdn.com/w320/ke.png",
    currencyName: "KES",
  },
  {
    countryName: "Niue",
    flagUrl: "https://flagcdn.com/w320/nu.png",
    currencyName: "NZD",
  },
  {
    countryName: "Rwanda",
    flagUrl: "https://flagcdn.com/w320/rw.png",
    currencyName: "RWF",
  },
  {
    countryName: "Estonia",
    flagUrl: "https://flagcdn.com/w320/ee.png",
    currencyName: "EUR",
  },
  {
    countryName: "Romania",
    flagUrl: "https://flagcdn.com/w320/ro.png",
    currencyName: "RON",
  },
  {
    countryName: "Trinidad and Tobago",
    flagUrl: "https://flagcdn.com/w320/tt.png",
    currencyName: "TTD",
  },
  {
    countryName: "Guyana",
    flagUrl: "https://flagcdn.com/w320/gy.png",
    currencyName: "GYD",
  },
  {
    countryName: "Timor-Leste",
    flagUrl: "https://flagcdn.com/w320/tl.png",
    currencyName: "USD",
  },
  {
    countryName: "Vietnam",
    flagUrl: "https://flagcdn.com/w320/vn.png",
    currencyName: "VND",
  },
  {
    countryName: "Uruguay",
    flagUrl: "https://flagcdn.com/w320/uy.png",
    currencyName: "UYU",
  },
  {
    countryName: "Vatican City",
    flagUrl: "https://flagcdn.com/w320/va.png",
    currencyName: "EUR",
  },
  {
    countryName: "Hong Kong",
    flagUrl: "https://flagcdn.com/w320/hk.png",
    currencyName: "HKD",
  },
  {
    countryName: "Austria",
    flagUrl: "https://flagcdn.com/w320/at.png",
    currencyName: "EUR",
  },
  {
    countryName: "Antigua and Barbuda",
    flagUrl: "https://flagcdn.com/w320/ag.png",
    currencyName: "XCD",
  },
  {
    countryName: "Turkmenistan",
    flagUrl: "https://flagcdn.com/w320/tm.png",
    currencyName: "TMT",
  },
  {
    countryName: "Mozambique",
    flagUrl: "https://flagcdn.com/w320/mz.png",
    currencyName: "MZN",
  },
  {
    countryName: "Panama",
    flagUrl: "https://flagcdn.com/w320/pa.png",
    currencyName: "PAB",
  },
  {
    countryName: "Micronesia",
    flagUrl: "https://flagcdn.com/w320/fm.png",
    currencyName: "USD",
  },
  {
    countryName: "Ireland",
    flagUrl: "https://flagcdn.com/w320/ie.png",
    currencyName: "EUR",
  },
  {
    countryName: "Curaçao",
    flagUrl: "https://flagcdn.com/w320/cw.png",
    currencyName: "ANG",
  },
  {
    countryName: "French Guiana",
    flagUrl: "https://flagcdn.com/w320/gf.png",
    currencyName: "EUR",
  },
  {
    countryName: "Norway",
    flagUrl: "https://flagcdn.com/w320/no.png",
    currencyName: "NOK",
  },
  {
    countryName: "Åland Islands",
    flagUrl: "https://flagcdn.com/w320/ax.png",
    currencyName: "EUR",
  },
  {
    countryName: "Central African Republic",
    flagUrl: "https://flagcdn.com/w320/cf.png",
    currencyName: "XAF",
  },
  {
    countryName: "Burkina Faso",
    flagUrl: "https://flagcdn.com/w320/bf.png",
    currencyName: "XOF",
  },
  {
    countryName: "Eritrea",
    flagUrl: "https://flagcdn.com/w320/er.png",
    currencyName: "ERN",
  },
  {
    countryName: "Tanzania",
    flagUrl: "https://flagcdn.com/w320/tz.png",
    currencyName: "TZS",
  },
  {
    countryName: "South Korea",
    flagUrl: "https://flagcdn.com/w320/kr.png",
    currencyName: "KRW",
  },
  {
    countryName: "Jordan",
    flagUrl: "https://flagcdn.com/w320/jo.png",
    currencyName: "JOD",
  },
  {
    countryName: "Lithuania",
    flagUrl: "https://flagcdn.com/w320/lt.png",
    currencyName: "EUR",
  },
  {
    countryName: "United States Minor Outlying Islands",
    flagUrl: "https://flagcdn.com/w320/um.png",
    currencyName: "USD",
  },
  {
    countryName: "Slovakia",
    flagUrl: "https://flagcdn.com/w320/sk.png",
    currencyName: "EUR",
  },
  {
    countryName: "Angola",
    flagUrl: "https://flagcdn.com/w320/ao.png",
    currencyName: "AOA",
  },
  {
    countryName: "Kazakhstan",
    flagUrl: "https://flagcdn.com/w320/kz.png",
    currencyName: "KZT",
  },
  {
    countryName: "Moldova",
    flagUrl: "https://flagcdn.com/w320/md.png",
    currencyName: "MDL",
  },
  {
    countryName: "Mali",
    flagUrl: "https://flagcdn.com/w320/ml.png",
    currencyName: "XOF",
  },
  {
    countryName: "Falkland Islands",
    flagUrl: "https://flagcdn.com/w320/fk.png",
    currencyName: "FKP",
  },
  {
    countryName: "Armenia",
    flagUrl: "https://flagcdn.com/w320/am.png",
    currencyName: "AMD",
  },
  {
    countryName: "Samoa",
    flagUrl: "https://flagcdn.com/w320/ws.png",
    currencyName: "WST",
  },
  {
    countryName: "Jersey",
    flagUrl: "https://flagcdn.com/w320/je.png",
    currencyName: "GBP",
  },
  {
    countryName: "Japan",
    flagUrl: "https://flagcdn.com/w320/jp.png",
    currencyName: "JPY",
  },
  {
    countryName: "Bolivia",
    flagUrl: "https://flagcdn.com/w320/bo.png",
    currencyName: "BOB",
  },
  {
    countryName: "Chile",
    flagUrl: "https://flagcdn.com/w320/cl.png",
    currencyName: "CLP",
  },
  {
    countryName: "United States",
    flagUrl: "https://flagcdn.com/w320/us.png",
    currencyName: "USD",
  },
  {
    countryName: "Saint Vincent and the Grenadines",
    flagUrl: "https://flagcdn.com/w320/vc.png",
    currencyName: "XCD",
  },
  {
    countryName: "Bermuda",
    flagUrl: "https://flagcdn.com/w320/bm.png",
    currencyName: "BMD",
  },
  {
    countryName: "Seychelles",
    flagUrl: "https://flagcdn.com/w320/sc.png",
    currencyName: "SCR",
  },
  {
    countryName: "British Indian Ocean Territory",
    flagUrl: "https://flagcdn.com/w320/io.png",
    currencyName: "USD",
  },
  {
    countryName: "Guatemala",
    flagUrl: "https://flagcdn.com/w320/gt.png",
    currencyName: "GTQ",
  },
  {
    countryName: "Ecuador",
    flagUrl: "https://flagcdn.com/w320/ec.png",
    currencyName: "USD",
  },
  {
    countryName: "Martinique",
    flagUrl: "https://flagcdn.com/w320/mq.png",
    currencyName: "EUR",
  },
  {
    countryName: "Tajikistan",
    flagUrl: "https://flagcdn.com/w320/tj.png",
    currencyName: "TJS",
  },
  {
    countryName: "Malta",
    flagUrl: "https://flagcdn.com/w320/mt.png",
    currencyName: "EUR",
  },
  {
    countryName: "Gambia",
    flagUrl: "https://flagcdn.com/w320/gm.png",
    currencyName: "GMD",
  },
  {
    countryName: "Nigeria",
    flagUrl: "https://flagcdn.com/w320/ng.png",
    currencyName: "NGN",
  },
  {
    countryName: "Bahamas",
    flagUrl: "https://flagcdn.com/w320/bs.png",
    currencyName: "BSD",
  },
  {
    countryName: "Kosovo",
    flagUrl: "https://flagcdn.com/w320/xk.png",
    currencyName: "EUR",
  },
  {
    countryName: "Kuwait",
    flagUrl: "https://flagcdn.com/w320/kw.png",
    currencyName: "KWD",
  },
  {
    countryName: "Maldives",
    flagUrl: "https://flagcdn.com/w320/mv.png",
    currencyName: "MVR",
  },
  {
    countryName: "Iran",
    flagUrl: "https://flagcdn.com/w320/ir.png",
    currencyName: "IRR",
  },
  {
    countryName: "Albania",
    flagUrl: "https://flagcdn.com/w320/al.png",
    currencyName: "ALL",
  },
  {
    countryName: "Brazil",
    flagUrl: "https://flagcdn.com/w320/br.png",
    currencyName: "BRL",
  },
  {
    countryName: "Serbia",
    flagUrl: "https://flagcdn.com/w320/rs.png",
    currencyName: "RSD",
  },
  {
    countryName: "Belize",
    flagUrl: "https://flagcdn.com/w320/bz.png",
    currencyName: "BZD",
  },
  {
    countryName: "Myanmar",
    flagUrl: "https://flagcdn.com/w320/mm.png",
    currencyName: "MMK",
  },
  {
    countryName: "Bhutan",
    flagUrl: "https://flagcdn.com/w320/bt.png",
    currencyName: "BTN",
  },
  {
    countryName: "Liberia",
    flagUrl: "https://flagcdn.com/w320/lr.png",
    currencyName: "LRD",
  },
  {
    countryName: "Jamaica",
    flagUrl: "https://flagcdn.com/w320/jm.png",
    currencyName: "JMD",
  },
  {
    countryName: "Poland",
    flagUrl: "https://flagcdn.com/w320/pl.png",
    currencyName: "PLN",
  },
  {
    countryName: "Cayman Islands",
    flagUrl: "https://flagcdn.com/w320/ky.png",
    currencyName: "KYD",
  },
  {
    countryName: "Brunei",
    flagUrl: "https://flagcdn.com/w320/bn.png",
    currencyName: "BND",
  },
  {
    countryName: "Comoros",
    flagUrl: "https://flagcdn.com/w320/km.png",
    currencyName: "KMF",
  },
  {
    countryName: "Guam",
    flagUrl: "https://flagcdn.com/w320/gu.png",
    currencyName: "USD",
  },
  {
    countryName: "Tonga",
    flagUrl: "https://flagcdn.com/w320/to.png",
    currencyName: "TOP",
  },
  {
    countryName: "Kiribati",
    flagUrl: "https://flagcdn.com/w320/ki.png",
    currencyName: "AUD",
  },
  {
    countryName: "Ghana",
    flagUrl: "https://flagcdn.com/w320/gh.png",
    currencyName: "GHS",
  },
  {
    countryName: "Chad",
    flagUrl: "https://flagcdn.com/w320/td.png",
    currencyName: "XAF",
  },
  {
    countryName: "Zimbabwe",
    flagUrl: "https://flagcdn.com/w320/zw.png",
    currencyName: "ZWL",
  },
  {
    countryName: "Saint Martin",
    flagUrl: "https://flagcdn.com/w320/mf.png",
    currencyName: "EUR",
  },
  {
    countryName: "Mongolia",
    flagUrl: "https://flagcdn.com/w320/mn.png",
    currencyName: "MNT",
  },
  {
    countryName: "Portugal",
    flagUrl: "https://flagcdn.com/w320/pt.png",
    currencyName: "EUR",
  },
  {
    countryName: "American Samoa",
    flagUrl: "https://flagcdn.com/w320/as.png",
    currencyName: "USD",
  },
  {
    countryName: "Republic of the Congo",
    flagUrl: "https://flagcdn.com/w320/cg.png",
    currencyName: "XAF",
  },
  {
    countryName: "Belgium",
    flagUrl: "https://flagcdn.com/w320/be.png",
    currencyName: "EUR",
  },
  {
    countryName: "Israel",
    flagUrl: "https://flagcdn.com/w320/il.png",
    currencyName: "ILS",
  },
  {
    countryName: "New Zealand",
    flagUrl: "https://flagcdn.com/w320/nz.png",
    currencyName: "NZD",
  },
  {
    countryName: "Nicaragua",
    flagUrl: "https://flagcdn.com/w320/ni.png",
    currencyName: "NIO",
  },
  {
    countryName: "Anguilla",
    flagUrl: "https://flagcdn.com/w320/ai.png",
    currencyName: "XCD",
  },
];

export default countryInfo;
