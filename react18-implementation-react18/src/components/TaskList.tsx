import { memo } from 'react';
import type { Task } from './Transition';

type Props = {
  taskList: Task[];
  isPending: boolean;
};

export const TaskList = memo(({ taskList, isPending }: Props) => {
  // const deferredTaskList = useDeferredValue(taskList);

  return (
    <>
      {taskList.map((task) => (
        <div
          key={task.id}
          style={{
            width: '300px',
            margin: 'auto',
            background: 'lavender',
            opacity: isPending ? 0.5 : 1
          }}>
          <p>タイトル：{task.title}</p>
          <p>担当：{task.assignee}</p>
        </div>
      ))}
    </>
  );
});
