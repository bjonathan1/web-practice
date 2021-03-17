var Link = {
      setColor:function (color) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
          alist[i].style.color = color;
          i = i + 1;
        }
      }
    }
    var Body = {
      setColor:function (color){
        document.querySelector('body').style.color = color;
      },
      setBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color;
      }
    }
    function nightDayHandler(self){
      if(document.querySelector('#night_day').value === 'night'
      ){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        document.querySelector('#night_day').value = 'day';
        Link.setColor('powderblue');
      } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        document.querySelector('#night_day').value = 'night';
        Link.setColor('blue');

      }
    }