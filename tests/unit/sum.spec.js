import Sum from '@/plugins/helpers/server/sum'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    expect(Sum.plus(4,6)).toBe(10)
  })
});
