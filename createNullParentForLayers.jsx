(function () {
  var config = {
      name: "MAIN",
      preferSelection: true,
    },
    thisComp = null;

  function init() {
    setComp();
    var children = getTargetLayers();
    var parent = createNull();
    for (var i = 0; i < children.length; i++) children[i].parent = parent;
  }

  function getTargetLayers() {
    var isSelection = config.preferSelection && thisComp.selectedLayers.length;
    var result = [],
      list = isSelection ? thisComp.selectedLayers : thisComp.layers;
    if (isSelection)
      for (var i = 0; i < list.length; i++) {
        if (!list[i].parent) result.push(list[i]);
      }
    else
      for (var i = 1; i <= list.length; i++) {
        if (!list[i].parent) result.push(list[i]);
      }
    return result;
  }
  function setComp() {
    if (app.activeViewer == null) return false;
    app.activeViewer.setActive();
    thisComp = app.project.activeItem;
    if (!thisComp || !(thisComp instanceof CompItem)) return false;
    return true;
  }
  function createNull() {
    var layer = thisComp.layers.addNull();
    layer.name = config.anme || "MAIN";
    return layer;
  }

  init();
})();
