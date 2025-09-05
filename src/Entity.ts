import { UniqueEntityID } from './UniqueEntityID';

export abstract class Entity {
	readonly id: UniqueEntityID;
	protected constructor(id: UniqueEntityID | undefined) {
		this.id = id ?? new UniqueEntityID();
	}

	public equals(entity: Entity) {
		if (this === entity) {
			return true;
		}

		return this.id.equals(entity.id);
	}
}
