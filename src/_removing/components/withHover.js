import {
  compose,
  withState,
  withHandlers
} from 'recompose';

const withHover = compose(
  withState('isHover', 'updateValue', false ),
  withHandlers({
    mouseEnter: ({ updateValue }) => (e) => updateValue(true),
    mouseLeave: ({ updateValue }) => (e) => updateValue(false)
  })
)

export default compose(withHover)