import { atom, selector } from 'recoil';

export type CATEGORY = string;

export interface ITodo {
  text: string;
  id: number;
  category: CATEGORY;
}

const LOCAL_STORAGE_KEY = 'todo';
const localStorageData = localStorage.getItem(LOCAL_STORAGE_KEY);
const initalState = localStorageData ? JSON.parse(localStorageData) : [];

export const categoriesState = atom<CATEGORY[]>({
  key: 'categories',
  default: ['Todo', 'Doing', 'Done'],
});

const _todosState = atom<ITodo[]>({
  key: 'todo',
  default: initalState,
});

export const todosState = selector<ITodo[]>({
  key: 'persistentTodo',
  get: ({ get }) => {
    return get(_todosState);
  },
  set: ({ set }, newValue) => {
    set(_todosState, newValue);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newValue));
  },
});

export type FILTER = CATEGORY | 'ALL';

export const todoFilterState = atom<FILTER>({
  key: 'todoFilter',
  default: 'ALL',
});

export const filteredTodoState = selector({
  key: 'todoFiltered',
  get: ({ get }) => {
    const todos = get(_todosState);
    const filter = get(todoFilterState);

    if (filter === 'ALL') {
      return todos;
    } else {
      return todos.filter((todo) => todo.category === filter);
    }
  },
});
