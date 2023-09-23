import PropTypes from 'prop-types'

export default function Sample({ onClick }) {
  return (
    <div>
      <div>Hello jest. This is a Sample.</div>
      <button type="button" onClick={onClick}>
        Sample button
      </button>
    </div>
  )
}

Sample.propTypes = {
  onClick: PropTypes.func.isRequired
}
