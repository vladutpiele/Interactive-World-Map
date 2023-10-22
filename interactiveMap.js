async function getData(place) {
    const url = `https://timezone.abstractapi.com/v1/current_time/?api_key=6e6e8818d3c2461091bba0cbaf0c2123&location=${place}`;
    const res = await fetch(url);
    const data = await res.json();
    const time = data.datetime;
    document.getElementById("time").innerText = `${place}'s time is ${time}`;
    /// nu avea rost aici sa folosesc try-catch
}

document.querySelectorAll(".allPaths").forEach(e => {
    e.addEventListener("mouseover", function (event) {

        /// de retinut faptul ca ... parametrul 'event' face referire efectiv la evenimentul 'mouseover' in sine

        window.onmousemove = function (j) { /// aici este 'onmousemove', pentru ca rolul efectului vizual este de a se plimba dupa 
            let x = j.clientX;                                                                             /// cursorul mouse-ului
            let y = j.clientY;
            document.getElementById("name").style.top = y + 5 + "px";
            document.getElementById("name").style.left = x + 10 + "px";
        }

        e.style.fill = "pink";
        document.getElementById("name").style.opacity = 1;
        document.getElementById("namep").innerText = e.id;
    })
    e.addEventListener("mouseleave", function () {
        e.style.fill = "#ececec";
        document.getElementById("name").style.opacity = 0;
    })

    e.addEventListener("click", function () {
        document.getElementById("time").style.opacity = 1;
        getData(e.id);
        setTimeout(function () {
            document.getElementById("time").style.opacity = 0;
        }, 8000)
    })
})