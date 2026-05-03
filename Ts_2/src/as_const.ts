// enum UserRole {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }

//enum er bodole use korbo
const UserRole = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;

const canEdit = (role: keyof typeof UserRole) => {
  if (role === UserRole.Admin || role === UserRole.Editor) {
    return true;
  } else return false;
};

const isEdit = canEdit(UserRole.Editor);

console.log(isEdit);
