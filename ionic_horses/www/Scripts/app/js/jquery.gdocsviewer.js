/*
 * jQuery.gdocViewer - Embed linked documents using Google Docs Viewer
 * Licensed under MIT license.
 * Date: 2011/01/16
 *
 * @author Jawish Hameed
 * @version 1.0
 */
(function($){
	$.fn.gdocsViewer = function(options) {
	
		var settings = {
			width  : '600',
			height : '700'
		};
		
		if (options) { 
			$.extend(settings, options);
		}
		
		return this.each(function() {
			var file = $(this).attr('href');
			var ext = file.substring(file.lastIndexOf('.') + 1);
			//var srcs = "http://online.verypdf.com/app/reader/?embedded=true&url=" + encodeURIComponent(file);
			//alert(srcs);

			if (/^(tiff|pdf|ppt|pps|doc|docx)$/.test(ext)) {
				$(this).after(function () {
					var id = $(this).attr('id');
					var gdvId = (typeof id !== 'undefined' && id !== false) ? id + '-gdocsviewer' : '';
					return '<div id="' + gdvId + '" class="gdocsviewer"><iframe src="http://docs.google.com/viewer?&chrome=true&embedded=true&url=' + encodeURIComponent(file) + '" width="' + settings.width + '" height="' + settings.height + '" style="border: none;"></iframe></div>';

				    //<iframe src="http://docs.google.com/viewer?&chrome=true&embedded=true&url=' + encodeURIComponent(file) + '" width="' + settings.width + '" height="' + settings.height + '" style="border: none;"></iframe>
					//<iframe style="border:none" height="700" src="http://online.verypdf.com/app/reader/?embedded=true&url=http://online.verypdf.com/examples/pdfeditor.pdf" width="100%"></iframe>
				})
			}
		});
	};
})( jQuery );