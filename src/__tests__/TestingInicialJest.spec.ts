describe("Initial test Jest documentation", () => {
  interface Load<N> {
    number: N;
  }

  const data: Load<number> = {
    number: 0,
  };

  beforeAll(() => (data.number = 1));

  it("Must return the sum of 1 plus 1", () => {
    const { number } = data;
    expect(number + 1).toEqual(2);
  });
});
