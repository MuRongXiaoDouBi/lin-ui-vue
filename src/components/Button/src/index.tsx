const App = {
  name: 'LButton',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const handleClick = () => {}
    return () => (
      <div>
        <button onClick={() => handleClick()} class="l-button">
          {props.title}
        </button>
      </div>
    )
  }
}

export default App
