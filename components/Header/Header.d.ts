type User = {
    name: string;
};
export interface HeaderProps {
    /**
     * User data
     */
    user?: User;
    /**
     * Login handler
     */
    onLogin: () => void;
    /**
     * Logout handler
     */
    onLogout: () => void;
    /**
     * Create account handler
     */
    onCreateAccount: () => void;
}
export declare const Header: ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => JSX.Element;
export {};
//# sourceMappingURL=Header.d.ts.map