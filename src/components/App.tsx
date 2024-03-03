import type { ReactNode } from "react";

type AppProps = { name: string };

export function App({ name }: AppProps): ReactNode {
    return (
        <div>
            <h1>Hello {name}!</h1>
            <h2>Welcome to your React App</h2>
        </div>
    );
}
