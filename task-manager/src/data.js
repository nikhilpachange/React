export const initialData = {
    tasks: {
      'task-1': { id: 'task-1', content: 'Create project setup' },
      'task-2': { id: 'task-2', content: 'Design the UI' },
      'task-3': { id: 'task-3', content: 'Write drag-and-drop logic' },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'To Do',
        taskIds: ['task-1', 'task-2', 'task-3'],
      },
    },
    columnOrder: ['column-1'],
  };
  