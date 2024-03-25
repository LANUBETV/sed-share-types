export interface BaseEntity {
  createAt: Date;
  updateAt: Date;
  deleteAt?: Date | null;
}
