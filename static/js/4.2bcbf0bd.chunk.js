(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{317:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return f});var a=t(12),o=t(15),i=t(21),r=t(20),l=t(22),s=t(0),p=t.n(s),c=t(319),g=t(318),m=t(314),u=t.n(m),f=function(e){function n(){var e;return Object(a.a)(this,n),(e=Object(i.a)(this,Object(r.a)(n).call(this))).state={lat:51.505,lng:-.09,zoom:13},e}return Object(l.a)(n,e),Object(o.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.gpx&&this.props.gpx!==e.gpx&&this.updateMap()}},{key:"updateMap",value:function(){this.parse(this.props.gpx)}},{key:"parse",value:function(e){var n=this;null!==this.refs.mapInstance.leafletElement&&this.refs.mapInstance.leafletElement.eachLayer(function(e){n.refs.mapInstance.leafletElement.removeLayer(e)}),null!=this.control&&this.control.remove(),u.a.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(this.refs.mapInstance.leafletElement);var t=new u.a.GPX(e,{async:!0,polyline_options:{color:"green",opacity:.75,weight:3,lineCap:"round"},marker_options:{wptIcons:{"":new u.a.Icon({iconUrl:"img/pin.png"}),Triangle:new u.a.Icon({iconUrl:"img/triangle.png"}),Circle:new u.a.Icon({iconUrl:"img/circle.png"}),Square:new u.a.Icon({iconUrl:"img/square.png"}),Pin:new u.a.Icon({iconUrl:"img/pin.png"}),Flag:new u.a.Icon({iconUrl:"img/flag.png"})},pointMatchers:[{regex:/.\*?/,icon:new u.a.Icon({iconUrl:"img/pin.png"})}],startIconUrl:"img/pin-icon-start.png",endIconUrl:"img/pin-icon-end.png",shadowUrl:"img/pin-shadow.png"},gpx_options:{parseElements:["track","route","waypoint"],joinTrackSegments:!1}}).on("addpoint",function(e){null!=e.element.getElementsByTagName("name")[0]&&e.point.bindPopup(e.element.getElementsByTagName("name")[0].innerHTML)}).on("loaded",function(e){var t=e.target;n.refs.mapInstance.leafletElement.fitBounds(t.getBounds())}).addTo(this.refs.mapInstance.leafletElement);this.control=u.a.control.layers({},{GPX:t}).addTo(this.refs.mapInstance.leafletElement),this.refs.mapInstance.leafletElement.dragging.disable(),this.refs.mapInstance.leafletElement.dragging.enable()}},{key:"render",value:function(){var e=[this.state.lat,this.state.lng];return p.a.createElement(c.a,{center:e,zoom:this.state.zoom,ref:"mapInstance"},p.a.createElement(g.a,{attribution:"\xa9 <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors",url:"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}))}}]),n}(p.a.Component)}}]);
//# sourceMappingURL=4.2bcbf0bd.chunk.js.map