class Builder {
  public count = 0;

  add(): Builder {
    this.count++;
    return this;
  }

  callMe(): Builder {
    this.count += 2;
    return this;
  }
}

describe("mockReturnThis", () => {
  it("mock returns this", () => {
    const builder = new Builder();
    const mockAdd = jest.spyOn(builder, "add");
    mockAdd.mockReturnThis();
    builder.add().callMe();
    expect(mockAdd).toHaveBeenCalledTimes(1);
    expect(builder.count).toBe(2);
  });
});
