ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2154").setExtent([853396.445301, 6248608.601631, 892765.770720, 6285849.855406]);
var wms_layers = [];

var lyr_OrthoexpressRVB2026_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-r/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ORTHOIMAGERY.ORTHOPHOTOS.RVB-EXPRESS.2026",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortho-express RVB 2026',
                            popuplayertitle: 'Ortho-express RVB 2026',
                            type: 'base',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OrthoexpressRVB2026_0, 0]);
var format_communescommune_1 = new ol.format.GeoJSON();
var features_communescommune_1 = format_communescommune_1.readFeatures(json_communescommune_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_communescommune_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_communescommune_1.addFeatures(features_communescommune_1);
var lyr_communescommune_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_communescommune_1, 
                style: style_communescommune_1,
                popuplayertitle: 'communes — commune',
                interactive: true,
                title: '<img src="styles/legend/communescommune_1.png" /> communes — commune'
            });
var format_lignes_de_bateaubus_2 = new ol.format.GeoJSON();
var features_lignes_de_bateaubus_2 = format_lignes_de_bateaubus_2.readFeatures(json_lignes_de_bateaubus_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_lignes_de_bateaubus_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lignes_de_bateaubus_2.addFeatures(features_lignes_de_bateaubus_2);
var lyr_lignes_de_bateaubus_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lignes_de_bateaubus_2, 
                style: style_lignes_de_bateaubus_2,
                popuplayertitle: 'lignes_de_bateaubus',
                interactive: true,
    title: 'lignes_de_bateaubus<br />\
    <img src="styles/legend/lignes_de_bateaubus_2_0.png" /> 757 - 2169<br />\
    <img src="styles/legend/lignes_de_bateaubus_2_1.png" /> 2169 - 2764<br />\
    <img src="styles/legend/lignes_de_bateaubus_2_2.png" /> 2764 - 3493<br />\
    <img src="styles/legend/lignes_de_bateaubus_2_3.png" /> 3493 - 4022<br />\
    <img src="styles/legend/lignes_de_bateaubus_2_4.png" /> 4022 - 4793<br />' });
var format_embarcadere_potentiels_3 = new ol.format.GeoJSON();
var features_embarcadere_potentiels_3 = format_embarcadere_potentiels_3.readFeatures(json_embarcadere_potentiels_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_embarcadere_potentiels_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_embarcadere_potentiels_3.addFeatures(features_embarcadere_potentiels_3);
cluster_embarcadere_potentiels_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_embarcadere_potentiels_3
});
var lyr_embarcadere_potentiels_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_embarcadere_potentiels_3, 
                style: style_embarcadere_potentiels_3,
                popuplayertitle: 'embarcadere_potentiels',
                interactive: true,
    title: 'embarcadere_potentiels<br />\
    <img src="styles/legend/embarcadere_potentiels_3_0.png" /> Faible emprise foncière et éloignement à plus de 400 m des commodités<br />\
    <img src="styles/legend/embarcadere_potentiels_3_1.png" /> Emprise foncière supérieure à 5000 m² et bonne connexion aux commodités les plus proches<br />\
    <img src="styles/legend/embarcadere_potentiels_3_2.png" /> Bonne emprise foncière mais éloignement à plus de 400 m des commodités<br />' });
var format_ports_existants_4 = new ol.format.GeoJSON();
var features_ports_existants_4 = format_ports_existants_4.readFeatures(json_ports_existants_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_ports_existants_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ports_existants_4.addFeatures(features_ports_existants_4);
var lyr_ports_existants_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ports_existants_4, 
                style: style_ports_existants_4,
                popuplayertitle: 'ports_existants',
                interactive: true,
                title: '<img src="styles/legend/ports_existants_4.png" /> ports_existants'
            });

lyr_OrthoexpressRVB2026_0.setVisible(true);lyr_communescommune_1.setVisible(true);lyr_lignes_de_bateaubus_2.setVisible(true);lyr_embarcadere_potentiels_3.setVisible(true);lyr_ports_existants_4.setVisible(true);
var layersList = [lyr_OrthoexpressRVB2026_0,lyr_communescommune_1,lyr_lignes_de_bateaubus_2,lyr_embarcadere_potentiels_3,lyr_ports_existants_4];
lyr_communescommune_1.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'code_insee': 'code_insee', 'code_insee_du_canton': 'code_insee_du_canton', 'code_insee_de_l_arrondissement': 'code_insee_de_l_arrondissement', 'code_insee_de_la_collectivite_terr': 'code_insee_de_la_collectivite_terr', 'code_insee_du_departement': 'code_insee_du_departement', 'code_insee_de_la_region': 'code_insee_de_la_region', 'population': 'population', 'superficie_cadastrale': 'superficie_cadastrale', 'date_creation': 'date_creation', 'date_modification': 'date_modification', 'date_d_apparition': 'date_d_apparition', 'date_de_confirmation': 'date_de_confirmation', 'code_postal': 'code_postal', 'nom_officiel': 'nom_officiel', 'chef_lieu_d_arrondissement': 'chef_lieu_d_arrondissement', 'chef_lieu_de_collectivite_terr': 'chef_lieu_de_collectivite_terr', 'chef_lieu_de_departement': 'chef_lieu_de_departement', 'chef_lieu_de_region': 'chef_lieu_de_region', 'capitale_d_etat': 'capitale_d_etat', 'date_du_recensement': 'date_du_recensement', 'organisme_recenseur': 'organisme_recenseur', 'code_siren': 'code_siren', 'codes_siren_des_epci': 'codes_siren_des_epci', 'lien_vers_chef_lieu': 'lien_vers_chef_lieu', 'liens_vers_autorite_administrative': 'liens_vers_autorite_administrative', });
lyr_lignes_de_bateaubus_2.set('fieldAliases', {'fid': 'fid', 'begin': 'begin', 'end': 'end', 'nb_passager_jour': 'nb_passager_jour', });
lyr_embarcadere_potentiels_3.set('fieldAliases', {'fid': 'fid', 'surf': 'surf', 'hub_dist_route': 'Distance de la route la plus proche (en m)', 'hub_dist_parking': 'hub_dist_parking', 'potentiel': 'potentiel', });
lyr_ports_existants_4.set('fieldAliases', {'fid': 'fid', 'nom': 'nom', });
lyr_communescommune_1.set('fieldImages', {'fid': 'TextEdit', 'cleabs': 'TextEdit', 'code_insee': 'TextEdit', 'code_insee_du_canton': 'TextEdit', 'code_insee_de_l_arrondissement': 'TextEdit', 'code_insee_de_la_collectivite_terr': 'TextEdit', 'code_insee_du_departement': 'TextEdit', 'code_insee_de_la_region': 'TextEdit', 'population': 'Range', 'superficie_cadastrale': 'Range', 'date_creation': 'DateTime', 'date_modification': 'DateTime', 'date_d_apparition': 'DateTime', 'date_de_confirmation': 'DateTime', 'code_postal': 'TextEdit', 'nom_officiel': 'TextEdit', 'chef_lieu_d_arrondissement': 'CheckBox', 'chef_lieu_de_collectivite_terr': 'CheckBox', 'chef_lieu_de_departement': 'CheckBox', 'chef_lieu_de_region': 'CheckBox', 'capitale_d_etat': 'CheckBox', 'date_du_recensement': 'DateTime', 'organisme_recenseur': 'TextEdit', 'code_siren': 'TextEdit', 'codes_siren_des_epci': 'TextEdit', 'lien_vers_chef_lieu': 'TextEdit', 'liens_vers_autorite_administrative': 'TextEdit', });
lyr_lignes_de_bateaubus_2.set('fieldImages', {'fid': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'nb_passager_jour': 'Range', });
lyr_embarcadere_potentiels_3.set('fieldImages', {'fid': 'Hidden', 'surf': 'TextEdit', 'hub_dist_route': 'TextEdit', 'hub_dist_parking': 'TextEdit', 'potentiel': 'TextEdit', });
lyr_ports_existants_4.set('fieldImages', {'fid': 'TextEdit', 'nom': 'TextEdit', });
lyr_communescommune_1.set('fieldLabels', {'fid': 'no label', 'cleabs': 'no label', 'code_insee': 'no label', 'code_insee_du_canton': 'no label', 'code_insee_de_l_arrondissement': 'no label', 'code_insee_de_la_collectivite_terr': 'no label', 'code_insee_du_departement': 'no label', 'code_insee_de_la_region': 'no label', 'population': 'no label', 'superficie_cadastrale': 'no label', 'date_creation': 'no label', 'date_modification': 'no label', 'date_d_apparition': 'no label', 'date_de_confirmation': 'no label', 'code_postal': 'no label', 'nom_officiel': 'no label', 'chef_lieu_d_arrondissement': 'no label', 'chef_lieu_de_collectivite_terr': 'no label', 'chef_lieu_de_departement': 'no label', 'chef_lieu_de_region': 'no label', 'capitale_d_etat': 'no label', 'date_du_recensement': 'no label', 'organisme_recenseur': 'no label', 'code_siren': 'no label', 'codes_siren_des_epci': 'no label', 'lien_vers_chef_lieu': 'no label', 'liens_vers_autorite_administrative': 'no label', });
lyr_lignes_de_bateaubus_2.set('fieldLabels', {'fid': 'no label', 'begin': 'no label', 'end': 'no label', 'nb_passager_jour': 'header label - visible with data', });
lyr_embarcadere_potentiels_3.set('fieldLabels', {'surf': 'inline label - visible with data', 'hub_dist_route': 'inline label - visible with data', 'hub_dist_parking': 'inline label - visible with data', 'potentiel': 'inline label - visible with data', });
lyr_ports_existants_4.set('fieldLabels', {'fid': 'header label - visible with data', 'nom': 'header label - always visible', });
lyr_ports_existants_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});