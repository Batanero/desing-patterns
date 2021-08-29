import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

export default class XYZLayerAdapter {
    constructor(layerOptions) {
        return new TileLayer({
            source: new XYZ({
                url: layerOptions.url,
                crossOrigin: 'anonymous'
            }),
        })
    }
}