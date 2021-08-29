import TileLayer from "ol/layer/Tile";
import TileWMS from "ol/source/TileWMS";

export default class WmsLayerAdapter {
    constructor(layerOptions) {
        return new TileLayer({
            source: new TileWMS({
                url: layerOptions.url,
                params: { 'LAYERS': layerOptions.targetLayer, 'TILED': true },
                transition: 0,
                crossOrigin: 'anonymous'
            })
        });
    }
}