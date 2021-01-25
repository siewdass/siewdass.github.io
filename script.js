class button {
    text = 'Button'
    width = null
    height = null
    color = null
    backgroundColor = null
    icon = null

    _a = document.createElement( 'a' )
    _i = document.createElement( 'i' )

    draw( ) {

        if ( this.icon !== null ) {
            this._i.className = 'material-icons left'
            this._i.innerHTML = this.icon
        }

        if ( this.color !== null ) {
            this._a.style.color = this.color;
        }
        
        if ( this.backgroundColor !== null ) {
            this._a.style.backgroundColor = this.backgroundColor
        }

        if ( this.text !== null ) {
            this._a.innerHTML = this.text 
        }
        
        this._a.className = 'waves-effect waves-light btn'

        if ( this.icon !== null ) {
            this._a.appendChild( this._i )
        }
       
        document.body.appendChild( this._a )
    }
}


Button = new button( )
Button.text = 'Click'
//Button.color = 'purple'
Button.icon = 'cloud'
//Button.backgroundColor = 'red'
Button.draw( )