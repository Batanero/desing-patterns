import WmsLayerAdapter from "./impl/wmsLayerAdapter";
import WmtsLayerAdapter from "./impl/wmtsLayerAdapter";
import XYZLayerAdapter from "./impl/xyzLayerAdapter";

export default class LayerFactory {
    constructor() { }

    getLayer(layerOptions) {
        !(layerOptions && layerOptions.sourceType) ? alert('Error message: Invalid layer options definition') : null;

        switch (layerOptions.sourceType) {
            case 'WMS':
                return new WmsLayerAdapter(layerOptions);

            case 'WMTS':
                return new WmtsLayerAdapter(layerOptions);

            case 'XYZ':
                return new XYZLayerAdapter(layerOptions);

            default:
                alert('Error message: Unndefined layer source type');
        }
    }
}