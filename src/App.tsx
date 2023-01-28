import { AppLayout } from "#components/AppLayout";
import { Header } from "#components/Header";
import { List } from "#components/List";

export function App() {
    return (
        <AppLayout>
            <Header />
            <List />
        </AppLayout>
    );
}
