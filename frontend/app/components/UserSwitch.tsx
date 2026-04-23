type UserSwitchProps = {
  currentUser: string;
};

export default function UserSwitch({ currentUser }: UserSwitchProps) {
  return (
    <div className="user-switch">
      <a
        href="/?user=1"
        className={currentUser === "1" ? "active" : undefined}
      >
        Utilisateur 1
      </a>
      <a
        href="/?user=2"
        className={currentUser === "2" ? "active" : undefined}
      >
        Utilisateur 2
      </a>
    </div>
  );
}
