type ValueObjectProps = {
  value: unknown;
  [key: string]: unknown;
};

export abstract class ValueObject<T extends ValueObjectProps> {
  protected constructor(protected readonly props: T) {}

  get value(): T["value"] {
    return this.props.value;
  }

  public equals(vo: ValueObject<T>) {
    return JSON.stringify(this.props) === JSON.stringify(vo.props);
  }
}