import { defineComponent, onMounted } from "vue";
import "./index.less";
const App = defineComponent({
  name: "LIcon",
  props: {
    name: String,
    color: {
      type: String,
      default: "#3963bc",
    },
    size: {
      type: String,
      default: "20",
    },
  },
  setup(props) {
    const { name, color, size } = props;
    onMounted(() => {
      if (!name) {
        console.error('请传入Icon组件的name属性');
      }
    })
    return () => (
      <i
        class="l-class l-icon"
        class={name === "" ? "" : "l-icon-" + name}
        style={[
          size ? "font-size:" + size + "rpx;" : "",
          color ? "color:" + color + ";" : "",
        ]}
      />
    );
  },
});

export default App;
