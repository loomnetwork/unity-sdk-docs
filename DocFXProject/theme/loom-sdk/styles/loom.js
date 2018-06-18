$(function() {
    var relHref = $("meta[property='docfx\\:rel']").attr("content");
    if (typeof relHref === 'undefined') {
      return;
    }
    relHref = relHref.replace(/\\/g, '/');
    if (relHref === "") {
        window.location.replace("api/Loom.Unity3d.html");
    }
})