class button {
    text = ''
    width = 20
    height = 20
    constructor( ) {
    }

    draw( ) { 
        var element = document.createElement( 'button' )
        element.innerHTML = this.text
        element.style.color = 'green';
        element.style.backgroundColor = 'blue'
        document.body.appendChild( element )
    }
}

var x = ''
Button = new button( )
Button.text = 'Click'
//Button.draw( )