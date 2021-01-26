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

            for ( var i = 0; i < this.objects.length; i++ ) {
                if ( this.objects[ i ].left ) {
                    this.ulLeft.appendChild( this.objects[ 0 ].li )
                }
            }

            this.ulLeft.className = 'left'
            this.div.appendChild( this.ulLeft )
        }

        for ( var i = 0; i < this.objects.length; i++ ) {
            if ( this.objects[ i ].brand ) {
                this.div.appendChild(  this.objects[ i ].component )
            }
        }


        if ( this.right ) {
            
            for ( var i = 0; i < this.objects.length; i++ ) {
                if ( this.objects[ i ].right ) {
                    this.ulRight.appendChild( this.objects[ i ].li )
                }
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
    right = false
    left = false
    icon = null
    li = document.createElement( 'li' )
    a = document.createElement( 'a' )
    i = document.createElement( 'i' )
    
    draw( ) {

        if ( this.icon !== null ) {
            this.i.className = 'material-icons'
            this.i.innerHTML = this.icon
        }

        this.a.appendChild( this.i )
        this.li.appendChild( this.a )
    }
}

class actionBrand {
    brand = true
    text = 'Brand'
    component = document.createElement( 'a' )

    draw( ) {
        this.component.className = 'brand-logo'
        this.component.innerHTML = this.text
    }
}

/*Button = new button( )
Button.text = 'Click'
Button.icon = 'cloud'
Button.draw( )*/


ActionBar = new actionBar ( )

ActionButton = new actionButton ( )
ActionButton.icon = 'menu'
ActionButton.left = true
ActionButton.draw ( )

ActionBrand = new actionBrand ( )
ActionBrand.text = 'Telegram'
ActionBrand.draw( )

ActionButton1 = new actionButton ( )
ActionButton1.icon = 'more_vert'
ActionButton1.right = true
ActionButton1.draw ( )

ActionButton2 = new actionButton ( )
ActionButton2.icon = 'refresh'
ActionButton2.right = true
ActionButton2.draw ( )

ActionButton3 = new actionButton ( )
ActionButton3.icon = 'search'
ActionButton3.right = true
ActionButton3.draw ( )

ActionBar.append( ActionButton )
ActionBar.append( ActionBrand )

ActionBar.append( ActionButton3 )
ActionBar.append( ActionButton2 )
ActionBar.append( ActionButton1 )
ActionBar.draw ( )