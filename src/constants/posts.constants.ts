export enum PostStatus {
  DRAFT,
  PENDING,
  APPROVED,
  REJECTED,
  SENT,
  DELETED,
  RECEPTED,
}

export const PostStatusLabels: { [key in PostStatus]: string } = {
  [PostStatus.DRAFT]: 'Borrador',
  [PostStatus.PENDING]: 'Pendiente',
  [PostStatus.APPROVED]: 'Aprobado',
  [PostStatus.REJECTED]: 'Rechazado',
  [PostStatus.SENT]: 'Enviado',
  [PostStatus.DELETED]: 'Eliminado',
  [PostStatus.RECEPTED]: 'Recibido',
} as const;
