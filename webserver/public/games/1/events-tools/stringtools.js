var gdjs;
(function(gdjs2) {
  let evtTools;
  (function(evtTools2) {
    let string;
    (function(string2) {
      string2.newLine = function() {
        return "\n";
      };
      string2.fromCodePoint = function(codePoint) {
        return String.fromCodePoint(codePoint);
      };
      string2.toUpperCase = function(str) {
        return str.toUpperCase();
      };
      string2.toLowerCase = function(str) {
        return str.toLowerCase();
      };
      string2.subStr = function(str, start, len) {
        if (start < str.length && start >= 0) {
          return str.substr(start, len);
        }
        return "";
      };
      string2.strAt = function(str, start) {
        if (start < str.length && start >= 0) {
          return str.substr(start, 1);
        }
        return "";
      };
      string2.strRepeat = function(str, count) {
        let result = "";
        for (let i = 0; i < count; i++) {
          result += str;
        }
        return result;
      };
      string2.strLen = function(str) {
        return str.length;
      };
      string2.strFind = function(str, what) {
        return str.indexOf(what);
      };
      string2.strFindLast = function(str, what) {
        return str.lastIndexOf(what);
      };
      string2.strRFind = gdjs2.evtTools.string.strFindLast;
      string2.strFindFrom = function(str, what, pos) {
        return str.indexOf(what, pos);
      };
      string2.strFindLastFrom = function(str, what, pos) {
        return str.lastIndexOf(what, pos);
      };
      string2.strRFindFrom = gdjs2.evtTools.string.strFindLastFrom;
    })(string = evtTools2.string || (evtTools2.string = {}));
  })(evtTools = gdjs2.evtTools || (gdjs2.evtTools = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=stringtools.js.map
