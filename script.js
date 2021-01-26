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

class actionBar {
    objects = []
    color = null
    left = true
    right = true
    
    nav = document.createElement( 'nav' )
    div = document.createElement( 'div' )

    ulLeft = document.createElement( 'ul' )
    ulRight = document.createElement( 'ul' )

    append ( element ) {
        this.objects.push( element )
    }

    draw ( ) {

        if ( this.left ) {
            this.ulLeft.className = 'left'
            this.div.appendChild( this.ulLeft )
        }

        if ( this.right ) {

            if ( this.objects[ 0 ].right ) {
                this.ulRight.appendChild( this.objects[ 0 ].li )
            }

            this.ulRight.className = 'right'
            this.div.appendChild( this.ulRight )
        }

        this.div.className = 'nav-wrapper'
        this.nav.appendChild( this.div )
        document.body.appendChild( this.nav )
    }
}

class actionButton {
    right = true
    left = false
    li = document.createElement( 'li' )
    a = document.createElement( 'a' )
    i = document.createElement( 'i' )
    
    draw( ) {
        this.i.className = 'material-icons'
        this.i.innerHTML = 'menu'

        this.a.appendChild( this.i )
        this.li.appendChild( this.a )
    }
}

/*Button = new button( )
Button.text = 'Click'
Button.icon = 'cloud'
Button.draw( )*/

ActionBar = new actionBar ( )

ActionButton = new actionButton ( )
ActionButton.draw ( )

ActionBar.append( ActionButton )
ActionBar.draw ( )