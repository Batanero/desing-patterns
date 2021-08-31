import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import WmtsLayerBuilder from '../wmtsLayerBuilder/wmtsLayerBuilder';

import layer from '../../layers/wmtsLayer.json' /* WMTS Layer */

export default class MapService {
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

        return this;
    }

    addLayer() {
        let wmtsLayer = new WmtsLayerBuilder()
            .setLayerName(layer.name)
            .setLayerId(layer.id)
            .setUrl(layer.url)
            .setTargetLayer(layer.targetLayer)
            .setTileGrid(layer.projection)
            .setMatrixSet(layer.matrixSet)
            .setFormat(layer.format)
            .setStyle(layer.style)
            .build();

        this.map.addLayer(wmtsLayer);
    }
}