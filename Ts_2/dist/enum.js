"use strict";
//enum
// set of fixed string leteral ek jaiggai rakhe
Object.defineProperty(exports, "__esModule", { value: true });
// type UserRole = "Admin" | "Editor" | "Viewer"; // type string letarel
// enum type hesebeo use kora jay and object notation dara access kora jay
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Admin";
    UserRole["Editor"] = "Editor";
    UserRole["Viewer"] = "Viewer";
})(UserRole || (UserRole = {}));

const canEdit = (role) => {
    if (role === UserRole.Admin || role === UserRole.Editor) {
        return true;
    }
    else
        return false;
};
const isEdit = canEdit(UserRole.Editor);
console.log(isEdit);
// stript-only hocce node e ts ke run korar somoy type gulake bad dey
//# sourceMappingURL=enum.js.map