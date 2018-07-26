'use strict';
import { mediaQueries } from '../../utils/mediaQueries';

const styleVariables = {
  inputBorderColor: 'transparent transparent #afafaf #afafaf',
  inputBorderColorWarning: 'transparent transparent #dc3939 #dc3939',
  inputBorderColorHover: '#afafaf'
}

export default {
  form: {
    row: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'stretch',
      margin: '0 -10px',
    },
    field: {
      padding: '10px',
      width: '100%',
      [mediaQueries.breakpointMedium]: {
        flexGrow: 1,
        width: 'auto',
      },
    },
    label: {
      width: '100%',
      display: 'block',
      text: {

      },
      required: {
        color: '#dc3939'
      },
    },
    input: {
      display: 'block',
      width: '100%',
      height: '40px',
      padding: '5px',
      borderStyle: 'solid',
      borderWidth: '1px 1px 1px 1px',
      borderColor: styleVariables.inputBorderColor ,
      warning: {
        borderColor: styleVariables.inputBorderColorWarning ,
      },
      hover: {
        background: '#f7f7f7',
        borderColor: styleVariables.inputBorderColorHover ,
      },
      focus: {
        background: '#fff',
        borderColor: styleVariables.inputBorderColorHover ,
        outline: '0',
      },
      ':hover': {},
      ':focus': {},
    },
    warningMessage: {
      fontSize: '0.8em',
      color: '#dc3939',
      width: '100%',
      textAlign: 'right',
      display: 'block',
    },
    button: {
      background: '#d2d7e4',
      border: '0',
      padding: '10px 35px',
      borderRadius: '5px',
    }
  },
  searchForm: {
    hover: {
      background: 'transparent',
    },
    focus: {
      background: 'transparent',
    },

  }
};