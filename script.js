var reasons = [
    "Dad",
    "Me",
    "Mom",
  
  ];
  var images = [
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFWJW9f2df8ibmWPwTui-rpByNkBffoOJ80g&usqp=CAU",
    "https://wallpaperaccess.com/full/3000132.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6LcEVcyZ-Ien9ulvh-WBZrOTa6lm8gNnk6A&usqp=CAU"
  ];
  
  var i = 0;
  function nextslide() {  document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;
                        document.getElementById("audio").play();
   
  }
  
  
  
  