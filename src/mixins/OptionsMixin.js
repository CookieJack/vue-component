export const TransferOptionsMixin = {
  data() {
    return {
      leftSideData: [
        {
          key: 1,
          label: '选项1',
          disabled: false,
          checked: true
        },
        {
          key: 2,
          label: '选项2',
          disabled: false,
          checked: false
        },
        {
          key: 3,
          label: '选项3',
          disabled: false,
          checked: true
        },
        {
          key: 4,
          label: '选项4',
          disabled: true,
          checked: false
        },
        {
          key: 5,
          label: '选项5',
          disabled: false,
          checked: true
        }
      ],
      rightSideData: [
        {
          key: 13,
          label: '选项13',
          disabled: false,
          checked: true
        },
        {
          key: 9,
          label: '选项9',
          disabled: false,
          checked: false
        }
      ]
    }
  }
}