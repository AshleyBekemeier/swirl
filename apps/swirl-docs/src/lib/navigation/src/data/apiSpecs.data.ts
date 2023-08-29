import { NavItem } from "../navigation.model";

export const apiSpecsNavItems: NavItem[] = [
  {
    title: "Tasks",
    url: "/api-docs/tasks",
    isRoot: true,
    children: [
      {
        title: "Get all tasks",
        url: "/api-docs/tasks#get-all-tasks",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get number of tasks",
        url: "/api-docs/tasks#get-number-of-tasks",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get task assignments",
        url: "/api-docs/tasks#get-task-assignments",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get a summary for the task assignments.",
        url: "/api-docs/tasks#get-a-summary-for-the-task-assignments",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get all task comments",
        url: "/api-docs/tasks#get-all-task-comments",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get all task reactions",
        url: "/api-docs/tasks#get-all-task-reactions",
        description: "get",
        isRoot: false,
      },
      {
        title: "Create a new task",
        url: "/api-docs/tasks#create-a-new-task",
        description: "post",
        isRoot: false,
      },
      {
        title: "Create new task assignment",
        url: "/api-docs/tasks#create-new-task-assignment",
        description: "post",
        isRoot: false,
      },
      {
        title: "Marking a task assignment as finished",
        url: "/api-docs/tasks#marking-a-task-assignment-as-finished",
        description: "post",
        isRoot: false,
      },
      {
        title: "Create multiple task assignments",
        url: "/api-docs/tasks#create-multiple-task-assignments",
        description: "post",
        isRoot: false,
      },
      {
        title: "Create a task comment",
        url: "/api-docs/tasks#create-a-task-comment",
        description: "post",
        isRoot: false,
      },
      {
        title: "Create new task comment reaction",
        url: "/api-docs/tasks#create-new-task-comment-reaction",
        description: "post",
        isRoot: false,
      },
      {
        title: "Delete a task",
        url: "/api-docs/tasks#delete-a-task",
        description: "delete",
        isRoot: false,
      },
      {
        title: "Delete existing task assignment",
        url: "/api-docs/tasks#delete-existing-task-assignment",
        description: "delete",
        isRoot: false,
      },
      {
        title: "Delete multiple task assignments",
        url: "/api-docs/tasks#delete-multiple-task-assignments",
        description: "delete",
        isRoot: false,
      },
      {
        title: "Delete existing task comment",
        url: "/api-docs/tasks#delete-existing-task-comment",
        description: "delete",
        isRoot: false,
      },
      {
        title: "Delete task comment reaction",
        url: "/api-docs/tasks#delete-task-comment-reaction",
        description: "delete",
        isRoot: false,
      },
      {
        title: "Modify/Update existing task",
        url: "/api-docs/tasks#modify/update-existing-task",
        description: "patch",
        isRoot: false,
      },
      {
        title: "Update task comment reaction",
        url: "/api-docs/tasks#update-task-comment-reaction",
        description: "patch",
        isRoot: false,
      },
    ],
    specName: "tasks.yml",
  },
];
