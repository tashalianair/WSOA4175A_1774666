function GetClock() {
    var d=new Date();
    var nmonth=(d.getMonth() + 1), ndate=d.getDate(), nyear=d.getFullYear(); 
    if(nmonth <= 9) 
        nmonth = "0"+nmonth;
    if(ndate <= 9)
        ndate = "0"+ndate;
    var nhour = d.getHours(), nmin = d.getMinutes();
    if(nmin <= 9) nmin="0"+nmin;

    var clocktext = "" + nyear + "-" + nmonth + "-" + ndate + " " + nhour + ":" + nmin + "";
    document.getElementById('time').innerHTML=clocktext;
}

GetClock();
setInterval(GetClock,1000);