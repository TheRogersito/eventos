import { createContext, useState, useContext, ReactNode } from 'react';

interface User {
    // Define properties of the user object as needed
    [key: string]: any;
}
type UserContextType = [User, React.Dispatch<React.SetStateAction<User>>];

const AppContext = createContext<UserContextType | undefined>(undefined);
export const useUserContext = (): UserContextType => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};

const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User>({});
    return (
        <AppContext.Provider value={[user, setUser]}>
            {children}
        </AppContext.Provider>
    );
}

export default UserProvider;