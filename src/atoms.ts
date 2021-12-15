import { atom, selector } from 'recoil';

export type CATEGORY = string;

const CATEGORIES_LOCAL_STORAGE_KEY = 'categories';
const localStorageCategoriesData = localStorage.getItem(CATEGORIES_LOCAL_STORAGE_KEY);
const initalCategoriesState = localStorageCategoriesData
  ? JSON.parse(localStorageCategoriesData)
  : ['Todo', 'Doing', 'Done'];

const _categoriesState = atom<CATEGORY[]>({
  key: 'categories',
  default: initalCategoriesState,
});

export const categoriesState = selector<CATEGORY[]>({
  key: 'persistentCategories',
  get: ({ get }) => {
    return get(_categoriesState);
  },
  set: ({ set }, newValue) => {
    set(_categoriesState, newValue);
    localStorage.setItem(CATEGORIES_LOCAL_STORAGE_KEY, JSON.stringify(newValue));
  },
});

export interface ITodo {
  text: string;
  id: number;
  category: CATEGORY;
}

const TODOS_LOCAL_STORAGE_KEY = 'todo';
const localStorageTodosData = localStorage.getItem(TODOS_LOCAL_STORAGE_KEY);
const initalTodosState = localStorageTodosData ? JSON.parse(localStorageTodosData) : [];

const _todosState = atom<ITodo[]>({
  key: 'todos',
  default: initalTodosState,
});

export const todosState = selector<ITodo[]>({
  key: 'persistentTodos',
  get: ({ get }) => {
    return get(_todosState);
  },
  set: ({ set }, newValue) => {
    set(_todosState, newValue);
    localStorage.setItem(TODOS_LOCAL_STORAGE_KEY, JSON.stringify(newValue));
  },
});

export const FILTER_ALL = '_ALL';
export type FILTER = '_ALL' | CATEGORY;

export const todoFilterState = atom<FILTER>({
  key: 'todoFilter',
  default: FILTER_ALL,
});

export const filteredTodoState = selector({
  key: 'todoFiltered',
  get: ({ get }) => {
    const todos = get(_todosState);
    const filter = get(todoFilterState);

    if (filter === FILTER_ALL) {
      return todos;
    } else {
      return todos.filter((todo) => todo.category === filter);
    }
  },
});
