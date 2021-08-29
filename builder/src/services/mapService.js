import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import LayerFactory from './layerFactory/layerFactory';

/** Layer sources, uncomment the different 'layers' to test the different data sources */
import layer from '../../layers/wmsLayer.json' /* WMS Layer */
// import layer from '../../layers/wmtsLayer.json' /* WMTS Layer */
// import layer from '../../layers/xyzLayer.json' /* XYZ Layer */

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

        this.map.addLayer(new LayerFactory().getLayer(layer));
    }
}