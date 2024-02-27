import { ReactNode } from "react";

type AppProps = { num: number };

export function App({ num }: AppProps): ReactNode {
    return (
        <div>
            <h1>Hello {num}!</h1>
            <h2>Welcome to your React App</h2>
        </div>
    );
}
