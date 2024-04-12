var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PuneGeoBoundary_1 = new ol.format.GeoJSON();
var features_PuneGeoBoundary_1 = format_PuneGeoBoundary_1.readFeatures(json_PuneGeoBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuneGeoBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuneGeoBoundary_1.addFeatures(features_PuneGeoBoundary_1);
var lyr_PuneGeoBoundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PuneGeoBoundary_1, 
                style: style_PuneGeoBoundary_1,
                popuplayertitle: "Pune Geo Boundary",
                interactive: true,
                title: '<img src="styles/legend/PuneGeoBoundary_1.png" /> Pune Geo Boundary'
            });
var format_PimpreChinchwadboundary_2 = new ol.format.GeoJSON();
var features_PimpreChinchwadboundary_2 = format_PimpreChinchwadboundary_2.readFeatures(json_PimpreChinchwadboundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PimpreChinchwadboundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PimpreChinchwadboundary_2.addFeatures(features_PimpreChinchwadboundary_2);
var lyr_PimpreChinchwadboundary_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PimpreChinchwadboundary_2, 
                style: style_PimpreChinchwadboundary_2,
                popuplayertitle: "Pimpre Chinchwad boundary",
                interactive: true,
                title: '<img src="styles/legend/PimpreChinchwadboundary_2.png" /> Pimpre Chinchwad boundary'
            });
var format_KirkeeBoundary_3 = new ol.format.GeoJSON();
var features_KirkeeBoundary_3 = format_KirkeeBoundary_3.readFeatures(json_KirkeeBoundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KirkeeBoundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KirkeeBoundary_3.addFeatures(features_KirkeeBoundary_3);
var lyr_KirkeeBoundary_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KirkeeBoundary_3, 
                style: style_KirkeeBoundary_3,
                popuplayertitle: "Kirkee Boundary",
                interactive: true,
                title: '<img src="styles/legend/KirkeeBoundary_3.png" /> Kirkee Boundary'
            });
var format_Lahagaon_4 = new ol.format.GeoJSON();
var features_Lahagaon_4 = format_Lahagaon_4.readFeatures(json_Lahagaon_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lahagaon_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lahagaon_4.addFeatures(features_Lahagaon_4);
var lyr_Lahagaon_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lahagaon_4, 
                style: style_Lahagaon_4,
                popuplayertitle: "Lahagaon",
                interactive: true,
                title: '<img src="styles/legend/Lahagaon_4.png" /> Lahagaon'
            });
var format_Yavatmal_5 = new ol.format.GeoJSON();
var features_Yavatmal_5 = format_Yavatmal_5.readFeatures(json_Yavatmal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yavatmal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yavatmal_5.addFeatures(features_Yavatmal_5);
var lyr_Yavatmal_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Yavatmal_5, 
                style: style_Yavatmal_5,
                popuplayertitle: "Yavatmal",
                interactive: true,
                title: '<img src="styles/legend/Yavatmal_5.png" /> Yavatmal'
            });
var format_Keshavnagar_6 = new ol.format.GeoJSON();
var features_Keshavnagar_6 = format_Keshavnagar_6.readFeatures(json_Keshavnagar_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Keshavnagar_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Keshavnagar_6.addFeatures(features_Keshavnagar_6);
var lyr_Keshavnagar_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Keshavnagar_6, 
                style: style_Keshavnagar_6,
                popuplayertitle: "Keshavnagar",
                interactive: true,
                title: '<img src="styles/legend/Keshavnagar_6.png" /> Keshavnagar'
            });
var format_PimpleGaurav_7 = new ol.format.GeoJSON();
var features_PimpleGaurav_7 = format_PimpleGaurav_7.readFeatures(json_PimpleGaurav_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PimpleGaurav_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PimpleGaurav_7.addFeatures(features_PimpleGaurav_7);
var lyr_PimpleGaurav_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PimpleGaurav_7, 
                style: style_PimpleGaurav_7,
                popuplayertitle: "Pimple Gaurav",
                interactive: true,
                title: '<img src="styles/legend/PimpleGaurav_7.png" /> Pimple Gaurav'
            });
var format_Pimpalesaudagar_8 = new ol.format.GeoJSON();
var features_Pimpalesaudagar_8 = format_Pimpalesaudagar_8.readFeatures(json_Pimpalesaudagar_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pimpalesaudagar_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pimpalesaudagar_8.addFeatures(features_Pimpalesaudagar_8);
var lyr_Pimpalesaudagar_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pimpalesaudagar_8, 
                style: style_Pimpalesaudagar_8,
                popuplayertitle: "Pimpale saudagar",
                interactive: true,
                title: '<img src="styles/legend/Pimpalesaudagar_8.png" /> Pimpale saudagar'
            });
var format_AllPunePopReprojected_9 = new ol.format.GeoJSON();
var features_AllPunePopReprojected_9 = format_AllPunePopReprojected_9.readFeatures(json_AllPunePopReprojected_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllPunePopReprojected_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllPunePopReprojected_9.addFeatures(features_AllPunePopReprojected_9);
var lyr_AllPunePopReprojected_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AllPunePopReprojected_9, 
                style: style_AllPunePopReprojected_9,
                popuplayertitle: "All Pune Pop Reprojected",
                interactive: true,
                title: '<img src="styles/legend/AllPunePopReprojected_9.png" /> All Pune Pop Reprojected'
            });
var format_AllPunePopsep_10 = new ol.format.GeoJSON();
var features_AllPunePopsep_10 = format_AllPunePopsep_10.readFeatures(json_AllPunePopsep_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllPunePopsep_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllPunePopsep_10.addFeatures(features_AllPunePopsep_10);
var lyr_AllPunePopsep_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AllPunePopsep_10, 
                style: style_AllPunePopsep_10,
                popuplayertitle: "All Pune Pop sep",
                interactive: true,
                title: '<img src="styles/legend/AllPunePopsep_10.png" /> All Pune Pop sep'
            });
var format_trafficsignal_11 = new ol.format.GeoJSON();
var features_trafficsignal_11 = format_trafficsignal_11.readFeatures(json_trafficsignal_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trafficsignal_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trafficsignal_11.addFeatures(features_trafficsignal_11);
var lyr_trafficsignal_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_trafficsignal_11, 
                style: style_trafficsignal_11,
                popuplayertitle: "traffic signal",
                interactive: true,
                title: '<img src="styles/legend/trafficsignal_11.png" /> traffic signal'
            });
var format_PublicBuildings_12 = new ol.format.GeoJSON();
var features_PublicBuildings_12 = format_PublicBuildings_12.readFeatures(json_PublicBuildings_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicBuildings_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PublicBuildings_12.addFeatures(features_PublicBuildings_12);
var lyr_PublicBuildings_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PublicBuildings_12, 
                style: style_PublicBuildings_12,
                popuplayertitle: "Public Buildings",
                interactive: true,
                title: '<img src="styles/legend/PublicBuildings_12.png" /> Public Buildings'
            });
var format_Temple_13 = new ol.format.GeoJSON();
var features_Temple_13 = format_Temple_13.readFeatures(json_Temple_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Temple_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Temple_13.addFeatures(features_Temple_13);
var lyr_Temple_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Temple_13, 
                style: style_Temple_13,
                popuplayertitle: "Temple",
                interactive: true,
                title: '<img src="styles/legend/Temple_13.png" /> Temple'
            });
var format_Industries_14 = new ol.format.GeoJSON();
var features_Industries_14 = format_Industries_14.readFeatures(json_Industries_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industries_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industries_14.addFeatures(features_Industries_14);
var lyr_Industries_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Industries_14, 
                style: style_Industries_14,
                popuplayertitle: "Industries",
                interactive: true,
                title: '<img src="styles/legend/Industries_14.png" /> Industries'
            });
var format_hospital_15 = new ol.format.GeoJSON();
var features_hospital_15 = format_hospital_15.readFeatures(json_hospital_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hospital_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hospital_15.addFeatures(features_hospital_15);
var lyr_hospital_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hospital_15, 
                style: style_hospital_15,
                popuplayertitle: "hospital",
                interactive: true,
                title: '<img src="styles/legend/hospital_15.png" /> hospital'
            });
var format_Industries_16 = new ol.format.GeoJSON();
var features_Industries_16 = format_Industries_16.readFeatures(json_Industries_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industries_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industries_16.addFeatures(features_Industries_16);
var lyr_Industries_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Industries_16, 
                style: style_Industries_16,
                popuplayertitle: "Industries",
                interactive: true,
                title: '<img src="styles/legend/Industries_16.png" /> Industries'
            });
var format_Route139DMtrs_17 = new ol.format.GeoJSON();
var features_Route139DMtrs_17 = format_Route139DMtrs_17.readFeatures(json_Route139DMtrs_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route139DMtrs_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route139DMtrs_17.addFeatures(features_Route139DMtrs_17);
var lyr_Route139DMtrs_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route139DMtrs_17, 
                style: style_Route139DMtrs_17,
                popuplayertitle: "Route 139D Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Route139DMtrs_17.png" /> Route 139D Mtrs'
            });
var format_139DStops_18 = new ol.format.GeoJSON();
var features_139DStops_18 = format_139DStops_18.readFeatures(json_139DStops_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_139DStops_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_139DStops_18.addFeatures(features_139DStops_18);
var lyr_139DStops_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_139DStops_18, 
                style: style_139DStops_18,
                popuplayertitle: "139D Stops",
                interactive: true,
    title: '139D Stops<br />\
    <img src="styles/legend/139DStops_18_0.png" /> 1.0<br />\
    <img src="styles/legend/139DStops_18_1.png" /> 10.0<br />\
    <img src="styles/legend/139DStops_18_2.png" /> 11.0<br />\
    <img src="styles/legend/139DStops_18_3.png" /> 12.0<br />\
    <img src="styles/legend/139DStops_18_4.png" /> 13.0<br />\
    <img src="styles/legend/139DStops_18_5.png" /> 14.0<br />\
    <img src="styles/legend/139DStops_18_6.png" /> 15.0<br />\
    <img src="styles/legend/139DStops_18_7.png" /> 16.0<br />\
    <img src="styles/legend/139DStops_18_8.png" /> 17.0<br />\
    <img src="styles/legend/139DStops_18_9.png" /> 18.0<br />\
    <img src="styles/legend/139DStops_18_10.png" /> 2.0<br />\
    <img src="styles/legend/139DStops_18_11.png" /> 3.0<br />\
    <img src="styles/legend/139DStops_18_12.png" /> 4.0<br />\
    <img src="styles/legend/139DStops_18_13.png" /> 5.0<br />\
    <img src="styles/legend/139DStops_18_14.png" /> 6.0<br />\
    <img src="styles/legend/139DStops_18_15.png" /> 7.0<br />\
    <img src="styles/legend/139DStops_18_16.png" /> 8.0<br />\
    <img src="styles/legend/139DStops_18_17.png" /> 9.0<br />\
    <img src="styles/legend/139DStops_18_18.png" /> <br />'
        });
var format_Rt139Pop100MTr_19 = new ol.format.GeoJSON();
var features_Rt139Pop100MTr_19 = format_Rt139Pop100MTr_19.readFeatures(json_Rt139Pop100MTr_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt139Pop100MTr_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt139Pop100MTr_19.addFeatures(features_Rt139Pop100MTr_19);
var lyr_Rt139Pop100MTr_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt139Pop100MTr_19, 
                style: style_Rt139Pop100MTr_19,
                popuplayertitle: "Rt 139 Pop 100 MTr",
                interactive: true,
                title: '<img src="styles/legend/Rt139Pop100MTr_19.png" /> Rt 139 Pop 100 MTr'
            });
var format_Rt139Education_20 = new ol.format.GeoJSON();
var features_Rt139Education_20 = format_Rt139Education_20.readFeatures(json_Rt139Education_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt139Education_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt139Education_20.addFeatures(features_Rt139Education_20);
var lyr_Rt139Education_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt139Education_20, 
                style: style_Rt139Education_20,
                popuplayertitle: "Rt 139 Education",
                interactive: true,
                title: '<img src="styles/legend/Rt139Education_20.png" /> Rt 139 Education'
            });
var format_Route139Hospitals_21 = new ol.format.GeoJSON();
var features_Route139Hospitals_21 = format_Route139Hospitals_21.readFeatures(json_Route139Hospitals_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route139Hospitals_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route139Hospitals_21.addFeatures(features_Route139Hospitals_21);
var lyr_Route139Hospitals_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route139Hospitals_21, 
                style: style_Route139Hospitals_21,
                popuplayertitle: "Route 139 Hospitals",
                interactive: true,
                title: '<img src="styles/legend/Route139Hospitals_21.png" /> Route 139 Hospitals'
            });
var format_Rt139Offices_22 = new ol.format.GeoJSON();
var features_Rt139Offices_22 = format_Rt139Offices_22.readFeatures(json_Rt139Offices_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt139Offices_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt139Offices_22.addFeatures(features_Rt139Offices_22);
var lyr_Rt139Offices_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt139Offices_22, 
                style: style_Rt139Offices_22,
                popuplayertitle: "Rt 139 Offices",
                interactive: true,
                title: '<img src="styles/legend/Rt139Offices_22.png" /> Rt 139 Offices'
            });
var format_RT139PSU_23 = new ol.format.GeoJSON();
var features_RT139PSU_23 = format_RT139PSU_23.readFeatures(json_RT139PSU_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT139PSU_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT139PSU_23.addFeatures(features_RT139PSU_23);
var lyr_RT139PSU_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RT139PSU_23, 
                style: style_RT139PSU_23,
                popuplayertitle: "RT 139 PSU",
                interactive: true,
                title: '<img src="styles/legend/RT139PSU_23.png" /> RT 139 PSU'
            });
var format_Rt139Temple_24 = new ol.format.GeoJSON();
var features_Rt139Temple_24 = format_Rt139Temple_24.readFeatures(json_Rt139Temple_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt139Temple_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt139Temple_24.addFeatures(features_Rt139Temple_24);
var lyr_Rt139Temple_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt139Temple_24, 
                style: style_Rt139Temple_24,
                popuplayertitle: "Rt 139 Temple",
                interactive: true,
                title: '<img src="styles/legend/Rt139Temple_24.png" /> Rt 139 Temple'
            });
var format_Rt139Signals_25 = new ol.format.GeoJSON();
var features_Rt139Signals_25 = format_Rt139Signals_25.readFeatures(json_Rt139Signals_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt139Signals_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt139Signals_25.addFeatures(features_Rt139Signals_25);
var lyr_Rt139Signals_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt139Signals_25, 
                style: style_Rt139Signals_25,
                popuplayertitle: "Rt 139 Signals",
                interactive: true,
                title: '<img src="styles/legend/Rt139Signals_25.png" /> Rt 139 Signals'
            });
var format_Rt139StopPop_26 = new ol.format.GeoJSON();
var features_Rt139StopPop_26 = format_Rt139StopPop_26.readFeatures(json_Rt139StopPop_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt139StopPop_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt139StopPop_26.addFeatures(features_Rt139StopPop_26);
var lyr_Rt139StopPop_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt139StopPop_26, 
                style: style_Rt139StopPop_26,
                popuplayertitle: "Rt 139 Stop Pop",
                interactive: true,
    title: 'Rt 139 Stop Pop<br />\
    <img src="styles/legend/Rt139StopPop_26_0.png" /> 10 min<br />'
        });
var format_139stopsPop_27 = new ol.format.GeoJSON();
var features_139stopsPop_27 = format_139stopsPop_27.readFeatures(json_139stopsPop_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_139stopsPop_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_139stopsPop_27.addFeatures(features_139stopsPop_27);
var lyr_139stopsPop_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_139stopsPop_27, 
                style: style_139stopsPop_27,
                popuplayertitle: "139 stops Pop",
                interactive: true,
                title: '<img src="styles/legend/139stopsPop_27.png" /> 139 stops Pop'
            });
var format_R139CurrentStopsRecomPop_28 = new ol.format.GeoJSON();
var features_R139CurrentStopsRecomPop_28 = format_R139CurrentStopsRecomPop_28.readFeatures(json_R139CurrentStopsRecomPop_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R139CurrentStopsRecomPop_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R139CurrentStopsRecomPop_28.addFeatures(features_R139CurrentStopsRecomPop_28);
var lyr_R139CurrentStopsRecomPop_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R139CurrentStopsRecomPop_28, 
                style: style_R139CurrentStopsRecomPop_28,
                popuplayertitle: "R139 Current Stops Recom Pop",
                interactive: true,
    title: 'R139 Current Stops Recom Pop<br />\
    <img src="styles/legend/R139CurrentStopsRecomPop_28_0.png" /> 10 min<br />'
        });
var format_Rt139CurrentStopToBeChanged_29 = new ol.format.GeoJSON();
var features_Rt139CurrentStopToBeChanged_29 = format_Rt139CurrentStopToBeChanged_29.readFeatures(json_Rt139CurrentStopToBeChanged_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt139CurrentStopToBeChanged_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt139CurrentStopToBeChanged_29.addFeatures(features_Rt139CurrentStopToBeChanged_29);
var lyr_Rt139CurrentStopToBeChanged_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt139CurrentStopToBeChanged_29, 
                style: style_Rt139CurrentStopToBeChanged_29,
                popuplayertitle: "Rt 139 Current Stop To Be Changed",
                interactive: true,
    title: 'Rt 139 Current Stop To Be Changed<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_0.png" /> Agrawal Colony<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_1.png" /> Bajaj Auto<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_2.png" /> Bhairoba Nala Police Chowky<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_3.png" /> Bhaji Mandai Hadpsar<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_4.png" /> Bombay Garage<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_5.png" /> Chinchwad Station Brt<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_6.png" /> Engineering College<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_7.png" /> Fatima Nagar<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_8.png" /> Finolex Morwadi<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_9.png" /> Ha<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_10.png" /> Hadapsar Gadital<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_11.png" /> Jayshree Talkies<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_12.png" /> Juna Pulgate<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_13.png" /> Kasarwadi<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_14.png" /> Khadki Post<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_15.png" /> Khadki Station<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_16.png" /> Krishna Chhaya Hotel<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_17.png" /> Laxmi Colony<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_18.png" /> Mahatma Gandhi Stand<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_19.png" /> Mg Road Pune Camp<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_20.png" /> Phugewadi Jakat Naka<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_21.png" /> Poultry Farm Mumbai Road<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_22.png" /> Racecourse<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_23.png" /> Raja Bungalow<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_24.png" /> Shewalewadi<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_25.png" /> Shewalewadi Market<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_26.png" /> Vitthal Nagar<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_27.png" /> Westend<br />\
    <img src="styles/legend/Rt139CurrentStopToBeChanged_29_28.png" /> <br />'
        });
var format_Rt139CurrentStopChanges_30 = new ol.format.GeoJSON();
var features_Rt139CurrentStopChanges_30 = format_Rt139CurrentStopChanges_30.readFeatures(json_Rt139CurrentStopChanges_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt139CurrentStopChanges_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt139CurrentStopChanges_30.addFeatures(features_Rt139CurrentStopChanges_30);
var lyr_Rt139CurrentStopChanges_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt139CurrentStopChanges_30, 
                style: style_Rt139CurrentStopChanges_30,
                popuplayertitle: "Rt 139 Current Stop Changes",
                interactive: true,
    title: 'Rt 139 Current Stop Changes<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_0.png" /> 1<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_1.png" /> 2<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_2.png" /> 3<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_3.png" /> 4<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_4.png" /> 5<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_5.png" /> 6<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_6.png" /> 7<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_7.png" /> 8<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_8.png" /> 9<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_9.png" /> 10<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_10.png" /> 11<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_11.png" /> 12<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_12.png" /> 13<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_13.png" /> 14<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_14.png" /> 15<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_15.png" /> 16<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_16.png" /> 17<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_17.png" /> 18<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_18.png" /> 19<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_19.png" /> 20<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_20.png" /> 21<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_21.png" /> 22<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_22.png" /> 23<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_23.png" /> 24<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_24.png" /> 25<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_25.png" /> 26<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_26.png" /> 27<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_27.png" /> 28<br />\
    <img src="styles/legend/Rt139CurrentStopChanges_30_28.png" /> <br />'
        });
var format_Rt139CurrentRecom_31 = new ol.format.GeoJSON();
var features_Rt139CurrentRecom_31 = format_Rt139CurrentRecom_31.readFeatures(json_Rt139CurrentRecom_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt139CurrentRecom_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt139CurrentRecom_31.addFeatures(features_Rt139CurrentRecom_31);
var lyr_Rt139CurrentRecom_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt139CurrentRecom_31, 
                style: style_Rt139CurrentRecom_31,
                popuplayertitle: "Rt 139 Current Recom",
                interactive: true,
                title: '<img src="styles/legend/Rt139CurrentRecom_31.png" /> Rt 139 Current Recom'
            });
var format_Route139UMtr_32 = new ol.format.GeoJSON();
var features_Route139UMtr_32 = format_Route139UMtr_32.readFeatures(json_Route139UMtr_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route139UMtr_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route139UMtr_32.addFeatures(features_Route139UMtr_32);
var lyr_Route139UMtr_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route139UMtr_32, 
                style: style_Route139UMtr_32,
                popuplayertitle: "Route 139U Mtr",
                interactive: true,
                title: '<img src="styles/legend/Route139UMtr_32.png" /> Route 139U Mtr'
            });
var format_139URecomPop_33 = new ol.format.GeoJSON();
var features_139URecomPop_33 = format_139URecomPop_33.readFeatures(json_139URecomPop_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_139URecomPop_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_139URecomPop_33.addFeatures(features_139URecomPop_33);
var lyr_139URecomPop_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_139URecomPop_33, 
                style: style_139URecomPop_33,
                popuplayertitle: "139U Recom Pop",
                interactive: true,
                title: '<img src="styles/legend/139URecomPop_33.png" /> 139U Recom Pop'
            });
var format_Rt139URecomMtr_34 = new ol.format.GeoJSON();
var features_Rt139URecomMtr_34 = format_Rt139URecomMtr_34.readFeatures(json_Rt139URecomMtr_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt139URecomMtr_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt139URecomMtr_34.addFeatures(features_Rt139URecomMtr_34);
var lyr_Rt139URecomMtr_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt139URecomMtr_34, 
                style: style_Rt139URecomMtr_34,
                popuplayertitle: "Rt 139U Recom Mtr",
                interactive: true,
                title: '<img src="styles/legend/Rt139URecomMtr_34.png" /> Rt 139U Recom Mtr'
            });
var format_139DRecomPop_35 = new ol.format.GeoJSON();
var features_139DRecomPop_35 = format_139DRecomPop_35.readFeatures(json_139DRecomPop_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_139DRecomPop_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_139DRecomPop_35.addFeatures(features_139DRecomPop_35);
var lyr_139DRecomPop_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_139DRecomPop_35, 
                style: style_139DRecomPop_35,
                popuplayertitle: "139D Recom Pop",
                interactive: true,
                title: '<img src="styles/legend/139DRecomPop_35.png" /> 139D Recom Pop'
            });
var format_139DRecom_36 = new ol.format.GeoJSON();
var features_139DRecom_36 = format_139DRecom_36.readFeatures(json_139DRecom_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_139DRecom_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_139DRecom_36.addFeatures(features_139DRecom_36);
var lyr_139DRecom_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_139DRecom_36, 
                style: style_139DRecom_36,
                popuplayertitle: "139D Recom",
                interactive: true,
                title: '<img src="styles/legend/139DRecom_36.png" /> 139D Recom'
            });
var format_139RecomPopDissolved_37 = new ol.format.GeoJSON();
var features_139RecomPopDissolved_37 = format_139RecomPopDissolved_37.readFeatures(json_139RecomPopDissolved_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_139RecomPopDissolved_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_139RecomPopDissolved_37.addFeatures(features_139RecomPopDissolved_37);
var lyr_139RecomPopDissolved_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_139RecomPopDissolved_37, 
                style: style_139RecomPopDissolved_37,
                popuplayertitle: "139 Recom Pop Dissolved",
                interactive: true,
                title: '<img src="styles/legend/139RecomPopDissolved_37.png" /> 139 Recom Pop Dissolved'
            });
var format_139UStops_38 = new ol.format.GeoJSON();
var features_139UStops_38 = format_139UStops_38.readFeatures(json_139UStops_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_139UStops_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_139UStops_38.addFeatures(features_139UStops_38);
var lyr_139UStops_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_139UStops_38, 
                style: style_139UStops_38,
                popuplayertitle: "139U Stops",
                interactive: true,
    title: '139U Stops<br />\
    <img src="styles/legend/139UStops_38_0.png" /> 1.0<br />\
    <img src="styles/legend/139UStops_38_1.png" /> 10.0<br />\
    <img src="styles/legend/139UStops_38_2.png" /> 11.0<br />\
    <img src="styles/legend/139UStops_38_3.png" /> 12.0<br />\
    <img src="styles/legend/139UStops_38_4.png" /> 13.0<br />\
    <img src="styles/legend/139UStops_38_5.png" /> 14.0<br />\
    <img src="styles/legend/139UStops_38_6.png" /> 15.0<br />\
    <img src="styles/legend/139UStops_38_7.png" /> 16.0<br />\
    <img src="styles/legend/139UStops_38_8.png" /> 17.0<br />\
    <img src="styles/legend/139UStops_38_9.png" /> 18.0<br />\
    <img src="styles/legend/139UStops_38_10.png" /> 2.0<br />\
    <img src="styles/legend/139UStops_38_11.png" /> 3.0<br />\
    <img src="styles/legend/139UStops_38_12.png" /> 4.0<br />\
    <img src="styles/legend/139UStops_38_13.png" /> 5.0<br />\
    <img src="styles/legend/139UStops_38_14.png" /> 6.0<br />\
    <img src="styles/legend/139UStops_38_15.png" /> 7.0<br />\
    <img src="styles/legend/139UStops_38_16.png" /> 8.0<br />\
    <img src="styles/legend/139UStops_38_17.png" /> 9.0<br />\
    <img src="styles/legend/139UStops_38_18.png" /> <br />'
        });
var format_Rt139RecomProposedStops_39 = new ol.format.GeoJSON();
var features_Rt139RecomProposedStops_39 = format_Rt139RecomProposedStops_39.readFeatures(json_Rt139RecomProposedStops_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt139RecomProposedStops_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt139RecomProposedStops_39.addFeatures(features_Rt139RecomProposedStops_39);
var lyr_Rt139RecomProposedStops_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rt139RecomProposedStops_39, 
                style: style_Rt139RecomProposedStops_39,
                popuplayertitle: "Rt 139 Recom Proposed Stops",
                interactive: true,
                title: '<img src="styles/legend/Rt139RecomProposedStops_39.png" /> Rt 139 Recom Proposed Stops'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PuneGeoBoundary_1.setVisible(true);lyr_PimpreChinchwadboundary_2.setVisible(true);lyr_KirkeeBoundary_3.setVisible(true);lyr_Lahagaon_4.setVisible(true);lyr_Yavatmal_5.setVisible(true);lyr_Keshavnagar_6.setVisible(true);lyr_PimpleGaurav_7.setVisible(true);lyr_Pimpalesaudagar_8.setVisible(true);lyr_AllPunePopReprojected_9.setVisible(true);lyr_AllPunePopsep_10.setVisible(true);lyr_trafficsignal_11.setVisible(true);lyr_PublicBuildings_12.setVisible(true);lyr_Temple_13.setVisible(true);lyr_Industries_14.setVisible(true);lyr_hospital_15.setVisible(true);lyr_Industries_16.setVisible(true);lyr_Route139DMtrs_17.setVisible(true);lyr_139DStops_18.setVisible(true);lyr_Rt139Pop100MTr_19.setVisible(true);lyr_Rt139Education_20.setVisible(true);lyr_Route139Hospitals_21.setVisible(true);lyr_Rt139Offices_22.setVisible(true);lyr_RT139PSU_23.setVisible(true);lyr_Rt139Temple_24.setVisible(true);lyr_Rt139Signals_25.setVisible(true);lyr_Rt139StopPop_26.setVisible(true);lyr_139stopsPop_27.setVisible(true);lyr_R139CurrentStopsRecomPop_28.setVisible(true);lyr_Rt139CurrentStopToBeChanged_29.setVisible(true);lyr_Rt139CurrentStopChanges_30.setVisible(true);lyr_Rt139CurrentRecom_31.setVisible(true);lyr_Route139UMtr_32.setVisible(true);lyr_139URecomPop_33.setVisible(true);lyr_Rt139URecomMtr_34.setVisible(true);lyr_139DRecomPop_35.setVisible(true);lyr_139DRecom_36.setVisible(true);lyr_139RecomPopDissolved_37.setVisible(true);lyr_139UStops_38.setVisible(true);lyr_Rt139RecomProposedStops_39.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PuneGeoBoundary_1,lyr_PimpreChinchwadboundary_2,lyr_KirkeeBoundary_3,lyr_Lahagaon_4,lyr_Yavatmal_5,lyr_Keshavnagar_6,lyr_PimpleGaurav_7,lyr_Pimpalesaudagar_8,lyr_AllPunePopReprojected_9,lyr_AllPunePopsep_10,lyr_trafficsignal_11,lyr_PublicBuildings_12,lyr_Temple_13,lyr_Industries_14,lyr_hospital_15,lyr_Industries_16,lyr_Route139DMtrs_17,lyr_139DStops_18,lyr_Rt139Pop100MTr_19,lyr_Rt139Education_20,lyr_Route139Hospitals_21,lyr_Rt139Offices_22,lyr_RT139PSU_23,lyr_Rt139Temple_24,lyr_Rt139Signals_25,lyr_Rt139StopPop_26,lyr_139stopsPop_27,lyr_R139CurrentStopsRecomPop_28,lyr_Rt139CurrentStopToBeChanged_29,lyr_Rt139CurrentStopChanges_30,lyr_Rt139CurrentRecom_31,lyr_Route139UMtr_32,lyr_139URecomPop_33,lyr_Rt139URecomMtr_34,lyr_139DRecomPop_35,lyr_139DRecom_36,lyr_139RecomPopDissolved_37,lyr_139UStops_38,lyr_Rt139RecomProposedStops_39];
lyr_PuneGeoBoundary_1.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_PimpreChinchwadboundary_2.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_KirkeeBoundary_3.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Lahagaon_4.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Yavatmal_5.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Keshavnagar_6.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_PimpleGaurav_7.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Pimpalesaudagar_8.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_AllPunePopReprojected_9.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', 'layer': 'layer', 'path': 'path', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', 'Area': 'Area', });
lyr_AllPunePopsep_10.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', 'layer': 'layer', 'path': 'path', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', });
lyr_trafficsignal_11.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'noexit': 'noexit', 'descriptio': 'descriptio', 'check_date': 'check_date', 'alt_name': 'alt_name', 'traffic_si': 'traffic_si', 'operationa': 'operationa', 'name_en': 'name_en', 'traffic__1': 'traffic__1', 'is_in': 'is_in', 'AND_a_nosr': 'AND_a_nosr', 'traffic__2': 'traffic__2', 'name_mr': 'name_mr', 'name': 'name', 'junction': 'junction', });
lyr_PublicBuildings_12.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'level': 'level', 'email': 'email', 'addr_distr': 'addr_distr', 'barrier': 'barrier', 'access': 'access', 'operator_s': 'operator_s', 'brand_shor': 'brand_shor', 'door': 'door', 'start_date': 'start_date', 'building': 'building', 'entrance': 'entrance', 'branch': 'branch', 'descriptio': 'descriptio', 'brand_wiki': 'brand_wiki', 'brand_wi_1': 'brand_wi_1', 'brand': 'brand', 'club': 'club', 'name_pl': 'name_pl', 'name_fr': 'name_fr', 'website': 'website', 'addr_floor': 'addr_floor', 'alt_name': 'alt_name', 'entertainm': 'entertainm', 'contact_ph': 'contact_ph', 'addr_place': 'addr_place', 'addr_house': 'addr_house', 'postal_cod': 'postal_cod', 'addr_hou_1': 'addr_hou_1', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'wheelchair': 'wheelchair', 'name_en': 'name_en', 'internet_a': 'internet_a', 'alt_name_m': 'alt_name_m', 'alt_name_e': 'alt_name_e', 'addr_postc': 'addr_postc', 'operator_t': 'operator_t', 'check_date': 'check_date', 'phone': 'phone', 'operator_w': 'operator_w', 'operator': 'operator', 'opening_ho': 'opening_ho', 'name_mr': 'name_mr', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'name': 'name', });
lyr_Temple_13.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'amenity': 'amenity', 'addr_distr': 'addr_distr', 'barrier': 'barrier', 'man_made': 'man_made', 'flag_type': 'flag_type', 'addr_neigh': 'addr_neigh', 'pincode': 'pincode', 'addr_subur': 'addr_subur', 'layer': 'layer', 'polling_st': 'polling_st', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'internet_a': 'internet_a', 'baby_feedi': 'baby_feedi', 'air_condit': 'air_condit', 'entrance': 'entrance', 'wheelchair': 'wheelchair', 'shop': 'shop', 'payment_up': 'payment_up', 'level': 'level', 'addr_floor': 'addr_floor', 'service_ti': 'service_ti', 'website': 'website', 'phone': 'phone', 'access': 'access', 'check_date': 'check_date', 'name_en': 'name_en', 'place_of_w': 'place_of_w', 'descriptio': 'descriptio', 'name_hi': 'name_hi', 'alt_name': 'alt_name', 'building': 'building', 'addr_house': 'addr_house', 'addr_hou_1': 'addr_hou_1', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'opening_ho': 'opening_ho', 'addr_state': 'addr_state', 'addr_count': 'addr_count', 'denominati': 'denominati', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'tourism': 'tourism', 'name_mr': 'name_mr', 'name': 'name', });
lyr_Industries_14.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', });
lyr_hospital_15.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'healthcare': 'healthcare', 'mobile': 'mobile', 'parking': 'parking', 'internet_a': 'internet_a', 'image': 'image', 'fax': 'fax', 'ele': 'ele', 'barrier': 'barrier', 'access': 'access', 'entrance': 'entrance', 'air_condit': 'air_condit', 'addr_floor': 'addr_floor', 'name_es': 'name_es', 'not_operat': 'not_operat', 'descriptio': 'descriptio', 'power': 'power', 'alt_name': 'alt_name', 'opening_ho': 'opening_ho', 'closing_ho': 'closing_ho', 'email': 'email', 'contact_we': 'contact_we', 'addr_quart': 'addr_quart', 'phone_mobi': 'phone_mobi', 'wheelchair': 'wheelchair', 'start_date': 'start_date', 'operator_t': 'operator_t', 'check_date': 'check_date', 'contact_ph': 'contact_ph', 'building': 'building', 'addr_neigh': 'addr_neigh', 'addr_house': 'addr_house', 'operator': 'operator', 'addr_subur': 'addr_subur', 'designatio': 'designatio', 'website': 'website', 'phone': 'phone', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'opening__1': 'opening__1', 'level': 'level', 'addr_hou_1': 'addr_hou_1', 'healthca_1': 'healthca_1', 'name_mr': 'name_mr', 'name_hi': 'name_hi', 'name_en': 'name_en', 'emergency': 'emergency', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'internet_1': 'internet_1', 'addr_stree': 'addr_stree', 'addr_count': 'addr_count', 'addr_city': 'addr_city', 'name_etymo': 'name_etymo', 'name': 'name', 'addr_subdi': 'addr_subdi', 'addr_state': 'addr_state', 'addr_postc': 'addr_postc', 'addr_full': 'addr_full', 'addr_distr': 'addr_distr', });
lyr_Industries_16.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'Name_2': 'Name_2', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'Pop': 'Pop', });
lyr_Route139DMtrs_17.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_139DStops_18.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Route_Name': 'Route_Name', 'Stg': 'Stg', 'RouteCode': 'RouteCode', 'Stop_Code': 'Stop_Code', 'Stop_Name_Marathi': 'Stop_Name_Marathi', 'Direction': 'Direction', 'Key': 'Key', 'K__M_': 'K__M_', 'Lat': 'Lat', 'Long': 'Long', 'Ticket_Fair': 'Ticket_Fair', 'unnamed__1_': 'unnamed__1_', });
lyr_Rt139Pop100MTr_19.set('fieldAliases', {'Name': 'Name', 'Pop': 'Pop', });
lyr_Rt139Education_20.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'addr_full': 'addr_full', 'locked': 'locked', 'material': 'material', 'colour': 'colour', 'start_date': 'start_date', 'level': 'level', 'descriptio': 'descriptio', 'addr_floor': 'addr_floor', 'nursery': 'nursery', 'mobile': 'mobile', 'isced_leve': 'isced_leve', 'contact_yo': 'contact_yo', 'contact_li': 'contact_li', 'contact_in': 'contact_in', 'contact_fa': 'contact_fa', 'brand': 'brand', 'branch': 'branch', 'addr_place': 'addr_place', 'polling_st': 'polling_st', 'ref': 'ref', 'operator_w': 'operator_w', 'operator_s': 'operator_s', 'check_date': 'check_date', 'language_e': 'language_e', 'operator_t': 'operator_t', 'denominati': 'denominati', 'wheelchair': 'wheelchair', 'entrance': 'entrance', 'door': 'door', 'religion': 'religion', 'opening_ho': 'opening_ho', 'email': 'email', 'name_pl': 'name_pl', 'indoor_lev': 'indoor_lev', 'operator': 'operator', 'contact_ph': 'contact_ph', 'access': 'access', 'school': 'school', 'designatio': 'designatio', 'addr_house': 'addr_house', 'alt_name': 'alt_name', 'barrier': 'barrier', 'int_name': 'int_name', 'addr_hou_1': 'addr_hou_1', 'internet_a': 'internet_a', 'addr_state': 'addr_state', 'addr_count': 'addr_count', 'website': 'website', 'preschool': 'preschool', 'phone': 'phone', 'name_mr': 'name_mr', 'name_hi': 'name_hi', 'name_en': 'name_en', 'image': 'image', 'grades': 'grades', 'contact_mo': 'contact_mo', 'contact_em': 'contact_em', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_distr': 'addr_distr', 'addr_city': 'addr_city', 'name_etymo': 'name_etymo', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'name': 'name', 'Name_2': 'Name_2', 'Pop': 'Pop', });
lyr_Route139Hospitals_21.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'healthcare': 'healthcare', 'mobile': 'mobile', 'parking': 'parking', 'internet_a': 'internet_a', 'image': 'image', 'fax': 'fax', 'ele': 'ele', 'barrier': 'barrier', 'access': 'access', 'entrance': 'entrance', 'air_condit': 'air_condit', 'addr_floor': 'addr_floor', 'name_es': 'name_es', 'not_operat': 'not_operat', 'descriptio': 'descriptio', 'power': 'power', 'alt_name': 'alt_name', 'opening_ho': 'opening_ho', 'closing_ho': 'closing_ho', 'email': 'email', 'contact_we': 'contact_we', 'addr_quart': 'addr_quart', 'phone_mobi': 'phone_mobi', 'wheelchair': 'wheelchair', 'start_date': 'start_date', 'operator_t': 'operator_t', 'check_date': 'check_date', 'contact_ph': 'contact_ph', 'building': 'building', 'addr_neigh': 'addr_neigh', 'addr_house': 'addr_house', 'operator': 'operator', 'addr_subur': 'addr_subur', 'designatio': 'designatio', 'website': 'website', 'phone': 'phone', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'opening__1': 'opening__1', 'level': 'level', 'addr_hou_1': 'addr_hou_1', 'healthca_1': 'healthca_1', 'name_mr': 'name_mr', 'name_hi': 'name_hi', 'name_en': 'name_en', 'emergency': 'emergency', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'internet_1': 'internet_1', 'addr_stree': 'addr_stree', 'addr_count': 'addr_count', 'addr_city': 'addr_city', 'name_etymo': 'name_etymo', 'name': 'name', 'addr_subdi': 'addr_subdi', 'addr_state': 'addr_state', 'addr_postc': 'addr_postc', 'addr_full': 'addr_full', 'addr_distr': 'addr_distr', 'Name_2': 'Name_2', 'Pop': 'Pop', });
lyr_Rt139Offices_22.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'office': 'office', 'power': 'power', 'generator_': 'generator_', 'generato_1': 'generato_1', 'generato_2': 'generato_2', 'generato_3': 'generato_3', 'mobile': 'mobile', 'contact_yo': 'contact_yo', 'contact_li': 'contact_li', 'company': 'company', 'branch_wik': 'branch_wik', 'branch_w_1': 'branch_w_1', 'ref': 'ref', 'alt_name_e': 'alt_name_e', 'internet_a': 'internet_a', 'internet_1': 'internet_1', 'building_l': 'building_l', 'phone_mobi': 'phone_mobi', 'short_name': 'short_name', 'operator_w': 'operator_w', 'operator_1': 'operator_1', 'operator_2': 'operator_2', 'operator_t': 'operator_t', 'operator_s': 'operator_s', 'operator': 'operator', 'opening_ho': 'opening_ho', 'image': 'image', 'brand_wiki': 'brand_wiki', 'brand': 'brand', 'contact_tw': 'contact_tw', 'contact_in': 'contact_in', 'contact_fa': 'contact_fa', 'addr_state': 'addr_state', 'addr_distr': 'addr_distr', 'addr_count': 'addr_count', 'government': 'government', 'air_condit': 'air_condit', 'name_el': 'name_el', 'name_hi': 'name_hi', 'official_n': 'official_n', 'addr_floor': 'addr_floor', 'check_date': 'check_date', 'alt_name_m': 'alt_name_m', 'name_fr': 'name_fr', 'addr_unit': 'addr_unit', 'addr_full': 'addr_full', 'name_en': 'name_en', 'start_date': 'start_date', 'level': 'level', 'contact_mo': 'contact_mo', 'addr_place': 'addr_place', 'descriptio': 'descriptio', 'fax': 'fax', 'email': 'email', 'addr_neigh': 'addr_neigh', 'addr_local': 'addr_local', 'alt_name': 'alt_name', 'opening__1': 'opening__1', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'wheelchair': 'wheelchair', 'name_mr': 'name_mr', 'entrance': 'entrance', 'smoking': 'smoking', 'phone': 'phone', 'addr_city': 'addr_city', 'designatio': 'designatio', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_hou_1': 'addr_hou_1', 'website': 'website', 'landuse': 'landuse', 'name': 'name', 'building': 'building', 'Name_2': 'Name_2', 'Pop': 'Pop', });
lyr_RT139PSU_23.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'level': 'level', 'email': 'email', 'addr_distr': 'addr_distr', 'barrier': 'barrier', 'access': 'access', 'operator_s': 'operator_s', 'brand_shor': 'brand_shor', 'door': 'door', 'start_date': 'start_date', 'building': 'building', 'entrance': 'entrance', 'branch': 'branch', 'descriptio': 'descriptio', 'brand_wiki': 'brand_wiki', 'brand_wi_1': 'brand_wi_1', 'brand': 'brand', 'club': 'club', 'name_pl': 'name_pl', 'name_fr': 'name_fr', 'website': 'website', 'addr_floor': 'addr_floor', 'alt_name': 'alt_name', 'entertainm': 'entertainm', 'contact_ph': 'contact_ph', 'addr_place': 'addr_place', 'addr_house': 'addr_house', 'postal_cod': 'postal_cod', 'addr_hou_1': 'addr_hou_1', 'addr_stree': 'addr_stree', 'addr_city': 'addr_city', 'wheelchair': 'wheelchair', 'name_en': 'name_en', 'internet_a': 'internet_a', 'alt_name_m': 'alt_name_m', 'alt_name_e': 'alt_name_e', 'addr_postc': 'addr_postc', 'operator_t': 'operator_t', 'check_date': 'check_date', 'phone': 'phone', 'operator_w': 'operator_w', 'operator': 'operator', 'opening_ho': 'opening_ho', 'name_mr': 'name_mr', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'name': 'name', 'Name_2': 'Name_2', 'Pop': 'Pop', });
lyr_Rt139Temple_24.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'amenity': 'amenity', 'addr_distr': 'addr_distr', 'barrier': 'barrier', 'man_made': 'man_made', 'flag_type': 'flag_type', 'addr_neigh': 'addr_neigh', 'pincode': 'pincode', 'addr_subur': 'addr_subur', 'layer': 'layer', 'polling_st': 'polling_st', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment_ca': 'payment_ca', 'internet_a': 'internet_a', 'baby_feedi': 'baby_feedi', 'air_condit': 'air_condit', 'entrance': 'entrance', 'wheelchair': 'wheelchair', 'shop': 'shop', 'payment_up': 'payment_up', 'level': 'level', 'addr_floor': 'addr_floor', 'service_ti': 'service_ti', 'website': 'website', 'phone': 'phone', 'access': 'access', 'check_date': 'check_date', 'name_en': 'name_en', 'place_of_w': 'place_of_w', 'descriptio': 'descriptio', 'name_hi': 'name_hi', 'alt_name': 'alt_name', 'building': 'building', 'addr_house': 'addr_house', 'addr_hou_1': 'addr_hou_1', 'wikipedia': 'wikipedia', 'wikimedia_': 'wikimedia_', 'wikidata': 'wikidata', 'opening_ho': 'opening_ho', 'addr_state': 'addr_state', 'addr_count': 'addr_count', 'denominati': 'denominati', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'tourism': 'tourism', 'name_mr': 'name_mr', 'name': 'name', 'Name_2': 'Name_2', 'Pop': 'Pop', });
lyr_Rt139Signals_25.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'noexit': 'noexit', 'descriptio': 'descriptio', 'check_date': 'check_date', 'alt_name': 'alt_name', 'traffic_si': 'traffic_si', 'operationa': 'operationa', 'name_en': 'name_en', 'traffic__1': 'traffic__1', 'is_in': 'is_in', 'AND_a_nosr': 'AND_a_nosr', 'traffic__2': 'traffic__2', 'name_mr': 'name_mr', 'name': 'name', 'junction': 'junction', 'Name_2': 'Name_2', 'Pop': 'Pop', });
lyr_Rt139StopPop_26.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_139stopsPop_27.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', 'Pax': 'Pax', 'Ridership%': 'Ridership%', });
lyr_R139CurrentStopsRecomPop_28.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Rt139CurrentStopToBeChanged_29.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Direction': 'Direction', 'K__M_': 'K__M_', 'Lat': 'Lat', 'Long': 'Long', });
lyr_Rt139CurrentStopChanges_30.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Direction': 'Direction', 'K__M_': 'K__M_', 'Lat': 'Lat', 'Long': 'Long', });
lyr_Rt139CurrentRecom_31.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'distance': 'distance', 'angle': 'angle', });
lyr_Route139UMtr_32.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_139URecomPop_33.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Time': 'Time', 'Pop': 'Pop', });
lyr_Rt139URecomMtr_34.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Time': 'Time', });
lyr_139DRecomPop_35.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Time': 'Time', 'Pop': 'Pop', });
lyr_139DRecom_36.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Time': 'Time', });
lyr_139RecomPopDissolved_37.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'Pop': 'Pop', });
lyr_139UStops_38.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Route_Name': 'Route_Name', 'Stg': 'Stg', 'RouteCode': 'RouteCode', 'Stop_Code': 'Stop_Code', 'Stop_Name_Marathi': 'Stop_Name_Marathi', 'Direction': 'Direction', 'Key': 'Key', 'K__M_': 'K__M_', 'Lat': 'Lat', 'Long': 'Long', 'Ticket_Fair': 'Ticket_Fair', 'unnamed__1_': 'unnamed__1_', });
lyr_Rt139RecomProposedStops_39.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Time': 'Time', 'distance': 'distance', 'angle': 'angle', });
lyr_PuneGeoBoundary_1.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_PimpreChinchwadboundary_2.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_KirkeeBoundary_3.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Lahagaon_4.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Yavatmal_5.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Keshavnagar_6.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_PimpleGaurav_7.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Pimpalesaudagar_8.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_AllPunePopReprojected_9.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'TextEdit', 'Area': 'TextEdit', });
lyr_AllPunePopsep_10.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'Pop': 'TextEdit', });
lyr_trafficsignal_11.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'noexit': 'TextEdit', 'descriptio': 'TextEdit', 'check_date': 'TextEdit', 'alt_name': 'TextEdit', 'traffic_si': 'TextEdit', 'operationa': 'TextEdit', 'name_en': 'TextEdit', 'traffic__1': 'TextEdit', 'is_in': 'TextEdit', 'AND_a_nosr': 'TextEdit', 'traffic__2': 'TextEdit', 'name_mr': 'TextEdit', 'name': 'TextEdit', 'junction': 'TextEdit', });
lyr_PublicBuildings_12.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'level': 'TextEdit', 'email': 'TextEdit', 'addr_distr': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', 'operator_s': 'TextEdit', 'brand_shor': 'TextEdit', 'door': 'TextEdit', 'start_date': 'TextEdit', 'building': 'TextEdit', 'entrance': 'TextEdit', 'branch': 'TextEdit', 'descriptio': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand_wi_1': 'TextEdit', 'brand': 'TextEdit', 'club': 'TextEdit', 'name_pl': 'TextEdit', 'name_fr': 'TextEdit', 'website': 'TextEdit', 'addr_floor': 'TextEdit', 'alt_name': 'TextEdit', 'entertainm': 'TextEdit', 'contact_ph': 'TextEdit', 'addr_place': 'TextEdit', 'addr_house': 'TextEdit', 'postal_cod': 'TextEdit', 'addr_hou_1': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', 'wheelchair': 'TextEdit', 'name_en': 'TextEdit', 'internet_a': 'TextEdit', 'alt_name_m': 'TextEdit', 'alt_name_e': 'TextEdit', 'addr_postc': 'TextEdit', 'operator_t': 'TextEdit', 'check_date': 'TextEdit', 'phone': 'TextEdit', 'operator_w': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'name_mr': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'name': 'TextEdit', });
lyr_Temple_13.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'religion': 'TextEdit', 'amenity': 'TextEdit', 'addr_distr': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'flag_type': 'TextEdit', 'addr_neigh': 'TextEdit', 'pincode': 'TextEdit', 'addr_subur': 'TextEdit', 'layer': 'TextEdit', 'polling_st': 'TextEdit', 'payment_de': 'TextEdit', 'payment_cr': 'TextEdit', 'payment_ca': 'TextEdit', 'internet_a': 'TextEdit', 'baby_feedi': 'TextEdit', 'air_condit': 'TextEdit', 'entrance': 'TextEdit', 'wheelchair': 'TextEdit', 'shop': 'TextEdit', 'payment_up': 'TextEdit', 'level': 'TextEdit', 'addr_floor': 'TextEdit', 'service_ti': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'access': 'TextEdit', 'check_date': 'TextEdit', 'name_en': 'TextEdit', 'place_of_w': 'TextEdit', 'descriptio': 'TextEdit', 'name_hi': 'TextEdit', 'alt_name': 'TextEdit', 'building': 'TextEdit', 'addr_house': 'TextEdit', 'addr_hou_1': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_state': 'TextEdit', 'addr_count': 'TextEdit', 'denominati': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'tourism': 'TextEdit', 'name_mr': 'TextEdit', 'name': 'TextEdit', });
lyr_Industries_14.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', });
lyr_hospital_15.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'healthcare': 'TextEdit', 'mobile': 'TextEdit', 'parking': 'TextEdit', 'internet_a': 'TextEdit', 'image': 'TextEdit', 'fax': 'TextEdit', 'ele': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', 'entrance': 'TextEdit', 'air_condit': 'TextEdit', 'addr_floor': 'TextEdit', 'name_es': 'TextEdit', 'not_operat': 'TextEdit', 'descriptio': 'TextEdit', 'power': 'TextEdit', 'alt_name': 'TextEdit', 'opening_ho': 'TextEdit', 'closing_ho': 'TextEdit', 'email': 'TextEdit', 'contact_we': 'TextEdit', 'addr_quart': 'TextEdit', 'phone_mobi': 'TextEdit', 'wheelchair': 'TextEdit', 'start_date': 'TextEdit', 'operator_t': 'TextEdit', 'check_date': 'TextEdit', 'contact_ph': 'TextEdit', 'building': 'TextEdit', 'addr_neigh': 'TextEdit', 'addr_house': 'TextEdit', 'operator': 'TextEdit', 'addr_subur': 'TextEdit', 'designatio': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'payment_de': 'TextEdit', 'payment_cr': 'TextEdit', 'payment_ca': 'TextEdit', 'opening__1': 'TextEdit', 'level': 'TextEdit', 'addr_hou_1': 'TextEdit', 'healthca_1': 'TextEdit', 'name_mr': 'TextEdit', 'name_hi': 'TextEdit', 'name_en': 'TextEdit', 'emergency': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'internet_1': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_count': 'TextEdit', 'addr_city': 'TextEdit', 'name_etymo': 'TextEdit', 'name': 'TextEdit', 'addr_subdi': 'TextEdit', 'addr_state': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_full': 'TextEdit', 'addr_distr': 'TextEdit', });
lyr_Industries_16.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'Name_2': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', '_count': '', '_sum': '', '_mean': '', 'Pop': '', });
lyr_Route139DMtrs_17.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_139DStops_18.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Route_Name': 'TextEdit', 'Stg': 'TextEdit', 'RouteCode': 'TextEdit', 'Stop_Code': 'TextEdit', 'Stop_Name_Marathi': 'TextEdit', 'Direction': 'TextEdit', 'Key': 'TextEdit', 'K__M_': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Ticket_Fair': 'TextEdit', 'unnamed__1_': 'TextEdit', });
lyr_Rt139Pop100MTr_19.set('fieldImages', {'Name': 'TextEdit', 'Pop': 'Range', });
lyr_Rt139Education_20.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'addr_full': 'TextEdit', 'locked': 'TextEdit', 'material': 'TextEdit', 'colour': 'TextEdit', 'start_date': 'TextEdit', 'level': 'TextEdit', 'descriptio': 'TextEdit', 'addr_floor': 'TextEdit', 'nursery': 'TextEdit', 'mobile': 'TextEdit', 'isced_leve': 'TextEdit', 'contact_yo': 'TextEdit', 'contact_li': 'TextEdit', 'contact_in': 'TextEdit', 'contact_fa': 'TextEdit', 'brand': 'TextEdit', 'branch': 'TextEdit', 'addr_place': 'TextEdit', 'polling_st': 'TextEdit', 'ref': 'TextEdit', 'operator_w': 'TextEdit', 'operator_s': 'TextEdit', 'check_date': 'TextEdit', 'language_e': 'TextEdit', 'operator_t': 'TextEdit', 'denominati': 'TextEdit', 'wheelchair': 'TextEdit', 'entrance': 'TextEdit', 'door': 'TextEdit', 'religion': 'TextEdit', 'opening_ho': 'TextEdit', 'email': 'TextEdit', 'name_pl': 'TextEdit', 'indoor_lev': 'TextEdit', 'operator': 'TextEdit', 'contact_ph': 'TextEdit', 'access': 'TextEdit', 'school': 'TextEdit', 'designatio': 'TextEdit', 'addr_house': 'TextEdit', 'alt_name': 'TextEdit', 'barrier': 'TextEdit', 'int_name': 'TextEdit', 'addr_hou_1': 'TextEdit', 'internet_a': 'TextEdit', 'addr_state': 'TextEdit', 'addr_count': 'TextEdit', 'website': 'TextEdit', 'preschool': 'TextEdit', 'phone': 'TextEdit', 'name_mr': 'TextEdit', 'name_hi': 'TextEdit', 'name_en': 'TextEdit', 'image': 'TextEdit', 'grades': 'TextEdit', 'contact_mo': 'TextEdit', 'contact_em': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_distr': 'TextEdit', 'addr_city': 'TextEdit', 'name_etymo': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'name': 'TextEdit', 'Name_2': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Route139Hospitals_21.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'healthcare': 'TextEdit', 'mobile': 'TextEdit', 'parking': 'TextEdit', 'internet_a': 'TextEdit', 'image': 'TextEdit', 'fax': 'TextEdit', 'ele': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', 'entrance': 'TextEdit', 'air_condit': 'TextEdit', 'addr_floor': 'TextEdit', 'name_es': 'TextEdit', 'not_operat': 'TextEdit', 'descriptio': 'TextEdit', 'power': 'TextEdit', 'alt_name': 'TextEdit', 'opening_ho': 'TextEdit', 'closing_ho': 'TextEdit', 'email': 'TextEdit', 'contact_we': 'TextEdit', 'addr_quart': 'TextEdit', 'phone_mobi': 'TextEdit', 'wheelchair': 'TextEdit', 'start_date': 'TextEdit', 'operator_t': 'TextEdit', 'check_date': 'TextEdit', 'contact_ph': 'TextEdit', 'building': 'TextEdit', 'addr_neigh': 'TextEdit', 'addr_house': 'TextEdit', 'operator': 'TextEdit', 'addr_subur': 'TextEdit', 'designatio': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'payment_de': 'TextEdit', 'payment_cr': 'TextEdit', 'payment_ca': 'TextEdit', 'opening__1': 'TextEdit', 'level': 'TextEdit', 'addr_hou_1': 'TextEdit', 'healthca_1': 'TextEdit', 'name_mr': 'TextEdit', 'name_hi': 'TextEdit', 'name_en': 'TextEdit', 'emergency': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'internet_1': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_count': 'TextEdit', 'addr_city': 'TextEdit', 'name_etymo': 'TextEdit', 'name': 'TextEdit', 'addr_subdi': 'TextEdit', 'addr_state': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_full': 'TextEdit', 'addr_distr': 'TextEdit', 'Name_2': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Rt139Offices_22.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'office': 'TextEdit', 'power': 'TextEdit', 'generator_': 'TextEdit', 'generato_1': 'TextEdit', 'generato_2': 'TextEdit', 'generato_3': 'TextEdit', 'mobile': 'TextEdit', 'contact_yo': 'TextEdit', 'contact_li': 'TextEdit', 'company': 'TextEdit', 'branch_wik': 'TextEdit', 'branch_w_1': 'TextEdit', 'ref': 'TextEdit', 'alt_name_e': 'TextEdit', 'internet_a': 'TextEdit', 'internet_1': 'TextEdit', 'building_l': 'TextEdit', 'phone_mobi': 'TextEdit', 'short_name': 'TextEdit', 'operator_w': 'TextEdit', 'operator_1': 'TextEdit', 'operator_2': 'TextEdit', 'operator_t': 'TextEdit', 'operator_s': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'image': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand': 'TextEdit', 'contact_tw': 'TextEdit', 'contact_in': 'TextEdit', 'contact_fa': 'TextEdit', 'addr_state': 'TextEdit', 'addr_distr': 'TextEdit', 'addr_count': 'TextEdit', 'government': 'TextEdit', 'air_condit': 'TextEdit', 'name_el': 'TextEdit', 'name_hi': 'TextEdit', 'official_n': 'TextEdit', 'addr_floor': 'TextEdit', 'check_date': 'TextEdit', 'alt_name_m': 'TextEdit', 'name_fr': 'TextEdit', 'addr_unit': 'TextEdit', 'addr_full': 'TextEdit', 'name_en': 'TextEdit', 'start_date': 'TextEdit', 'level': 'TextEdit', 'contact_mo': 'TextEdit', 'addr_place': 'TextEdit', 'descriptio': 'TextEdit', 'fax': 'TextEdit', 'email': 'TextEdit', 'addr_neigh': 'TextEdit', 'addr_local': 'TextEdit', 'alt_name': 'TextEdit', 'opening__1': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'wheelchair': 'TextEdit', 'name_mr': 'TextEdit', 'entrance': 'TextEdit', 'smoking': 'TextEdit', 'phone': 'TextEdit', 'addr_city': 'TextEdit', 'designatio': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_hou_1': 'TextEdit', 'website': 'TextEdit', 'landuse': 'TextEdit', 'name': 'TextEdit', 'building': 'TextEdit', 'Name_2': 'TextEdit', 'Pop': 'TextEdit', });
lyr_RT139PSU_23.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'level': 'TextEdit', 'email': 'TextEdit', 'addr_distr': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', 'operator_s': 'TextEdit', 'brand_shor': 'TextEdit', 'door': 'TextEdit', 'start_date': 'TextEdit', 'building': 'TextEdit', 'entrance': 'TextEdit', 'branch': 'TextEdit', 'descriptio': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand_wi_1': 'TextEdit', 'brand': 'TextEdit', 'club': 'TextEdit', 'name_pl': 'TextEdit', 'name_fr': 'TextEdit', 'website': 'TextEdit', 'addr_floor': 'TextEdit', 'alt_name': 'TextEdit', 'entertainm': 'TextEdit', 'contact_ph': 'TextEdit', 'addr_place': 'TextEdit', 'addr_house': 'TextEdit', 'postal_cod': 'TextEdit', 'addr_hou_1': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_city': 'TextEdit', 'wheelchair': 'TextEdit', 'name_en': 'TextEdit', 'internet_a': 'TextEdit', 'alt_name_m': 'TextEdit', 'alt_name_e': 'TextEdit', 'addr_postc': 'TextEdit', 'operator_t': 'TextEdit', 'check_date': 'TextEdit', 'phone': 'TextEdit', 'operator_w': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'name_mr': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'name': 'TextEdit', 'Name_2': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Rt139Temple_24.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'religion': 'TextEdit', 'amenity': 'TextEdit', 'addr_distr': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'flag_type': 'TextEdit', 'addr_neigh': 'TextEdit', 'pincode': 'TextEdit', 'addr_subur': 'TextEdit', 'layer': 'TextEdit', 'polling_st': 'TextEdit', 'payment_de': 'TextEdit', 'payment_cr': 'TextEdit', 'payment_ca': 'TextEdit', 'internet_a': 'TextEdit', 'baby_feedi': 'TextEdit', 'air_condit': 'TextEdit', 'entrance': 'TextEdit', 'wheelchair': 'TextEdit', 'shop': 'TextEdit', 'payment_up': 'TextEdit', 'level': 'TextEdit', 'addr_floor': 'TextEdit', 'service_ti': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'access': 'TextEdit', 'check_date': 'TextEdit', 'name_en': 'TextEdit', 'place_of_w': 'TextEdit', 'descriptio': 'TextEdit', 'name_hi': 'TextEdit', 'alt_name': 'TextEdit', 'building': 'TextEdit', 'addr_house': 'TextEdit', 'addr_hou_1': 'TextEdit', 'wikipedia': 'TextEdit', 'wikimedia_': 'TextEdit', 'wikidata': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_state': 'TextEdit', 'addr_count': 'TextEdit', 'denominati': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'tourism': 'TextEdit', 'name_mr': 'TextEdit', 'name': 'TextEdit', 'Name_2': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Rt139Signals_25.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'noexit': 'TextEdit', 'descriptio': 'TextEdit', 'check_date': 'TextEdit', 'alt_name': 'TextEdit', 'traffic_si': 'TextEdit', 'operationa': 'TextEdit', 'name_en': 'TextEdit', 'traffic__1': 'TextEdit', 'is_in': 'TextEdit', 'AND_a_nosr': 'TextEdit', 'traffic__2': 'TextEdit', 'name_mr': 'TextEdit', 'name': 'TextEdit', 'junction': 'TextEdit', 'Name_2': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Rt139StopPop_26.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_139stopsPop_27.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'TextEdit', 'Pax': '', 'Ridership%': '', });
lyr_R139CurrentStopsRecomPop_28.set('fieldImages', {'ID': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_Rt139CurrentStopToBeChanged_29.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Direction': 'TextEdit', 'K__M_': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_Rt139CurrentStopChanges_30.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Direction': 'TextEdit', 'K__M_': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_Rt139CurrentRecom_31.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'distance': '', 'angle': '', });
lyr_Route139UMtr_32.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_139URecomPop_33.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Time': 'TextEdit', 'Pop': 'Range', });
lyr_Rt139URecomMtr_34.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Time': 'TextEdit', });
lyr_139DRecomPop_35.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Time': 'TextEdit', 'Pop': 'Range', });
lyr_139DRecom_36.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Time': 'TextEdit', });
lyr_139RecomPopDissolved_37.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'Pop': 'Range', });
lyr_139UStops_38.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Route_Name': 'TextEdit', 'Stg': 'TextEdit', 'RouteCode': 'TextEdit', 'Stop_Code': 'TextEdit', 'Stop_Name_Marathi': 'TextEdit', 'Direction': 'TextEdit', 'Key': 'TextEdit', 'K__M_': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Ticket_Fair': 'TextEdit', 'unnamed__1_': 'TextEdit', });
lyr_Rt139RecomProposedStops_39.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Time': 'TextEdit', 'distance': 'TextEdit', 'angle': 'TextEdit', });
lyr_PuneGeoBoundary_1.set('fieldLabels', {'shapeName': 'header label - always visible', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_PimpreChinchwadboundary_2.set('fieldLabels', {'shapeName': 'header label - always visible', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_KirkeeBoundary_3.set('fieldLabels', {'shapeName': 'header label - always visible', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Lahagaon_4.set('fieldLabels', {'shapeName': 'header label - always visible', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Yavatmal_5.set('fieldLabels', {'shapeName': 'header label - always visible', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Keshavnagar_6.set('fieldLabels', {'shapeName': 'header label - always visible', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_PimpleGaurav_7.set('fieldLabels', {'shapeName': 'header label - always visible', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_Pimpalesaudagar_8.set('fieldLabels', {'shapeName': 'header label - always visible', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_AllPunePopReprojected_9.set('fieldLabels', {'shapeName': 'header label - always visible', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'header label - visible with data', 'Area': 'hidden field', });
lyr_AllPunePopsep_10.set('fieldLabels', {'shapeName': 'header label - always visible', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'inline label - visible with data', });
lyr_trafficsignal_11.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'noexit': 'hidden field', 'descriptio': 'hidden field', 'check_date': 'hidden field', 'alt_name': 'hidden field', 'traffic_si': 'header label - visible with data', 'operationa': 'hidden field', 'name_en': 'hidden field', 'traffic__1': 'hidden field', 'is_in': 'hidden field', 'AND_a_nosr': 'hidden field', 'traffic__2': 'hidden field', 'name_mr': 'hidden field', 'name': 'inline label - always visible', 'junction': 'hidden field', });
lyr_PublicBuildings_12.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'level': 'hidden field', 'email': 'hidden field', 'addr_distr': 'hidden field', 'barrier': 'hidden field', 'access': 'hidden field', 'operator_s': 'hidden field', 'brand_shor': 'hidden field', 'door': 'hidden field', 'start_date': 'hidden field', 'building': 'hidden field', 'entrance': 'hidden field', 'branch': 'hidden field', 'descriptio': 'hidden field', 'brand_wiki': 'hidden field', 'brand_wi_1': 'hidden field', 'brand': 'hidden field', 'club': 'hidden field', 'name_pl': 'hidden field', 'name_fr': 'hidden field', 'website': 'hidden field', 'addr_floor': 'hidden field', 'alt_name': 'hidden field', 'entertainm': 'hidden field', 'contact_ph': 'hidden field', 'addr_place': 'hidden field', 'addr_house': 'hidden field', 'postal_cod': 'hidden field', 'addr_hou_1': 'hidden field', 'addr_stree': 'hidden field', 'addr_city': 'hidden field', 'wheelchair': 'hidden field', 'name_en': 'hidden field', 'internet_a': 'hidden field', 'alt_name_m': 'hidden field', 'alt_name_e': 'hidden field', 'addr_postc': 'hidden field', 'operator_t': 'hidden field', 'check_date': 'hidden field', 'phone': 'hidden field', 'operator_w': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'name_mr': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'name': 'header label - visible with data', });
lyr_Temple_13.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'religion': 'hidden field', 'amenity': 'hidden field', 'addr_distr': 'hidden field', 'barrier': 'hidden field', 'man_made': 'hidden field', 'flag_type': 'hidden field', 'addr_neigh': 'hidden field', 'pincode': 'hidden field', 'addr_subur': 'hidden field', 'layer': 'hidden field', 'polling_st': 'hidden field', 'payment_de': 'hidden field', 'payment_cr': 'hidden field', 'payment_ca': 'hidden field', 'internet_a': 'hidden field', 'baby_feedi': 'hidden field', 'air_condit': 'hidden field', 'entrance': 'hidden field', 'wheelchair': 'hidden field', 'shop': 'hidden field', 'payment_up': 'hidden field', 'level': 'hidden field', 'addr_floor': 'hidden field', 'service_ti': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'access': 'hidden field', 'check_date': 'hidden field', 'name_en': 'hidden field', 'place_of_w': 'hidden field', 'descriptio': 'hidden field', 'name_hi': 'hidden field', 'alt_name': 'hidden field', 'building': 'hidden field', 'addr_house': 'hidden field', 'addr_hou_1': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'opening_ho': 'hidden field', 'addr_state': 'hidden field', 'addr_count': 'hidden field', 'denominati': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'tourism': 'hidden field', 'name_mr': 'hidden field', 'name': 'header label - visible with data', });
lyr_Industries_14.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'building': 'hidden field', 'name': 'header label - visible with data', });
lyr_hospital_15.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'healthcare': 'hidden field', 'mobile': 'hidden field', 'parking': 'hidden field', 'internet_a': 'hidden field', 'image': 'hidden field', 'fax': 'hidden field', 'ele': 'hidden field', 'barrier': 'hidden field', 'access': 'hidden field', 'entrance': 'hidden field', 'air_condit': 'hidden field', 'addr_floor': 'hidden field', 'name_es': 'hidden field', 'not_operat': 'hidden field', 'descriptio': 'hidden field', 'power': 'hidden field', 'alt_name': 'hidden field', 'opening_ho': 'hidden field', 'closing_ho': 'hidden field', 'email': 'hidden field', 'contact_we': 'hidden field', 'addr_quart': 'hidden field', 'phone_mobi': 'hidden field', 'wheelchair': 'hidden field', 'start_date': 'hidden field', 'operator_t': 'hidden field', 'check_date': 'hidden field', 'contact_ph': 'hidden field', 'building': 'hidden field', 'addr_neigh': 'hidden field', 'addr_house': 'hidden field', 'operator': 'hidden field', 'addr_subur': 'hidden field', 'designatio': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'payment_de': 'hidden field', 'payment_cr': 'hidden field', 'payment_ca': 'hidden field', 'opening__1': 'hidden field', 'level': 'hidden field', 'addr_hou_1': 'hidden field', 'healthca_1': 'hidden field', 'name_mr': 'hidden field', 'name_hi': 'hidden field', 'name_en': 'hidden field', 'emergency': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'internet_1': 'hidden field', 'addr_stree': 'hidden field', 'addr_count': 'hidden field', 'addr_city': 'hidden field', 'name_etymo': 'hidden field', 'name': 'header label - visible with data', 'addr_subdi': 'hidden field', 'addr_state': 'hidden field', 'addr_postc': 'hidden field', 'addr_full': 'hidden field', 'addr_distr': 'hidden field', });
lyr_Industries_16.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'building': 'hidden field', 'name': 'header label - visible with data', 'Name_2': 'hidden field', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', '_count': 'hidden field', '_sum': 'hidden field', '_mean': 'hidden field', 'Pop': 'hidden field', });
lyr_Route139DMtrs_17.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_139DStops_18.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Route_Name': 'inline label - visible with data', 'Stg': 'inline label - always visible', 'RouteCode': 'inline label - visible with data', 'Stop_Code': 'inline label - visible with data', 'Stop_Name_Marathi': 'inline label - visible with data', 'Direction': 'inline label - visible with data', 'Key': 'inline label - visible with data', 'K__M_': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'Ticket_Fair': 'inline label - visible with data', 'unnamed__1_': 'hidden field', });
lyr_Rt139Pop100MTr_19.set('fieldLabels', {'Name': 'header label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_Rt139Education_20.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'addr_full': 'hidden field', 'locked': 'hidden field', 'material': 'hidden field', 'colour': 'hidden field', 'start_date': 'hidden field', 'level': 'hidden field', 'descriptio': 'hidden field', 'addr_floor': 'hidden field', 'nursery': 'hidden field', 'mobile': 'hidden field', 'isced_leve': 'hidden field', 'contact_yo': 'hidden field', 'contact_li': 'hidden field', 'contact_in': 'hidden field', 'contact_fa': 'hidden field', 'brand': 'hidden field', 'branch': 'hidden field', 'addr_place': 'hidden field', 'polling_st': 'hidden field', 'ref': 'hidden field', 'operator_w': 'hidden field', 'operator_s': 'hidden field', 'check_date': 'hidden field', 'language_e': 'hidden field', 'operator_t': 'hidden field', 'denominati': 'hidden field', 'wheelchair': 'hidden field', 'entrance': 'hidden field', 'door': 'hidden field', 'religion': 'hidden field', 'opening_ho': 'hidden field', 'email': 'hidden field', 'name_pl': 'hidden field', 'indoor_lev': 'hidden field', 'operator': 'hidden field', 'contact_ph': 'hidden field', 'access': 'hidden field', 'school': 'hidden field', 'designatio': 'hidden field', 'addr_house': 'hidden field', 'alt_name': 'hidden field', 'barrier': 'hidden field', 'int_name': 'hidden field', 'addr_hou_1': 'hidden field', 'internet_a': 'hidden field', 'addr_state': 'hidden field', 'addr_count': 'hidden field', 'website': 'hidden field', 'preschool': 'hidden field', 'phone': 'hidden field', 'name_mr': 'hidden field', 'name_hi': 'hidden field', 'name_en': 'hidden field', 'image': 'hidden field', 'grades': 'hidden field', 'contact_mo': 'hidden field', 'contact_em': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_distr': 'hidden field', 'addr_city': 'hidden field', 'name_etymo': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'name': 'header label - visible with data', 'Name_2': 'hidden field', 'Pop': 'hidden field', });
lyr_Route139Hospitals_21.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'healthcare': 'hidden field', 'mobile': 'hidden field', 'parking': 'hidden field', 'internet_a': 'hidden field', 'image': 'hidden field', 'fax': 'hidden field', 'ele': 'hidden field', 'barrier': 'hidden field', 'access': 'hidden field', 'entrance': 'hidden field', 'air_condit': 'hidden field', 'addr_floor': 'hidden field', 'name_es': 'hidden field', 'not_operat': 'hidden field', 'descriptio': 'hidden field', 'power': 'hidden field', 'alt_name': 'hidden field', 'opening_ho': 'hidden field', 'closing_ho': 'hidden field', 'email': 'hidden field', 'contact_we': 'hidden field', 'addr_quart': 'hidden field', 'phone_mobi': 'hidden field', 'wheelchair': 'hidden field', 'start_date': 'hidden field', 'operator_t': 'hidden field', 'check_date': 'hidden field', 'contact_ph': 'hidden field', 'building': 'hidden field', 'addr_neigh': 'hidden field', 'addr_house': 'hidden field', 'operator': 'hidden field', 'addr_subur': 'hidden field', 'designatio': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'payment_de': 'hidden field', 'payment_cr': 'hidden field', 'payment_ca': 'hidden field', 'opening__1': 'hidden field', 'level': 'hidden field', 'addr_hou_1': 'hidden field', 'healthca_1': 'hidden field', 'name_mr': 'hidden field', 'name_hi': 'hidden field', 'name_en': 'hidden field', 'emergency': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'internet_1': 'hidden field', 'addr_stree': 'hidden field', 'addr_count': 'hidden field', 'addr_city': 'hidden field', 'name_etymo': 'hidden field', 'name': 'header label - visible with data', 'addr_subdi': 'hidden field', 'addr_state': 'hidden field', 'addr_postc': 'hidden field', 'addr_full': 'hidden field', 'addr_distr': 'hidden field', 'Name_2': 'hidden field', 'Pop': 'hidden field', });
lyr_Rt139Offices_22.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'office': 'hidden field', 'power': 'hidden field', 'generator_': 'hidden field', 'generato_1': 'hidden field', 'generato_2': 'hidden field', 'generato_3': 'hidden field', 'mobile': 'hidden field', 'contact_yo': 'hidden field', 'contact_li': 'hidden field', 'company': 'hidden field', 'branch_wik': 'hidden field', 'branch_w_1': 'hidden field', 'ref': 'hidden field', 'alt_name_e': 'hidden field', 'internet_a': 'hidden field', 'internet_1': 'hidden field', 'building_l': 'hidden field', 'phone_mobi': 'hidden field', 'short_name': 'hidden field', 'operator_w': 'hidden field', 'operator_1': 'hidden field', 'operator_2': 'hidden field', 'operator_t': 'hidden field', 'operator_s': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'image': 'hidden field', 'brand_wiki': 'hidden field', 'brand': 'hidden field', 'contact_tw': 'hidden field', 'contact_in': 'hidden field', 'contact_fa': 'hidden field', 'addr_state': 'hidden field', 'addr_distr': 'hidden field', 'addr_count': 'hidden field', 'government': 'hidden field', 'air_condit': 'hidden field', 'name_el': 'hidden field', 'name_hi': 'hidden field', 'official_n': 'hidden field', 'addr_floor': 'hidden field', 'check_date': 'hidden field', 'alt_name_m': 'hidden field', 'name_fr': 'hidden field', 'addr_unit': 'hidden field', 'addr_full': 'hidden field', 'name_en': 'hidden field', 'start_date': 'hidden field', 'level': 'hidden field', 'contact_mo': 'hidden field', 'addr_place': 'hidden field', 'descriptio': 'hidden field', 'fax': 'hidden field', 'email': 'hidden field', 'addr_neigh': 'hidden field', 'addr_local': 'hidden field', 'alt_name': 'hidden field', 'opening__1': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'wheelchair': 'hidden field', 'name_mr': 'hidden field', 'entrance': 'hidden field', 'smoking': 'hidden field', 'phone': 'hidden field', 'addr_city': 'hidden field', 'designatio': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_house': 'hidden field', 'addr_hou_1': 'hidden field', 'website': 'hidden field', 'landuse': 'hidden field', 'name': 'header label - visible with data', 'building': 'hidden field', 'Name_2': 'hidden field', 'Pop': 'hidden field', });
lyr_RT139PSU_23.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'level': 'hidden field', 'email': 'hidden field', 'addr_distr': 'hidden field', 'barrier': 'hidden field', 'access': 'hidden field', 'operator_s': 'hidden field', 'brand_shor': 'hidden field', 'door': 'hidden field', 'start_date': 'hidden field', 'building': 'hidden field', 'entrance': 'hidden field', 'branch': 'hidden field', 'descriptio': 'hidden field', 'brand_wiki': 'hidden field', 'brand_wi_1': 'hidden field', 'brand': 'hidden field', 'club': 'hidden field', 'name_pl': 'hidden field', 'name_fr': 'hidden field', 'website': 'hidden field', 'addr_floor': 'hidden field', 'alt_name': 'hidden field', 'entertainm': 'hidden field', 'contact_ph': 'hidden field', 'addr_place': 'hidden field', 'addr_house': 'hidden field', 'postal_cod': 'hidden field', 'addr_hou_1': 'hidden field', 'addr_stree': 'hidden field', 'addr_city': 'hidden field', 'wheelchair': 'hidden field', 'name_en': 'hidden field', 'internet_a': 'hidden field', 'alt_name_m': 'hidden field', 'alt_name_e': 'hidden field', 'addr_postc': 'hidden field', 'operator_t': 'hidden field', 'check_date': 'hidden field', 'phone': 'hidden field', 'operator_w': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'name_mr': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'name': 'header label - visible with data', 'Name_2': 'hidden field', 'Pop': 'hidden field', });
lyr_Rt139Temple_24.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'religion': 'hidden field', 'amenity': 'hidden field', 'addr_distr': 'hidden field', 'barrier': 'hidden field', 'man_made': 'hidden field', 'flag_type': 'hidden field', 'addr_neigh': 'hidden field', 'pincode': 'hidden field', 'addr_subur': 'hidden field', 'layer': 'hidden field', 'polling_st': 'hidden field', 'payment_de': 'hidden field', 'payment_cr': 'hidden field', 'payment_ca': 'hidden field', 'internet_a': 'hidden field', 'baby_feedi': 'hidden field', 'air_condit': 'hidden field', 'entrance': 'hidden field', 'wheelchair': 'hidden field', 'shop': 'hidden field', 'payment_up': 'hidden field', 'level': 'hidden field', 'addr_floor': 'hidden field', 'service_ti': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'access': 'hidden field', 'check_date': 'hidden field', 'name_en': 'hidden field', 'place_of_w': 'hidden field', 'descriptio': 'hidden field', 'name_hi': 'hidden field', 'alt_name': 'hidden field', 'building': 'hidden field', 'addr_house': 'hidden field', 'addr_hou_1': 'hidden field', 'wikipedia': 'hidden field', 'wikimedia_': 'hidden field', 'wikidata': 'hidden field', 'opening_ho': 'hidden field', 'addr_state': 'hidden field', 'addr_count': 'hidden field', 'denominati': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'tourism': 'hidden field', 'name_mr': 'hidden field', 'name': 'header label - visible with data', 'Name_2': 'hidden field', 'Pop': 'hidden field', });
lyr_Rt139Signals_25.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'noexit': 'hidden field', 'descriptio': 'hidden field', 'check_date': 'hidden field', 'alt_name': 'hidden field', 'traffic_si': 'hidden field', 'operationa': 'hidden field', 'name_en': 'hidden field', 'traffic__1': 'hidden field', 'is_in': 'hidden field', 'AND_a_nosr': 'hidden field', 'traffic__2': 'hidden field', 'name_mr': 'hidden field', 'name': 'header label - visible with data', 'junction': 'hidden field', 'Name_2': 'hidden field', 'Pop': 'hidden field', });
lyr_Rt139StopPop_26.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'header label - visible with data', 'TOTAL_POP': 'inline label - visible with data', });
lyr_139stopsPop_27.set('fieldLabels', {'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'header label - visible with data', 'Pop': 'inline label - visible with data', 'Pax': 'inline label - visible with data', 'Ridership%': 'inline label - visible with data', });
lyr_R139CurrentStopsRecomPop_28.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'TOTAL_POP': 'header label - visible with data', });
lyr_Rt139CurrentStopToBeChanged_29.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Direction': 'inline label - visible with data', 'K__M_': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', });
lyr_Rt139CurrentStopChanges_30.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Direction': 'inline label - visible with data', 'K__M_': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', });
lyr_Rt139CurrentRecom_31.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'distance': 'inline label - visible with data', 'angle': 'hidden field', });
lyr_Route139UMtr_32.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_139URecomPop_33.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'Time': 'inline label - visible with data', 'Pop': 'header label - visible with data', });
lyr_Rt139URecomMtr_34.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'Time': 'header label - visible with data', });
lyr_139DRecomPop_35.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'Time': 'inline label - always visible', 'Pop': 'header label - visible with data', });
lyr_139DRecom_36.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'hidden field', 'PREF': 'hidden field', 'Time': 'header label - visible with data', });
lyr_139RecomPopDissolved_37.set('fieldLabels', {'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'TOTAL_POP': 'inline label - always visible', 'Pop': 'header label - visible with data', });
lyr_139UStops_38.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Route_Name': 'inline label - visible with data', 'Stg': 'inline label - visible with data', 'RouteCode': 'inline label - visible with data', 'Stop_Code': 'inline label - visible with data', 'Stop_Name_Marathi': 'inline label - visible with data', 'Direction': 'inline label - visible with data', 'Key': 'inline label - visible with data', 'K__M_': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'Ticket_Fair': 'inline label - visible with data', 'unnamed__1_': 'hidden field', });
lyr_Rt139RecomProposedStops_39.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'no label', 'PREF': 'no label', 'Time': 'inline label - visible with data', 'distance': 'inline label - visible with data', 'angle': 'no label', });
lyr_Rt139RecomProposedStops_39.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});