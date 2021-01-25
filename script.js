class button {
    text = null
    width = null
    height = null
    color = null
    backgroundColor = null
    element = document.createElement( 'button' )
    constructor( ) {

    }

    draw( ) { 
        if ( this.color !== null ) {
            this.element.style.color = this.color;
        }
        
        if ( this.backgroundColor !== null ) {
            this.element.style.backgroundColor = this.backgroundColor
        }

        if ( this.text !== null ) {
            this.element.innerHTML = this.text 
        }
    }
}

class container {
    toDraw = [ ]
    element = document.createElement( 'div' )

    append( component ) {
        this.toDraw.push( component )
    }

    draw( ) {
        for ( let i = 0; i < this.toDraw.length; i++ ) {
            this.element.appendChild( this.toDraw[ i ] )
        }
        document.body.appendChild( this.element )
    }
}

Container = new container( )

Button = new button( )
Button.text = 'Click'
Button.color = 'purple'
Button.backgroundColor = 'red'
Button.draw( )

Button1 = new button( )
Button1.text = 'Click'
Button1.color = 'purple'
Button1.backgroundColor = 'red'
Button1.draw( )

Container.append( Button.element )
Container.append( Button1.element )
Container.draw( )
