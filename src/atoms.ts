import { atom, selector } from 'recoil';

type CATEGORY = 'TO_DO' | 'DOING' | 'DONE';
export interface ITodo {
  text: string;
  id: number;
  category: CATEGORY;
}

export const todosState = atom<ITodo[]>({
  key: 'todo',
  default: [],
});

export type FILTER = CATEGORY | 'ALL';

export const todoFilterState = atom<FILTER>({
  key: 'todoFilter',
  default: 'ALL',
});

export const filteredTodoState = selector({
  key: 'todoFiltered',
  get: ({ get }) => {
    const todos = get(todosState);
    const filter = get(todoFilterState);

    if (filter === 'ALL') {
      return todos;
    } else {
      return todos.filter((todo) => todo.category === filter);
    }
  },
});
