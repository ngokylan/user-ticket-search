export interface Obj {
  [key: string]: any;
}

export interface ReduxAction {
  type: string;
  payload: Obj;
}

export const CRUD_ACTION_NAMES = {
  create: 'create',
  read: 'read',
  readSingle: 'readSingle',
  update: 'update',
  delete: 'delete',
};

export const CrudLoadingAttributes = {
  [CRUD_ACTION_NAMES.read]: 'isFetching',
  [CRUD_ACTION_NAMES.create]: 'isCreating',
  [CRUD_ACTION_NAMES.update]: 'isUpdating',
  [CRUD_ACTION_NAMES.delete]: 'isDeleting',
};
