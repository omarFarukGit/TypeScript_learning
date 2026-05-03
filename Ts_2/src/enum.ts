//enum
// set of fixed string leteral ek jaiggai rakhe

// type UserRole = "Admin" | "Editor" | "Viewer"; // type string letarel

// enum type hesebeo use kora jay and object notation dara access kora jay

enum UserRole {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const canEdit = (role: UserRole) => {
  if (role === UserRole.Admin || role === UserRole.Editor) {
    return true;
  } else return false;
};

const isEdit = canEdit(UserRole.Editor);

console.log(isEdit);


// stript-only hocce node e ts ke run korar somoy type gulake bad deye run kora

//enum not use this