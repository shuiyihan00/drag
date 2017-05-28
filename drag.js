function drag(id){
	var obj=document.getElementById(id);
	var disX=0;
	var disY=0;
	obj.onmousedown=function(ev){
		disX=ev.pageX-obj.offsetLeft;
		disY=ev.pageY-obj.offsetLeft
		document.onmousemove=function(){
<<<<<<< HEAD
			obj.style.left=ev.pageX-disX+'px';
			obj.style.top=ev.pageY-disY+'px';
=======
			obj.style.left=ev.clientX-disX+"px";
			obj.style.right=ev.clientY-disY+"px";
>>>>>>> new1
		}
	}
}