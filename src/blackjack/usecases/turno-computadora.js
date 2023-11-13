
import { pedirCarta, valorCarta, crearCartaHtml } from "./";

/**
 * 
 * @param {number} puntosMinimos 
 * @param {HTMLElement} puntosHTML
 * @param {HTMLElement} divCartasComputadora
 * @param {Array<string>} deck 
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if( !puntosMinimos ) throw new Error('puntosMinimos es obligatorio');
    if( !puntosHTML ) throw new Error('puntosHTML es obligatorio');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora += valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        divCartasComputadora.append( crearCartaHtml( carta ) );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}