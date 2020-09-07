export function fetchAndShowWorkshops() {
    fetch("http://workshops-server.herokuapp.com/workshops")
        .then(function (response) {
        return response.json();
    })
        .then(function (workshops) {
        console.log(workshops);
        var tbody = document.querySelector('tbody');
        // go through workshops array and form HTML within tbody
        workshops.forEach(function (workshop) {
            tbody.innerHTML += "<tr>\n                    <td>\n                        <img src=\"" + workshop.imageUrl + "\" style=\"width: 200px;\" />\n                    </td>\n                    <td>" + workshop.name + "</td>\n                    <td>" + workshop.location.city + "</td>\n                </tr>";
        });
    })
        .catch(function (error) {
        console.log(error.message);
    });
}
