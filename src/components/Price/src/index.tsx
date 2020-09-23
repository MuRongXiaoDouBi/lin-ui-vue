import { ComponentCustomProps, watch, toRef } from 'vue'
import classnames from 'classnames'
import './index.less'

export interface PriceProps extends ComponentCustomProps {
  unit?: string,
  size?: string,
  color?: string,
  bold?: number,
  unitColor?: string,
  unitSize: String,
  unitBold?: number,
  modelValue: string,
  mode?: 'number' | 'span',
  valueColor?: string,
  valueSize?: string,
  deleted?: boolean,
  delColor?: string,
  reserveDigit?: number,
  autofix?: boolean
}

const App = {
  name: 'LPrice',
  props: {
    unit: {
      type: String,
      default: '￥'
    },
    size: {
      type: String,
      default: '14'
    },
    color: {
      type: String,
      default: '#3963BC'
    },
    bold: {
      type: Number,
      default: 500
    },
    unitColor: String,
    unitSize: String,
    unitBold: Number,
    modelValue: {
      type: String,
      default: '0.00'
    },
    mode: {
      type: String,
      default: 'number',
      validator: (val: string) => ['number', 'span'].indexOf(val) > -1 
    },
    valueColor: String,
    valueSize: String,
    deleted: Boolean,
    delColor: String,
    reserveDigit: {
      type: Number,
      default: 2
    },
    autofix: Boolean
  },
  setup(props) {
    const value = toRef(props, 'modelValue')
    
    let priceInteger: string | null = '0'
    let priceDecimal: string | null = '00'

    const reserveNumber = () => {
      priceInteger = null
      priceDecimal = null
      const countToNumber = Number(value.value)
      const isText = isNaN(Number(countToNumber)) || (props.mode === 'span')
      if (!isText && props.autofix) {
        const result = countToNumber.toFixed(props.reserveDigit)
        const price = result.toString().split('.')
        _setPrice(price)
      } else {
        const price = value.value.split('.')
        _setPrice(price)
      }
    }

    const _setPrice = (price: Array<string>) => {
      if (price.length === 1) {
        priceInteger = price[0]
      } else if (price.length === 2){
        priceInteger = price[0],
        priceDecimal = price[1]
      } else {
        throw 'price 格式有误，请仔细检查！'
      }
    }

    reserveNumber()
    watch(value, () => {   
      reserveNumber()
    })

    const unitDOM = () => <span class="l-unit-class" style={{
      color: props.unitColor || props.color,
      fontSize: `${props.unitSize || props.size}px`,
      fontWeight: props.unitBold || props.bold
    }}>{props.unit}</span>

    const countDOM = () => (
      <span class="l-value-class" style={{
        color: props.valueColor || props.color,
        fontSize: `${props.valueSize || props.size}px`,
        fontWeight: props.unitBold || props.bold
      }}>
        {priceInteger}
        <span class="l-dot-class">{priceDecimal ? '.' : ''}</span>
        <span class="l-decimal-class">{priceDecimal || ''}</span>
      </span>
    )

    return () => (
      <div 
        class={classnames('price-container', 'l-class', {
          'price-del l-deleted-class': props.deleted
        })} 
        style={{
          color: props.delColor || props.color
        }}
      >
        {unitDOM()}
        {countDOM()}
      </div>
    )
  }
}

export default App
