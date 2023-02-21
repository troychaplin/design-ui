import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ user, onLogin, onLogout, onCreateAccount }: import("./Header").HeaderProps) => JSX.Element;
    tags: string[];
    parameters: {
        controls: {
            sort: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const LoggedIn: Story;
export declare const LoggedOut: Story;
//# sourceMappingURL=Header.stories.d.ts.map