const freeze = ( object ) => {

    Object.freeze( object )

    Object.getOwnPropertyNames( object ).forEach( ( key ) => typeof object[ key ] === 'object' && freeze( object[ key ] ) )
    
}