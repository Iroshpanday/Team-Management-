import UserList from "./UserList";
import UserDetailPanel from "./users/UserDetailPanel";
import EditUserDialog from "./EditUserDialog";
import AddUserDialog from "./AddUserDialog";
import AddUserButton from "./AddUserButton";

export default function UsersPage() {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      <div className="flex-1 space-y-3">
        {/* Add User Button */}
        <div className="flex items-center justify-between">
    <h2 className="text-xl font-bold">Users</h2>
    <AddUserButton />
  </div>

        {/* User List/Table */}
        <UserList />
      </div>

      {/* Side Panel for details */}
      <UserDetailPanel />

      {/* Modals */}
      <EditUserDialog />
      <AddUserDialog />
    </div>
  );
}
