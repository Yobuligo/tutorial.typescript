interface IEntity {
  id: number;
}

type IEntityDetails<T extends IEntity> = Omit<T, "id">;

type 

interface IBaseRepository<
  TEntity extends IEntity,
> {
  deleteById(id: number): boolean;
  findById(id: number): TEntity | undefined;
}

interface IRepository<TEntity extends IEntity> extends IBaseRepository<TEntity>{
  add(entity: IEntityDetails<TEntity>): TEntity;
  findAll(): TEntity[];  
}

interface ISubRepository<TEntity extends IEntity, TParent extends IEntity> extends IBaseRepository<TEntity>{
  add(entity: IEntityDetails<TEntity>, parentId: number): TEntity;
  findAll(parentId: number): TEntity[];
}

interface IBoard extends IEntity {
  title: string;
}

interface IBoardRepository extends IRepository<IBoard> {}

interface INote extends IEntity {
  text: string;
}

interface INoteRepository extends ISubRepository<INote, IBoard> {}

interface IVote extends IEntity {
  type: number;
}

interface IVoteRepository extends ISubRepository<IVote, INote> {}

const repo: IVoteRepository = {}
repo.