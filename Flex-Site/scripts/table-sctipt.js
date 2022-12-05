function drawTableEntries(topics) {
    var temp = "";
    for (i = 0; i < topics.length; i++) {
        temp += "<tr><td>" + phrases[i].name + "<\/td><td>" + phrases[i].ru + "<\/td><td>" + phrases[i].en + "<\/td><td>" + phrases[i].es + "<\/td><td>" + phrases[i].theme + "<\/td><\/tr>";
    }
    document.write(temp);
}