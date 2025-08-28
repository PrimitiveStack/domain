import { UniqueEntityID } from './UniqueEntityID';

export abstract class Entity<T> {
	protected readonly id: UniqueEntityID;
	protected readonly props: T;

	protected constructor(props: T, id: UniqueEntityID | undefined) {
		this.props = props;
		this.id = id ?? new UniqueEntityID();
	}

	public equals(entity: Entity<T>) {
		if (this === entity) {
			return true;
		}

		return this.id.equals(entity.id);
	}
}
