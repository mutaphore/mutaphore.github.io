var reverseWords = function() {
   var line, newLine;

   line = document.getElementById("myInput").value;
   newLine = line.trim().split(" ").reverse().join(" ");
   document.getElementById("output1").innerHTML = newLine;
};
