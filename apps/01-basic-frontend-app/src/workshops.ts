fetch( `http://workshops-server.herokuapp.com/workshops` )
    .then(function( response ) {
        return response.json();
    })
    .then(function( workshops ) {
        console.log( workshops );
        
        const tbody = <HTMLElement> document.querySelector( 'tbody' );
        
        // go through workshops array and form HTML within tbody
        workshops.forEach(function( workshop : any ) {
            tbody.innerHTML += `<tr>
                <td>
                    <img src="${workshop.imageUrl}" style="width: 200px;" />
                </td>
                <td>${workshop.name}</td>
                <td>${workshop.location.city}</td>
            </tr>`;
        });
    })
    .catch(function( error ) {
        console.log( error.message );
    });