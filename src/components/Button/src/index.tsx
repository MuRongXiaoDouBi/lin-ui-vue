import { defineComponent, onMounted } from "vue";

const App = defineComponent({
  name: "LButton",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const handleClick = (event: Event, state: number) => {
      console.log(event);
      console.log(state);
    };
    const v = <div class="1bd">123123</div>;
    return () => (
      <div>
        <button onClick={(event) => handleClick(event, 123)} class="l-button">
          button
        </button>
        {v}
      </div>
    );
  },
});

export default App;
