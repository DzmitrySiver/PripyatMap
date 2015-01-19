/**
 * Created by dzmitry_siver on 1/19/2015.
 */
$(function() {
	var map = $("#map");

	map.onmousedown = saveXY; // Ставим обработчик событий
	document.onmouseup = clearXY;

	function saveXY(obj_event){ // По нажатии выполняется эта функция
		// Получаем координаты курсора
		x = window.event.clientX;
		y = window.event.clientY;

		// Получаем новые координаты контейнера
		container_x = mapcontainer.offsetLeft;
		container_y = mapcontainer.offsetTop;

		/* Узнаём текущие координаты блока */
		x_block = map.offsetLeft;
		y_block = map.offsetTop;


		/* Смещение = координаты блока - координаты мыли */
		delta_x = x_block - x - container_x;
		delta_y = y_block - y - container_y;

		document.onmousemove = moveMap; /* При движении курсора устанавливаем вызов функции moveWindow */
	}

	function clearXY() {
		document.onmousemove = null; // При отпускании мыши убираем обработку события движения мыши
	}
	function moveMap (obj_event){
		// Получаем новые координаты курсора мыши
		x = window.event.clientX;
		y = window.event.clientY;


		new_x = delta_x + x; // Новая координата = начальное смещение
		new_y = delta_y + y;
		map.style.top = new_y + "px";
		map.style.left = new_x + "px";
		document.getElementById("indicator").innerHTML = new_x+" = "+delta_x+" + "+x+"<br/>";
		document.getElementById("indicator").innerHTML += new_y+" = "+delta_y+" + "+y;
	}

	function zoom(value) {
		map.style.zoom = value;
	}
});
