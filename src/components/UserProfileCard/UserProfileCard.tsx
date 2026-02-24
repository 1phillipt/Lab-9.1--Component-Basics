import type { UserProfileCardProps } from "../../types";

export function UserProfileCard({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children,
}: UserProfileCardProps) {
  return (
    <div className="p-4 border rounded-lg shadow-md max-w-sm">
      <div className="flex items-center gap-4">
        {user.avatarUrl && (
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="w-16 h-16 rounded-full"
          />
        )}
        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          {showEmail && <p className="text-gray-600">{user.email}</p>}
          {showRole && <p className="text-gray-500">{user.role}</p>}
        </div>
      </div>
      {onEdit && (
        <button
          onClick={() => onEdit(user.id)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit Profile
        </button>
      )}
      {children}
    </div>
  );
}
