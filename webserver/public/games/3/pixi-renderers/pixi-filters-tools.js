var gdjs;
(function(gdjs2) {
  const PIXI = GlobalPIXIModule.PIXI;
  let PixiFiltersTools;
  (function(PixiFiltersTools2) {
    PixiFiltersTools2.clampValue = function(value, min, max) {
      return Math.max(min, Math.min(max, value));
    };
    PixiFiltersTools2.clampKernelSize = function(value, min, max) {
      const len = Math.round((max - min) / 2 + 1);
      const arr = new Array(len);
      for (let i = 0; i < len; i++) {
        arr[i] = min + 2 * i;
      }
      return arr.indexOf(value) !== -1 ? value : min;
    };
    const _filterCreators = {};
    PixiFiltersTools2.enableEffect = function(filter, value) {
      filter.pixiFilter.enabled = value;
    };
    PixiFiltersTools2.isEffectEnabled = function(filter) {
      return filter.pixiFilter.enabled;
    };
    PixiFiltersTools2.getFilterCreator = function(filterName) {
      if (_filterCreators.hasOwnProperty(filterName)) {
        return _filterCreators[filterName];
      }
      return null;
    };
    PixiFiltersTools2.registerFilterCreator = function(filterName, filterCreator) {
      if (_filterCreators.hasOwnProperty(filterName)) {
        console.warn('Filter "' + filterName + '" was already registered in gdjs.PixiFiltersTools. Replacing it with the new one.');
      }
      _filterCreators[filterName] = filterCreator;
    };
    PixiFiltersTools2.rgbOrHexToHexNumber = function(value) {
      const splitValue = value.split(";");
      if (splitValue.length === 3) {
        return gdjs2.rgbToHexNumber(parseInt(splitValue[0], 0), parseInt(splitValue[1], 0), parseInt(splitValue[2], 0));
      }
      return parseInt(value.replace("#", "0x"), 16);
    };
  })(PixiFiltersTools = gdjs2.PixiFiltersTools || (gdjs2.PixiFiltersTools = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=pixi-filters-tools.js.map
