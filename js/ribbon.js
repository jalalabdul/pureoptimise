window.onscroll = function (e) {
    var Wposition = window.pageYOffset
    var Dposition = document.getElementById('team-section').offsetTop;
    var diff=Dposition-Wposition;
    if(diff<=45)
    {
    document.getElementById('hiring').style.display="inline-block";
    }
    if(diff>45)
    {
    document.getElementById('hiring').style.display="none";
    }    
}