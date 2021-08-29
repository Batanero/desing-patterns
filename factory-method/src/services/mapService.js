import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import layer from '../../layers/wmsLayer.json'
import LayerFactory from './layerFactory/layerFactory';

export default class MapManager {
    constructor() { }

    initMap() {
        this.map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                center: [-11217589.755880456, 4620806.8813518565],
                zoom: 4
            })
        });

        this.map.addLayer(new LayerFactory().getLayer(layer));
    }
}