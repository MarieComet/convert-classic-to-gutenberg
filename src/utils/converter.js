import { registerCoreBlocks } from '@wordpress/block-library'
import { getBlockTypes, serialize, rawHandler, createBlock } from '@wordpress/blocks'

const blocks = getBlockTypes()
if ( blocks.length === 0 ) {
    registerCoreBlocks();
}

export function checkIsPostClassic( postContent ) {
    if ( postContent.includes( '<!--' ) ) {
        return false;
    }
    return true;
}

export function classicToBlocks( postContent ) {
	var blocks = rawHandler( { 
        HTML: postContent
    } );
    return serialize( blocks );
}