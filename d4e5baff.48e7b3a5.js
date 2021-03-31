(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(9),o=(n(0),n(203)),i={id:"historic-data",title:"OpenEEW sensor dataset",sidebar_label:"OpenEEW sensor dataset"},c={id:"historic-data",title:"OpenEEW sensor dataset",description:"All data contributed to OpenEEW is available as a dataset with AWS OpenData.",source:"@site/docs/historic-data.md",permalink:"/docs/historic-data",editUrl:"https://github.com/openeew/openeew-docs/edit/master/docs/historic-data.md",sidebar_label:"OpenEEW sensor dataset",sidebar:"someSidebar",previous:{title:"Alert a 3rd party service",permalink:"/docs/notify-3rd"},next:{title:"Analyze OpenEEW data",permalink:"/docs/analyze-historic"}},s=[{value:"A note on terminology",id:"a-note-on-terminology",children:[]},{value:"How are records generated?",id:"how-are-records-generated",children:[]},{value:"What happens in the cloud?",id:"what-happens-in-the-cloud",children:[]},{value:"Where is OpenEEW data stored on AWS?",id:"where-is-openeew-data-stored-on-aws",children:[]},{value:"How are records organized on AWS?",id:"how-are-records-organized-on-aws",children:[]},{value:"And device metadata?",id:"and-device-metadata",children:[]}],d={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"All data contributed to OpenEEW is ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://registry.opendata.aws/grillo-openeew/"}),"available as a dataset")," with AWS OpenData."),Object(o.b)("p",null,"This incredible resource dates back to the end of 2017, features data from various countries, and contains some very large magnitude earthquakes (the ones we care about for EEWs!)."),Object(o.b)("p",null,"You can access this data ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/analyze-historic"}),"with our Python library"),", or view and download files with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://s3.amazonaws.com/grillo-openeew/index.html"}),"the OpenEEW viewer"),"."),Object(o.b)("h3",{id:"a-note-on-terminology"},"A note on terminology"),Object(o.b)("p",null,"Within the data, we use the term ",Object(o.b)("inlineCode",{parentName:"p"},"device")," for each IoT accelerometer and ",Object(o.b)("inlineCode",{parentName:"p"},"record")," for each set of accelerometer data that the devices send to the cloud. Therefore, the OpenEEW data consists of many records for many devices."),Object(o.b)("h3",{id:"how-are-records-generated"},"How are records generated?"),Object(o.b)("p",null,"Each device contains a low-noise MEMS accelerometer that provides acceleration values for the three axes x, y and z. These values are returned in gals, where 1 gal = 1 cm/s\xb2. In order to send these values to the cloud in real time, devices collect a small set of triaxial readings, typically either 32 or 125, and send them, together with the Unix time (denoted ",Object(o.b)("inlineCode",{parentName:"p"},"device_t"),") corresponding to the final reading, as a JSON:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "x": [2.723, 2.293, 2.75, ...],\n  "y": [3.134, 1.686, -4.081, ...],\n  "z": [10.636, 13.891, 13.084, ...],\n  "device_t": 1518824421.406,\n  "sr": 31.25\n}\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"sr")," field contains the accelerometer sample rate, which is the number of samples per second. Using this value, it is possible to assign timestamps to the individual (x, y, z) sample points by subtracting a suitable multiple of ",Object(o.b)("inlineCode",{parentName:"p"},"1/sr")," from ",Object(o.b)("inlineCode",{parentName:"p"},"device_t")," (or from ",Object(o.b)("inlineCode",{parentName:"p"},"cloud_t"),", which is introduced below)."),Object(o.b)("p",null,"In the above example where the sample rate is 31.25, if each array has length 32, then we would expect a new record approximately every 1.024 seconds."),Object(o.b)("h3",{id:"what-happens-in-the-cloud"},"What happens in the cloud?"),Object(o.b)("p",null,"Once data reaches the cloud, an additional Unix time is added, denoted ",Object(o.b)("inlineCode",{parentName:"p"},"cloud_t"),", to indicate the time of arrival. Historically this has been useful for sensors that don't include a GPS module fo accurate timekeeping, such as the MX-series. New sensors typically include a GPS module and so the ",Object(o.b)("inlineCode",{parentName:"p"},"device_t")," is preferable over ",Object(o.b)("inlineCode",{parentName:"p"},"cloud_t"),". In rare cases where two records have the same ",Object(o.b)("inlineCode",{parentName:"p"},"cloud_t"),", the ",Object(o.b)("inlineCode",{parentName:"p"},"device_t")," can be used to determine the correct order (or vice versa)."),Object(o.b)("p",null,"We also append the ",Object(o.b)("inlineCode",{parentName:"p"},"country_code")," and ",Object(o.b)("inlineCode",{parentName:"p"},"device_id")," fields to identify which device sent the record. So the final record looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "country_code": "mx",\n  "device_id": "008",\n  "x": [2.723, 2.293, 2.75, ...],\n  "y": [3.134, 1.686, -4.081, ...],\n  "z": [10.636, 13.891, 13.084, ...],\n  "device_t": 1518824421.406,\n  "cloud_t": 1518824421.398,\n  "sr": 31.25\n}\n')),Object(o.b)("h3",{id:"where-is-openeew-data-stored-on-aws"},"Where is OpenEEW data stored on AWS?"),Object(o.b)("p",null,"As shown on the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://registry.opendata.aws/grillo-openeew/"}),"AWS Registry of Open Data"),", OpenEEW data is available from an S3 bucket called ",Object(o.b)("inlineCode",{parentName:"p"},"grillo-openeew")," in the region ",Object(o.b)("inlineCode",{parentName:"p"},"us-east-1"),". This data is publicly available and does not require an AWS account to access it, although having one provides additional options for working with the data."),Object(o.b)("p",null,"You can view and download the OpenEEW records using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://s3.amazonaws.com/grillo-openeew/index.html"}),"this file browser"),"."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/openeew-s3-browser.PNG",alt:"s3-browser"}))),Object(o.b)("h3",{id:"how-are-records-organized-on-aws"},"How are records organized on AWS?"),Object(o.b)("p",null,"Records are assigned to files according to country and device, and then by date based on the ",Object(o.b)("inlineCode",{parentName:"p"},"cloud_t")," field. A typical file name (or key) has the following structure:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"records/\n  country_code=<country_code>/\n    device_id=<device_id>/\n      year=<year>/\n        month=<month>/\n          day=<day>/\n            hour=<hour>/\n              <minute>.jsonl\n")),Object(o.b)("p",null,"For example, the sample record from above can be found in the file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"records/country_code=mx/device_id=008/year=2018/month=02/day=16/hour=23/40.jsonl\n")),Object(o.b)("p",null,"Note that the ",Object(o.b)("inlineCode",{parentName:"p"},"<minute>")," value is currently set to increment by five minutes, i.e. 00, 05, 10, etc. The corresponding five-minute intervals of each file are inclusive at the lower end and exclusive at the upper end. For example, if ",Object(o.b)("inlineCode",{parentName:"p"},"cloud_t")," for a record corresponds to exactly 40 minutes and 0 seconds, that record will be assigned to the file ending ",Object(o.b)("inlineCode",{parentName:"p"},"/40.jsonl")," (as opposed to ",Object(o.b)("inlineCode",{parentName:"p"},"/35.jsonl"),")."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},".jsonl")," file extension indicates that records are stored as ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://jsonlines.org/"}),"newline-delimited JSON objects"),". This means each file contains one JSON per line, where each JSON is a single record with a structure as described above."),Object(o.b)("h3",{id:"and-device-metadata"},"And device metadata?"),Object(o.b)("p",null,"In order to work with these records, some basic metadata about the devices is required, especially their locations. This metadata is organized by country and can be found in files named as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"devices/\n  country_code=<country_code>/\n    devices.jsonl\n")),Object(o.b)("p",null,"We again use the ",Object(o.b)("inlineCode",{parentName:"p"},".jsonl")," structure for consistency with records.\nThe complete history of device metadata is included, so that any changes in, say, device location can be tracked. A typical entry looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "country_code": "mx",\n  "device_id": "008",\n  "latitude": 16.61,\n  "longitude": -98.98,\n  "effective_from": 1483228800.0,\n  "effective_to": 253402300799.0,\n  "is_current_row": true,\n  "vertical_axis": "x",\n  "horizontal_axes": ["y", "z"]\n}\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"effective_from")," and ",Object(o.b)("inlineCode",{parentName:"p"},"effective_to")," fields, in Unix time, give the dates on which the metadata was valid. These values will never overlap between different rows for a given device, so that a query of the form ",Object(o.b)("inlineCode",{parentName:"p"},"effective_from \u2264 t \u2264 effective_to")," will never return more than one entry. This is the same as using a ",Object(o.b)("inlineCode",{parentName:"p"},"BETWEEN")," operator in SQL. For simplicity, the ",Object(o.b)("inlineCode",{parentName:"p"},"is_current_row")," field can also be used to check for currently valid metadata."),Object(o.b)("p",null,"The vertical_axis and horizontal_axes fields are useful for certain calculations, such as Peak Ground Accelerations."))}l.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,h=p["".concat(i,".").concat(u)]||p[u]||b[u]||o;return n?r.a.createElement(h,c(c({ref:t},d),{},{components:n})):r.a.createElement(h,c({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);