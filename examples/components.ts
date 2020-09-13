export interface ComponentStruct {
    title: string,
    link?: string
}

export interface Component {
    title: string,
    children: ComponentStruct[]
}

export const components: Component[] = [
    {
        title: "操作反馈",
        children: [
          {
            title: "button",
            link: 'button'
          },
          {
            title: "button",
          }
        ]
    }
]

