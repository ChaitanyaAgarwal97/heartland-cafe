var objScrollTop = 0;
var scroll = 0;

$(window).on('load', function()
{
	parallax(document.getElementById('level1'), -1.5, -4800);
	parallax(document.getElementById('level2'), -1, -2900);
	parallax(document.getElementById('level3'), -1.3, 200);
});

$('body').on('mousewheel DOMMouseScroll MozMousePixelScroll wheel', function(e)
{

	if ( e.originalEvent.wheelDelta !== undefined )
	{
		parallax(document.getElementById('level1'), -1.5, e.originalEvent.wheelDelta);
		parallax(document.getElementById('level2'), -1, e.originalEvent.wheelDelta);
		parallax(document.getElementById('level3'), -1.3, e.originalEvent.wheelDelta);

	}else if ( e.originalEvent.deltaY !== undefined )
	{
		parallax(document.getElementById('level1'), -1.5, (e.originalEvent.deltaY * (-30)));
		parallax(document.getElementById('level2'), -1, (e.originalEvent.deltaY * (-30)));
		parallax(document.getElementById('level3'), -1.3, (e.originalEvent.deltaY * (-30)));
	}
});

function parallax(target, layer, scrollinit) 
{
    var layer_coeff = 10 / layer;
    scroll = scroll + ( parseInt(scrollinit) );
	
    // var y = ($(window).height() - target.offsetHeight) / 2 - (scroll - ($(window).height() / 2)) / layer_coeff;
    var y 		= ( $(window).height() / 2 ) - (scroll - ($(window).height() / 2)) / layer_coeff;
    var scarto 	= target.offsetHeight - $(window).height();

    // Aggiunge sotto la gallery quando si avvicina alla fine della colonna
    if ( ( y < 0 ) && ( Math.abs(y) >= scarto ) )	append_gallery(target);

    if ( ( parseInt(scrollinit) >= 0 ) && ( Math.abs(scroll) < 6000 ) )
    {
    	scroll = scroll - 150;
    	return;
    }	

    $(target).css('marginTop', y);
}

function append_gallery(column)
{
	var container 	= $(column).find('.gallery'),
		items 		= container.children();

	items.clone().appendTo(container);
}