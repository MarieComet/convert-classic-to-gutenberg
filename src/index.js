import { __ } from '@wordpress/i18n'
import { TextControl, Spinner, Button } from '@wordpress/components';
import { useState, render, Fragment } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import { decodeEntities } from '@wordpress/html-entities';
import { addQueryArgs } from '@wordpress/url';

import { checkIsPostClassic, classicToBlocks } from './utils/converter';

function ConvertToClassic() {

    const [ inputSearch, setInputSearch ] = useState( '' );
    const [ searchTerm, setSearchTerm ] = useState( '' );
	const [ pagesToConvert, setPageToConvert ] = useState( [] );
    const [ currentPage, setCurrentPage ] = useState( 1 );
    const [ postsPerPages, setPostsPerPages ] = useState( 15 );
    const [ postType, setPostType ] = useState( 'page' );
    const [ editor, setEditor ] = useState( 'classic' );
    const [ pagesConverting, setPagesConverting ] = useState( [] );
    const [ allChecked, setAllChecked ] = useState( false );

    const { pages, hasResolved } = useSelect(
        ( select ) => {
            const query = {
                per_page: postsPerPages,
                page: currentPage
            };

            if ( searchTerm ) {
                query.search = searchTerm;
                //query.page = 1;
            }

            const selectorArgs = [ 'postType', postType, query ];
            return {
                pages: select( coreDataStore ).getEntityRecords(
                    ...selectorArgs
                ),
                hasResolved: select( coreDataStore ).hasFinishedResolution(
                    'getEntityRecords',
                    selectorArgs
                ),
            };
        },
        [ searchTerm, currentPage, postsPerPages, postType, editor ]
    );

    const excludedPostTypes = [ 'attachment', 'wp_navigation', 'wp_block' ];
    const { types } = useSelect(
        ( select ) => {
            const query = {
                per_page: -1,
                viewable: true
            };
            return {
                types: select( coreDataStore ).getPostTypes(
                    query
                )?.filter(
                    ( { visibility, slug } ) =>
                        visibility.show_ui && ! excludedPostTypes.includes( slug )
                ),
            };
        },
        [ postType ]
    );

    const { getEntityRecord } = useSelect( coreDataStore );
    const { saveEntityRecord } = useDispatch( coreDataStore );

	const convertPages = ( classic ) => {
        var pagesConverted = [ ... pagesToConvert ];
		pagesToConvert.forEach( function ( pageId ) {
			const   objectPost = getEntityRecord( 'postType', postType, pageId )
            let postContent = objectPost.content.raw;
			if ( classic ) {
                const isClassic = checkIsPostClassic( objectPost.content.raw );
                if ( isClassic ) {
                    postContent = classicToBlocks( objectPost.content.raw );
                }                
            } else {
                postContent = objectPost.content.rendered
            }

            if ( postContent ) {
                // Update post                    
                return saveEntityRecord( 'postType', objectPost.type, { id: pageId, content: postContent } )
                .then( ( response ) => {
                    // Set this post is converting
                    setPagesConverting( oldPagesConverting => [ ...oldPagesConverting, pageId ] );
                    // Remove this post from post to convert
                    const index = pagesConverted.findIndex( id =>  id === pageId );
                    if ( index > -1 ) {
                        pagesConverted = [ ...pagesConverted.slice( 0, index ), ...pagesConverted.slice( index + 1 ) ]
                    }
                    setAllChecked( false )
                    return response;
                } )
                .catch( ( err ) => {
                    console.log(err)
                } );
            }
		} )
        // Empty the pages which are converted
        setPageToConvert( pagesConverted );
    }

    const changePage = ( event ) => {
        setAllChecked( false )
        setPageToConvert( [] )
        if ( event.target.name === 'prev') {
            if ( currentPage >= 2 ) {
                setCurrentPage( parseInt( currentPage ) - 1 )
            }
        }
        if ( event.target.name === 'next') {
            setCurrentPage( parseInt( currentPage ) + 1 )
        }
    }

    const handleSearch = () => {
        if ( inputSearch ) {
            setSearchTerm( inputSearch )
        } else {
            setSearchTerm( '' )
        }
    }

    const emptySearch = () => {
        setInputSearch( '' )
        setSearchTerm( '' )
        setCurrentPage( 1 )      
    }

    const handleSetPostsPerPage = ( event ) => {
        setPostsPerPages( event.target.value )
    }
 
    return (
        <div>
            <div className="cctg-header">
                <TypesList { ... { types, postType, setPostType, setCurrentPage, setPagesConverting, setPageToConvert, setAllChecked  } } />
                <EditorList { ... { editor, setEditor, setCurrentPage, setPagesConverting, setPageToConvert, setAllChecked } } />
                <TextControl
                    label={ __( 'Search', 'classic-to-gutenberg' ) }
                    value={ inputSearch }
                    onChange={ setInputSearch }
                    type="search"
                />
                <Button variant="secondary" onClick={ () => handleSearch() } icon="search" className="search-submit" label={ __( 'Search', 'classic-to-gutenberg' ) } ></Button>
                { ( searchTerm ) && (
                    <Button variant="secondary" onClick={ () => emptySearch() } icon="no" className="search-clear" label={ __( 'Clear search', 'classic-to-gutenberg' ) } ></Button>
                ) }               
                <div className="cctg-pagination">
                    <div className="components-base-control-wrapper">
                        <label htmlFor="cctg-perpage">{ __( 'Posts per page', 'classic-to-gutenberg' ) }</label>
                        <select name="cctg-perpage" id="cctg-perpage" value={ postsPerPages } onChange={ handleSetPostsPerPage }>
                            <option value="15">15</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                    { ( currentPage > 2 ) && (
                        <Button variant="secondary" onClick={ () => setCurrentPage( 1 ) } >{ __( 'First page', 'classic-to-gutenberg' ) }</Button>
                    ) }  
                    <Button variant="secondary" onClick={ changePage } name="prev" icon="arrow-left-alt" label={ __( 'Prev Page', 'classic-to-gutenberg' ) }></Button>
                    <TextControl
                        hideLabelFromVision={ true }
                        label={ __( 'Current page', 'classic-to-gutenberg' ) }
                        value={ currentPage }
                        onChange={ setCurrentPage }
                        type="number"
                    />
                    <Button variant="secondary" onClick={ changePage } name="next" icon="arrow-right-alt" label={ __( 'Next Page', 'classic-to-gutenberg' ) } ></Button>
                </div>
            </div>
            <PagesList { ... { editor, hasResolved, pages, pagesToConvert, setPageToConvert, pagesConverting, allChecked, setAllChecked } } />
            <div className="cctg-footer">
                <Button variant="primary" onClick={ () => convertPages( true ) }>
                    { __( 'Convert selected posts to Gutenberg', 'classic-to-gutenberg' ) }
                </Button>
            </div>
        </div>
    );
}

function TypesList( { types, postType, setPostType, setCurrentPage, setPagesConverting, setPageToConvert, setAllChecked } ) {
    if ( ! types?.length ) {
        return <div>{ __( 'No types', 'classic-to-gutenberg' ) }</div>;
    }

    const handleChangePostType = ( event ) => {
        setCurrentPage( 1 )
        setAllChecked( false )
        setPageToConvert( [] )
        setPagesConverting( [] )
        setPostType( event.target.value )
    }

    return(
        <div className="components-base-control-wrapper">
            <label htmlFor="cctg-types">{ __( 'Post type', 'classic-to-gutenberg' ) }</label>
            <select name="cctg-types" id="cctg-types" value={ postType } onChange={ handleChangePostType }>
                { types?.map( ( type ) => {
                    return (
                        <option value={ type.slug } key={ type.slug }>
                            { type.name }
                        </option>
                    )
                } ) }
            </select>
        </div>
    )
}

function EditorList( { editor, setEditor, setCurrentPage, setPagesConverting, setPageToConvert, setAllChecked } ) {
    const handleChangeEditor = ( event ) => {
        setCurrentPage( 1 )
        setAllChecked( false )
        setPageToConvert( [] )
        setPagesConverting( [] )
        setEditor( event.target.value )
    }

    return(
        <div className="components-base-control-wrapper">
            <label htmlFor="cctg-editor">{ __( 'Editor', 'classic-to-gutenberg' ) }</label>
            <select name="cctg-editor" id="cctg-editor" value={ editor } onChange={ handleChangeEditor }>
                <option value="classic">{ __( 'Classic', 'classic-to-gutenberg' ) }</option>
                <option value="gutenberg">{ __( 'Gutenberg', 'classic-to-gutenberg' ) }</option>
                <option value="">{ __( 'Both', 'classic-to-gutenberg' ) }</option>
            </select>
        </div>
    )
}

function PagesList( { editor, hasResolved, pages, pagesToConvert, setPageToConvert, pagesConverting, allChecked, setAllChecked } ) {

    if ( ! hasResolved && ! pages?.length ) {
        return <Spinner />;
    }
    if ( ! pages?.length ) {
        return <div>{ __( 'No posts', 'classic-to-gutenberg' ) }</div>;
    }

    const addPageToConvert = ( event ) => {
		var pagesArr = [ ... pagesToConvert ];
		const value = parseInt( event.target.value )
		const index = pagesArr.findIndex( id =>  id === value);
		if( index > -1 ) {
			pagesArr = [ ...pagesArr.slice( 0, index ), ...pagesArr.slice( index + 1 ) ]
		} else {
			pagesArr.push( value );
		}
		setPageToConvert( pagesArr );
	}

    const checkAll = ( event ) => {
        let checked = event.target.checked
        setAllChecked( checked )
        var pagesID = []
        if ( ! allChecked ) { // ¯\_(ツ)_/¯
            { pages?.map( ( page ) => {
                pagesID.push( page.id )
            } ) }
        }
        setPageToConvert( pagesID )
    }

    return (
		<Fragment>
			<table className="wp-list-table widefat striped table-view-list">
				<thead>
					<tr>
						<td className="check-column">
                            <label htmlFor="checkAll" className="screen-reader-text">{ __( 'Select/Unselect all', 'classic-to-gutenberg' ) }</label>
                            <input type="checkbox" name="checkAll" onChange={ checkAll } checked={ allChecked } />
                        </td>
						<td>{ __( 'Title', 'classic-to-gutenberg' ) }</td>
                        <td>{ __( 'Editor', 'classic-to-gutenberg' ) }</td>
                        <td>{ __( 'Link', 'classic-to-gutenberg' ) }</td>
                        <td>{ __( 'Edit link', 'classic-to-gutenberg' ) }</td>
					</tr>
				</thead>
				<tbody>
					{ pages?.map( ( page ) => {

                        const isClassic = checkIsPostClassic( page.content.raw );

                        if ( editor && isClassic && 'classic' !== editor ) {
                            return
                        }
                        if ( editor && ! isClassic && 'gutenberg' !== editor ) {
                            return
                        }

                        return (
                            <tr key={ page.id } data-converting={ pagesConverting.includes( page.id ) }>
                                <th className="check-column" scope="row">
                                    <input type="checkbox" name={ page.id } value={ page.id } onChange={ addPageToConvert } checked={ pagesToConvert.includes( page.id ) } />
                                </th>
                                <td>{ decodeEntities( page.title.rendered ) }</td>
                                <td className="cctg-editor">{ isClassic ? __( 'Classic', 'classic-to-gutenberg' ) : __( 'Gutenberg', 'classic-to-gutenberg' ) }</td>
                                <td><a href={ page.link }>{ __( 'View', 'classic-to-gutenberg' ) }</a></td>
                                <td><a href={ addQueryArgs( 'post.php', {
                                    post: page.id,
                                    action: 'edit'
                                } ) }>{ __( 'Edit', 'classic-to-gutenberg' ) }</a></td>
                            </tr>
                        )
                    } ) }
				</tbody>
			</table>
		</Fragment>
    );
}
 
window.addEventListener(
    'load',
    function () {
        render(
            <ConvertToClassic />,
            document.querySelector( '#classic-to-gutenberg' )
        );
    },
    false
);