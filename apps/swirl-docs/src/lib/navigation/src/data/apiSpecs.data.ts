import { NavItem } from "../navigation.model";

export const apiSpecsNavItems: NavItem[] = [
  {
    title: "Branding",
    url: "/api-docs/branding-api",
    isRoot: true,
    children: [
      {
        title: "List of themes",
        url: "/api-docs/branding-api#search-themes",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get active theme for a user group",
        url: "/api-docs/branding-api#get-theme",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get pwa theme for the authenticated user.",
        url: "/api-docs/branding-api#get-theme-pwa",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get pwa theme for an unauthorized user.",
        url: "/api-docs/branding-api#get-bootstrap-theme-pwa",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get mobile theme for the authenticated user.",
        url: "/api-docs/branding-api#get-theme-mobile",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get mobile theme for an unauthorized user.",
        url: "/api-docs/branding-api#get-bootstrap-theme-mobile",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get web theme for the authenticated user.",
        url: "/api-docs/branding-api#get-theme-web",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get web theme for an unauthorized user.",
        url: "/api-docs/branding-api#get-bootstrap-theme-web",
        description: "get",
        isRoot: false,
      },
      {
        title: "Updates the theme settings for a user group",
        url: "/api-docs/branding-api#update-theme",
        description: "patch",
        isRoot: false,
      },
      {
        title:
          "Reset a theme causing the user group to inherit a theme from above",
        url: "/api-docs/branding-api#reset-theme",
        description: "post",
        isRoot: false,
      },
    ],
    specName: "branding.yml",
  },
  {
    title: "Channels",
    url: "/api-docs/channels",
    isRoot: true,
    children: [
      {
        title: "Get Assignable Users",
        url: "/api-docs/channels#get-channel-assignable-users",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get Assignable User Groups",
        url: "/api-docs/channels#get-channel-assignable-user-groups",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get Channel User Assignments",
        url: "/api-docs/channels#get-channel-user-assignments",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get Channel User Group Assignments",
        url: "/api-docs/channels#get-channel-user-group-assignments",
        description: "get",
        isRoot: false,
      },
      {
        title: "Create User Assignment",
        url: "/api-docs/channels#create-channel-user-assignment",
        description: "post",
        isRoot: false,
      },
      {
        title: "Create User Group Assignment",
        url: "/api-docs/channels#create-channel-user-group-assignment",
        description: "post",
        isRoot: false,
      },
      {
        title: "Create Multiple User Group Assignments",
        url: "/api-docs/channels#create-channel-user-group-assignments-batch",
        description: "post",
        isRoot: false,
      },
      {
        title: "Create Multiple User Assignments",
        url: "/api-docs/channels#create-channel-user-assignments-batch",
        description: "post",
        isRoot: false,
      },
      {
        title: "Delete User Assignment",
        url: "/api-docs/channels#delete-channel-user-assignment",
        description: "delete",
        isRoot: false,
      },
      {
        title: "Delete User Group Assignment",
        url: "/api-docs/channels#delete-channel-user-group-assignment",
        description: "delete",
        isRoot: false,
      },
      {
        title: "Delete Multiple User Group Assignments",
        url: "/api-docs/channels#delete-channel-user-group-assignments-batch",
        description: "delete",
        isRoot: false,
      },
      {
        title: "Delete Multiple User Assignments",
        url: "/api-docs/channels#delete-channel-user-assignments-batch",
        description: "delete",
        isRoot: false,
      },
      {
        title: "Update User Assignment",
        url: "/api-docs/channels#update-channel-user-assignment",
        description: "patch",
        isRoot: false,
      },
      {
        title: "Update Multiple User Assignments",
        url: "/api-docs/channels#update-channel-user-assignments-batch",
        description: "patch",
        isRoot: false,
      },
    ],
    specName: "channels.yml",
  },
  {
    title: "Files",
    url: "/api-docs/files",
    isRoot: true,
    children: [
      {
        title: "Create a new file",
        url: "/api-docs/files#create-file",
        description: "post",
        isRoot: false,
      },
      {
        title: "Get Metadata about an uploaded file.",
        url: "/api-docs/files#get-file",
        description: "get",
        isRoot: false,
      },
    ],
    specName: "files.yml",
  },
  {
    title: "Organisations",
    url: "/api-docs/organisations",
    isRoot: true,
    children: [
      {
        title: "Get language settings for organisation",
        url: "/api-docs/organisations#get-language-settings",
        description: "get",
        isRoot: false,
      },
      {
        title: "Update language settings for organisation",
        url: "/api-docs/organisations#update-language-settings",
        description: "patch",
        isRoot: false,
      },
    ],
    specName: "organisations.yml",
  },
  {
    title: "Posts",
    url: "/api-docs/posts",
    isRoot: true,
    children: [
      {
        title: "Report a Comment.",
        url: "/api-docs/posts#post-comment-report",
        description: "post",
        isRoot: false,
      },
      {
        title: "Create a new Post.",
        url: "/api-docs/posts#create-post-v4",
        description: "post",
        isRoot: false,
      },
      {
        title:
          "Get aggregated Post Count (unread and scheduled) across all channels for the calling user.",
        url: "/api-docs/posts#get-aggregated-post-count",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get Posts.",
        url: "/api-docs/posts#get-posts-v4",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get a Post.",
        url: "/api-docs/posts#get-post-v4",
        description: "get",
        isRoot: false,
      },
      {
        title: "Delete multiple Posts.",
        url: "/api-docs/posts#delete-posts-v4",
        description: "delete",
        isRoot: false,
      },
      {
        title: "Delete a Post.",
        url: "/api-docs/posts#delete-post-v4",
        description: "delete",
        isRoot: false,
      },
      {
        title: "Modify existing Post.",
        url: "/api-docs/posts#update-post-v4",
        description: "patch",
        isRoot: false,
      },
      {
        title: "Update the Post Content.",
        url: "/api-docs/posts#update-post-content-v4",
        description: "patch",
        isRoot: false,
      },
    ],
    specName: "posts.yml",
  },
  {
    title: "Sharepoint Pages",
    url: "/api-docs/sharepoint-pages",
    isRoot: true,
    children: [
      {
        title:
          "Execute a full-text search in a sharepoint site.\nSearches over the title and the body of the pages.",
        url: "/api-docs/sharepoint-pages#sharepoint-pages-search",
        description: "get",
        isRoot: false,
      },
    ],
    specName: "sharepoint-pages.yml",
  },
  {
    title: "Tasks",
    url: "/api-docs/tasks",
    isRoot: true,
    children: [
      {
        title: "Get all tasks",
        url: "/api-docs/tasks#get-tasks",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get task assignments",
        url: "/api-docs/tasks#get-task-assignments-by-actor",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get number of tasks",
        url: "/api-docs/tasks#get-tasks-assignments-summary",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get task assignments",
        url: "/api-docs/tasks#get-task-assignments-by-task",
        description: "get",
        isRoot: false,
      },
      {
        title: "Search recipients for a task",
        url: "/api-docs/tasks#search-task-recipients",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get a summary for the task assignments.",
        url: "/api-docs/tasks#get-task-assignments-summary",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get all task comments",
        url: "/api-docs/tasks#get-tasks-comments",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get paginated reactions to a task comment",
        url: "/api-docs/tasks#get-task-comment-reactions",
        description: "get",
        isRoot: false,
      },
      {
        title: "Create a new task",
        url: "/api-docs/tasks#create-task",
        description: "post",
        isRoot: false,
      },
      {
        title: "Create new task assignment",
        url: "/api-docs/tasks#create-task-assignment",
        description: "post",
        isRoot: false,
      },
      {
        title: "Marking a task assignment as finished",
        url: "/api-docs/tasks#finish-task-assignment",
        description: "post",
        isRoot: false,
      },
      {
        title: "Marking a task assignment as open",
        url: "/api-docs/tasks#open-task-assignment",
        description: "post",
        isRoot: false,
      },
      {
        title: "Create multiple task assignments",
        url: "/api-docs/tasks#batch-create-task-assignments",
        description: "post",
        isRoot: false,
      },
      {
        title: "Create a task comment",
        url: "/api-docs/tasks#create-task-comment",
        description: "post",
        isRoot: false,
      },
      {
        title: "Create new task comment reaction",
        url: "/api-docs/tasks#create-task-comment-reaction",
        description: "post",
        isRoot: false,
      },
      {
        title: "Delete a task",
        url: "/api-docs/tasks#delete-task",
        description: "delete",
        isRoot: false,
      },
      {
        title: "Delete existing task assignment",
        url: "/api-docs/tasks#delete-task-assignment",
        description: "delete",
        isRoot: false,
      },
      {
        title: "Delete multiple task assignments",
        url: "/api-docs/tasks#batch-delete-task-assignments",
        description: "delete",
        isRoot: false,
      },
      {
        title: "Delete existing task comment",
        url: "/api-docs/tasks#delete-task-comment",
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
        url: "/api-docs/tasks#update-task",
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
  {
    title: "User Group",
    url: "/api-docs/user-group-api",
    isRoot: true,
    children: [
      {
        title: "List user groups",
        url: "/api-docs/user-group-api#search-user-groups",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get user group details",
        url: "/api-docs/user-group-api#get-user-group",
        description: "get",
        isRoot: false,
      },
      {
        title: "Search user group assignments",
        url: "/api-docs/user-group-api#search-user-group-assignments",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get user group assignment",
        url: "/api-docs/user-group-api#get-user-group-assignment",
        description: "get",
        isRoot: false,
      },
      {
        title: "Search user group assignments grouped by user",
        url: "/api-docs/user-group-api#search-user-group-assignments-aggregated-by-user",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get user group assignments grouped by user",
        url: "/api-docs/user-group-api#get-user-group-assignments-aggregated-by-user",
        description: "get",
        isRoot: false,
      },
      {
        title: "List of users assignable to given user group.",
        url: "/api-docs/user-group-api#get-assignable-users-for-user-group",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get all configured user group roles",
        url: "/api-docs/user-group-api#get-all-user-group-roles",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get all user group assignments for given user",
        url: "/api-docs/user-group-api#search-user-group-assignments-for-single-user",
        description: "get",
        isRoot: false,
      },
      {
        title: "List assignable parent user groups",
        url: "/api-docs/user-group-api#search-assignable-parent-user-groups",
        description: "get",
        isRoot: false,
      },
      {
        title: "Create user group",
        url: "/api-docs/user-group-api#create-user-group",
        description: "post",
        isRoot: false,
      },
      {
        title: "Archive user group",
        url: "/api-docs/user-group-api#archive-user-group",
        description: "post",
        isRoot: false,
      },
      {
        title: "Restore user group",
        url: "/api-docs/user-group-api#restore-user-group",
        description: "post",
        isRoot: false,
      },
      {
        title: "Assign user to group",
        url: "/api-docs/user-group-api#assign-user-to-user-group",
        description: "post",
        isRoot: false,
      },
      {
        title: "Assign multiple users to user groups",
        url: "/api-docs/user-group-api#assign-users-to-user-group-batch",
        description: "post",
        isRoot: false,
      },
      {
        title: "Update user group",
        url: "/api-docs/user-group-api#update-user-group",
        description: "patch",
        isRoot: false,
      },
      {
        title: "Delete user group",
        url: "/api-docs/user-group-api#delete-user-group",
        description: "delete",
        isRoot: false,
      },
      {
        title: "Removes a specific user group assignment",
        url: "/api-docs/user-group-api#delete-user-group-assignment",
        description: "delete",
        isRoot: false,
      },
      {
        title: "Delete multiple user group assignments",
        url: "/api-docs/user-group-api#delete-user-group-assignments-batch",
        description: "delete",
        isRoot: false,
      },
    ],
    specName: "usergroups.yml",
  },
  {
    title: "User Management",
    url: "/api-docs/user-management-api",
    isRoot: true,
    children: [
      {
        title: "Search Users",
        url: "/api-docs/user-management-api#search-users",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get User Details",
        url: "/api-docs/user-management-api#get-user",
        description: "get",
        isRoot: false,
      },
      {
        title: "List linkable identity providers",
        url: "/api-docs/user-management-api#get-linkable-identity-providers",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get linked identities for user",
        url: "/api-docs/user-management-api#get-linked-identities",
        description: "get",
        isRoot: false,
      },
      {
        title: "Check if OTP is configured for a user",
        url: "/api-docs/user-management-api#has-otp",
        description: "get",
        isRoot: false,
      },
      {
        title: "Check if a password is configured for a user",
        url: "/api-docs/user-management-api#has-password",
        description: "get",
        isRoot: false,
      },
      {
        title: "Check if authenticated user has password",
        url: "/api-docs/user-management-api#do-I-have-a-password",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get email address of authenticated user",
        url: "/api-docs/user-management-api#get-my-email-address",
        description: "get",
        isRoot: false,
      },
      {
        title: "Search on-leave notes for the authenticated user.",
        url: "/api-docs/user-management-api#get-on-leave-notes",
        description: "get",
        isRoot: false,
      },
      {
        title: "Get on-leave note by its ID for the authenticated user.",
        url: "/api-docs/user-management-api#get-on-leave-note",
        description: "get",
        isRoot: false,
      },
      {
        title: "List of mentionable users for on-leave notes.",
        url: "/api-docs/user-management-api#get-mentionable-users-for-on-leave",
        description: "get",
        isRoot: false,
      },
      {
        title: "Create User",
        url: "/api-docs/user-management-api#create-user",
        description: "post",
        isRoot: false,
      },
      {
        title: "Lock User",
        url: "/api-docs/user-management-api#lock-user",
        description: "post",
        isRoot: false,
      },
      {
        title: "Unlock User",
        url: "/api-docs/user-management-api#unlock-user",
        description: "post",
        isRoot: false,
      },
      {
        title: "Link identity to user",
        url: "/api-docs/user-management-api#create-linked-identity",
        description: "post",
        isRoot: false,
      },
      {
        title: "Set password for user",
        url: "/api-docs/user-management-api#change-password",
        description: "post",
        isRoot: false,
      },
      {
        title: "Send email requesting account actions",
        url: "/api-docs/user-management-api#send-account-actions-email",
        description: "post",
        isRoot: false,
      },
      {
        title: "Send emails to multiple users requesting account actions",
        url: "/api-docs/user-management-api#send-account-actions-emails-batch",
        description: "post",
        isRoot: false,
      },
      {
        title: "Change password of authenticated user",
        url: "/api-docs/user-management-api#change-my-password",
        description: "post",
        isRoot: false,
      },
      {
        title: "Change email address of authenticated user",
        url: "/api-docs/user-management-api#change-my-account-email",
        description: "post",
        isRoot: false,
      },
      {
        title: "Notifies the backend that the user is logged in.",
        url: "/api-docs/user-management-api#logged-in",
        description: "post",
        isRoot: false,
      },
      {
        title: "Create On Leave Note",
        url: "/api-docs/user-management-api#create-on-leave-note",
        description: "post",
        isRoot: false,
      },
      {
        title: "Update User",
        url: "/api-docs/user-management-api#update-user",
        description: "patch",
        isRoot: false,
      },
      {
        title: "Update On Leave Note",
        url: "/api-docs/user-management-api#update-on-leave-note",
        description: "patch",
        isRoot: false,
      },
      {
        title: "Delete User",
        url: "/api-docs/user-management-api#delete-user",
        description: "delete",
        isRoot: false,
      },
      {
        title: "Delete multiple users",
        url: "/api-docs/user-management-api#delete-users-batch",
        description: "delete",
        isRoot: false,
      },
      {
        title: "Delete linked identity",
        url: "/api-docs/user-management-api#delete-linked-identity",
        description: "delete",
        isRoot: false,
      },
      {
        title: "Delete OTP of user",
        url: "/api-docs/user-management-api#delete-otp",
        description: "delete",
        isRoot: false,
      },
      {
        title: "Delete password of user",
        url: "/api-docs/user-management-api#delete-password",
        description: "delete",
        isRoot: false,
      },
      {
        title: "Delete specified on-leave note for the authenticated user.",
        url: "/api-docs/user-management-api#delete-on-leave-note",
        description: "delete",
        isRoot: false,
      },
    ],
    specName: "users.yml",
  },
];
