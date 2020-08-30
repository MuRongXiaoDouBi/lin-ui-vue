import { defineComponent, ref } from 'vue'
import './index.less'
const App = defineComponent({
    name: 'Button',
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const b = ref(0)

        const handleClick = (event: Event, state: number) => {
            console.log(event)
            console.log(state)
            b.value++
        }

        const a = <div onClick={(event) => handleClick(event, 1)}>12313</div>
        const v = <div class="1bd">{b.value}</div>
        return (
            <div>
                {a}
                {v}
            </div>
        )
    }
})

export default App