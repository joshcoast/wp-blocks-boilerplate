/**
 * Block dependencies
 * These are what we include in our block
 */
import icons from './icons';
import classnames from 'classnames';
import './editor.scss';
import './style.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;

const {
    registerBlockType,
} = wp.blocks;

const {
    Editable,
    MediaUpload,
    RichText,
    AlignmentToolbar,
    BlockControls,
    BlockAlignmentToolbar,
} = wp.editor;

const {
    Button,
} = wp.components;

/**
 * Register block
 */
export default registerBlockType( 
  // namespace/block-name
  'joshblocks/image-upload', 
  {
    title: __( 'Picture Block', 'joshblocks' ),
    description: __( 'An example of how to use the MediaUpload component.', 'joshblocks'),
    category: 'common',
    icon: {
      background: 'rgba(254, 243, 224, 0.52)',
      src: icons.upload,
    },         
    keywords: [
      __( 'Image', 'joshblocks' ),
      __( 'MediaUpload', 'joshblocks' ),
      __( 'Message', 'joshblocks' ),
    ],
    attributes: {
      message: {
        type: 'array',
        source: 'children',
        selector: '.message-body',
      },
      imgURL: {
        type: 'string',
        // processing the image as a simple string 
        // since we are using the url as an inline background style
        //source: 'attribute',
        //attribute: 'src',
        //selector: 'div.image-block',
      },
      imgID: {
        type: 'number',
      },
      blockAlignment: {
        type: 'string',
        default: 'full',
      },
    },

    // sets element wrapper data-align attribute
    getEditWrapperProps( { blockAlignment } ) {
      if ( 'left' === blockAlignment || 'center' === blockAlignment || 'right' === blockAlignment || 'full' === blockAlignment || 'wide' === blockAlignment ) {
          return { 'data-align': blockAlignment };
      }
    },

    // Edit is what gets sent to the wp-admin end
    edit: props => {
      const { 
        attributes: { imgID, imgURL, message, blockAlignment }, 
        className, setAttributes, isSelected } = props;

      const divStyle = {
        backgroundImage: `url(${imgURL})`
      };

      const onSelectImage = img => {
        setAttributes( {
          imgID: img.id,
          imgURL: img.url,
        } );
      };

      const onRemoveImage = () => {
        setAttributes({
          imgID: null,
          imgURL: null,
        });
      }

      console.log(blockAlignment);

      return (
        <div className={ className }>
          <BlockControls>
            <BlockAlignmentToolbar
              value={ blockAlignment }
              onChange={ blockAlignment => setAttributes( { blockAlignment } ) }
            />
          </BlockControls>
          <div className="message-body">
  
            <RichText
              tagName="div"
              multiline="p"
              className="message"
              placeholder={ __( 'Add your custom message', 'joshblocks' ) }
              onChange={ message => { setAttributes( { message } ) } }
              value={ message }
            />
          </div>

          { ! imgID ? (
            <MediaUpload
              onSelect={ onSelectImage }
              type="image"
              value={ imgID }
              render={ ( { open } ) => (
                <div className="image-block no-image">
                  <Button className={ "button button-large add-image" } onClick={ open } >
                    { icons.upload }
                    { __( ' Upload Image', 'joshblocks' ) }
                  </Button>
                </div>
              ) }
            >
            </MediaUpload>
          ) : (
            <div className="image-block" style={divStyle}>
              <div className="image-wrapper">
                { isSelected ? (
                  <Button className="remove-image" onClick={ onRemoveImage } >
                    { icons.remove }
                  </Button>
                ) : null }
              </div>
            </div>
          )}

        </div>
      );
    },

    // Save is what gets sent to the front end.
    save: props => {
      const { blockAlignment, imgURL, message } = props.attributes;

      const divStyle = {
        backgroundImage: `url(${imgURL})`
      };

      return (

        <div className={classnames(`align${blockAlignment}`)}>
          <div className="message-body">
            { message }
          </div>
          <div className="image-block" style={divStyle}></div>
        </div>
      );
    },
  },
);

