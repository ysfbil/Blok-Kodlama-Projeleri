function showWatermark(container, language) {
    $("#" + container).append("<div id=\"watermark\" class=\"watermark-show\"></div>");

    var $watermark = $("#watermark");

    if (language == "turkish")
        watermarkContent = "<div id='watermark-image'></div><span>ile geliştirilmiştir.</span>";
    else
        watermarkContent = "<span>Developed by</span><div id='watermark-image'></div>";

    $watermark.html(watermarkContent);
}