import TileLayer from "ol/layer/Tile";
import WMTS from "ol/source/WMTS";
import WMTSTileGrid from 'ol/tilegrid/WMTS';
import { fromLonLat, get as getProjection } from 'ol/proj';
import { getTopLeft, getWidth } from 'ol/extent';

export default class WmtsLayerAdapter {
    constructor(layerOptions) {
        const resolutions = [];
        const matrixIds = [];
        const projection = getProjection(layerOptions.projection);
        const projectionExtent = projection.getExtent();
        const maxResolution = getWidth(projection.getExtent()) / 256;

        for (let i = 0; i < 20; i++) {
            matrixIds[i] = i.toString();
            resolutions[i] = maxResolution / Math.pow(2, i);
        }

        return new TileLayer({
            source: new WMTS({
                url: layerOptions.url,
                layer: layerOptions.targetLayer,
                matrixSet: layerOptions.matrixSet,
                format: layerOptions.format,
                projection: layerOptions.projection,
                tileGrid: new WMTSTileGrid({
                    origin: getTopLeft(projectionExtent),
                    resolutions: resolutions,
                    matrixIds: matrixIds,
                }),
                style: layerOptions.style,
                crossOrigin: 'anonymous'
            })
        });
    }
}