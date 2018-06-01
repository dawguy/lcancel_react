import {expect} from 'chai';

describe( 'immutability', () => {
    describe( 'a number', () => {
        function increment( current_state ){
            return current_state + 1;
        }

        it( 'is immutable', () => {
            let state = 42;
            let next_state = increment( state );

            expect( next_state ).to.equal( 43 );
            expect( state ).to.equal( 42 );
        })
    })
});