import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ title, description }: import("./Card").CardProps) => JSX.Element;
    tags: string[];
    parameters: {
        controls: {
            sort: string;
        };
    };
    argTypes: {
        title: {
            control: {
                type: string;
            };
        };
        description: {
            control: {
                type: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
//# sourceMappingURL=Card.stories.d.ts.map