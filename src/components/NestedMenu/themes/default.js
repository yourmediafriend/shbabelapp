'use strict';

export default {
    tree: {
        base: {
            listStyle: 'none',
            margin: 0,
            padding: 0,
            color: '#21252B',
            fontSize: '14px',
        },
        node: {
            base: {
                position: 'relative',
                active: {

                }
            },
            link: {
              cursor: 'pointer',
              color:'#ccc',
              borderLeft: '3px transparent solid',
              activeBranch: {

              },
              active: {
                cursor: 'pointer',
                background: '#222',
                borderLeft:'3px #ff00dc solid'
              },
            },
            toggle: {
                base: {
                    position: 'relative',
                    display: 'inline-block',
                    verticalAlign: 'top',
                    marginTop: '-1px',
                    height: '24px',
                    width: '24px',
                    float: 'right'
                },
                wrapper: {
                    display: 'block',
                    verticalAlign: 'middle',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate3d(-50%,-50%,0)'
                },
            },
            header: {
                base: {
                    display: 'inline-block',
                    verticalAlign: 'top',
                },
                connector: {
                    width: '2px',
                    height: '12px',
                    borderLeft: 'solid 2px black',
                    borderBottom: 'solid 2px black',
                    position: 'absolute',
                    top: '0px',
                    left: '-21px',

                },
                title: {
                    lineHeight: '24px',
                    verticalAlign: 'middle'
                }
            },
            subtree: {
                base: {
                    listStyle: 'none',
                    paddingLeft: '0',
                },
                'level0': {
                    borderTop: '1px solid #222',
                    borderLeft: '30px solid #222',
                    borderBottom: '30px solid #222'
                }
            },
            loading: {
                color: '#E2C089'
            }
        }
    }
};
