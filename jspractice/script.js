
     
        var lists = {
            setColor : function(color){
                var alist = document.querySelectorAll('li');
            var i = 0;
            while(i<alist.length){
            alist[i].style.color=color;
            i++;
            }
         }
       
    }
        
        var body = {
            setColor : function(color){
                document.querySelector('body').style.color = color;
            }
            ,
            setBackgroundColor : function(color){
                document.querySelector('body').style.backgroundColor = color;
            }

    

          }      
            function nightDayHandler(self){
            if (self.value === 'night'){
            body.setColor('white');
            body.setBackgroundColor('black');
            self.value = 'day';
            lists.setColor('powderblue')
        
            }
        else{
            body.setColor('black');
            body.setBackgroundColor('white');
            self.value = 'night';
            lists.setColor('blue');
        }
            }

            var friends = ["Sugam", "Arya", "John", "Vinay", "James"]
        
            function friendslist(){
                var i = 0;
                while(i < friends.length){
                document.write('<li>'+friends[i]+'</li>')
                i++;
                }
            }


            function two(input){
                var i =1;
                while(i <= input){
                document.write('<li>2-'+i+'</li>');
                i++;
                }
            }

            function onePlusOne(){
                document.write(1+1+"<br>");
            }
            
            function sum(left,right){
                ret = left+right;
                document.write(left+right+"<br>")
            }
            
            function sum2(left, right){
                return left+right;
            }

            var coworkers = {
                "programmer": "egoing",
                "designer" : "leezche"
            };

            function cowork(){
            document.write("programmer : " + coworkers.programmer + "<br>");
            document.write("Designer : " + coworkers.designer + "<br>");
            coworkers.bookkeeper = "duru";
            document.write("bookkeeper : " + coworkers.bookkeeper + "<br>");
            coworkers["data scientist"] = "taeho";
            document.write("data scientist : " + coworkers["data scientist"] + "<br>");
            }

            function iteration(){
                for(var key in coworkers){
                    if(key == "showAll")
                   {
                       continue;
                   }
                    document.write(key+ ": " + coworkers[key] + "<br>");
                    
                }
            }

            coworkers.showAll = function(){
               for(var key in this){
                   if(key == "showAll")
                   {
                       continue;
                   }
                   document.write(key+ ": " + this[key] + "<br>");
                }
                document.write("DONE");
            }
        