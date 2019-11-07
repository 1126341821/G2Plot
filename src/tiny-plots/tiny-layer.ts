import * as _ from '@antv/util';
import ViewLayer, { ViewLayerCfg } from '../base/view-layer';
import { getComponent } from '../components/factory';
import '../geoms/line/mini';
import BaseConfig from '../interface/config';

export interface TinyLayerConfig extends ViewLayerCfg {
  indicator?: any;
}

export default abstract class TinyLayer<T extends TinyLayerConfig = TinyLayerConfig> extends ViewLayer<T> {
  public static getDefaultOptions(): any {
    return _.deepMix({}, super.getDefaultOptions(), {
      title: {
        visible: false,
      },
      description: {
        visible: false,
      },
      padding: [0, 0, 0, 0],
      legend: {
        visible: false,
      },
      xAxis: {
        visible: false,
      },
      yAxis: {
        visible: false,
      },
      tooltip: {
        visible: false,
      },
    });
  }

  protected coord() {}

  protected addGeometry() {}

  protected annotation() {
    const props = this.options;
    const config = [];
    _.each(props.guideLine, (line) => {
      const guideLine = getComponent('guideLine', {
        plot: this,
        cfg: line,
      });
      config.push(guideLine);
    });
    this.setConfig('annotations', config);
  }

  protected animation() {}
}