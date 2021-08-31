import TileLayer from "ol/layer/Tile";
import WMTS from "ol/source/WMTS";
import WMTSTileGrid from 'ol/tilegrid/WMTS';
import { get as getProjection } from 'ol/proj';
import { getTopLeft, getWidth } from 'ol/extent';

export default class WmtsLayerBuilder {
    constructor() {

    }

    setUrl(url) {
        this.url = url;
        return this;
    }

    setTargetLayer(targetLayer) {
        this.targetLayer = targetLayer;
        return this;
    }

    setMatrixSet(matrixSet) {
        this.matrixSet = matrixSet;
        return this;
    }

    setFormat(format) {
        this.format = format;
        return this;
    }

    setStyle(style) {
        this.style = style;
        return this;
    }

    setProjection(projection) {
        this.projection = projection;
        return this;
    }

    setTileGrid(projection) {
        if (this.projection === undefined && projection === undefined) {
            alert("Error message: It's necessary to have a projection");
        } else if (!this.projection) {
            this.projection === projection;
        }

        const resolutions = [];
        const matrixIds = [];
        const projectionObject = getProjection(projection);
        const projectionExtent = projectionObject.getExtent();
        const maxResolution = getWidth(projectionObject.getExtent()) / 256;

        for (let i = 0; i < 20; i++) {
            matrixIds[i] = i.toString();
            resolutions[i] = maxResolution / Math.pow(2, i);
        }

        this.tileGrid = new WMTSTileGrid({
            origin: getTopLeft(projectionExtent),
            resolutions: resolutions,
            matrixIds: matrixIds,
        })

        return this;
    }

    setLayerName(name) {
        this.name = name;
        return this;
    }

    setLayerId(id) {
        this.id = id;
        return this;
    }

    build() {
        let layer = new TileLayer({
            source: new WMTS({
                url: this.url,
                layer: this.targetLayer,
                matrixSet: this.matrixSet,
                format: this.format,
                projection: this.projection,
                tileGrid: this.tileGrid,
                style: this.style,
                crossOrigin: 'anonymous'
            })
        });

        layer.name = this.name;
        layer.getLayerName = () => { return layer.name };

        layer.id = this.id;
        this.getId = () => { return layer.id };

        return layer;
    }
}